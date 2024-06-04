import React, { useEffect, useState } from "react";

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const deadlineDate = new Date(deadline);
      const diff = deadlineDate - now;

      if (diff <= 0) {
        const daysDiff = Math.floor(
          (deadlineDate - new Date(now.setHours(0, 0, 0, 0))) /
            (1000 * 60 * 60 * 24)
        );

        if (daysDiff === 0) {
          setStatus("Today is the deadline");
        } else if (daysDiff === -1) {
          setStatus("Tomorrow is the deadline");
        } else {
          setStatus("Deadline Passed");
        }
        return;
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className=" m-6">
      {status ? (
        <p>{status}</p>
      ) : (
        <p className="text-4xl font-bold text-red-500">{timeLeft}</p>
      )}
    </div>
  );
};

export default CountdownTimer;
