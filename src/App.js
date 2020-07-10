import React from 'react';
import './App.css';
import Todolist from './todoitem';
import Header from "./header"
import Footer from "./footer"

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

                <div className="addinput">
                    <input className="inputbox" type="text" placeholder="Enter Title"></input>
                     <br></br>
                    <input className="inputbox" type="text" placeholder="Enter Description"></input>
                    <br></br>
                    <input className="inputbox" type="text" placeholder="Enter Deadline"></input>
                    <br></br>
                    <button id="addtaskbtn">Add New Task</button>
                </div>

            </div>
            <Footer/>
            </div>
        );
    }
}

export default App;
