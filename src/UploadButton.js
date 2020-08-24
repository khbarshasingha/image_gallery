import React, { Component } from "react";

class UploadButton extends Component {
  render() {
    return (
      <div>
        <input type="file" onChange={onchange()} />
        <input type="submit" value="submit" />
      </div>
    );
  }
}

export default UploadButton;
