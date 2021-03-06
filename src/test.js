const string = `
  .skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;    background: rgb(255, 203, 0);
    min-height: 100vh;

  }

  .nose {
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    right: 50%;
    top: 140px;
    margin-left: -10px;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px/6px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background: black;
  }
  
  .eye {
    border: 2px solid black;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: rgb(57, 57, 57);
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .eye::before {
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 8px;
    top: 3px;
  }
  .mouth {
    width: 200px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -10px;
  }
  .mouth .up .lip {
    height: 30px;
    width: 100px;
    border: 3px solid black;
    top: 0px;
    border-top: transparent;
    position: absolute;
    background: rgb(255, 203, 0);
  }
  .mouth .up .lip.left {
    border-radius: 0 0 50px 0px;
    border-left: transparent;
    transform: rotate(15deg);
    left: 51%;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 0 50px;
    border-right: transparent;
    transform: rotate(-15deg);
    right: 50%;
  }
  
  .mouth .down {
    height: 180px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 5px;
  }
  
  .mouth .down .yuan1 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    height: 400px;
    border-radius: 100px/250px;
    background: rgb(204, 65, 67);
    z-index: -1;
    overflow: hidden;
  }
  .mouth .down .yuan2 {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 250px;
    border-radius: 150px;
    background: rgb(221, 102, 106);
  }
  .face {
    border: 3px solid black;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background: red;
    position: absolute;
    top: 200px;
  }
  .face.right {
    right: 50%;
    transform: translateX(-115px);
  }
  .face.left {
    left: 50%;
    transform: translateX(115px);
  }
`;

let n = 0;
let time = 100;
let id;
const player = {
    init: () => {
        demo.innerText = string.substring(0, n);
        demo2.innerHTML = string.substring(0, n);
        player.play();
        player.bindEvents();
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnNormal": "normal",
        "#btnSlow": "slow",
        "#btnFast": "fast",
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: () => {
        n = n + 1;
        if (n >= string.length) {
            window.clearInterval(id);
        }
        demo.innerText = string.substring(0, n);
        demo2.innerHTML = string.substring(0, n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        return (id = setInterval(player.run, time));
    },
    pause: () => {
        window.clearInterval(id);
    },
    normal: () => {
        player.pause();
        time = 100;
        player.play();
    },
    slow: () => {
        player.pause();
        time = 300;
        player.play();
    },
    fast: () => {
        player.pause();
        time = 5;
        player.play();
    },
};

player.init();
