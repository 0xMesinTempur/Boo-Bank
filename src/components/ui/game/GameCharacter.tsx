"use client";

import { useState, useEffect } from "react";

/**
 * GameCharacter component displays the main ghost character with status.
 * 
 * This component shows the friendly ghost character with:
 * - Animated status bubble
 * - Character appearance
 * - Status indicators
 * 
 * @example
 * ```tsx
 * <GameCharacter />
 * ```
 */
export function GameCharacter() {
  const [isReady, setIsReady] = useState(true);

  // Simple animation for the status bubble
  useEffect(() => {
    const interval = setInterval(() => {
      setIsReady(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mb-3">
      {/* Status Bubble */}
      <div className={`mb-2 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 font-semibold flex items-center space-x-1 transition-all duration-300 ${isReady ? 'scale-110' : 'scale-100'}`}>
        <span className="text-sm">💰</span>
        <span className="text-xs">{isReady ? "Ready!" : "Waiting..."}</span>
      </div>

      {/* Ghost Character */}
      <div className="relative">
        {/* Main Ghost Body */}
        <div className="w-32 h-40 bg-white rounded-full relative">
          {/* Eyes */}
          <div className="absolute top-7 left-6 w-4 h-4 bg-black rounded-full"></div>
          <div className="absolute top-7 right-6 w-4 h-4 bg-black rounded-full"></div>
          
          {/* Smile */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-5 border-b-3 border-black rounded-full"></div>
          
          {/* Blush */}
          <div className="absolute top-10 left-4 w-3 h-3 bg-pink-300 rounded-full"></div>
          <div className="absolute top-10 right-4 w-3 h-3 bg-pink-300 rounded-full"></div>
        </div>

        {/* Bottom Circles */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
} 