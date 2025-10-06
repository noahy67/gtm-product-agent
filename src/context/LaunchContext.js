import React, { createContext, useContext, useState, useEffect } from "react";
import { launches } from "../data/portfolioMock";

const LaunchContext = createContext(undefined);

export function LaunchContextProvider({ children, launchId }) {
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    if (launchId) {
      const found = launches.find((l) => l.id === launchId);
      setLaunch(found || null);
    }
  }, [launchId]);

  const setLaunchId = (id) => {
    const found = launches.find((l) => l.id === id);
    setLaunch(found || null);
  };

  return (
    <LaunchContext.Provider
      value={{ launch, setLaunchId, allLaunches: launches }}
    >
      {children}
    </LaunchContext.Provider>
  );
}

export function useLaunchContext() {
  const context = useContext(LaunchContext);
  if (context === undefined) {
    throw new Error(
      "useLaunchContext must be used within a LaunchContextProvider"
    );
  }
  return context;
}

export function usePortfolio() {
  return {
    launches,
  };
}
