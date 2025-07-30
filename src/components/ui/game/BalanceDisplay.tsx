"use client";

import { useState } from "react";
import { Button } from "../Button";

/**
 * BalanceDisplay component shows USDC balance and withdraw functionality.
 * 
 * This component displays:
 * - Current USDC balance
 * - Withdraw button (enabled when balance >= $0.1)
 * - Balance formatting
 * 
 * @example
 * ```tsx
 * <BalanceDisplay />
 * ```
 */
export function BalanceDisplay() {
  const [balance, setBalance] = useState(0.00); // This will be fetched from database
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const canWithdraw = balance >= 0.1;

  const handleWithdraw = async () => {
    if (!canWithdraw) return;
    
    setIsWithdrawing(true);
    try {
      // TODO: Implement withdraw logic
      console.log("Withdrawing:", balance, "USDC");
      // This will be implemented with actual wallet integration
    } catch (error) {
      console.error("Withdraw failed:", error);
    } finally {
      setIsWithdrawing(false);
    }
  };

  return (
    <div className="bg-purple-200/20 backdrop-blur-sm rounded-lg p-2 border border-purple-300/30">
      <div className="text-center">
        <p className="text-purple-200 text-xs mb-1">USDC Balance</p>
        <p className="text-white font-bold text-sm">${balance.toFixed(2)}</p>
        <Button
          onClick={handleWithdraw}
          disabled={!canWithdraw || isWithdrawing}
          isLoading={isWithdrawing}
          className="mt-1 bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1"
        >
          {isWithdrawing ? "Withdrawing..." : "Withdraw"}
        </Button>
      </div>
    </div>
  );
} 