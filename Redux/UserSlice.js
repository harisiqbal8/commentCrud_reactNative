"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.DeleteUser = exports.EditUser = exports.AddUser = exports.UserSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    UserList: []
};
exports.UserSlice = (0, toolkit_1.createSlice)({
    name: "User",
    initialState: initialState,
    reducers: {
        AddUser: function (state, action) {
            var users = __spreadArray([], state.UserList, true);
            action.payload.Id = users.length + 1;
            users.push(action.payload);
            state.UserList = users;
        },
        EditUser: function (state, action) {
            var users = __spreadArray([], state.UserList, true);
            var object = users.filter(function (x) { return x.Id == action.payload.Id; })[0];
            object.FirstName = action.payload.FirstName;
            object.LastName = action.payload.LastName;
            object.EmailAddress = action.payload.EmailAddress;
            state.UserList = users;
        },
        DeleteUser: function (state, action) {
            state.UserList = state.UserList.filter(function (x) { return x.Id != action.payload; });
        }
    }
});
exports.AddUser = (_a = exports.UserSlice.actions, _a.AddUser), exports.EditUser = _a.EditUser, exports.DeleteUser = _a.DeleteUser;
var State = function (state) { return state.Users; };
exports.State = State;
exports.default = exports.UserSlice.reducer;
