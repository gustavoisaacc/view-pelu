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
<<<<<<< HEAD
      className={`p-2 text-center rounded-lg focus:outline-none ${
        selectedTab === value ? "bg-primary text-white" : "bg-secondary"
      }`}
      onClick={() => setSelectedTab(value)}
=======
      className="p-2 text-center rounded-lg focus:outline-none bg-gray-200"
      // className={`p-2 text-center rounded-lg focus:outline-none ${
      //   selectedTab === value ? "bg-purple-600 text-white" : "bg-gray-200"
      // }`}
      // onClick={() => setSelectedTab(value)}
>>>>>>> 03f9a24802dda0a14915f0b0cf1317c07d9b364e
    >
      {children}
    </button>
  );
}

export default TabTrigger;
