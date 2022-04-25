import { io } from "socket.io-client";
import socket from "./socket"

AFRAME.registerComponent("markerHandler", {
    //Schema enables customization
    schema: {},
    init: function () {  
      //Create Primitive
      console.log("xD", socket)

      // socket.on("ping", (data)=> {
      //     console.log("DATAAA", data);
      //   //   cubeEl.setAttribute("color", colors[data]);
      // })
  
      //Populate Scene
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},
  });
  
  