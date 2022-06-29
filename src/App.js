import { Component } from 'react';
import Cardlist from './components/card-list/card-list';
import Searchbox from './components/search-list/search';
import './App.css';
import React from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users };
          },
        )
      );
  }

  render() {
    const filteredMonstered = this.state.monster.filter((monsters) => {
      return (
        monsters.name.toLowerCase().includes(this.state.searchString)
      );
    });

    const onSearchChange = (event) => {
      const searchString = event.target.value.toLowerCase();
      this.setState(() => {
        return (
          { searchString }
        );
      });

    }


    return (
      <div className="App">

        <Searchbox className='monsters-search-box' placeholder="search Monster" onChangeHandler={onSearchChange} />

        <Cardlist monsters={filteredMonstered} />
      </div>
    );
  }
}

export default App;
