import "../styles/index.css";
import { AuthProvider } from "../lib/auth";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import { Box, CSSReset, ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <ChakraProvider>
        <AuthProvider>
          <CSSReset />
          <Box
            height="100vh"
            padding="1em"
            className="bg-white dark:bg-black text-black dark:text-white"
            overflow="hidden"
          >
            <Component {...pageProps} />
          </Box>
        </AuthProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
