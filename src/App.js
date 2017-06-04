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
      slideIndex: 0,
      url: '',
      result: ''
    };
  }

  handleTabChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  setUrl(url) {
    this.setState({
      slideIndex: 0,
      url: url,
    })
  };

  async doRequest() {
    this.setState({
        result: ''
    });

    const url = 'https://franklai-lyric-get.appspot.com/app?url=' + encodeURIComponent(this.state.url);
    let json;
    try {
        const response = await fetch(url);
        json = await response.json();
    } catch(e) {
        console.log('we got exception', e);
    }

    this.setState({
        result: json.lyric
    });
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <Tabs
            onChange={this.handleTabChange.bind(this)}
            value={this.state.slideIndex}
          >
            <Tab label="Lyric Get" value={0} />
            <Tab label="Examples" value={1} />

          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              <LyricGetComponent
                url={this.state.url} result={this.state.result}
                setUrl={this.setUrl.bind(this)}
                doRequest={this.doRequest.bind(this)}
              />
            </div>
            <div style={styles.slide}>
              <ExamplesComponent
                setUrl={this.setUrl.bind(this)}
                doRequest={this.doRequest.bind(this)}
              />
            </div>
          </SwipeableViews>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
