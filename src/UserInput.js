import React, { Component } from "react";

class UserInput extends Component {
  state = {
    names: "",
  };

  updateName = (events) => this.state({ names: events.target.value });
  handleSubmit = (events) => {
    events.preventDefault();
    this.props.addName(this.state.names);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.names}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
