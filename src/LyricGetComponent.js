import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const divStyle = {
    width: '90%',
    margin: '20px auto',
};

class LyricGetComponent extends React.Component {
    handleUrlChange(e) {
        const url = e.target.value;

        console.log('url in text field');

        if (!url) {
            return;
        }

        this.props.setUrl(url);
    }
    handleButtonClick(e) {
        this.props.doRequest();
    }

    render() {
        return (
            <div style={divStyle}>
            <TextField
                value={this.props.url}
                name="url"
                hintText="Paste URL HERE..."
                fullWidth
                onChange={(e) => this.handleUrlChange(e)}
            >
            </TextField>
            <RaisedButton label="Get" fullWidth onClick={(e) => this.handleButtonClick(e)}/>
            <Divider />
            <TextField name="result" multiLine fullWidth value={this.props.result} />
            </div>
        );
    }
}

export default LyricGetComponent;
