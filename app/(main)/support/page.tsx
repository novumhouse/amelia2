import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="flex flex-col bg-[#2a2a2a] overflow-y-auto min-h-[100vh]">
      <main className="flex-1 bg-[#3d3d3d] text-[#e0e0e0] p-8 m-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="w-full sm:w-1/2 bg-[#494949] hover:bg-[#5a5a5a] duration-200 border border-[#666666] rounded-2xl shadow-lg shadow-black/10 p-6 flex flex-col justify-between items-center">
            <p className="text-xl font-bold text-center">Phone: +48 570 666 910</p>
          </div>
          <div className="w-full sm:w-1/2 bg-[#494949] hover:bg-[#5a5a5a] duration-200 border border-[#666666] rounded-2xl shadow-lg shadow-black/10 p-6 flex flex-col justify-between items-center">
            <Link href="mailto:adrian16477@onet.eu">
              <p className="text-xl font-bold text-center">Email: adrian16477@onet.eu</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
