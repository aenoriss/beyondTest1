import { io } from "socket.io-client";
import socket from "./socket"

AFRAME.registerComponent("markerhandler", {
    //Schema enables customization
    schema: {},
    init: function () {  
      //Create Primitive
      let socketComp = document.querySelector("#socket");
      let socketCompAtt = socketComp.getAttribute("socket");
      let socket =socketCompAtt.socket;

      console.log("xD", socket)

      socket.on("ping", (data)=> {
        console.log("DATAAA", data);
      //   cubeEl.setAttribute("color", colors[data]);
    })

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
  
  