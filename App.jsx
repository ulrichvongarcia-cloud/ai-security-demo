import React, { useState, useEffect } from 'react';

const FinishRunningSystem = () => {
    const [raceData, setRaceData] = useState([]);
    const [checkpoints, setCheckpoints] = useState([]);
    const [completionScore, setCompletionScore] = useState(0);

    useEffect(() => {
        // Simulate fetching race data and checkpoints
        const fetchRaceData = async () => {
            const fetchedRaceData = await simulateFetchRaceData();
            setRaceData(fetchedRaceData);
            setCheckpoints(calculateCheckpoints(fetchedRaceData));
            setCompletionScore(calculateCompletionScore(fetchedRaceData));
        };

        fetchRaceData();
    }, []);

    const simulateFetchRaceData = async () => {
        // Replace this with real data fetching logic
        return [
            { id: 1, name: 'Race 1', completed: true },
            { id: 2, name: 'Race 2', completed: false },
        ];
    };

    const calculateCheckpoints = (data) => {
        // Logic to calculate checkpoints based on race data
        return data.map(race => ({ raceId: race.id, reached: race.completed }));
    };

    const calculateCompletionScore = (data) => {
        // Scoring logic based on completed races
        const completedCount = data.filter(race => race.completed).length;
        return completedCount * 10; // Example scoring mechanism
    };

    return (
        <div>
            <h1>Finish Running System</h1>
            <h2>Completion Score: {completionScore}</h2>
            <h3>Checkpoints:</h3>
            <ul>
                {checkpoints.map(cp => (
                    <li key={cp.raceId}>Race ID: {cp.raceId}, Reached: {cp.reached ? 'Yes' : 'No'}</li>
                ))}
            </ul>
        </div>
    );
};

export default FinishRunningSystem;
