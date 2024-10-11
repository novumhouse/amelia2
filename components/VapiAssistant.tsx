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

  const start = async () => {
    try {
      setCallStatus("loading");
      await vapi.start(vapiId);
    } catch (error) {
      console.error("Error starting the call:", error);
      setCallStatus("inactive"); // Reset status if there's an error
    }
  };

  const stop = async () => {
    try {
      setCallStatus("loading");
      await vapi.stop();
      setCallStatus("inactive");
    } catch (error) {
      console.error("Error stopping the call:", error);
      setCallStatus("active"); // Keep it active if stop failed
    }
  };

  useEffect(() => {
    vapi.on("call-start", () => setCallStatus("active"));
    vapi.on("call-end", () => setCallStatus("inactive"));

    return () => {
      vapi.removeAllListeners();
    };
  }, [vapi]);

  return (
    <div>
      {callStatus === "inactive" ? (
        <Button
          className="w-full bg-[#37aa9d3e] text-[#37aa9d] hover:bg-[#37aa9d47]"
          onClick={start}
        >
          Start
        </Button>
      ) : null}
      {callStatus === "loading" ? (
        <Button
          className="w-full bg-[#37aa9d3e] text-[#37aa9d] hover:text-[#37aa9d] hover:bg-[#37aa9d47]"
          variant={"outline"}
        >
          Loading...
        </Button>
      ) : null}
      {callStatus === "active" ? (
        <Button
          className="w-full bg-[#37aa9d3e] text-[#37aa9d] hover:bg-[#37aa9d47]"
          onClick={stop}
        >
          Stop
        </Button>
      ) : null}
    </div>
  );
}
