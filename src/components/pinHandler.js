import { io } from "socket.io-client";
import socket from "./socket"

AFRAME.registerComponent("pinhandler", {
  //Schema enables customization
  schema: {},
  init: function () {
    let socketComp = document.querySelector("#socket");
    let socketCompAtt = socketComp.getAttribute("socket");
    let socket = socketCompAtt.socket;

    console.log("PIN HANDLER ACTIVATED")

    let marker0 = document.getElementById("pin0");
    let marker1 = document.getElementById("pin1");
    let marker2 = document.getElementById("pin2");
    let marker3 = document.getElementById("pin3");
    let marker4 = document.getElementById("pin4");

    socket.on("eggOverview", async (data) => {
      console.log("DATAA TIC", data)
    })


  },
  update: function () { },
  tick: function () { },
  remove: function () { },
  pause: function () { },
  play: function () { },
});

