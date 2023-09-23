"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/host/ContractData";
import { ContractInteraction } from "~~/components/host/ContractInteraction";


const ExampleUI: NextPage = () => {

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
        <ContractInteraction />
        <ContractData />
      </div>
    </>
  );
};

export default ExampleUI;
