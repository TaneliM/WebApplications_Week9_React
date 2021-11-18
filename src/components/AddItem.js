import { useState } from "react"

function AddItem({onAdd}) {

    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        
        onAdd({text: text})

        setText("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea
                placeholder="New item"
                onChange={(event) => setText(event.target.value)}
                value={text}></textarea>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    )
}

export default AddItem