import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme/useTheme";
import NavBar from "./components/NavBar/NavBar";

export const metadata = {
  title: "Flow Task",
  description: "Manage you task with Flow Task",
   icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
      <NavBar/>
        <div className="min-h-[calc(100dvh-300px)]">
        {children}
      </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
