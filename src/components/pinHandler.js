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
      data.forEach((marker) => {
        console.log("marker", marker)
        let markerId = marker.id;
        switch (markerId) {
          case 1:
            console.log("marker.taken", marker.taken)
            marker.taken == true && marker0.setAttribute("visible", false);
            break;
          case 2:
            marker.taken == true && marker1.setAttribute("visible", false);
            break;
          case 3:
            marker.taken == true && marker2.setAttribute("visible", false);
            break;
          case 4:
            marker.taken == true && marker3.setAttribute("visible", false);
            break;
          case 5:
            marker.taken == true && marker4.setAttribute("visible", false);
            break;
        }
      })
    })


  },
  update: function () { },
  tick: function () { },
  remove: function () { },
  pause: function () { },
  play: function () { },
});
