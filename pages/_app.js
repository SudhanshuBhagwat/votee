import "../styles/index.css";
import { AuthProvider } from "../lib/auth";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
