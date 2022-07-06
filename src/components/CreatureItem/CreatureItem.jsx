function CreatureItem({ creature }) {
    //This component could have local state too!
    return (
        <>
            <li>
                {creature.name} is from {creature.origin}.
                <span>
                    {creature.origin === 'USA' ? 'USA! USA! USA!' : '...'}
                </span>
            </li>
        </>
    );
}

export default CreatureItem;
