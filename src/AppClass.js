import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0
  }
  componentDidMount(){
    document.title = `Total count: ${this.state.count}`
  }
  componentDidUpdate(){
    document.title = `Total count: ${this.state.count}`
  }
  handelState = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        Count: {count}
        <hr/>
        <button onClick={() => this.handelState()}>handle Count</button>
        <button onClick={() => this.setState({count: count+1})}>Inc Count</button>
        <button onClick={() => this.setState({count: count-1})}>Dec Count</button>
      </div>
    );
  }
}

export default App;
