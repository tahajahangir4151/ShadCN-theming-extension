"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDark, setIsDark] = useState(false);

  // Set theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="font-bold text-2xl mb-6">
        Learn ShadCN Components and Theming
      </h1>

      <button
        onClick={toggleTheme}
        className="mb-6 px-4 py-2 rounded border border-gray-700 dark:border-gray-300 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        Toggle Theme
      </button>

      <Button className="mb-6 bg-primary text-primary-foreground hover:bg-primary/80 dark:hover:bg-primary/70 transition-colors duration-300">
        Button From ShadCN
      </Button>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
      />

      <span className="text-2xl font-bold mt-4 block">
        Selected Date is {date ? date.toDateString() : "None"}
      </span>
    </div>
  );
}
