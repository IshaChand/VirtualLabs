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

function Back() {
    equipmentDetails();
}

function details() {
    document.getElementById("slide1").style.visibility = "visible";
    document.getElementById("oneClick").style.visibility = "hidden";
}

function next2() {
    document.getElementById("slide2").style.visibility = "visible";
    document.getElementById("slide1").style.visibility = "hidden";
}

function Back1() {
    document.getElementById("slide1").style.visibility = "visible";
    document.getElementById("slide2").style.visibility = "hidden";
}

function next3() {
    document.getElementById("slide3").style.visibility = "visible";
    document.getElementById("slide2").style.visibility = "hidden";
}

function Back2() {
    document.getElementById("slide2").style.visibility = "visible";
    document.getElementById("slide3").style.visibility = "hidden";
}

function next4() {
    document.getElementById("slide4").style.visibility = "visible";
    document.getElementById("slide3").style.visibility = "hidden";
}

function Back3() {
    document.getElementById("slide3").style.visibility = "visible";
    document.getElementById("slide4").style.visibility = "hidden";
}

function next5() {
    document.getElementById("slide5").style.visibility = "visible";
    document.getElementById("slide4").style.visibility = "hidden";
}

function Back4() {
    document.getElementById("slide4").style.visibility = "visible";
    document.getElementById("slide5").style.visibility = "hidden";
}

function next6() {
    document.getElementById("slide6").style.visibility = "visible";
    document.getElementById("slide5").style.visibility = "hidden";
}

function Back5() {
    document.getElementById("slide5").style.visibility = "visible";
    document.getElementById("slide6").style.visibility = "hidden";
}

function next7() {
    document.getElementById("slide7").style.visibility = "visible";
    document.getElementById("slide6").style.visibility = "hidden";
}

function Back6() {
    document.getElementById("slide6").style.visibility = "visible";
    document.getElementById("slide7").style.visibility = "hidden";
}

function enablePreprocessing() {
    document.getElementById("preprocessing").disabled = false;
    alert("Now go for Preprocessing");
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
    if (elImg.style.visibility == 'visible' && matImg.style.visibility == 'visible') {
        document.getElementById("nextSelected").style.visibility = 'visible';
    }
}

function setElectrodeImg() {

    console.log(elEl.value);
    elImg.style.visibility = 'visible';
    var info = elEl.value + "Info";
    var infos = document.getElementsByClassName("electrodeInfo"); //it returns array of slide
    for (var i = 0; i < infos.length; i++) {
        infos[i].style.visibility = 'hidden';
    }
    document.getElementById(info).style.visibility = 'visible';
    // document.getElementById("nextSelected").style.visibility='visible';
    if (elImg.style.visibility == 'visible' && matImg.style.visibility == 'visible') {
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
    elImg.style.visibility = 'hidden';
    matImg.style.visibility = 'hidden';
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
}

function back2selection() {
    document.getElementById("selectedImgDiv").style.visibility = 'hidden';
    document.getElementById("twoClick").style.visibility = 'visible';
    elImg.style.visibility = 'visible';
    matImg.style.visibility = 'visible';
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
    document.getElementById("rtbtn").onclick = null;
    document.getElementById("pcbtn").onclick = null;
    document.getElementById("psbtn").onclick = null;
    document.getElementById("ctrlrbtn").onclick = null;
    document.getElementById("etbtn").onclick = null;
    document.getElementById("wpbtn").onclick = null;
    document.getElementById("powerPlug").onclick = null;
    document.getElementById("top").onclick = null;
    document.getElementById("side").onclick = null;
    document.getElementById("workpiece").onclick = null;
}

var wp = document.getElementById("workpiece");
var weldEl = document.getElementById("weldType");

function setWelding() {
    console.log(weldEl.value);
    weldEl.disabled = true;
    document.getElementById("componentPanel").style.visibility = "visible";
    document.getElementById("rtbtn").onclick = enableRT;
    document.getElementById("resistanceTransformer").src = "assets/" + weldEl.value + "Transformer.glb";
    document.getElementById("rtbtn").src = "images/" + weldEl.value + "Transformer.png";
    if (weldEl.value == "seam") {
        document.getElementById("pcbtn").src = "images/motor.png";
        document.getElementById("pcbtn").classList.remove("pcbtn");
        document.getElementById("pcbtn").classList.add("motor");
        document.getElementById("fig3cap").innerHTML = "Motor";
        document.getElementById("fig3cap").style.marginLeft = "21px";

        document.getElementById("etbtn").src = "images/seamElec.png";
        document.getElementById("fig5cap").innerHTML = "Electrode";
        document.getElementById("fig5cap").style.marginLeft = "17px";
    }
}

var enableRT = function rtbtn() {
    document.getElementById("psbtn").onclick = enablePS;
    document.getElementById("resistanceTransformer").style.visibility = 'visible';
    document.getElementById("fig1").style.visibility = 'hidden';
}

var enablePS = function psbtn() {
    document.getElementById("pcbtn").onclick = enablePC;
    document.getElementById("powerPlug").style.visibility = 'visible';
    document.getElementById("fig2").style.visibility = 'hidden';
}

var enablePC = function pcbtn() {
    document.getElementById("ctrlrbtn").onclick = enableCTRL;
    if (weldEl.value == "seam") {
        document.getElementById("motor").style.visibility = 'visible';
        document.getElementById("greenrod").style.visibility = 'visible';
        document.getElementById("blackrod1").style.visibility = 'visible';
        document.getElementById("blackrod2").style.visibility = 'visible';
    }
    else {
        document.getElementById("pressureCylinder").style.visibility = 'visible';
    }
    document.getElementById("fig3").style.visibility = 'hidden';
}

var enableCTRL = function ctrlrbtn() {
    document.getElementById("etbtn").onclick = enableET;
    document.getElementById("resistanceController").style.visibility = 'visible';
    document.getElementById("fig4").style.visibility = 'hidden';
}

var enableET = function etbtn() {
    if (weldEl.value == "seam") {
        document.getElementById("se1").style.visibility = 'visible';
        document.getElementById("se2").style.visibility = 'visible';
    }
    else {
        document.getElementById("tong1").style.visibility = 'visible';
        document.getElementById("tong2").style.visibility = 'visible';
    }
    document.getElementById("fig5").style.visibility = 'hidden';
    document.getElementById("fig6").style.visibility = 'visible';
    document.getElementById("wpbtn").onclick = enableWP;
}

var enableWP = function wpbtn() {
    document.getElementById("workpiece").style.visibility = 'visible';
    document.getElementById("fig6").style.visibility = 'hidden';
    document.getElementById("headComponent").style.visibility = 'hidden';
    setTimeout(() => {
        alert("Now make the connections");
        setTimeout(() => {
            alert("Turn on the power supply");
            powersupply();
        }, 400);
    }, 800);
}

instance = jsPlumb.getInstance({});
instance.setContainer("rightPanel");
var setUp = document.getElementById("resistanceTransformer");

function powersupply() {

    setUp.src = "assets/" + weldEl.value + "Setup.glb";
    setUp.classList.remove("resistanceTransformer");
    setUp.classList.add("setup");
    document.getElementById("tong1").style.visibility = 'hidden';
    document.getElementById("tong2").style.visibility = 'hidden';
    document.getElementById("resistanceController").style.visibility = 'hidden';
    document.getElementById("pressureCylinder").style.visibility = 'hidden';
    document.getElementById("motor").style.visibility = 'hidden';
    document.getElementById("greenrod").style.visibility = 'hidden';
    document.getElementById("blackrod1").style.visibility = 'hidden';
    document.getElementById("blackrod2").style.visibility = 'hidden';
    document.getElementById("se1").style.visibility = 'hidden';
    document.getElementById("se2").style.visibility = 'hidden';
    document.getElementById("powerPlug").onclick = enablePower;

    instance.bind("ready", function () {

        instance.registerConnectionTypes({
            "black-connection": {
                paintStyle: { stroke: "black", strokeWidth: 3 }
            },
            "red-connection": {
                paintStyle: { stroke: "red", strokeWidth: 3 }
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


    });
}

var enablePower = function setPower() {
    document.getElementById("powerPlug").src = "images/powerPlug2.png";
    instance.connect({
        uuids: ["p1", "p2"]
    });
    if (weldEl.value == "spot") {
        setTimeout(() => {
            alert("Connect top of cylinder with the tranformer");
            document.getElementById("top").onclick = con1;
        }, 400);
    }
    else if (weldEl.value == "seam") {
        setTimeout(() => {
            alert("Place the workpiece");
            document.getElementById("workpiece").onclick = enableWeld;
        }, 400);
    }
}

var con1 = function topCon() {
    document.getElementById("topline").style.visibility = "visible";
    setTimeout(() => {
        alert("Connect side of cylinder with the bottom tong");
        document.getElementById("side").onclick = con2;
    }, 400);
}

var con2 = function sideCon() {
    document.getElementById("sideline").style.visibility = "visible";
    setTimeout(() => {
        alert("Place the workpiece");
        document.getElementById("workpiece").onclick = enableWeld;
    }, 400);
}

var c = 0;

var enableWeld = function welding() {
    wp.style.animationPlayState = "running";
    wp.addEventListener("animationend", function () {
        wp.cameraOrbit = "30deg 80deg 90%";
        if (weldEl.value == "spot") {
            wp.style.animation = "placewp 2s linear forwards";
            setTimeout(() => {
                if (c == 0) {
                    alert("Welding Starts");
                    zoomedWelding1();
                }
            }, 2000);
        }
        else if (weldEl.value == "seam") {
            wp.style.animation = "seamwp 2s linear forwards";
            setTimeout(() => {
                if (c == 0) {
                    alert("Welding Starts");
                    zoomedWelding2();
                }
            }, 2000);
        }
    });
}

function zoomedWelding1() {
    c = 1;
    setTimeout(() => {
        document.getElementById("weldingArea").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("zoom").src = "images/zoom2.png";
        }, 2300);
        setTimeout(() => {
            document.getElementById("zoom").src = "images/zoom3.png";
        }, 4600);
        setTimeout(() => {
            document.getElementById("heat").style.visibility = "hidden";
            setTimeout(() => {
                alert("Metal is welded, go for results.");
                document.getElementById("result").disabled = false;
            }, 500);
        }, 4800);
    }, 400);
}

function zoomedWelding2() {
    c = 1;
    setTimeout(() => {
        document.getElementById("weldingArea2").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("wheel1").style.animationPlayState = "running";
            document.getElementById("wheel2").style.animationPlayState = "running";
            document.getElementById("line").style.animationPlayState = "running";
            setTimeout(() => {
                document.getElementById("wheel1").style.animationPlayState = "paused";
                document.getElementById("wheel2").style.animationPlayState = "paused";
                setTimeout(() => {
                    alert("Metal is welded, go for results.");
                    document.getElementById("result").disabled = false;
                }, 300);
            }, 7000);
        }, 300);
    }, 400);
}

function result() {
    if(weldEl.value=="seam"){
        document.getElementById("cleanWorkpiece").src = "assets/lapFinal.glb";
    }
    else if(weldEl.value=="spot"){
        document.getElementById("cleanWorkpiece").src = "assets/spotResult.glb";
    }
    document.getElementById("rightPanel").style.visibility = "hidden";
    document.getElementById("threeClick").style.visibility = "hidden";

    document.getElementById("preprocessing").disabled = true;
    document.getElementById("simulation").disabled = true;
    document.getElementById("equipmentDetails").disabled = true;

    document.getElementById("resistanceTransformer").style.visibility = 'hidden';
    document.getElementById("weldingArea").style.visibility = 'hidden';
    document.getElementById("weldingArea2").style.visibility = 'hidden';
    document.getElementById("topline").style.visibility = 'hidden';
    document.getElementById("sideline").style.visibility = 'hidden';
    wp.style.visibility = 'hidden';
    document.getElementById("powerPlug").style.visibility = 'hidden';

    document.getElementById("resultPanel").style.visibility = 'visible';
    document.getElementById("res").style.visibility = 'visible';

}