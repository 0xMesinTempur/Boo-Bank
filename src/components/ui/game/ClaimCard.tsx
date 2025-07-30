"use client";

import { useState, useEffect } from "react";
import { Button } from "../Button";

/**
 * ClaimCard component handles the claim functionality with timer.
 * 
 * This component provides:
 * - 1-hour cooldown timer
 * - Claim button (enabled when ready)
 * - Total claims counter
 * - Status indicators
 * 
 * @example
 * ```tsx
 * <ClaimCard />
 * ```
 */
export function ClaimCard() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalClaims, setTotalClaims] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);
  const [lastClaimTime, setLastClaimTime] = useState<number | null>(null);

  const canClaim = timeRemaining === 0;
  const claimAmount = 0.01; // $0.01 per claim

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (lastClaimTime) {
        const now = Date.now();
        const timeSinceLastClaim = now - lastClaimTime;
        const cooldown = 60 * 60 * 1000; // 1 hour in milliseconds
        
        if (timeSinceLastClaim >= cooldown) {
          setTimeRemaining(0);
        } else {
          setTimeRemaining(cooldown - timeSinceLastClaim);
        }
      } else {
        setTimeRemaining(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastClaimTime]);

  // Format time remaining
  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClaim = async () => {
    if (!canClaim || isClaiming) return;
    
    setIsClaiming(true);
    try {
      // TODO: Implement claim logic with database
      console.log("Claiming:", claimAmount, "USDC");
      
      // Simulate claim
      setTotalClaims(prev => prev + 1);
      setLastClaimTime(Date.now());
      
      // TODO: Update balance in parent component
    } catch (error) {
      console.error("Claim failed:", error);
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-300/30">
      <div className="text-center space-y-3">
        {/* Next Claim Header */}
        <h3 className="text-white font-semibold text-base">Next Claim</h3>
        
        {/* Status */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-green-400 font-bold text-sm">
            {canClaim ? "Ready to Claim!" : "Waiting..."}
          </span>
          {canClaim && <span className="text-xl">🎉</span>}
        </div>

        {/* Timer Display */}
        {!canClaim && (
          <div className="text-blue-200 text-xs">
            Time remaining: {formatTime(timeRemaining)}
          </div>
        )}

        {/* Claim Button */}
        <Button
          onClick={handleClaim}
          disabled={!canClaim || isClaiming}
          isLoading={isClaiming}
          className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-bold py-2 text-sm flex items-center justify-center space-x-2"
        >
          <span>💰</span>
          <span>{isClaiming ? "Claiming..." : `Claim $${claimAmount.toFixed(2)} USDC`}</span>
        </Button>

        {/* Total Claims */}
        <div className="text-blue-200 text-xs">
          Total Claims: {totalClaims}
        </div>
      </div>
    </div>
  );
} 