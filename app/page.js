import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <fieldset>
        <legend>API</legend>
        <input id='data' label='API' placeholder="Enter data in JSON format"/>
        </fieldset>

        <button className="w-full bg-red-600 text-white rounded-md m-5">Submit</button>

        <fieldset>
        <legend>API</legend>
        <input id='data' label='API' placeholder="Enter data in JSON format"/>
        </fieldset>
          
        
      </div>
    </main>
  );
}
