"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.UploadData = exports.UserDataSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    UserList: []
};
exports.UserDataSlice = (0, toolkit_1.createSlice)({
    name: "User",
    initialState: initialState,
    reducers: {
        UploadData: function (state, action) {
            state.UserList = action.payload;
        }
    }
});
exports.UploadData = exports.UserDataSlice.actions.UploadData;
var State = function (state) { return state.DummyUser; };
exports.State = State;
exports.default = exports.UserDataSlice.reducer;
