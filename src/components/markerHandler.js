import { io } from "socket.io-client";
import socket from "./socket"

AFRAME.registerComponent("markerhandler", {
    //Schema enables customization
    schema: {},
    init: function () {  
      //Create Primitive
      let socketComp = document.querySelector("#socket");
      let socketCompAtt = socketComp.getAttribute("socket");
      let socket = socketCompAtt.socket;

      let sceneEl = document.querySelector("a-scene");

      let elemId = this.el.getAttribute("id");


      this.el.sceneEl.addEventListener("markerFound", (e)=> {
        alert("xzcdazsddasd", this.elemId);
        socket.emit("eggStatus", undefined, status => {
          console.log("EGG STATUS", status.trigger)
          if(status.trigger[elemId].taken == false){
            this.el.setAttribute("visible", true);
            status.trigger[elemId].taken == true;
            let soundEl = document.createElement("a-sound");
  
            soundEl.setAttribute("src", "https://cdn.glitch.global/91eba6f9-a9d4-45db-afeb-7115df7cf197/sound1.mp3?v=1650871234471");
            soundEl.setAttribute("position", "0 0 0");
            soundEl.setAttribute("loop", true);
            sceneEl.appendChild(soundEl);
  
          }
        });
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
  
  