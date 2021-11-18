const MyList = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            {props.items.map((listItem) => (
                <li
                className={listItem.clicked ? "clicked": ""}
                key={listItem.id}
                onClick={() => props.updateItem(listItem.id)}>
                    {listItem.text}
                </li>
            ))}
        </div>
    )
}

export default MyList