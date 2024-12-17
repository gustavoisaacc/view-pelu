import React from "react";
type TabTriggerValue = "appointments" | "ubicacion";
type TabTriggerProps = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  value: TabTriggerValue;
  children: React.ReactNode;
};

export function TabTrigger({
  selectedTab,
  setSelectedTab,
  value,
  children,
}: TabTriggerProps) {
  const isSelected = selectedTab === value;

  return (
    <button
      onClick={() => setSelectedTab(value)}
      className={`px-4 py-2 rounded-md transition duration-300 w-full ${
        isSelected
          ? "bg-[#9c27b0] text-white shadow-sm" // Clase activa
          : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Clase inactiva
      }`}
    >
      {children}
    </button>
  );
}
