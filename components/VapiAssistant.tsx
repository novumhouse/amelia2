"use client";
import Vapi from "@vapi-ai/web";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

export default function VapiAssistant({ vapiId }: { vapiId: string }) {
  const session = useSession();
  //@ts-ignore
  const publickey = session?.data?.user?.public;
  const vapi = new Vapi(publickey); // Get Public Token from Dashboard > Accounts Page
  const [callStatus, setCallStatus] = useState("inactive");

  // Start call
  const start = async () => {
    try {
      console.log("Starting call...");  // Debugging log
      setCallStatus("loading");
      await vapi.start(vapiId);
      console.log("Call started");  // Debugging log
    } catch (error) {
      console.error("Error starting the call:", error);
      setCallStatus("inactive"); // Reset status if there's an error
    }
  };

  // Stop call
  const stop = async () => {
    try {
      console.log("Stopping call...");  // Debugging log
      setCallStatus("loading");
      await vapi.stop();
      console.log("Call stopped");  // Debugging log
      setCallStatus("inactive");
    } catch (error) {
      console.error("Error stopping the call:", error);
      setCallStatus("active"); // Keep it active if stop failed
    }
  };

  // Event listeners
  useEffect(() => {
    vapi.on("call-start", () => {
      console.log("call-start event triggered");  // Debugging log
      setCallStatus("active");
    });
    vapi.on("call-end", () => {
      console.log("call-end event triggered");  // Debugging log
      setCallStatus("inactive");
    });

    // Cleanup event listeners on unmount
    return () => {
      vapi.removeAllListeners();
    };
  }, [vapi]);

  return (
    <div>
      {callStatus === "inactive" && (
        <Button
          className="w-full bg-[#37aa9d3e] text-[#37aa9d] hover:bg-[#37aa9d47]"
          onClick={start}
        >
          Start
        </Button>
      )}
      {callStatus === "loading" && (
        <Button
          className="w-full bg-[#37aa9d3e] text-[#37aa9d] hover:text-[#37aa9d] hover:bg-[#37aa9d47]"
          variant={"outline"}
        >
          Loading...
        </Button>
      )}
      {callStatus === "active" && (
        <Button
          className="w-full bg-[#37aa9d3e] text-[#37aa9d] hover:bg-[#37aa9d47]"
          onClick={stop}
        >
          Stop
        </Button>
      )}
    </div>
  );
}
