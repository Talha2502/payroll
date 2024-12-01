// Provider.tsx
'use client';

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import React from "react";


export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider {...props}>
      </ThemeProvider>
    </ChakraProvider>
  );
}
