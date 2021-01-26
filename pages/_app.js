import "../styles/index.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen max-w-6xl mx-auto px-6">
      <header className="flex items-center justify-between py-3">
        <h1 className="font-bold text-2xl italic select-none">Votee 🎉</h1>
        <div>
          <button className="px-2 py-1 mx-2 border-2 cursor-pointer border-blue-500 rounded-md">
            Log In
          </button>
          <button className="px-2 py-1 mx-1 border-2 cursor-pointer border-blue-500 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex-1 my-4">
        <Component {...pageProps} />
      </main>
      <footer className="flex mx-auto py-4 items-center justify-items-center">
        <div>
          Made with 💓 by{" "}
          <Link href="https://www.github.com/SudhanshuBhagwat">
            <a target="_blank" className="text-blue-400 italic">
              Sudhanshu Bhagwat
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
