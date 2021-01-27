export default function signin() {
  return (
    <div className="h-full flex flex-col items-center mt-20">
      <h1 className="text-5xl font-bold w-4/6 text-center">
        Join Votee for creating collaborative polls.
      </h1>
      <div className="flex flex-col justify-center items-center mt-10 space-y-4 w-full">
        <button className="px-2 py-3 bg-gray-900 w-80 text-white cursor-pointer rounded-md font-medium transition hover:bg-gray-600">
          Sign In With Github
        </button>
        <button className="px-2 py-3 bg-blue-500 w-80 text-white cursor-pointer rounded-md font-medium transition hover:bg-blue-400">
          Sign In With Google
        </button>
        <p className="text-lg">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Log In</span>
        </p>
      </div>
    </div>
  );
}
