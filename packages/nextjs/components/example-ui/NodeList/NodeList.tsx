import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import { Alert } from "react-daisyui";
import { Button } from "~~/components/ui/Button";

export const NodeList = () => {
  const [joined, setJoined] = useState(false);
  const NODES_GRAPHQL = `
  {
    registrations(orderBy: createdAt) {
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
        setJoined(true);
      }
    } catch (error) {
      setJoined(false);
      console.error(error);
    }
  };

  return nodesData.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="overflow-x-auto grid lg:grid-cols-2 flex-grow">
      {joined && (
        <Alert
          status={"success"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        >
          <span>You have joined!</span>
        </Alert>
      )}
      {nodesData.data.registrations.map((node: any, index: number) => (
        <div className="card bg-base-100 shadow-xl m-2" key={index}>
          <div className="card-body">
            <h3 className="card-title text-base">{node.nodeId}</h3>
            <div className="card-actions justify-between">
              <div>
                <div className="badge badge-accent mr-2">France</div>
                <div className="badge badge-neutral">Online</div>
              </div>
              <Button onClick={() => join(node.nodeId)}>Join</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
