import React from 'react';

class AddPlayerForm extends React.Component{


constructor(props){
	super(props);
	this.state = {
		name: ""
	}
	this.onNameChange = this.onNameChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
}

onNameChange(event){
	this.setState({
      name: event.target.value
	});
}

onSubmit(event){
event.preventDefault();

this.props.onAdd(this.state.name);

this.setState({
	name: ""
});
}



render(){
return(
  <div className="formContainer">
     <form onSubmit={this.onSubmit} className="addPlayerForm">
        <input type="text" value={this.state.name} onChange={this.onNameChange} />
     </form>
     <div className="addPlayerBtn">
       <button> Add Player </button>
     </div>
  </div>

	);

}


}

export default AddPlayerForm;
