import { io } from "socket.io-client";

AFRAME.registerComponent("socket", {
    //Schema enables customization
    schema: {
        socket: {default: null}
    },
    init: function () {  
      //Create Primitive
      this.data.socket = io("https://eggback.herokuapp.com")
      console.log("socket.io",this.data.socket)

      let sceneEl = document.querySelector("a-scene");
      let cubeEl = document.querySelector("#cubeEl");
      let colors = ["blue","red","green","yellow"];

      console.log("CUBEE", cubeEl)

      this.data.socket.on("connect", () => {
          alert("you connected with: " + this.data.socket.id)
      })

      this.data.socket.on("ping", (data)=> {
          console.log("DATAAA", data);
        //   cubeEl.setAttribute("color", colors[data]);
      })
  
      //Populate Scene
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},
  });
  