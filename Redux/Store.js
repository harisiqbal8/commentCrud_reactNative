"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var CounterSlice_1 = require("./CounterSlice");
var ProfilePictureSlice_1 = require("./ProfilePictureSlice");
var UserSlice_1 = require("./UserSlice");
var PostSlice_1 = require("./PostSlice");
var UserDataSlice_1 = require("./UserDataSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        Counter: CounterSlice_1.default,
        Profile: ProfilePictureSlice_1.default,
        Users: UserSlice_1.default,
        Posts: PostSlice_1.default,
        DummyUser: UserDataSlice_1.default
    },
});
