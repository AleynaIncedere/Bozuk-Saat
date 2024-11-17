import { useState, useEffect } from 'react';

export default function Clock(props) {
  const [time, setTime] = useState(getTime);

  
  function getTime() {
    return new Date();
  }


  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTime(getTime()); 
    }, 1000); 

    
    return () => clearInterval(intervalId);
  }, []); 
  const dayName = time.toLocaleString([], { weekday: 'long' });
  const dayNumber = time.getDate();
  const month = time.toLocaleString([], { month: 'long' });
  const year = time.getFullYear();
  const clockTime = time.toLocaleString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
  });

  return (
    <div className="Clock">
      <button
        className="close-button"
        name="Clock"
        onClick={props.toggleClock}
      ></button>
      <div className="date-info">
        <p>{dayNumber} Mart</p>
        <p>{dayName}</p>
      </div>
      <div className="time-info">{clockTime}</div>
    </div>
  );
}
