import React from 'react';
import './App.css';
import Todolist from './todoitem';
import Header from "./header"
import Footer from "./footer"
import Additem from './additem';

class App extends React.Component {

    state = {
        title: "",
        description: "",
        deadline: "",
        TodoItems: [
            {
                id: 1,
                title: "React",
                description: "Description",
                deadline: "Deadline",
            },
            {
                id: 2,
                title: "JavaScript",
                description: "Description",
                deadline: "Deadline",
            }
        ]

    }
    render() {

        var todoItemJSX = this.state.TodoItems.map((item) =>
            <Todolist title={item.title} description={item.description} deadline={item.deadline} />
        )

        return (
            <div>
                  <Header/>
            <div className="App">
                 
                <div className="todolist">
                  
                    {todoItemJSX}
                </div>

                   <Additem/>     

            </div>
            <Footer/>
            </div>
        );
    }
}

export default App;
