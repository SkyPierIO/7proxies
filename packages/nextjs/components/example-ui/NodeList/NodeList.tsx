const nodes = [
  {
    name: "node 1",
  },
  {
    name: "node 1",
  },
  {
    name: "node 1",
  },
];

export const NodeList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((node, index) => {
            return (
              <tr key={index}>
                <td>{node.name}</td>
              </tr>
            );
          })}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
