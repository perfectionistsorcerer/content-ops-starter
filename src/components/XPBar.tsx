// XPBar.tsx - a simple XP progress bar component
import React from 'react';

interface XPBarProps {
  current: number;
  needed: number;
  level: number;
}

const XPBar: React.FC<XPBarProps> = ({ current, needed, level }) => {
  const percent = Math.min(100, (current / needed) * 100);

  return (
    <div className="p-4 bg-gray-900 rounded-2xl shadow-lg text-white">
      <h2 className="text-xl font-bold mb-2">Level {level}</h2>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-green-400 h-4 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="mt-1 text-sm">{current} XP / {needed} XP</p>
    </div>
  );
};

export default XPBar;
