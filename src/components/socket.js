import { io } from "socket.io-client";

AFRAME.registerComponent("socket", {
    //Schema enables customization
    schema: {},
    init: function () {  
      //Create Primitive
      console.log("xD")
      const socket = io("https://eggback.herokuapp.com")

      let sceneEl = document.querySelector("a-scene");
      let cubeEl = document.querySelector("#cubeEl");

      console.log("CUBEE", cubeEl)

      socket.on("connect", () => {
          alert("you connected with: " + socket.id)
      })

      socket.on("ping", (data)=> {
          console.log("DATAAA", data);
          
      })
  
      //Populate Scene
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},
  });
  
  