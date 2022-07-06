function Header(props) {
    console.log(props);
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.taco}</p>
        </>
    );
}

export default Header;
