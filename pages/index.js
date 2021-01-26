export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-lg text-gray-600 font-medium">Polls</h1>
        <h3 className="text-3xl font-bold">My Polls</h3>
      </header>
      <div className="bg-gray-100 px-3 py-3 flex flex-col items-center justify-center rounded-md h-64 my-6">
        <p className="text-2xl">Create Realtime Polls for your needs</p>
        <p className="mb-4">You do not have any polls</p>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md font-semibold">
          Create a new Poll 📊
        </button>
      </div>
    </div>
  );
}
