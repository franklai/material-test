import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LyricGetComponent from './LyricGetComponent';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    console.log('no way to shine');
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
        <MuiThemeProvider>
          <div>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Lyric Get" value={0} />
            <Tab label="Examples" value={1} />
            <Tab label="Search" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div><LyricGetComponent/></div>
            <div style={styles.slide}>2</div>
            <div style={styles.slide}>3</div>
          </SwipeableViews>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
