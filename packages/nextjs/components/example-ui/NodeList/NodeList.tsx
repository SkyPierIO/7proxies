import { RefObject, useRef, useState } from "react";
import { JoinSteps } from "./JoinSteps";
import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import { Button } from "~~/components/ui/Button";
import { notification } from "~~/utils/scaffold-eth";

export const NodeList = () => {
  const dialogRef = useRef<RefObject<HTMLDivElement> | undefined>();
  const [vpnData, setVpnData] = useState<any>({});
  const NODES_GRAPHQL = `
  {
    registrations(filter: { active: true }, orderBy: createdAt) {
      address
    	nodeId
    }
  }
  `;

  const NODES_GQL = gql(NODES_GRAPHQL);
  const nodesData = useQuery(NODES_GQL, { pollInterval: 1000 });

  const join = async (nodeId: string) => {
    try {
      const response = await axios.get(`http://localhost:8081/api/v0/forward/${nodeId}`);
      if (response.status === 200) {
        if (response.data.Success) {
          setVpnData(response.data);
          dialogRef.current.showModal();
        } else {
          notification.success("The node is not available. Please try again later.");
        }
      }
    } catch (error) {
      console.error(error);
      notification.error("There was an error getting the data of the node. Please try again later.");
    }
  };

  return nodesData.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="overflow-x-auto grid lg:grid-cols-2 flex-grow">
      <JoinSteps ref={dialogRef} vpnData={vpnData} />
      {nodesData.data.registrations
        .filter(
          (node: any, index: any, self: any) =>
            node.nodeId && node.nodeId.length > 10 && index === self.findIndex(item => item.nodeId === node.nodeId),
        )
        .map((node: any, index: number) => (
          <div className="card bg-base-100 shadow-xl m-2" key={index}>
            <div className="card-body">
              <h3 className="card-title text-base">{node.nodeId}</h3>
              <div className="card-actions justify-between">
                <Button onClick={() => join(node.nodeId)}>Join</Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
