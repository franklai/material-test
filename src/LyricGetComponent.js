import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const divStyle = {
    width: '90%',
    margin: '20px auto',
};

class LyricGetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '',
            url: 'http://www.kasi-time.com/item-262.html'
        };
    }

    handleUrlChange(e) {
        const url = e.target.value;

        if (!url) {
            return;
        }

        this.setState({
            url: url
        });
    }

    async handleButtonClick() {
        const url = 'https://franklai-lyric-get.appspot.com/app?url=' + encodeURIComponent(this.state.url);
        let json;
        try {
            const response = await fetch(url);
            json = await response.json();
        } catch(e) {
            console.log('we got exception', e);
        }

        console.log('json:', json);

        this.setState({
            result: json.lyric
        });
    }

    render() {
        return (
            <div style={divStyle}>
            <TextField name="url" hintText="Paste URL HERE..." fullWidth onChange={(e) => this.handleUrlChange(e)}></TextField>
            <RaisedButton label="Get" fullWidth onClick={(e) => this.handleButtonClick(e)}/>
            <Divider />
            <TextField name="result" multiLine fullWidth value={this.state.result} />
            </div>
        );
    }
}

export default LyricGetComponent;
