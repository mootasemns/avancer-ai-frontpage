import { useState } from "react";
import "./App.css";
import Top from "./components/Top";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#E9F1FC] to-[#FFFFFF]">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Top onToggleSidebar={toggleSidebar} />
        <div className="overflow-y-auto">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}

export default App;
