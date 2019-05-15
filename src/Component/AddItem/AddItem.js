import React, {Component} from 'react';
class AddItem extends Component {
    state ={
        name:'',
        age:''
        
    }
    HadndleChange=(e)=> {

        this.setState({
            [e.target.id]:e.target.value

        })
        
   
    }
    HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        if (e.target.name.value===''){
            return false
        }
        else{
    this.props.AddItem(this.state)
    this.setState({
        name:'',
        age:''

    })
    }
}
    render(){
        return(
            <div>
           <form onSubmit={this.HandleSubmit}>
            <input type="text" placeholder="Enter your Name" id="name" onChange={this.HadndleChange} value={this.state.name}></input>
            <input type="number" placeholder="Enter your Age" id="age"onChange={this.HadndleChange}value={this.state.age}></input>
            <input type="submit" value="Add"/>

           </form>
            
            </div>
            
        )
    }

}
export default AddItem;