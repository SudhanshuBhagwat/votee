import Link from "next/link";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div className="flex flex-col">
      <header>
        <h3 className="text-3xl font-bold">My Polls: {auth.user}</h3>
      </header>
      <div className="bg-gray-100 px-3 py-3 flex flex-col items-center justify-center rounded-md h-80 my-6">
        <p className="text-2xl">Create Realtime Polls for your needs</p>
        <p className="mb-4">You do not have any polls</p>
        <Link href="/addPoll">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md font-semibold">
            Create a new Poll 📊
          </button>
        </Link>
      </div>
    </div>
  );
}
