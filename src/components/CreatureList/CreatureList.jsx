import CreatureItem from '../CreatureItem/CreatureItem';

//send in the prop called list from App.jsx
function CreatureList({ list }) {
    return (
        <>
            <h2>All Creatures</h2>
            <ul>
                //wherever you map, that's where you need id
                {list.map((creature) => (
                    <CreatureItem key={creature.id} creature={creature} />
                ))}
            </ul>
        </>
    );
}

export default CreatureList;
