//drag and drop

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  
//geolocation

var x = document.getElementById("demo");
function getLocation() {
   if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
   } else {
      x.innerHTML = "Geolocation is not support by this browser";
   }
}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longtitude;

}

//worker

var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}

let story = ('safe mode')
   console.log('print')
   //document.write(500);
   //document.write(story);

let band = Date

  //alert("Thank you.");
  //prompt("Thank you.");
  //confirm("do you like the home interface")

  let input = ('data')

 let num = eval(input("enter a number"))

   Date("what");


