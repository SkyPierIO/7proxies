import { useCallback } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { ModalSteps } from "~~/components/host/ModalSteps";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();

  const beAHost = useCallback(() => {
    document.getElementById("my_modal_1").showModal();
  }, []);

  if (!address) {
    return (
      <div className="hero min-h-screen bg-base-200" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Skypea</h1>
            <p className="py-6">Please connect your wallet to be able to use the app.</p>
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
      <ModalSteps />
      <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
        <span className="text-4xl sm:text-6xl text-black">Be a host</span>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
            <div className="flex rounded-full border-2 border-primary p-1">
              <button
                className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                onClick={() => beAHost()}
              >
                Go <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
        <span className="text-4xl sm:text-6xl text-black">Join a host</span>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
            <div className="flex rounded-full border-2 border-primary p-1">
              <Link href="/example-ui">
                <button className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest">
                  Join <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getStaticProps = async context => {
//   let nodeId = "";
//   try {
//     const response = await axios.get("http://localhost:8081/api/v0/id");
//     if (response.status === 200) {
//       nodeId = response.data;
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   return { props: { nodeId } };
// };

export default Home;
