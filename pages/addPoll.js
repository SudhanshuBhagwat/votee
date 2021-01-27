import Link from "next/link";

export default function addPoll() {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between">
        <h3 className="text-3xl font-bold">Add a new Poll</h3>
        <Link href="">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md font-semibold">
            Create Poll 📊
          </button>
        </Link>
      </header>
      <div className="bg-gray-100 px-3 py-3 flex flex-col rounded-md my-6">
        <div></div>
        <div className="space-x-4 flex flex-row w-full">
          <div className="flex h-20 w-20 bg-red-500 rounded-lg" />
          <div className="flex-1">
            <input className="w-full h-10 text-xl px-2 rounded-md border-2 border-black"></input>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-semibold">
            Participants{" "}
            <span className="px-3 py-1 ml-2 bg-green-400 rounded-md">0</span>
          </p>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold">
            Add Participant
          </button>
        </div>
        <table className="mt-4 gap-4">
          <thead className="bg-gray-400 text-white">
            <th className="rounded-tl-md py-2">Avatar</th>
            <th className="rounded-tr-md py-2">Name</th>
          </thead>
          <tbody>
            <tr className="text-center my-2">
              <td className="flex justify-center py-2">
                <div className="h-10 w-10 bg-red-500 rounded-lg" />
              </td>
              <td className="py-2">Sudhanshu Bhagwat</td>
            </tr>
            <tr className="text-center my-2">
              <td className="flex justify-center py-2">
                <div className="h-10 w-10 bg-red-500 rounded-lg" />
              </td>
              <td className="py-2">Sudhanshu Bhagwat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
