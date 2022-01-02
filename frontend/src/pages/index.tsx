import { trpc } from "@/utils/trpc";

export default function Home() {
  const {data, isLoading} = trpc.useQuery(["query-1", { text: "lucas"}]);   
  
  if (isLoading) return <div>Loading...</div>

  if (data) return <div>{data.greeting}</div>
  
  return  (
  <div className="h-screen w-screen flex flex-col justify-center items-center">
    <div className="text-2xl text-center">Which Pokemon is rounder?</div>
    <div className="p-2" />
    <div className="border p-8 flex justify-between items-center max-w-2xl">
      <div className="w-16 h-16 bg-red-200"/>
      <div>Vs</div>
      <div className="w-16 h-16 bg-red-200"/>
  </div>
  </div>
  );
}
