//need useState since we moved states from App.jsx
import { useState } from 'react';
import axios from 'axios';

function CreatureForm({ fetchCreatures }) {
    //moved here from App.jsx
    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    //moved here from App.jsx => Function to add a new creature to the database
    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/creature',
            data: {
                name: newCreatureName,
                origin: newCreatureOrigin,
            },
        })
            .then((response) => {
                console.log('Response:', response);
                fetchCreatures();
                //Clear Inputs & State
                clearInputs();
            })
            .catch(function (error) {
                console.log('Error on add:', error);
            });
    };

    const clearInputs = () => {
        setNewCreatureName('');
        setNewCreatureOrigin('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    onChange={(event) => setNewCreatureName(event.target.value)}
                    value={newCreatureName}
                />
                <label>Origin:</label>
                <input
                    onChange={(event) =>
                        setNewCreatureOrigin(event.target.value)
                    }
                    value={newCreatureOrigin}
                />
                <button type="submit">Add New Creature</button>
            </form>
            ;
        </>
    );
}

export default CreatureForm;
