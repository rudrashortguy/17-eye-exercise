"use client";

import { useState } from "react";
import { useHabits } from "@/context/HabitContext";
import HabitList from "@/components/HabitList";
import Heatmap from "@/components/Heatmap";
import AddHabit from "@/components/AddHabit";

export default function Home() {
  const { habits } = useHabits();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Habits list */}
        <div className="lg:col-span-2 space-y-6">
          <AddHabit />
          <HabitList />
        </div>

        {/* Right column - Heatmap */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Activity Heatmap</h2>
            <Heatmap
              habits={habits}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Statistics</h2>
            <StatsPanel habits={habits} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsPanel({ habits }: { habits: Habit[] }) {
  const totalStreaks = habits.reduce((acc, h) => acc + h.streak, 0);
  const longestStreak = Math.max(...habits.map(h => h.streak), 0);
  const activeHabits = habits.filter(h => h.streak > 0).length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-emerald-500">{habits.length}</div>
        <div className="text-sm text-gray-500">Total Habits</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-emerald-500">{totalStreaks}</div>
        <div className="text-sm text-gray-500">Total Streaks</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-emerald-500">{activeHabits}</div>
        <div className="text-sm text-gray-500">Active</div>
      </div>
    </div>
  );
}
