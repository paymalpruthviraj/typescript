"use strict";
var _a;
const user = {
    id: 123,
    email: 'user@example.com',
    displayName: null
};
const displayName = (_a = user.displayName) !== null && _a !== void 0 ? _a : "Guest";
console.log(displayName);
