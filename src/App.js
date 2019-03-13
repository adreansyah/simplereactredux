import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { activateGeod, closeGeod, } from './actions';
import Coba from './components/Coba';

class App extends Component {  

  render() {        
    return (
      <div className="App">
        <br/>
        <h1>{this.props.geod.title || 'Hello World!'}</h1>
        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateGeod({ title: 'I am a geo dude!' })
            }
          >
            Click Me!
          </button>
        )}
        <Coba/>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => {
  return ({
    geod: state.geod,
  })
};

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
