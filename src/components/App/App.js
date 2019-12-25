import React, { Component } from 'react';
import Header from '../Header';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';

export default class App extends Component {
  

  state = {
    todoData: [
      this.createNewItem(1, 'Կարդալ React'),
      this.createNewItem(2, 'Թեյ խմել'),
      this.createNewItem(3, 'Դաս անել '),
      this.createNewItem(4, 'Հաց ուտել'),
      
    ]
  }
   
  createNewItem (id, title){
    return  {
      id,
    title,
    important:false,
    isDone:false,

    }
  };



   atr ( id,  key , value ) {
     
  this.setState(({todoData},  )=>{

      const idx= todoData.findIndex((obj,  )=>obj.id===id)
     console.log(idx)
    const obj = {
      ...todoData[idx],
   [ key]: `!${value}`,
    };
    
    

    return {
     todoData:[
          ...todoData.slice(0, idx),
          obj,
          ...todoData.slice(idx+1),
       
      ]
    }
})
}


onImportant =(id)=>{

  this.atr( id, 'important', 'important' )
  
}

onlabelClick =(id)=> {
  this.atr( id, 'isDone', 'isDone' )
}
  onDeleteItem=(id)=>{

    this.setState(({todoData})=>{
      const idx=todoData.findIndex((obj)=>obj.id===id);

      return{
      todoData:[
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ]
    }
    });
    
  }

  onAddItem=(text)=>{

   const title = text.trim();
   if(!title) return;

    this.setState(({todoData})=>{

      let id = 1;

      if (todoData[todoData.length-1]){
        id= todoData[todoData.length-1].id+1;
      }
      const obj={
       id,         //id:todoData[todoData.length-1].id+1, 
      title,   //title:text 
      important:  false,
      isDone:    false,   
    };
    return{
      todoData:[...todoData,obj]
    }
      
    });
    
  };
  




  render() {
    return (
      <div className="container">
        <Header />
        <Filter />
        <List todoList={this.state.todoData}
        deleteItem={this.onDeleteItem} 
        onlabelClick = {this.onlabelClick}
        onImportant = {this.onImportant}
        />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
}
