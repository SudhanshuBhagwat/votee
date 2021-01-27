import "../styles/index.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthProvider, useAuth } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const auth = useAuth();

  return (
    <AuthProvider>
      <div className="flex flex-col h-screen max-w-6xl mx-auto px-6 overscroll-auto">
        <header className="flex items-center justify-between py-3">
          <Link href="/">
            <h1 className="font-bold text-4xl italic select-none cursor-pointer">
              Votee 🎉
            </h1>
          </Link>
          {!auth?.user && (
            <div>
              {router.pathname != "/login" && (
                <Link href="/login">
                  <button className="px-2 py-1 border-2 cursor-pointer border-blue-500 rounded-md mx-2">
                    Log In
                  </button>
                </Link>
              )}
              {router.pathname != "/signin" && (
                <Link href="/signin">
                  <button className="px-2 py-1 border-2 cursor-pointer border-blue-500 rounded-md">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          )}
          {1 == 0 && (
            <div className="flex items-center justify-center">
              <p className="pr-2">Sudhanshu Bhagwat</p>
              <div className="bg-gray-500 h-10 w-10 rounded-full"></div>
            </div>
          )}
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
    </AuthProvider>
  );
}

export default MyApp;
