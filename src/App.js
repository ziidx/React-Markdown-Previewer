import React from "react";
import placeholder from './placeholder';
import {editorStyle, sectHeading, previewStyle} from './styles';
let marked = require('marked');


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {

    return (
      <div>
        <div id="editWrapper">
          <h2 id="editheader" style={sectHeading}>Editor</h2>
          <textarea id="editor" type="text" value={this.state.value} style={editorStyle} onChange={this.handleChange}></textarea>
        </div>

        <div id="prevWrapper">
          <h3 id="prevHeader" style={sectHeading}>Previewer</h3>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.value)}} style={previewStyle}/>
        </div>
      </div>
    );
  }
}