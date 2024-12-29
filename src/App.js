import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { CardList } from './components/CardList';
import { SearchBox } from './components/Search';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response=> response.json())
    .then(users => this.setState({monsters : users}))
  }
  render(){
    const {monsters , searchField} = this.state;
    return (<div className="App">
    <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='Search Monsters'/>
      <CardList monsters={this.state.monsters}/>
    </div>)
  }
}

export default App;
