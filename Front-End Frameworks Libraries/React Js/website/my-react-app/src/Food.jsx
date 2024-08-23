function Food(){
    const Food1 = "Pizza"
    const Food2 = "Burger"
    return(
        <ul>
            <li>Biryani</li>
            <li>{Food1}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food