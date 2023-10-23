import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import type { NextPage } from "next";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [nodeId, setNodeId] = useState();
  const router = useRouter();

  useEffect(() => {
    // Transform the code above to use promise
    axios
      .get("http://localhost:8081/api/v0/id")
      .then(response => {
        if (response.status === 200) {
          console.log("id Nest", response.data);
          setNodeId(response.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "registerAsHost",
    args: [nodeId],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
      router.push("/host");
    },
  });

  return (
    <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
      <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
        <span className="text-4xl sm:text-6xl text-black">Be a host</span>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
            <div className="flex rounded-full border-2 border-primary p-1">
              <button
                className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                onClick={() => writeAsync()}
                disabled={isLoading || !nodeId}
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    Go <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                  </>
                )}
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
                  {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      Join <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async context => {
  let nodeId = "";
  try {
    const response = await axios.get("http://localhost:8081/api/v0/id");
    if (response.status === 200) {
      nodeId = response.data;
    }
  } catch (error) {
    console.error(error);
  }
  return { props: { nodeId } };
};

export default Home;
