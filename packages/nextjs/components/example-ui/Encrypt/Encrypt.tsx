import { useEffect, useState } from "react";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export const Encription = () => {
  const [networkLoading, setNetworkLoading] = useState(true);
  useEffect(() => {
    // const client = new LitJsSdk.LitNodeClient();
    // client.connect().then(() => {
    //   window.litNodeClient = client;
    // }).catch((err) => {
    //     console.log("error connecting to lit node", err);
    // });
    // const eventLIstener = document.addEventListener(
    //   "lit-ready",
    //   function (e) {
    //     console.log("LIT network is ready");
    //     setNetworkLoading(false); // replace this line with your own code that tells your app the network is ready
    //   },
    //   false,
    // );
    // return () => {
    //   window.removeEventListener("lit-ready", eventLIstener);
    // };
  }, []);

  const encrypt = async (message: string = "test") => {
    const client = new LitJsSdk.LitNodeClient();
    const chain = "ethereum";
    window.litNodeClient = client;
    if (true) {
      await window.litNodeClient.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      message
    );

    const accessControlConditions = [
      {
        contractAddress: "",
        standardContractType: "",
        chain: "ethereum",
        method: "eth_getBalance",
        parameters: [":userAddress", "latest"],
        returnValueTest: {
          comparator: ">=",
          value: "1000000000000" // 0.000001 ETH
        }
      }
    ];

    const encryptedSymmetricKey = await window.litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain
    });

    return {
      encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
        encryptedSymmetricKey,
        "base16"
      )
    };
  };

  return (
    <div>
      <button onClick={encrypt}>Encrypt</button>
    </div>
  );
};