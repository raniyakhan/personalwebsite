import { ChakraProvider } from '@chakra-ui/react';
import '/public/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // <ChakraProvider>
      <html lang="en">
        <head>
          <title >Raniya Khan</title>
        </head>
        <body>{children}</body>
        
      </html>
    // </ChakraProvider>
  );
}


