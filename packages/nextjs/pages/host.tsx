"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/host/ContractData";
import { ContractInteraction } from "~~/components/host/ContractInteraction";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";


const ExampleUI: NextPage = () => {
  const { address } = useAccount();

  const { data: hostData } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "getHost",
    args: [address],
  });

  return (
    <>
      <MetaHeader
        title="Host | Scaffold-ETH 2"
        description="Host Page."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
        <ContractInteraction nodeId={hostData?.nodeId}/>
        <ContractData hostData={hostData}/>
      </div>
    </>
  );
};

export default ExampleUI;
