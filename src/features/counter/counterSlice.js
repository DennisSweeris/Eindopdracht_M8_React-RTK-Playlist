// import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  // Example state
  // state = {
  //   slice1: {
  //     data: [] << access this see blow
  //   },
  // }
  // const data = useSelector(state => state.slice1.data),

  reducers: {
    increment: state => {
      state.value += 1;
      console.log(current(state));
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      // console.log(state.value);
      // console.log(action.payload);
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default counterSlice.reducer;
