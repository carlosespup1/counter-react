import React, { useState, useEffect } from "react";
import { AiFillClockCircle } from 'react-icons/ai'

const SecondCounter = () => {
    let [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds++);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return(
        <div className="counter">
            <div className="blocks">
                <AiFillClockCircle className="clock-icon"/>
            </div>
            <div className="blocks">
                <span>0</span>
            </div>
            <div className="blocks">
                <span>0</span>
            </div>
            <div className="blocks">
                <span>{seconds}</span>
            </div>
        </div>
    );
}

export default SecondCounter;