export const UPDATE_COUNTER = "UPDATE_COUNTER_VALUE";
export const updateCounterValue = (payload) => {
  return {
    type: UPDATE_COUNTER,
    payload: payload,
  };
};
