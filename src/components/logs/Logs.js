import React, { useState, useEffect } from 'react'
import LogItem from './LogItem';

function Logs() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])


    if (loading) {
        return <h5>Loading...</h5>
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className='center'>No logs to show...</p>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}

export default Logs
