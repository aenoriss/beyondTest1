import { io } from "socket.io-client";
import { Server } from 'socket.io';

AFRAME.registerComponent("socket", {
    //Schema enables customization
    schema: {},
    init: function () {  
      //Create Primitive
      console.log("xD")
      const socket = io("https://eggback.herokuapp.com")

      socket.on("connect", () => {
          alert("you connected with: " + socket.id)
      })
  
      //Populate Scene
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},
  });
  
  function randomPos(position) {
    let newX = position.x + (Math.random() - 0.5) * 100;
    let newY = position.y;
    let newZ = position.z + (Math.random() - 0.5) * 100;
    let newPos = newX + " " + newY + " " + newZ;
    return newPos;
  }
  