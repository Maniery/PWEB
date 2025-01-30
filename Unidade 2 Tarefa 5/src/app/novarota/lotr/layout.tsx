import React from "react";

  interface RootLayoutProps {
    children: React.ReactNode;
  }

  export default function RootLayout({ children }: RootLayoutProps) {
    console.log("montando layout");

    return (
      <html lang="en">
        <body>
          <Home />
          {children}
        </body>
      </html>
    );
  }

  
  export function Home() {
      return (
        <div>
          <div>Um anel para todos governar</div>
        </div>
      );
    }