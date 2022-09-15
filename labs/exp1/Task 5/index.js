document.getElementById("preprocessing").disabled= true;
document.getElementById("simulation").disabled= true;
document.getElementById("result").disabled = true;
function instructions() {
  document.getElementById("buttonControls").style.visibility = 'hidden';
  document.getElementById("instructionDiv").style.visibility = 'visible';
}

function back2btnCtrl() {
  document.getElementById("buttonControls").style.visibility = 'visible';
  document.getElementById("instructionDiv").style.visibility = 'hidden';
}

function equipmentDetails() {
  document.getElementById("oneClick").style.visibility = 'visible';
  var slides = document.getElementsByClassName("slides"); //it returns array of slide
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.visibility = 'hidden';
  }
  document.getElementById("aimDiv").style.visibility = 'hidden';
  document.getElementById("twoClick").style.visibility = 'hidden';
}

function objective() {
  document.getElementById("aimDiv").style.visibility = 'visible';
  document.getElementById("oneClick").style.visibility = 'hidden';
}

function details() {
  document.getElementById("slide1").style.visibility = "visible";
  document.getElementById("oneClick").style.visibility = "hidden";
}

function Back() {
  equipmentDetails();
}

function next2() {
  document.getElementById("slide2").style.visibility = "visible";
  document.getElementById("slide1").style.visibility = "hidden";
}

function next3() {
  document.getElementById("slide3").style.visibility = "visible";
  document.getElementById("slide2").style.visibility = "hidden";
}

function next4() {
  document.getElementById("slide4").style.visibility = "visible";
  document.getElementById("slide3").style.visibility = "hidden";
}

function next5() {
  document.getElementById("slide5").style.visibility = "visible";
  document.getElementById("slide4").style.visibility = "hidden";
}

function next6() {
  document.getElementById("slide6").style.visibility = "visible";
  document.getElementById("slide5").style.visibility = "hidden";
}

function next7() {
  document.getElementById("slide7").style.visibility = "visible";
  document.getElementById("slide6").style.visibility = "hidden";
}

function enablePreprocessing() {
  document.getElementById("preprocessing").disabled = false;
  alert("Now go for Preprocessing");
}

function Back1() {
  document.getElementById("slide1").style.visibility = "visible";
  document.getElementById("slide2").style.visibility = "hidden";
}

function Back2() {
  document.getElementById("slide2").style.visibility = "visible";
  document.getElementById("slide3").style.visibility = "hidden";
}

function Back3() {
  document.getElementById("slide3").style.visibility = "visible";
  document.getElementById("slide4").style.visibility = "hidden";
}

function Back4() {
  document.getElementById("slide4").style.visibility = "visible";
  document.getElementById("slide5").style.visibility = "hidden";
}

function Back5() {
  document.getElementById("slide5").style.visibility = "visible";
  document.getElementById("slide6").style.visibility = "hidden";
}

function Back6() {
  document.getElementById("slide6").style.visibility = "visible";
  document.getElementById("slide7").style.visibility = "hidden";
}

function preprocessing() {
  //make all div hidden except the preprocessing div
  document.getElementById("equipmentDetails").disabled = true;
  document.getElementById("oneClick").style.visibility = 'hidden';
  var slides = document.getElementsByClassName("slides"); //it returns array of slide
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.visibility = 'hidden';
  }
  document.getElementById("aimDiv").style.visibility = 'hidden';
  // document.getElementById("sandpaper").style.visibility='hidden';
  var sandpapers = document.getElementsByClassName("sandppr");
  for (var i = 0; i < sandpapers.length; i++) {
    sandpapers[i].style.visibility = 'hidden';
  }
  //all are hidden

  document.getElementById("twoClick").style.visibility = 'visible';
}

var matImg = document.getElementById("materialImg");
var matEl = document.getElementById("materials");
var elImg = document.getElementById("electrodeImg");
var elEl = document.getElementById("electrodes");

function setMaterialImg() {
  console.log(matEl.value);
  matImg.style.visibility = 'visible';
  matImg.src = "images/" + matEl.value + ".png";
  var info = matEl.value + "Info";
  console.log(info);
  var infos = document.getElementsByClassName("materialInfo"); //it returns array of slide
  for (var i = 0; i < infos.length; i++) {
    infos[i].style.visibility = 'hidden';
  }
  document.getElementById(info).style.visibility = 'visible';
  if (document.getElementById("electrodeImg").style.visibility == 'visible' && document.getElementById("materialImg").style.visibility == 'visible') {
    document.getElementById("nextSelected").style.visibility = 'visible';
  }
}

function setElectrodeImg() {

  console.log(elEl.value);
  elImg.style.visibility = 'visible';
  elImg.src = "assets/" + elEl.value + ".glb";
  var info = elEl.value + "Info";
  console.log(info);
  var infos = document.getElementsByClassName("electrodeInfo"); //it returns array of slide
  for (var i = 0; i < infos.length; i++) {
    infos[i].style.visibility = 'hidden';
  }
  document.getElementById(info).style.visibility = 'visible';
  // document.getElementById("nextSelected").style.visibility='visible';
  if (document.getElementById("electrodeImg").style.visibility == 'visible' && document.getElementById("materialImg").style.visibility == 'visible') {
    document.getElementById("nextSelected").style.visibility = 'visible';
  }
}



function selectedImgs() {
  //hidden contents
  document.getElementById("oneClick").style.visibility = 'hidden';
  var slides = document.getElementsByClassName("slides"); //it returns array of slide
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.visibility = 'hidden';
  }
  document.getElementById("electrodeImg").style.visibility = 'hidden';
  document.getElementById("materialImg").style.visibility = 'hidden';
  document.getElementById("aimDiv").style.visibility = 'hidden';
  document.getElementById("twoClick").style.visibility = 'hidden';
  document.getElementById("nextSelected").style.visibility = 'hidden';
  var infos = document.getElementsByClassName("info");
  for (var i = 0; i < infos.length; i++) {
    infos[i].style.visibility = 'hidden';
  }
  //all are hidden

  //visible content
  document.getElementById("selectedImgDiv").style.visibility = 'visible';
  document.getElementById("selectedMatImg").src = "images/rusted" + matEl.value + ".png";
  document.getElementById("selectedElecImg").src = elImg.src;
}

function back2selection() {
  document.getElementById("selectedImgDiv").style.visibility = 'hidden';
  document.getElementById("twoClick").style.visibility = 'visible';
  document.getElementById("electrodeImg").style.visibility = 'visible';
  document.getElementById("materialImg").style.visibility = 'visible';
  document.getElementById("nextSelected").style.visibility = 'visible';
  document.getElementById(matEl.value + "Info").style.visibility = 'visible';
  document.getElementById(elEl.value + "Info").style.visibility = 'visible';
}

function next2cleaning() {
  console.log("cleaning");
  document.getElementById("back2selection").style.visibility = 'hidden';
  switch (matEl.value) {
    case "aluminium":
      var sp1 = document.getElementById("sandpaper1");
      var sp2 = document.getElementById("sandpaper2");
      var sp3 = document.getElementById("sandpaper3");
      var sp4 = document.getElementById("sandpaper4");
      break;
    case "stainlessSteelMaterial":
      var sp1 = document.getElementById("sandpaper1ssm");
      var sp2 = document.getElementById("sandpaper2ssm");
      var sp3 = document.getElementById("sandpaper3ssm");
      var sp4 = document.getElementById("sandpaper4ssm");
      break;
    case "castIron":
      var sp1 = document.getElementById("sandpaper1ci");
      var sp2 = document.getElementById("sandpaper2ci");
      var sp3 = document.getElementById("sandpaper3ci");
      var sp4 = document.getElementById("sandpaper4ci");
      break;
    case "titanium":
      var sp1 = document.getElementById("sandpaper1tit");
      var sp2 = document.getElementById("sandpaper2tit");
      var sp3 = document.getElementById("sandpaper3tit");
      var sp4 = document.getElementById("sandpaper4tit");
      break;
    default:
      console.log("invalid case");
  }

  // var sp1 =document.getElementById("sandpaper1");
  // var sp2=document.getElementById("sandpaper2");
  // var sp3=document.getElementById("sandpaper3");
  // var sp4=document.getElementById("sandpaper4");

  sp1.style.visibility = 'visible';
  sp1.style.animationPlayState = 'running';

  sp1.addEventListener("animationend", function () {
    console.log("sandpaper1 done");
    sp1.style.visibility = 'hidden';
    sp2.style.visibility = 'visible';
    document.getElementById("selectedMatImg").src = "images/1rusted" + matEl.value + ".png";
    sp2.style.animationPlayState = 'running';
  });
  sp2.addEventListener("animationend", function () {
    console.log("sandpaper2 done");
    sp2.style.visibility = 'hidden';
    sp3.style.visibility = 'visible';
    document.getElementById("selectedMatImg").src = "images/2rusted" + matEl.value + ".png";
    sp3.style.animationPlayState = 'running';
  });
  sp3.addEventListener("animationend", function () {
    console.log("sandpaper3 done");
    sp3.style.visibility = 'hidden';
    sp4.style.visibility = 'visible';
    document.getElementById("selectedMatImg").src = "images/3rusted" + matEl.value + ".png";
    sp4.style.animationPlayState = 'running';
  });
  sp4.addEventListener("animationend", function () {
    sp4.style.visibility = 'hidden';
    console.log("cleaning finished");
    document.getElementById("selectedMatImg").src = matImg.src;
    document.getElementById("afterCleanBtn").style.visibility = 'visible';
  }, false);
}

function enableSimulation() {
  document.getElementById("simulation").disabled = false;
  document.getElementById("preprocessing").disabled = true;
  alert("Now go for Simulation");
}

function simulation() {
  document.getElementById("selectedImgDiv").style.visibility = 'hidden';
  document.getElementById("preprocessing").disabled = true;
  document.getElementById("equipmentDetails").disabled = true;
  document.getElementById("threeClick").style.visibility = 'visible';
  document.getElementById("afterCleanBtn").style.visibility = 'hidden';
  document.getElementById("wmbtn").onclick = null;
  document.getElementById("psbtn").onclick = null;
  document.getElementById("wpbtn").onclick = null;
  document.getElementById("elecbtn").onclick = null;
  document.getElementById("negativeTerminal").onclick = null;
  document.getElementById("positiveTerminal").onclick = null;
}

var workPiece = document.getElementById("workpiece");
var jointEl = document.getElementById("joint");

function setWorkpiece() {
  console.log(jointEl.value);
  jointEl.disabled = true;
  document.getElementById("wmbtn").onclick = enableWM;
  workPiece.src = "assets/" + jointEl.value + ".glb";
  switch (jointEl.value) {
    case "butt":
      workPiece.cameraOrbit = "-50deg 25deg 95%";  //55%
      workPiece.cameraTarget = "-2m -1.5m -0.3m";
      break;
    case "tee":
      workPiece.cameraOrbit = "20deg 60deg 95%";
      // workPiece.cameraOrbit = "-140deg 60deg 95%";
      break;
    case "lap":
      workPiece.cameraOrbit = "180deg 30deg 95%";
      workPiece.style.height = "129px";
      workPiece.style.left = "344px";
      workPiece.style.top = "195px"; //top: 151px; left: 416px; in animation
      // workPiece.cameraOrbit = "180deg 200deg 95%";
      break;
    case "corner":
      workPiece.cameraOrbit = "180deg 70deg 95%";
      workPiece.style.left = "336px"; //383px in animation
      // workPiece.cameraOrbit = "210deg 90deg 95%";
      break;
    case "edge":
      workPiece.cameraOrbit = "30deg 70deg 95%";
      workPiece.style.left = "346px";
      workPiece.style.top = "133px";
      // workPiece.cameraOrbit = "210deg 90deg 95%";
      break;
    default:
      console.log("invalid case");

  }
}

var enableWM = function wmbtn() {
  document.getElementById("psbtn").onclick = enablePS;
  document.getElementById("weldingMachine").style.visibility = 'visible';
  document.getElementById("fig1").style.visibility = 'hidden';
}

var enablePS = function psbtn() {
  document.getElementById("wpbtn").onclick = enableWP;
  document.getElementById("powerPlug").style.visibility = 'visible';
  document.getElementById("fig2").style.visibility = 'hidden';
}

var enableWP = function wpbtn() {
  document.getElementById("clampbtn").onclick = enableCl;
  document.getElementById("workpiece").style.visibility = 'visible';
  document.getElementById("fig3").style.visibility = 'hidden';
}

var enableCl = function clampbtn() {
  document.getElementById("elecbtn").onclick = enableEH;
  document.getElementById("clamp").style.visibility = 'visible';
  document.getElementById("fig5").style.visibility = 'hidden';
}


instance = jsPlumb.getInstance({});
instance.setContainer("rightPanel");
var con, ep, ep2, pcount=0, ncount=0;

var enableEH = function elecbtn() {
  document.getElementById("electrodeHolder").style.visibility = 'visible';
  document.getElementById("fig4").style.visibility = 'hidden';
  document.getElementById("headComponent").style.visibility = 'hidden';
  document.getElementById("dropdown3").style.visibility = 'hidden';
  document.getElementById("electrodeHolder").onclick = function () {
    if(pcount==0 && ncount==0){
      alert("Please connect the power supply");
      document.getElementById("powerPlug").style.animation = "glow 0.7s infinite";
    }
    else if(pcount==1 && ncount==0){
      alert("Please connect the positve terminal of welding machine with clamp");
    }
    else if(pcount==2 && ncount==0){
      alert("Please connect the negative terminal of welding machine with electrode gun");
    }
  };
  

  instance.bind("ready", function () {

    instance.registerConnectionTypes({
      "black-connection": {
        paintStyle: { stroke: "black", strokeWidth: 3 }
      },
      "red-connection": {
        paintStyle: { stroke: "red", strokeWidth: 3 }
      },
      "green-connection": {
        paintStyle: { stroke: "green", strokeWidth: 3 }
      }
    });


    instance.addEndpoint("powerPlug", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: [0.4, 1, 0, 1],
      isSource: true,
      connectionType: "black-connection",
      uuid: "p1"
    });

    instance.addEndpoint("targetPS", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isTarget: true,
      connectionType: "black-connection",
      uuid: "p2"
    });

    instance.addEndpoint("positiveTerminal", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isSource: true,
      connectionType: "green-connection",
      uuid: "p3"
    });

    instance.addEndpoint("positiveTarget", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isTarget: true,
      connectionType: "green-connection",
      uuid: "p4"
    });

    instance.addEndpoint("negativeTerminal", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isSource: true,
      connectionType: "red-connection",
      uuid: "p5"
    });

    ep = instance.addEndpoint("negativeTarget", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isTarget: true,
      connectionType: "red-connection",
      uuid: "p6"
    });

  });

}

function start(x) {
  x.style.animation = "zoomIn 0.5s forwards";
}

function normal(x) {
  x.style.animation = "";
}

function setPower() {
  pcount = 1;
  console.log(pcount);
  document.getElementById("powerPlug").src = "images/powerplug2.png";
  document.getElementById("powerPlug").style.animation = "";
  instance.connect({
    uuids: ["p1", "p2"]
  });
  document.getElementById("weldingMachine").classList.remove("components");
  document.getElementById("clamp").classList.remove("components");
  document.getElementById("electrodeHolder").classList.remove("components");

  workPiece.onmouseover = null;
  workPiece.onmouseout = null;

  setTimeout(() => {
    alert("Connect positive terminal with clamp");
    document.getElementById("leftarrow").style.visibility = 'visible';
    document.getElementById("leftarrow").style.animationPlayState = 'running';
  }, 400);
  document.getElementById("positiveTerminal").onclick = posCon;
  document.getElementById("negativeTerminal").onclick = function (){
    alert("Connect positive terminal with clamp first!");
  }
}

var posCon = function greenCon() {
  document.getElementById("leftarrow").style.visibility = 'hidden';
  instance.connect({
    uuids: ["p3", "p4"],
    connector: 'Straight'
  });
  pcount = 2;
  setTimeout(() => {
    alert("Now connect negative terminal with electrode gun");
    document.getElementById("rightarrow").style.visibility = 'visible';
    document.getElementById("negativeTerminal").onclick = negCon;
  }, 500);
}

var negCon = function redCon() {
  con = instance.connect({
    uuids: ["p5", "p6"]
  });
  ncount=1;
  document.getElementById("rightarrow").style.visibility = 'hidden';
  document.getElementById("electrodeHolder").onclick = enableWelding;
  document.getElementById("negativeTerminal").onclick = null;
  document.getElementById("positiveTerminal").onclick = null;
}

var enableWelding = function welding() {
  // document.getElementById("zoomedWP").style.visibility='visible';
  // document.getElementById("workpiece").style.visibility='hidden';
  document.getElementById("electrodeHolder").style.visibility = 'hidden';
  document.getElementById("electrodeHolder2").style.visibility = 'visible';


  instance.bind("ready", function () {

    instance.registerConnectionTypes({
      "red-connection": {
        paintStyle: { stroke: "red", strokeWidth: 3 }
      }
    });

    instance.addEndpoint("negativeTerminal2", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isSource: true,
      connectionType: "red-connection",
      uuid: "p52"
    });

    ep2 = instance.addEndpoint("negativeTarget2", {
      endpoint: ["Dot", { radius: 2 }],
      anchor: ["Center"],
      isTarget: true,
      connectionType: "red-connection",
      uuid: "p62"
    });

  });

  instance.deleteConnection(con);
  instance.deleteEndpoint(ep);

  instance.connect({
    uuids: ["p52", "p62"]
  });

  workPiece.style.animationPlayState = 'running';

  switch (jointEl.value) {
    case "butt":
      buttWelding();
      break;
    case "tee":
      teeWelding();
      break;
    case "lap":
      workPiece.style.animation = "magnifyL 1.7s linear forwards";
      lapWelding();
      break;
    case "corner":
      cornerWelding();
      break;
    case "edge":
      workPiece.style.animation = "magnifyE 1.7s linear forwards";
      edgeWelding();
      break;
    default:
      console.log("invalid case");
  }

}

var elecHold = document.getElementById("electrodeHolder2");

function buttWelding() {
  setTimeout(function () {
    instance.deleteEndpoint(ep2);
    document.getElementById("svgBox").style.visibility = 'visible';
    document.getElementById("buttLine").style.visibility = 'visible';
    let current = 0;
    let y2 = 0;
    let x2 = 400;
    let load = setInterval(moving, 130);
    function moving() {
      if (current === 53) {
        // setTimeout(() => {
        document.getElementById("buttLine").style.visibility = 'hidden';
        document.getElementById("initialLine").style.visibility = 'visible';
        // }, 100);
        return;
      }
      else {
        current += 1;
        if (y2 < 123) {
          y2 += 4;
        }
        if (y2 > 123) {
          y2 += 3;
        }
        if (x2 >= 290) {
          x2 -= 4;
        }
        else {
          x2 -= 1.2;
        }
        document.getElementById("buttLine").setAttribute("x2", x2);
        document.getElementById("buttLine").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkB").style.visibility = 'visible';
    document.getElementById("sparkB").style.animationPlayState = 'running';
    elecHold.style.animationPlayState = 'running';
    document.getElementById("line").style.animationPlayState = 'running';
    elecHold.addEventListener("animationend", function () {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
      elecHold.style.animation = "moveElecB2 3.5s linear";
      elecHold.style.animationPlayState = 'running';
      setTimeout(() => {
        // elecHold.src = "assets/electrodeHolder2.glb";
        elecHold.cameraOrbit = "-40deg 33deg 70%";
      }, 2500);
    });
    document.getElementById("sparkB").addEventListener("animationend", function () {
      document.getElementById("sparkB").style.visibility = 'hidden';
      document.getElementById("line").style.background = '#CCCCCC';
      elecHold.src = "assets/electrodeHolder2.glb";
      alertResult();
    });
  }, 1900);
}

function teeWelding() {
  setTimeout(function () {
    instance.deleteEndpoint(ep2);
    document.getElementById("svgBox").style.visibility = 'visible';
    document.getElementById("teeLine").style.visibility = 'visible';
    let current = 0;
    let y2 = 130;
    let x2 = 280;
    let load = setInterval(moveTee1, 130);
    function moveTee1() {
      if (current === 53) {
        document.getElementById("teeLine").style.visibility = 'hidden';
        document.getElementById("initialLine").style.visibility = 'visible';
        return;
      }
      else {
        current += 1;
        if (y2 <= 155) {
          y2 += 1;
        }
        else {
          y2 += 2;
          if (y2 > 155 && y2 < 180) {
            x2 = 310;
          }
          else {
            x2 = 280;
          }
        }

        document.getElementById("teeLine").setAttribute("x2", x2);
        document.getElementById("teeLine").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkT").style.visibility = 'visible';
    document.getElementById("sparkT").style.animationPlayState = 'running';
    elecHold.style.animation = "moveElecT 7s linear";
    elecHold.style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineT");
    document.getElementById("line").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkT").addEventListener("animationend", function () {
      document.getElementById("sparkT").style.visibility = 'hidden';
      document.getElementById("line").style.background = '#CCCCCC';
      elecHold.src = "assets/electrodeHolder2.glb";
      setTimeout(() => {
        alert("now weld second part");
        elecHold.cameraOrbit = "-40deg 50deg 70%";
        teeWelding2();
      }, 700);
    });
  }, 1900);

}

function teeWelding2() {
  setTimeout(() => {
    document.getElementById("line").style.visibility = 'hidden';
    workPiece.cameraOrbit = "-160deg 60deg 95%";
    document.getElementById("electrodeHolder2").src = "assets/electrodeHolder.glb";
    setTimeout(() => {
      document.getElementById("smlineT").style.visibility = 'visible';
    }, 300);
  }, 800);
  setTimeout(() => {
    elecHold.cameraOrbit = "-40deg 50deg 70%";
    document.getElementById("initialLine").style.display = 'none';
    document.getElementById("teeLine2").style.visibility = 'visible';
    let current = 0;
    let y2 = 130;
    let x2 = 310;
    let load = setInterval(moveTee2, 130);
    function moveTee2() {
      if (current === 53) {
        document.getElementById("teeLine2").style.visibility = 'hidden';
        document.getElementById("initialLine").style.display = 'block';
        return;
      }
      else {
        current += 1;
        if (y2 <= 155) {
          y2 += 2;
        }
        else {
          y2 += 1;
        }
        document.getElementById("teeLine2").setAttribute("x2", x2);
        document.getElementById("teeLine2").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkT2").style.visibility = 'visible';
    document.getElementById("sparkT2").style.animationPlayState = 'running';
    elecHold.style.animation = "moveElecT2 7s linear paused";
    elecHold.style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineT2");
    document.getElementById("line2").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkT2").addEventListener("animationend", function () {
      document.getElementById("sparkT2").style.visibility = 'hidden';
      document.getElementById("line2").style.background = '#CCCCCC';
      elecHold.src = "assets/electrodeHolder2.glb";
      alertResult();
    });
  }, 1600);

}

function lapWelding() {
  setTimeout(() => {
    instance.deleteEndpoint(ep2);
    document.getElementById("svgBox").style.visibility = 'visible';
    document.getElementById("teeLine").style.visibility = 'visible';
    let current = 0;
    let y2 = 150;
    document.getElementById("teeLine").setAttribute("y2", y2);
    let x2 = 280;
    let load = setInterval(moveLap1, 130);
    function moveLap1() {
      if (current === 53) {
        document.getElementById("teeLine").style.visibility = 'hidden';
        document.getElementById("initialLine").style.visibility = 'visible';
        return;
      }
      else {
        current += 1;
        y2 += 1;
        document.getElementById("teeLine").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkL").style.visibility = 'visible';
    document.getElementById("sparkL").style.animationPlayState = 'running';
    document.getElementById("electrodeHolder2").style.animation = "moveElecL 7s linear";
    document.getElementById("electrodeHolder2").style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineL");
    document.getElementById("line").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkL").addEventListener("animationend", function () {
      document.getElementById("sparkL").style.visibility = 'hidden';
      document.getElementById("line").style.background = '#CCCCCC';
      document.getElementById("electrodeHolder2").src = "assets/electrodeHolder2.glb";
      setTimeout(() => {
        alert("now weld second part");
        elecHold.cameraOrbit = "-40deg 50deg 70%";
        lapWelding2();
      }, 700);
    });
  }, 1900);
}

function lapWelding2() {
  setTimeout(() => {
    document.getElementById("line").style.visibility = 'hidden';
    workPiece.cameraOrbit = "180deg 200deg 95%";
    document.getElementById("electrodeHolder2").src = "assets/electrodeHolder.glb";
  }, 800);
  setTimeout(() => {
    elecHold.cameraOrbit = "-40deg 50deg 70%";
    document.getElementById("initialLine").style.display = 'none';
    document.getElementById("teeLine2").style.visibility = 'visible';
    let current = 0;
    let y2 = 150;
    document.getElementById("teeLine2").setAttribute("y2", y2);
    let x2 = 330;
    document.getElementById("teeLine2").setAttribute("x2", x2);
    let load = setInterval(moveLap1, 130);
    function moveLap1() {
      if (current === 53) {
        document.getElementById("teeLine2").style.visibility = 'hidden';
        document.getElementById("initialLine").style.display = 'block';
        return;
      }
      else {
        current += 1;
        y2 += 1;
        document.getElementById("teeLine2").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkL2").style.visibility = 'visible';
    document.getElementById("sparkL2").style.animationPlayState = 'running';
    document.getElementById("electrodeHolder2").style.animation = "moveElecL2 7s linear paused";
    document.getElementById("electrodeHolder2").style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineL2");
    document.getElementById("line2").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkL2").addEventListener("animationend", function () {
      document.getElementById("sparkL2").style.visibility = 'hidden';
      document.getElementById("line2").style.background = '#CCCCCC';
      document.getElementById("electrodeHolder2").src = "assets/electrodeHolder2.glb";
      alertResult();
    });
  }, 1600);
}

function cornerWelding() {
  setTimeout(() => {
    instance.deleteEndpoint(ep2);
    document.getElementById("svgBox").style.visibility = 'visible';
    document.getElementById("teeLine").style.visibility = 'visible';
    let current = 0;
    let y2 = 148;
    document.getElementById("teeLine").setAttribute("y2", y2);
    let x2 = 380;
    document.getElementById("teeLine").setAttribute("x2", x2);
    let load = setInterval(moveCorner1, 130);
    function moveCorner1() {
      if (current === 53) {
        document.getElementById("teeLine").style.visibility = 'hidden';
        document.getElementById("initialLine").style.visibility = 'visible';
        return;
      }
      else {
        current += 1;
        if (y2 > 180 && y2 <= 201) {
          x2 = 414;
        }
        y2 += 1;
        document.getElementById("teeLine").setAttribute("x2", x2);
        document.getElementById("teeLine").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkC").style.visibility = 'visible';
    document.getElementById("sparkC").style.animationPlayState = 'running';
    document.getElementById("electrodeHolder2").style.animation = "moveElecC 7s linear";
    document.getElementById("electrodeHolder2").style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineC");
    document.getElementById("line").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkC").addEventListener("animationend", function () {
      document.getElementById("sparkC").style.visibility = 'hidden';
      document.getElementById("line").style.background = '#CCCCCC';
      document.getElementById("electrodeHolder2").src = "assets/electrodeHolder2.glb";
      setTimeout(() => {
        elecHold.cameraOrbit = "-40deg 50deg 70%";
        alert("now weld second part");
        cornerWelding2();
      }, 700);
    });
  }, 1900);
}

function cornerWelding2() {
  setTimeout(() => {
    document.getElementById("line").style.visibility = 'hidden';
    workPiece.cameraOrbit = "210deg 90deg 95%";
    document.getElementById("electrodeHolder2").src = "assets/electrodeHolder.glb";
    setTimeout(() => {
      document.getElementById("smlineC").style.visibility = 'visible';
    }, 300);
  }, 800);
  setTimeout(() => {
    elecHold.cameraOrbit = "-40deg 50deg 70%";
    document.getElementById("initialLine").style.display = 'none';
    document.getElementById("teeLine2").style.visibility = 'visible';
    let current = 0;
    let y2 = 177;
    document.getElementById("teeLine2").setAttribute("y2", y2);
    let x2 = 397;
    document.getElementById("teeLine2").setAttribute("x2", x2);
    let load = setInterval(moveCorner2, 130);
    function moveCorner2() {
      if (current === 53) {
        document.getElementById("teeLine2").style.visibility = 'hidden';
        document.getElementById("initialLine").style.display = 'block';
        return;
      }
      else {
        current += 1;
        if (y2 < 196) {
          y2 += 1;
        }
        document.getElementById("teeLine2").setAttribute("x2", x2);
        document.getElementById("teeLine2").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkC2").style.visibility = 'visible';
    document.getElementById("sparkC2").style.animationPlayState = 'running';
    document.getElementById("electrodeHolder2").style.animation = "moveElecC2 7s linear paused";
    document.getElementById("electrodeHolder2").style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineC2");
    document.getElementById("line2").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkC2").addEventListener("animationend", function () {
      elecHold.cameraOrbit = "-40deg 50deg 70%";
      document.getElementById("sparkC2").style.visibility = 'hidden';
      document.getElementById("line2").style.background = '#CCCCCC';
      document.getElementById("electrodeHolder2").src = "assets/electrodeHolder2.glb";
      alertResult();
    });
  }, 1600);

}

function edgeWelding() {
  setTimeout(() => {
    instance.deleteEndpoint(ep2);
    document.getElementById("svgBox").style.visibility = 'visible';
    document.getElementById("teeLine").style.visibility = 'visible';
    let current = 0;
    let y2 = 180;
    document.getElementById("teeLine").setAttribute("y2", y2);
    let x2 = 200;
    document.getElementById("teeLine").setAttribute("x2", x2);
    let load = setInterval(moveCorner1, 130);
    function moveCorner1() {
      if (current === 53) {
        document.getElementById("teeLine").style.visibility = 'hidden';
        document.getElementById("initialLine").style.visibility = 'visible';
        return;
      }
      else {
        current += 1;
        y2 += 1;
        document.getElementById("teeLine").setAttribute("y2", y2);
      }
    }
    document.getElementById("sparkE").style.visibility = 'visible';
    document.getElementById("sparkE").style.animationPlayState = 'running';
    document.getElementById("electrodeHolder2").style.animation = "moveElecE 7s linear";
    document.getElementById("electrodeHolder2").style.animationPlayState = 'running';
    document.getElementById("weldingLine").classList.remove("lineB");
    document.getElementById("weldingLine").classList.add("lineE");
    document.getElementById("line").style.animationPlayState = 'running';
    setTimeout(() => {
      elecHold.cameraOrbit = "-40deg 40deg 70%";
    }, 3500);
    setTimeout(() => {
      // elecHold.src = "assets/electrodeHolder2.glb";
      elecHold.cameraOrbit = "-40deg 33deg 70%";
    }, 6000);
    document.getElementById("sparkE").addEventListener("animationend", function () {
      document.getElementById("sparkE").style.visibility = 'hidden';
      document.getElementById("line").style.background = '#CCCCCC';
      document.getElementById("electrodeHolder2").src = "assets/electrodeHolder2.glb";
      alertResult();
    });
  }, 1900);
}

function alertResult() {
  setTimeout(function () {
    elecHold.cameraOrbit = "-40deg 50deg 70%";
    alert("Now go for results");
    document.getElementById("result").disabled = false;
    document.getElementById("simulation").disabled = true;
  }, 1200);
}

function result() {
  document.getElementById("preprocessing").disabled = true;
  document.getElementById("simulation").disabled = true;
  document.getElementById("equipmentDetails").disabled = true;

  document.getElementById("weldingMachine").style.visibility = 'hidden';
  document.getElementById("initialLine").style.display = 'none';
  document.getElementById("svgBox").style.visibility = 'hidden';
  document.getElementById("workpiece").style.visibility = 'hidden';
  document.getElementById("electrodeHolder").style.visibility = 'hidden';
  document.getElementById("electrodeHolder2").style.visibility = 'hidden';
  document.getElementById("clamp").style.visibility = 'hidden';
  document.getElementById("powerPlug").style.visibility = 'hidden';
  document.getElementById("smlineT").style.visibility = 'hidden';
  document.getElementById("smlineC").style.visibility = 'hidden';

  document.getElementById("rightPanel").style.visibility = 'hidden';
  document.getElementById("rightPanel").style.display = 'none';

  document.getElementById("cleanWorkpiece").src = "assets/" + jointEl.value + "Final.glb";

  document.getElementById("fourClick").style.diplay = 'block';
  document.getElementById("fourClick").style.visibility = 'visible';
  document.getElementById("res").style.visibility = 'visible';
}

//for back button functioning in all cases
// const sequence = [];
// const input = document.querySelector('input');
//
// function saveSeq() {
//   mementos.push(input.value);  //input.value returns string representing value of the input field(text, button etc )
// }
//
// function Back() {
//   const lastSeq = sequence.pop();
//
//   input.value = lastSeq ? lastSeq : input.value;
//   console.log(input.value);
//   document.activeElement.parentElement.style.visibility='hidden';
//   this[input.value]();
// }
//back ends
