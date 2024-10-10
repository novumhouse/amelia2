import CurvedlineChart from "@/components/Chart";

export default function DashBoardPage() {
  return (
   <div className="flex flex-col bg-[#2a2a2a] text-[#e0e0e0] overflow-y-auto h-[100vh]">
      <main className="flex-1 bg-[#3d3d3d] p-8 m-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Auschwitz Memorial Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-[#494949] border border-[#666666] rounded-2xl shadow-lg shadow-black/20 flex flex-col justify-between flex-1 p-4">
            <div className="p-4 border-b border-[#666666] mb-2">
              <h3 className="text-xl font-semibold mb-2">The History of Auschwitz</h3>
              <p className="text-sm text-[#b0b0b0]">
                Auschwitz-Birkenau was the largest of Nazi Germany&apos;s concentration camps and extermination centers.
                Over 1.1 million men, women, and children lost their lives here. The site is a symbol of the Holocaust,
                the genocide of 6 million Jews, and a memorial to the victims.
              </p>
            </div>
          </div>
          <div className="bg-[#494949] border border-[#666666] rounded-2xl shadow-lg shadow-black/20 flex flex-col justify-between flex-1 p-4">
            <div className="p-4 border-b border-[#666666] mb-2">
              <h3 className="text-xl font-semibold mb-2">The Museum&apos;s Mission</h3>
              <p className="text-sm text-[#b0b0b0]">
                The Auschwitz-Birkenau State Museum was established in 1947 to preserve the remains of the camp and 
                honor the victims. The museum&apos;s mission is to educate current and future generations about the horrors 
                of the Holocaust, and to promote remembrance and reflection.
              </p>
            </div>
          </div>
          <div className="bg-[#494949] border border-[#666666] rounded-2xl shadow-lg shadow-black/20 flex flex-col justify-between flex-1 p-4">
            <div className="p-4 border-b border-[#666666] mb-2">
              <h3 className="text-xl font-semibold mb-2">Visitor Information</h3>
              <p className="text-sm text-[#b0b0b0]">
                Every year, millions of visitors from all over the world come to Auschwitz to learn about the camp&apos;s history 
                and pay their respects to the victims. The site offers guided tours, educational programs, and exhibitions 
                that provide insight into the events that took place.
              </p>
            </div>
          </div>
          <div className="bg-[#494949] border border-[#666666] rounded-2xl shadow-lg shadow-black/20 flex flex-col justify-between flex-1 p-4">
            <div className="p-4 border-b border-[#666666] mb-2">
              <h3 className="text-xl font-semibold mb-2">Preserving Memory</h3>
              <p className="text-sm text-[#b0b0b0]">
                The Auschwitz Memorial is dedicated to the conservation of original camp relics and archives.
                The museum&apos;s conservation efforts ensure that future generations will be able to witness the remnants 
                of this tragic period in history and reflect on the consequences of hatred and intolerance.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
