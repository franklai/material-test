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
            result: ''
        };
    }

    async handleUrl() {
        console.log('cc');
        // https://franklai-lyric-get.appspot.com/app?url=http%3A%2F%2Fwww.utamap.com%2Fshowkasi.php%3Fsurl%3D70380
        const url = 'https://franklai-lyric-get.appspot.com/app?url=http%3A%2F%2Fwww.utamap.com%2Fshowkasi.php%3Fsurl%3D70380';
        let json;
        try {
            const response = await fetch(url);
            json = await response.json();
        } catch(e) {
            console.log('we got exception', e);
        }

        console.log('json:', json);

        this.setState({
            result: 'cc'
        });
    }

    render() {
        return (
            <div style={divStyle}>
            <TextField name="url" hintText="Paste URL HERE..." fullWidth ></TextField>
            <RaisedButton label="Get" fullWidth onClick={(e) => this.handleUrl(e)}/>
            <Divider />
            <TextField name="result" multiLine fullWidth value={this.state.result} />
            </div>
        );
    }
}

export default LyricGetComponent;