import React from "react";
import { connect } from "react-redux";
import { updateCounterValue as updateCounterValueFromAction } from "./actions/counter.action";

function CounterButton({ counterValue, updateCounterValue }) {
  return (
    <div>
      <button onClick={() => updateCounterValue(counterValue + 1)}>+1</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.value,
  };
};

const mapDispatchToProps = {
  updateCounterValue: updateCounterValueFromAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
