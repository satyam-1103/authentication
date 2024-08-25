"use client";
import Sidebar from "@/components/DashboardSidebar/Sidebar";
import React, { useEffect, useState } from "react";
import css from "@/app/dashboard/dashboard.module.css";
import Recent from "@/components/DashboardRecent/Recent";
import Transactions from "@/components/DashboardTransactions/Transactions";
import axios from "axios";

const Page = () => {
  const [password, setPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    const correctPassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD.toLocaleLowerCase();
    console.log(correctPassword);
    
    if (password === correctPassword) {
      setShowPrompt(false);
      setIsAuthenticated(true);
      localStorage.setItem('dashboardAuthenticated', 'true');
      prompt('You are now authenticated');
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('dashboardAuthenticated');
      if (isAuthenticated) {
        setIsAuthenticated(true);
        setShowPrompt(false);
      }
    }
  }, []);

  return isAuthenticated ? (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <div className={css.rightSideRecents}>
        <div className={css.recents}>
          <Recent heading="Events" data={8} />
          <Recent heading="Internships" data={10} />
        </div>
        <div className={css.recentTables}>
          <Transactions />
        </div>
      </div>
    </div>
  ) : (
    <div>
      {showPrompt && (
        <div>
          <h2>Please enter the dashboard password:</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Page;