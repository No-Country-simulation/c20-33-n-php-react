import React from "react";
import 'tailwindcss/tailwind.css';

export const ProgressScrubber = ({ value }) => {
  console.log(`Rendering ProgressScrubber with value: ${value}`);
  return (
    <div className="w-full h-2 bg-neutral-2 rounded-full overflow-hidden">
      <div
        className="h-2 bg-primary-6 rounded-full"
        style={{ width: `${value * 100}%` }}
        
      />
    </div>
    
  );
};

