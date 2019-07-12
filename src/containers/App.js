import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from '../components/Header';

import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

class App extends Component {
  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){
    const {searchField, onSearchChange, robots, isPending} = this.props;//added from redux
    const filteredBots = robots.filter((bot) => {
      return bot.name.toLowerCase().includes(searchField.toLowerCase());
    });

      return (
        <div className = 'App'>
          <Header/>
          <SearchBox onSearchChange = {onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              {
                isPending ? <h1>'LOADING...PLEASE WAIT'</h1> :
                <ErrorBoundary>
                  <CardList bots = {filteredBots}/>
                </ErrorBoundary>
              }
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }

}

export default connector(App);
