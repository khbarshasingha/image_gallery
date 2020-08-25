import React, { Component } from "react";

class UploadButton extends Component {
  onchange = event => {
    const files = event.target.files;
    console.log("data files", files);
  };
  render() {
    return (
      <div>
        <input
          type="file"
          onChange={e => {
            this.onchange(e);
          }}
        />
        <input type="submit" value="submit" onSubmit={this.onsubmit} />
      </div>
    );
  }
}

export default UploadButton;
