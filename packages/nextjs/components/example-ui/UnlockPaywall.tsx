import { PublicLockV13 } from "@unlock-protocol/contracts";
import networks from "@unlock-protocol/networks";
import { Paywall } from "@unlock-protocol/paywall";
// import { LOCK, NETWORK } from "../lib/constants"
// import { ethers } from "ethers";
import { useAccount, useConnect, useContractRead } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

const LOCK = "0xd51b7a082ae4120c995a13942edc8ad45eb4a897";

export const TokenGate = ({ children }) => {
  const configuredNetwork = getTargetNetwork();
  const { isConnected, address } = useAccount();

  const {
    data: isMember,
    isError,
    isLoading,
    error,
  } = useContractRead({
    address: LOCK,
    abi: PublicLockV13.abi,
    functionName: "balanceOf",
    chainId: configuredNetwork.id,
    enabled: !!address,
    args: [address],
    watch: true,
    select: (data: any) => {
      return data > 0;
    },
  });
  console.log(error);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error checking your membership status. Please reload the page!</div>;
  }

  // User not connected
  if (!isConnected) {
    return <Connect />;
  }

  // User does not have membership
  if (!isMember) {
    return <Checkout network={configuredNetwork.id} />;
  }

  // All good: user is connected and they have a membership!
  return children;
};

/**
 * Connect subcomponent!
 * @returns
 */
const Connect = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  return (
    <section>
      <p className="mb-4">To view this post you need to be be a member!</p>
      <button
        onClick={() => connect()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign-In
      </button>
    </section>
  );
};

/**
 * Checkout subcomponent!
 * @returns
 */
const Checkout = ({ network }: { network: number }) => {
  const { connector } = useAccount();
  const checkout = () => {
    const paywall = new Paywall(networks);
    const provider = connector!.getProvider();
    paywall.connect(provider);
    paywall.loadCheckoutModal({
      locks: {
        [LOCK]: {
          network: network,
        },
      },
      pessimistic: true,
    });
  };

  return (
    <section>
      <p className="mb-4">You currently don't have a membership... </p>
      <button
        onClick={() => checkout()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Purchase one now!
      </button>
    </section>
  );
};
