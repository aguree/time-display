import React, { useState, useEffect } from 'react';

import styles from './App.module.css';


const App = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let Interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(Interval);
    });

    return (
        <div className={styles.app}>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default App;
