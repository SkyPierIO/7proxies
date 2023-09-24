// import {
//   useScaffoldContractRead,
// } from "~~/hooks/scaffold-eth";
import { gql, useQuery } from "@apollo/client";

export const NodeList = () => {
  const GREETINGS_GRAPHQL = `
  {
    registrations(orderBy: createdAt) {
      address
    	nodeId
    }
  }
  `;

  const GREETINGS_GQL = gql(GREETINGS_GRAPHQL);
  const greetingsData = useQuery(GREETINGS_GQL, { pollInterval: 1000 });

  return greetingsData.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {greetingsData.data.registrations.map((node, index) => {
            return (
              <tr key={index}>
                <td>{node.nodeId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
