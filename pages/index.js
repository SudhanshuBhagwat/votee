export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-lg text-gray-600 font-medium">Polls</h1>
        <h3 className="text-4xl font-bold">My Polls</h3>
      </header>
      <div>
        <p>Create Realtime Polls for your needs</p>
        <p>You do not have any polls</p>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md font-semibold">
          Create a new Poll
        </button>
      </div>
    </div>
  );
}
