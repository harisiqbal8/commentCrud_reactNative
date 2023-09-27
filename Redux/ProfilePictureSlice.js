"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.SetImage = exports.ProfileSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.ProfileSlice = (0, toolkit_1.createSlice)({
    name: "profile",
    initialState: {
        imageurl: ""
    },
    reducers: {
        SetImage: function (state, action) {
            state.imageurl = action.payload;
        }
    }
});
exports.SetImage = exports.ProfileSlice.actions.SetImage;
var State = function (state) { return state.Profile; };
exports.State = State;
exports.default = exports.ProfileSlice.reducer;
