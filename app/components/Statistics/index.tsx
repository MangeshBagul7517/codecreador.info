"use client"
import React, { useEffect, useState } from 'react';

const Statistics: React.FC = () => {
  const stats = [
    { label: 'Happy Clients', value: 60, suffix: '+' },
    { label: 'Successful Projects', value: 80, suffix: '+' },
    { label: 'Years in the IT Industry', value: 7, suffix: '+' },
    { label: 'Client’s Satisfaction', value: 100, suffix: '%' }
  ];

  const [incrementedValues, setIncrementedValues] = useState<number[]>(new Array(stats.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIncrementedValues(prevValues =>
        prevValues.map((value, index) => {
          const target = stats[index].value;

          // Slow down the increment for "Years in the IT Industry"
          if (index === 2) {  // Index 2 is "Years in the IT Industry"
            if (value < target) {
                return Math.min(Number((value + 0.1).toFixed(2)), target); // Slow increment for "Years in the IT Industry"
            }
          } else {
            if (value < target) {
              return Math.min(value + 1, target); // Normal increment speed for other stats
            }
          }
          return value;
        })
      );
    }, 50); // You can adjust the interval for even slower animation speed

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="flex flex-wrap justify-center gap-12 py-16   px-4 sm:px-8 md:px-12 lg:px-8  text-white">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center text-center">
          <div className="text-5xl font-bold text-white mb-4">
            {incrementedValues[index]}{stat.suffix}
          </div>
          <div className="text-xl font-medium text-lightwhite">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
