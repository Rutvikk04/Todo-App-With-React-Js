import React from "react";

import './css/todos.css';
import Navbar from "./navbar";



const Todo = () => {
    const [InputData, SetInputData] = React.useState("");//to get input data
    const [items, setItems] = React.useState([]);  //to show data on our page

    //add item on Add button Click
    const addItem = () => {
        if (!InputData) { alert("Todo input is Empty..Input some task to Add in Your Todo list") }
        else {
            const newData = {
                id: new Date().getTime().toString(),
                task: InputData
            }
            setItems([...items, newData])
        }
    }
    //delete perticular task
    const deleteItem = (index) => {
        const updateItem = items.filter((elem) => {
            return elem.id !== index;
        })
        setItems(updateItem)
    }

    //removeAll
    const RemoveAll = () => {
        setItems([])
    }

    return (
        <>
        <Navbar />
            <section id="light-mode">
         
                <h1 className="Todo_head">Todos App</h1><br></br>
                <div className="Main_div">
                    <p className="Date">Date:{new Date().toLocaleDateString()}</p>
                    <input className="Input" type="text" placeholder="Enter YOur ToDo Here" value={InputData} onChange={(event) => { SetInputData(event.target.value) }} />

                    <button className="Add_todo" onClick={addItem} >Add Todo</button>

                    <div id="todos">
                        {items.length === 0 ? <><h1 className="No_todo_text">No Todos To Display , Please Add :)</h1></> :
                            items.map((elem, index) => {
                                return (
                                    <><h3 className="index">{index + 1})</h3>
                                        <h1 className="Addedtodo">{elem.task}</h1>
                                        <button className="remove" onClick={() => deleteItem(elem.id)}>remove</button>
                                        <br></br>
                                    </>
                                )
                            })}
                    </div>
                    <button className="remove_all" onClick={() => RemoveAll()}>Clear Tasks</button>
                </div>
                <p id="copyrigt_msg">
                    Copyright &copy;TodoApp by Rutvik
                </p>
            </section>
        </>
    )
}
export default Todo