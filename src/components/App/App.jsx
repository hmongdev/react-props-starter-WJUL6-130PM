import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import CreatureList from '../CreatureList/CreatureList';
import CreatureForm from '../CreatureForm/CreatureForm';

import './App.css';

function App() {
    const [creatureList, setCreatureList] = useState([]);

    // Function to get the creatures from the server/database
    const fetchCreatures = () => {
        axios({
            method: 'GET',
            url: '/creature',
        })
            .then((response) => {
                console.log('Entire response:', response);
                // The actual array comes from the data attribute on the response
                console.log('Just the data:', response.data);

                // Set data into component state
                setCreatureList(response.data);
            })
            .catch(function (error) {
                console.log('Error on get:', error);
            });
    };

    // Call function so it runs once on component load
    // Similar to jQuery's document ready
    useEffect(() => {
        fetchCreatures();
    }, []);

    return (
        <div className="App">
            {/* parent is sharing taco and title with Header */}
            <Header taco="TACO!" title="Hello World!" />
            <h2>Add Creature</h2>
            {/* Create new form */}
            <CreatureForm fetchCreatures={fetchCreatures} />
            {/* Create list */}
            <CreatureList list={creatureList} />
        </div>
    );
}

export default App;
