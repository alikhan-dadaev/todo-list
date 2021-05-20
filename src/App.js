import React, {useState} from 'react';
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";

function App(props) {
    const [todos, setTodos] = useState([
        {
            text: "Купить бананы",
            favorite: false,
        },
        {
            text: "Продать квартиру",
            favorite: false,
        },
        {
            text: "Пройти курс JavaScript",
            favorite: false,
        }
    ])

    const [text, setText] = useState("")

    const deleteTodo = (indexOfRemovingItem) => {
        const filtered = todos.filter((todo, index) => {
           if (index === indexOfRemovingItem) {
               return false;
           }

           return true;
        } )
        setTodos(filtered)
    }
    const makeFavorite = (i) => {
        const newTodos = todos.map((item, index) => {
            if(i===index) {
                return {
                    ...item,
                    favorite: !item.favorite
                };
            }

            return item;
        });
        setTodos(newTodos)
    };

    const addTodo = () => {
        setTodos([
            {
                text: text,
                favorite: false
            },
            ...todos
            ]);

            setText("");
    }
    return (
        <div className="app">
            <Header />
            <Form text ={text} setText = {setText} addTodo={addTodo} />
            <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo} />

        </div>
    );
}

export default App;