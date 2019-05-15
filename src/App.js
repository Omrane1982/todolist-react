import React, {Component} from 'react';
import TodoItems from './Component/TodoItems/TodoItems';
import AddItem from './Component/AddItem/AddItem';

class App extends Component {
  state ={
    items:[
      {id:1,name:"hamza",age:23},
      {id:2,name:"Yassmine",age:24},
      {id:3,name:"Omrane",age:25}

    ]
  }
  deleteItem =(id) => {
    console.log(id)
    let items=this.state.items;
    let i=items.findIndex(item=>item.id===id)
    items.splice(i,1)
    this.setState({items:items})
  }     
  AddItem=(item)=>{
    item.id=Math.random()
  
    let items= this.state.items;
    items.push(item)
    this.setState({items})
    console.log(this.setState({items}))

  }                  
  render(){


  return (
    <div className="App container">
    <h1 className="text-center">TodoList</h1>
    <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
    <AddItem AddItem={this.AddItem}/>
      
    </div>
  );
}
}

export default App;

