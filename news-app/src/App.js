import React, { Component } from 'react';
import Welcome from './components/Welcome/index';
import SearchBar from './components/SearchBar/index';
import Category from './components/Category/index';
import NewsList from './components/NewsList/index';
import Footer from './components/Footer/index';
// import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchTerm: '',
      savedNews: [],
      country: 'en',
      initial: true
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(){
    this.setState({
      initial: false
    });
  }

  render() {
    return (
      this.state.initial ? 
      <div className="App"> 
        <Welcome changeState={this.changeState} country={this.state.country}/>
      </div>
      :
      <div className="App">
        <SearchBar country={this.state.country}/>
          <Category country={this.state.country}/>
          <NewsList 
            conditions={this.state.searchTerm}
            />
          {/* <Menu savedNews={this.state.savedNews} /> */}
        <Footer/>   
      </div>
    );
  }
}

export default App;
