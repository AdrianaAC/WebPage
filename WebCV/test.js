import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        state = {
            task: "",
            taskList: []

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTaskClick = this.handleTaskClick.bind(this);
    }
    handleChange(e) {
        this.setState({task:e.target.value});
    }
    handleClick () {
        let _taskList = this.state.taskList;
        if (this.state.task !== "") {
            _taskList.push(this.state.task)
            this.setState({
                task:"",
                taskList: _taskList,
                tasksCompleted: []
            })
        }
    }

    handleTaskClick(i) {
        let _taskList = this.state.taskList;
        let _tasksCompleted = this.state.tasksCompleted;

        let found = "";

        if(_tasksCompleted.length > 0){
          found=_tasksCompleted.find((ele, index) => {
              if(ele == i){
                  return index;
              } else {
                  return "";
                  }
              });
            }

        if(found !=""){
            _tasksCompleted.splice(found, 1)
        } else {
            _tasksCompleted.push(found)        
         }
         this.setState = ({tasksCompleted: _tasksCompleted})
    }
    returnClass(i) {
        let _tasksCompleted = this.state.tasksCompleted;
        let found = "";

         if(_tasksCompleted.length > 0){
          found=_tasksCompleted.find((ele, index) => {
              if(ele == i){
                  return index;
              } else {
                  return "";
                  }
              });
            if(found!= "") {
                return "is-done";
            }else{
                return "";
            }
         }
         return "";

    }

    render() {
        return (
            <>
                <div></div>