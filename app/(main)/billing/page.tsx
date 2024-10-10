"use client"
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Billing = () => {
  const session = useSession();
  // @ts-ignore
  const multiFactor = parseInt(session.data?.user?.multiFactor)? parseInt(session.data?.user?.multiFactor) : 1;

  return (
   <div className="flex flex-col bg-[#2b2b2b] overflow-y-auto min-h-[100vh]">
      <main className="flex-1 bg-[#3d3d3d] text-white p-4 md:p-8 m-4 md:m-8 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Support the Auschwitz Museum
        </h2>
        <section className="w-full flex items-center justify-center">
          <div className="container px-2 md:px-6">
            <div className="dark:bg-[#4a4a4a] bg-[#3b3b3b] border border-gray-700 rounded-2xl shadow-lg flex flex-col justify-between flex-1 min-w-[250px] md:min-w-[300px] p-4 md:p-6 transform hover:scale-105 transition duration-300">
              <div>
                <ul className="mt-4 space-y-2 text-sm md:text-base">
                  <li className="flex items-center">
                    <CheckIcon className="text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Maintenance of Memorial Sites
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Conservation of Artifacts
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Support for Educational Programs
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="https://www.auschwitz.org/wesprzyj/">
                  <Button className="w-full bg-[#183534] hover:bg-[#183534] p-3 rounded-lg shadow-sm text-white">
                    Support the Museum
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Billing;
