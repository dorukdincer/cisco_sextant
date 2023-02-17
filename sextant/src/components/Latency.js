import React, { useState, useEffect } from 'react';
import Exhibit from './Exhibit';

export default function Latency() {
    const [latency, set_latency] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:55455');

        ws.onmessage = (event) => {
            set_latency(Date.now() - event.data);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <Exhibit title="Latency" paragraph={`${latency}ms`}/>
        </div>
    );
}