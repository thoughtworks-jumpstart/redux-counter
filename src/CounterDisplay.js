import React from "react";
import { connect } from "react-redux";

class CounterDisplay extends React.Component {
  render() {
    const { counterValue } = this.props;
    return <div>CounterValue is: {counterValue}</div>;
  }
}

const mapStateToProp = (state) => {
  const value = state.value;

  return {
    counterValue: value,
  };
};

export default connect(mapStateToProp)(CounterDisplay);
