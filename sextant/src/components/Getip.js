import React, { useState, useEffect } from 'react';
import Exhibit from './Exhibit';

export default function Getip({ type }) {
    const [ip_address, change_ip] = useState('');

    useEffect(() => {
        const get_ip = async () => {
            const url = `https://api${type}.ipify.org/?format=json`;
            const response = await fetch(url);
            const data = await response.json();
            change_ip(data.ip);
        };
        get_ip();
    }, [type]);

    return (
        <div>
            <Exhibit title={`Public IPv${type} Adress`} paragraph={ip_address ? `${ip_address}` : 'Loading...'} />
        </div>
    );
}