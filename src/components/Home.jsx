import React, { useState } from "react";
import Header from "./Header";
import ListView from "./ListView";
import GridView from "./GridView";

function Home() {
  const [currentView, setCurrentView] = useState("list");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <Header currentView={currentView} onViewChange={handleViewChange} />
      {currentView === "list" ? <ListView /> : <GridView />}
    </div>
  );
}

export default Home;
