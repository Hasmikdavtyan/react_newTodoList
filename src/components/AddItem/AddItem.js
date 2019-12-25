import React, {Component} from 'react';

import './AddItem.css';



class AddItem extends Component{

  state = {
    text: '',
  }

  onInputChange = ({target})=>{
    this.setState ({
      text:target.value
    })

    
  }


  onAddClick = ()=>{
    const  { onAddItem} = this.props;
    this.setState(({text})=>{
      onAddItem(text)
   })
  

  }

 render () {

  
  
    return (
      <div className="row add-item">
        <div className="form-group col-md-9">
          <input className="form-control"
           placeholder="Add new data"
           onChange={   this.onInputChange}
           value={this.state.text}></input>
        </div>
        <div className="form-group col-md-3">
          <button className="btn btn-info btn-lg"
          onClick={this.onAddClick}
          >
            Add Item
            </button>
        </div>
      </div>
    );
  };
 }




  
    
    



export default AddItem;