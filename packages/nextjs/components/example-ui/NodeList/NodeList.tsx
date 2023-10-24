import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import { Alert, Button, Table } from "react-daisyui";

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
    <div className="overflow-x-auto">
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
      <Table>
        <Table.Head>
          <span />
          <span>Name</span>
        </Table.Head>

        <Table.Body>
          {nodesData.data.registrations.map((node: any, index: number) => (
            <Table.Row
              key={index}
              className="flex flex-col px-1 py-1 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary"
            >
              <span></span>
              <span className="text-2xl sm:text-3xl text-black">{node.nodeId}</span>
              <span></span>
              <span>
                <Button onClick={() => join(node.nodeId)}>Join</Button>
              </span>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
