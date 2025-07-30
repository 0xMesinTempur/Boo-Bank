"use client";

import { Tab } from "../../App";

interface InfoTabProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

/**
 * InfoTab component displays game information and rules.
 * 
 * This component shows:
 * - Game rules and mechanics
 * - How to play
 * - Reward system
 * - Withdrawal rules
 * 
 * @example
 * ```tsx
 * <InfoTab />
 * ```
 */
export function InfoTab({ activeTab, setActiveTab }: InfoTabProps) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Header */}
      <div className="flex-shrink-0 px-6 pt-4 pb-2">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">ℹ️ Game Info</h1>
          <p className="text-purple-200 text-sm">How to play Boo-Bank</p>
        </div>
      </div>

      {/* Main Content - Flexible */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="max-w-md mx-auto">
          {/* Game Rules */}
          <div className="space-y-4">
            {/* How to Play */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20">
              <h3 className="text-white font-semibold text-lg mb-3">🎮 How to Play</h3>
              <div className="space-y-2 text-purple-200 text-sm">
                <p>• Claim USDC rewards every hour</p>
                <p>• Each claim gives you $0.01 USDC</p>
                <p>• Build your balance over time</p>
                <p>• Compete on the leaderboard</p>
              </div>
            </div>

            {/* Reward System */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20">
              <h3 className="text-white font-semibold text-lg mb-3">💰 Reward System</h3>
              <div className="space-y-2 text-purple-200 text-sm">
                <p>• <strong>Claim Amount:</strong> $0.01 USDC per claim</p>
                <p>• <strong>Cooldown:</strong> 1 hour between claims</p>
                <p>• <strong>Min Withdraw:</strong> $0.10 USDC</p>
                <p>• <strong>Network:</strong> Base (Ethereum L2)</p>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20">
              <h3 className="text-white font-semibold text-lg mb-3">🏆 Leaderboard</h3>
              <div className="space-y-2 text-purple-200 text-sm">
                <p>• Rankings based on total claimed USDC</p>
                <p>• Updates every hour</p>
                <p>• Top players get recognition</p>
                <p>• Compete with Farcaster community</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20">
              <h3 className="text-white font-semibold text-lg mb-3">💡 Tips</h3>
              <div className="space-y-2 text-purple-200 text-sm">
                <p>• Set reminders for hourly claims</p>
                <p>• Don't forget to withdraw when you reach $0.10</p>
                <p>• Share with friends to grow the community</p>
                <p>• Have fun and enjoy the game!</p>
              </div>
            </div>

            {/* Game Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20">
              <h3 className="text-white font-semibold text-lg mb-3">📊 Game Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-purple-200 text-sm">
                <div>
                  <p className="font-semibold">Total Players</p>
                  <p className="text-white">1,234</p>
                </div>
                <div>
                  <p className="font-semibold">Total USDC Distributed</p>
                  <p className="text-white">$45.67</p>
                </div>
                <div>
                  <p className="font-semibold">Active Today</p>
                  <p className="text-white">567</p>
                </div>
                <div>
                  <p className="font-semibold">Average Claims</p>
                  <p className="text-white">8.5/day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-purple-200 text-xs">
              Powered by Farcaster & Base Network
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