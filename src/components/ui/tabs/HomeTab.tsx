"use client";

import { useMiniApp } from "@neynar/react";
import { useAccount } from "wagmi";
import { GameCharacter } from "../game/GameCharacter";
import { ClaimCard } from "../game/ClaimCard";
import { BalanceDisplay } from "../game/BalanceDisplay";
import { Tab } from "../../App";

interface HomeTabProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

/**
 * HomeTab component displays the main Boo-Bank game dashboard.
 * 
 * This is the main game interface where users can:
 * - View their USDC balance
 * - Claim rewards every hour
 * - See game character status
 * - Withdraw accumulated USDC
 * - Navigate between tabs
 * 
 * @example
 * ```tsx
 * <HomeTab />
 * ```
 */
export function HomeTab({ activeTab, setActiveTab }: HomeTabProps) {
  const { context } = useMiniApp();
  const { address } = useAccount();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Header Section - Profile & Balance */}
      <div className="flex-shrink-0 px-4 pt-2 pb-1">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-purple-300/20">
          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            {context?.user?.pfpUrl ? (
              <img 
                src={context.user.pfpUrl} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border-2 border-purple-300"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center">
                <span className="text-purple-800 font-bold text-sm">👤</span>
              </div>
            )}
            <div>
              <h3 className="text-white font-semibold text-sm">
                {context?.user?.displayName || context?.user?.username || "BooPlayer"}
              </h3>
              <p className="text-purple-200 text-xs">
                @{context?.user?.username || "player"}
              </p>
            </div>
          </div>

          {/* Balance Section */}
          <BalanceDisplay />
        </div>
      </div>

      {/* Main Game Area - Flexible */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-2">
        <div className="w-full max-w-sm">
          {/* Game Character */}
          <GameCharacter />
          
          {/* Claim Card */}
          <ClaimCard />
        </div>
      </div>

      {/* Integrated Navigation Bar */}
      <div className="flex-shrink-0 px-4 pb-2">
        <div className="bg-gray-100 dark:bg-gray-800 border-[3px] border-double border-primary px-2 py-1 rounded-lg">
          <div className="flex justify-around items-center h-10">
            <button
              onClick={() => setActiveTab(Tab.Home)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === Tab.Home ? 'text-primary dark:text-primary-light' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="text-base">🏠</span>
              <span className="text-xs mt-0">Home</span>
            </button>
            <button
              onClick={() => setActiveTab(Tab.Leaderboard)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === Tab.Leaderboard ? 'text-primary dark:text-primary-light' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="text-base">🏆</span>
              <span className="text-xs mt-0">Leaderboard</span>
            </button>
            <button
              onClick={() => setActiveTab(Tab.Info)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === Tab.Info ? 'text-primary dark:text-primary-light' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="text-base">ℹ️</span>
              <span className="text-xs mt-0">Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 