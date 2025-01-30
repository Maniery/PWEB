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
        <Footer />
      </body>
    </html>
  );
}


export function Footer() {
  return (
    <footer>
      <p>Bilbo</p>
    </footer>
  );
}

export function Home() {
  return (
    <div>
      <div>Frodo</div>
    </div>
  );
}