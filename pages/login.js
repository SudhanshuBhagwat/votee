import { useAuth } from "../lib/auth";

export default function login() {
  const auth = useAuth();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Log in to Votee</h1>
      <div className="flex flex-col justify-center items-center mt-10 space-y-4 w-full">
        <button
          className="px-2 py-3 bg-gray-900 w-80 text-white cursor-pointer rounded-md font-medium transition hover:bg-gray-600"
          onClick={(e) => auth.signInWithGithub()}
        >
          Log In With Github
        </button>
        <button className="px-2 py-3 bg-blue-500 w-80 text-white cursor-pointer rounded-md font-medium transition hover:bg-blue-400">
          Log In With Google
        </button>
        <p className="text-lg">
          Log in with{" "}
          <span className="text-blue-400 cursor-pointer">
            Email and Password
          </span>
        </p>
      </div>
    </div>
  );
}
