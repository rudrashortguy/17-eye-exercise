import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HabitProvider } from "@/context/HabitContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habit Tracker",
  description: "Track your daily habits with streaks and heatmap visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HabitProvider>
          <Header />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </HabitProvider>
      </body>
    </html>
  );
}
