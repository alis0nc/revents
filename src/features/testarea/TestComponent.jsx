import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./TestActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={decrementCounter} color="red" content="-" />
        <Button onClick={incrementCounter} color="green" content="+" />
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
