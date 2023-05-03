"use strict";
const canvasId = "app";
const app = document.getElementById(canvasId);
if (app === null) {
    throw new Error(`Could not found canvas ${canvasId}`);
}
const ctx = app.getContext("2d");
if (ctx === null) {
    throw new Error(`Could not initialize 2d context`);
}
console.log(ctx);
