import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeManager = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <MoonIcon boxSize={4} />
        ) : (
          <SunIcon boxSize={4} />
        )}
      </Button>
    </header>
  );
};

export default ThemeManager;
