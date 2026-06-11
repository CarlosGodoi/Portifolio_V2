import { useState, useEffect } from 'react';

export default function LoadingDots() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-end p-6">
      <div className="p-3 rounded-md bg-gray-200 inline-block">
        <div className="flex space-x-1">
          <div
            className={`w-2 h-2 rounded-full bg-gray-400 ${
              dots >= 1 ? 'opacity-100' : 'opacity-40'
            }`}
          ></div>
          <div
            className={`w-2 h-2 rounded-full bg-gray-400 ${
              dots >= 2 ? 'opacity-100' : 'opacity-40'
            }`}
          ></div>
          <div
            className={`w-2 h-2 rounded-full bg-gray-400 ${
              dots >= 3 ? 'opacity-100' : 'opacity-40'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
