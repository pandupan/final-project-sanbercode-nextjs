'use client';

import React, { useState } from 'react';

const MoodSection = () => {
  const [currentMood, setCurrentMood] = useState('');

  const handleMoodClick = (mood : any) => {
    setCurrentMood(mood);
  };

  const getMoodMessage = () => {
    switch (currentMood) {
      case '😔':
        return "It's okay, everything will be fine";
      case '😊':
        return 'Continue to be happy';
      case '😐':
        return 'There will be a better day than today';
      default:
        return '???????';
    }
  };

  return (
    <div id='mood' className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-14 bg-white">
      <h1 className="font-bold text-4xl ">How Are You Feeling Today?</h1>

      <div className="flex justify-center gap-8">
        <button onClick={() => handleMoodClick('😔')}>
          <div className="p-10 rounded-xl border-4 border-sky-500 bg-sky-200">
            <p className="text-7xl">😔</p>
          </div>
        </button>

        <button onClick={() => handleMoodClick('😊')}>
          <div className="p-10 rounded-xl border-4 border-sky-500 bg-sky-200">
            <p className="text-7xl">😊</p>
          </div>
        </button>

        <button onClick={() => handleMoodClick('😐')}>
          <div className="p-10 rounded-xl border-4 border-sky-500 bg-sky-200">
            <p className="text-7xl">😐</p>
          </div>
        </button>
      </div>

      <h1 className="font-bold text-4xl text-black ">A Bit Mystery Box Here!! 🎁🎁 </h1>

      <div className="flex justify-center items-center h-[300px] w-[600px] rounded-xl border-4 border-sky-500 bg-sky-200">
        <p className="text-4xl text-center">{getMoodMessage()}</p>
      </div>
    </div>
  );
};

export default MoodSection;
