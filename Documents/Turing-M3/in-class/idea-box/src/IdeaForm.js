import React, { Component } from 'react';

class IdeaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			desc: ''
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addIdea(this.state);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
	      <input 
	        type="text"
	        placeholder="title"
	        name="title"
	        value={this.state.title}
	        onChange={this.handleChange} />
	      <input 
	        type="text"
	        placeholder="description"
	        name="desc"
	        value={this.state.desc}
	        onChange={this.handleChange} />
	      <button type="submit">Submit</button>
	    </form>
    )
	}
}

export default IdeaForm;