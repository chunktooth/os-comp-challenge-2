import React, { Component } from 'react'; import './App.css';
import IdeaForm from './IdeaForm';
import IdeaContainer from './IdeaContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()};
    const ideas = [...this.state.ideas, newIdea];
    this.setState({ ideas });
  }

  deleteIdea = (id) => {
    const filteredIdea = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas: filteredIdea});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ideabox2.0</h1>
          <IdeaForm addIdea={this.addIdea} />
          <IdeaContainer 
            ideas={this.state.ideas} 
            deleteIdea={this.deleteIdea} />
        </header>
      </div>
    );
  }
}

export default App;
