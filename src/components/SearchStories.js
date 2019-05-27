import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Button from "./Button";

@observer
class SearchStories extends Component {
  @observable query = "";
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  @action
  onChange(event) {
    const { value } = event.target;
    this.query = value;
  }

  @action
  onSubmit(event) {
    if (this.query) {
      console.log("query", this.query);
      this.query = "";
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.query} onChange={this.onChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

export default SearchStories;
