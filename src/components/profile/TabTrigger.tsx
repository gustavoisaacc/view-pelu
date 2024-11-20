import React from "react";
type TabTriggerValue = "images" | "appointments";
type TabTriggerProps = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  value: TabTriggerValue;
  children: React.ReactNode;
};

function TabTrigger({
  selectedTab,
  setSelectedTab,
  value,
  children,
}: TabTriggerProps) {
  return (
    <button
      className={`p-2 text-center rounded-lg focus:outline-none ${
        selectedTab === value ? "bg-primary text-white" : "bg-secondary"
      }`}
      onClick={() => setSelectedTab(value)}
    >
      {children}
    </button>
  );
}

export default TabTrigger;
