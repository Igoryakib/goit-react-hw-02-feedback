import React from "react";
import btnData from "./data/btnData.json";
import statisticsData from "./data/statisticsData.json";
import SectionStat from './components/Section/SectionStat';
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <SectionStat title="Please leave feedback">
      <Statistics
        titleStatistics="Statistics"
        statisticsArray={statisticsData}
        btnData={btnData}
      />
    </SectionStat>
  );
};

export default App;
