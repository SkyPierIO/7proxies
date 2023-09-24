"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";
import { NodeList } from "~~/components/example-ui/NodeList/NodeList";
import { TokenGate } from "~~/components/example-ui/UnlockPaywall";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

const ExampleUI: NextPage = () => {
  const { address } = useAccount();

  return (
    <>
      <MetaHeader
        title="Example UI | Scaffold-ETH 2"
        description="Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="flex-grow" data-theme="exampleUi">
        {address && (
          <TokenGate>
            <NodeList />
          </TokenGate>
        )}
        {/* <ContractInteraction />
        <ContractData /> */}
      </div>
    </>
  );
};

export default ExampleUI;
