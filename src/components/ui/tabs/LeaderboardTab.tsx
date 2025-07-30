"use client";

import { useState, useEffect } from "react";
import { useMiniApp } from "@neynar/react";
import { Tab } from "../../App";

interface LeaderboardEntry {
  rank: number;
  username: string;
  displayName: string;
  pfpUrl?: string;
  totalClaimed: number;
  fid: number;
}

interface LeaderboardTabProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

/**
 * LeaderboardTab component displays the leaderboard based on total claimed USDC.
 * 
 * This component shows:
 * - Top players by total claimed USDC
 * - User rankings with profile pictures
 * - Current user's position
 * - Claim statistics
 * 
 * @example
 * ```tsx
 * <LeaderboardTab />
 * ```
 */
export function LeaderboardTab({ activeTab, setActiveTab }: LeaderboardTabProps) {
  const { context } = useMiniApp();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserRank, setCurrentUserRank] = useState<number | null>(null);

  // Mock data for now - will be replaced with actual database fetch
  useEffect(() => {
    const mockLeaderboard: LeaderboardEntry[] = [
      {
        rank: 1,
        username: "crypto_whale",
        displayName: "Crypto Whale",
        pfpUrl: "https://picsum.photos/40/40?random=1",
        totalClaimed: 0.45,
        fid: 12345
      },
      {
        rank: 2,
        username: "boo_master",
        displayName: "Boo Master",
        pfpUrl: "https://picsum.photos/40/40?random=2",
        totalClaimed: 0.32,
        fid: 12346
      },
      {
        rank: 3,
        username: "ghost_hunter",
        displayName: "Ghost Hunter",
        pfpUrl: "https://picsum.photos/40/40?random=3",
        totalClaimed: 0.28,
        fid: 12347
      },
      {
        rank: 4,
        username: "usdc_collector",
        displayName: "USDC Collector",
        pfpUrl: "https://picsum.photos/40/40?random=4",
        totalClaimed: 0.21,
        fid: 12348
      },
      {
        rank: 5,
        username: "farcaster_fan",
        displayName: "Farcaster Fan",
        pfpUrl: "https://picsum.photos/40/40?random=5",
        totalClaimed: 0.18,
        fid: 12349
      }
    ];

    setLeaderboard(mockLeaderboard);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="spinner h-8 w-8 mx-auto mb-4"></div>
          <p className="text-white">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Header */}
      <div className="flex-shrink-0 px-6 pt-4 pb-2">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">🏆 Leaderboard</h1>
          <p className="text-purple-200 text-sm">Top players by total claimed USDC</p>
        </div>
      </div>

      {/* Main Content - Flexible */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="max-w-md mx-auto">
          {/* Current User Rank */}
          {currentUserRank && (
            <div className="bg-purple-600/30 rounded-lg p-4 mb-4 border border-purple-300/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="text-white font-semibold">Your Rank</p>
                    <p className="text-purple-200 text-sm">#{currentUserRank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">$0.00</p>
                  <p className="text-purple-200 text-xs">Total Claimed</p>
                </div>
              </div>
            </div>
          )}

          {/* Leaderboard List */}
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div
                key={entry.fid}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20"
              >
                <div className="flex items-center justify-between">
                  {/* Rank and Profile */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-sm">
                      {entry.rank}
                    </div>
                    <div className="flex items-center space-x-3">
                      {entry.pfpUrl ? (
                        <img
                          src={entry.pfpUrl}
                          alt={entry.displayName}
                          className="w-10 h-10 rounded-full border-2 border-purple-300"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center">
                          <span className="text-purple-800 font-bold text-sm">👤</span>
                        </div>
                      )}
                      <div>
                        <p className="text-white font-semibold">{entry.displayName}</p>
                        <p className="text-purple-200 text-xs">@{entry.username}</p>
                      </div>
                    </div>
                  </div>

                  {/* Total Claimed */}
                  <div className="text-right">
                    <p className="text-white font-bold">${entry.totalClaimed.toFixed(2)}</p>
                    <p className="text-purple-200 text-xs">USDC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Refresh Info */}
          <div className="text-center mt-4">
            <p className="text-purple-200 text-xs">
              Leaderboard updates every hour
            </p>
          </div>
        </div>
      </div>

      {/* Integrated Navigation Bar */}
      <div className="flex-shrink-0 px-6 pb-4">
        <div className="bg-gray-100 dark:bg-gray-800 border-[3px] border-double border-primary px-2 py-2 rounded-lg">
          <div className="flex justify-around items-center h-12">
            <button
              onClick={() => setActiveTab(Tab.Home)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === Tab.Home ? 'text-primary dark:text-primary-light' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="text-lg">🏠</span>
              <span className="text-xs mt-0.5">Home</span>
            </button>
            <button
              onClick={() => setActiveTab(Tab.Leaderboard)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === Tab.Leaderboard ? 'text-primary dark:text-primary-light' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="text-lg">🏆</span>
              <span className="text-xs mt-0.5">Leaderboard</span>
            </button>
            <button
              onClick={() => setActiveTab(Tab.Info)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === Tab.Info ? 'text-primary dark:text-primary-light' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className="text-lg">ℹ️</span>
              <span className="text-xs mt-0.5">Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 