import MyList from "./MyList.js"
import { useState } from "react"
import AddItem from "./AddItem.js";

const MyContainer = () => {    
        const [items, setItems] = useState([
            {id: "1", text: "item 1", clicked: false},
            {id: "2", text: "item 2", clicked: false}
        ]);

    const addItem = (item) => {
        const id = Math.floor(Math.random() * 10000000 + 1000)
        const newItem = {id, ...item}
        setItems([...items, newItem])
    }

    const updateItem = (id) => {
        items.forEach(item => {
            if (item.id == id) {
                item.clicked = true;
            } else {
                item.clicked = false;
            }
        });
        setItems([...items])
    }

        return (
            <div>
                <MyList 
                    updateItem={updateItem}
                    header="List component"
                    items={items}
                />
                <AddItem onAdd={addItem}/>
            </div>
        )
    }


export default MyContainer