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
exports.State = exports.EditPost = exports.AddPost = exports.DeletePost = exports.UpdateList = exports.PostSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    PostList: []
};
exports.PostSlice = (0, toolkit_1.createSlice)({
    name: "User",
    initialState: initialState,
    reducers: {
        UpdateList: function (state, action) {
            action.payload.map(function (item, index) {
                item.status = 1;
            });
            state.PostList = action.payload;
        },
        DeletePost: function (state, action) {
            state.PostList.filter(function (x) { return x.id == action.payload; })[0].status = 0;
        },
        AddPost: function (state, action) {
            var data = __spreadArray([], state.PostList, true);
            action.payload.id = data.length + 1;
            action.payload.status = 1;
            data.unshift(action.payload);
            state.PostList = data;
        },
        EditPost: function (state, action) {
            var data = __spreadArray([], state.PostList, true);
            var obj = data.filter(function (x) { return x.id == action.payload.id; })[0];
            obj.body = action.payload.body;
            obj.userId = action.payload.userId;
            obj.title = action.payload.title;
            obj.status = 1;
            state.PostList = data;
        }
    }
});
exports.UpdateList = (_a = exports.PostSlice.actions, _a.UpdateList), exports.DeletePost = _a.DeletePost, exports.AddPost = _a.AddPost, exports.EditPost = _a.EditPost;
var State = function (state) { return state.Posts; };
exports.State = State;
exports.default = exports.PostSlice.reducer;
