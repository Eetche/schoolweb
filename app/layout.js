import Header from "./components/Header";

import "./globals.css"

export const metadata = {
  title: "Школа №55",
  icons: {
    icon: "/favicon.ico"
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body>
      <Header/>
        {children}
        </body>
    </html>
  );
}
