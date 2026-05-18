import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    document.getElementById("excuse1").textContent =
      who[Math.floor(Math.random() * who.length)];

    document.getElementById("excuse2").textContent =
      action[Math.floor(Math.random() * action.length)];

    document.getElementById("excuse3").textContent =
      what[Math.floor(Math.random() * what.length)];

    document.getElementById("excuse4").textContent =
      when[Math.floor(Math.random() * when.length)];
