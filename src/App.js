import React, { Component } from 'react';
import './App.css';
import {indigo500, amber500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LyricGetComponent from './LyricGetComponent';
import ExamplesComponent from './ExamplesComponent';

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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    accent1Color: amber500,
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
    };
  }

  handleChange = (value) => {
    console.log('no way to shine', value);
    this.setState({
      slideIndex: value,
    });
  };

  setUrl = (url) => {
    console.log('in setUrl:', url);

    this.setState({
      slideIndex: 0,
    })
  };

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Lyric Get" value={0} />
            <Tab label="Examples" value={1} />
          {/*  <Tab label="Search" value={2} /> */}

          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div><LyricGetComponent/></div>
            <div style={styles.slide}><ExamplesComponent setUrl={this.setUrl}/></div>
            <div style={styles.slide}>3</div>
          </SwipeableViews>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
