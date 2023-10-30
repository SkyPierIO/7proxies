import { forwardRef } from "react";
import { Button } from "~~/components/ui/Button";

interface JoinStepsI {
  vpnData: {
    ListeningAddress: string;
    ListeningPort: string;
  };
}

export const JoinSteps = forwardRef((props: JoinStepsI, ref) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Configure your browser network</h3>
        <p>Configure the proxy in your browser network with the next information</p>
        <p>
          <strong>Host:</strong> {props.vpnData?.ListeningAddress}
        </p>
        <p>
          <strong>Port:</strong> {props.vpnData?.ListeningPort}
        </p>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <Button onClick={() => {}}>Close</Button>
        </form>
      </div>
    </dialog>
  );
});

JoinSteps.displayName = "JoinSteps";
