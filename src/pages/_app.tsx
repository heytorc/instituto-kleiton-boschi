import type { AppProps } from "next/app";
import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";

import "@/styles/globals.css";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box bg={useColorModeValue("gray.800", "gray.800")}>
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
