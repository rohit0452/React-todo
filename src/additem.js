import React from 'react'
import Todolist from './todoitem'
class Additem extends React.Component{
    state=(
        {
         title : "",
         description : "",
         deadline : "",
        },
         { 
        additems :[]
    })
    
    render(){
     
        return(
            <div className="addinput">
            <input className="inputbox" type="text" placeholder="Enter Title" onChange={(e)=> this.titlevalueinput(e)} ></input>
             <br></br>
            <input className="inputbox" type="text" placeholder="Enter Description" onChange={(f)=> this.descriptionvalueinput(f)}></input>
            <br></br>
            <input className="inputbox" type="text" placeholder="Enter Deadline" onChange={(g)=> this.descriptionvalueinput(g)}></input>
            <br></br>
            <button id="addtaskbtn" onClick={this.add()}>Add New Task</button>
        </div>

        )

    }

    titlevalueinput(e){
        this.setState({
            title : e.target.value
        })
    }
   
    descriptionvalueinput(f){
        this.setState({
            description : f.target.value
        })
    }

    deadlinevalueinput(g){
        this.setState({
            deadline : g.target.value
        })
    }

    add(){
        var NewItem = this.state.todoitem.push(item => <Todolist />)
        this.additems = NewItem;

    }
  
} 
export default Additem;