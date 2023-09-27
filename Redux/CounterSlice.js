"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCount = exports.incrementByAmount = exports.decrement = exports.increment = exports.counterSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Define the initial state using that type
// const initialState: CounterState = {
//     value: 10
// }
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: 'counterslice',
    initialState: {
        CounterValue: 0,
        FirstName: ""
    },
    reducers: {
        increment: function (state) {
            state.CounterValue += 1;
        },
        decrement: function (state) {
            state.CounterValue -= 1;
        },
        incrementByAmount: function (state, action) {
            state.CounterValue += action.payload;
        },
    },
});
exports.increment = (_a = exports.counterSlice.actions, _a.increment), exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
var selectCount = function (state) { return state.Counter; };
exports.selectCount = selectCount;
exports.default = exports.counterSlice.reducer;
