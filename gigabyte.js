
//NAVBAR
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
} 

//MOTHERBOARD
function motherboardShow() {
  var intel = document.getElementById("intel")
  var amd = document.getElementById("amd")
  var intelToggle = document.getElementById("intelCheckBox")
  var amdToggle = document.getElementById("amdCheckBox")

  if (intelToggle.checked) {
      intel.style.display = "block"
  } else {
      intel.style.display = "none"
  }

  if (amdToggle.checked) {
      amd.style.display = "block"
  } else {
      amd.style.display = "none"
  }
}

//GPU
function gpuShow() {
  var nvidiaToggle = document.getElementById("nvidiaCheckbox")
  var amdToggle = document.getElementById("amdCheckbox")
  var nvidia = document.getElementById("nvidiaCards")
  var amd = document.getElementById("amdCards")

  if (nvidiaToggle.checked) {
      nvidia.style.display = "block"
  }
  else {
      nvidia.style.display = "none"
  }
  if (amdToggle.checked) {
      amd.style.display = "block"
  }
  else {
      amd.style.display = "none"
  }
}

//LAPTOP
function laptopShow() {
  var cpu = document.getElementById("cpu")
  var gpu = document.getElementById("gpu")
  var both = document.getElementById("both")
  var cpuToggle = document.getElementById("cpuCheckbox")
  var gpuToggle = document.getElementById("gpuCheckbox")

  if (cpuToggle.checked) {
      cpu.style.display = "block"
  } else {
      cpu.style.display = "none"
  }

  if (gpuToggle.checked) {
      gpu.style.display = "block"
  } else {
      gpu.style.display = "none"
  }

  if (cpuToggle.checked && gpuToggle.checked) {
      both.style.display = "block"
      cpu.style.display = "none"
      gpu.style.display = "none"
  } else {
      both.style.display="none"
  }
}

//MONITOR
var range = document.getElementById("rangeSelect")
var first = document.getElementById("firstHZ")
var second = document.getElementById("secondHZ")
var third = document.getElementById("thirdHZ")
var fourth = document.getElementById("fourthHZ")

first.style.display = "block"

range.addEventListener("input", function monitorShow(){
    if (range.value == 0) {
        first.style.display = "block"
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "none"
    }
    else if (range.value == 1) {
        first.style.display = "none"
        second.style.display = "block"
        third.style.display = "none"
        fourth.style.display = "none"
    }
    else if (range.value == 2) {
        first.style.display = "none"
        second.style.display = "none"
        third.style.display = "block"
        fourth.style.display = "none"
    }
    else if (range.value == 3) {
        first.style.display = "none"
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "block"
    }
})

//SUPPORT
function getData(selectId)
{
    value = document.getElementById(selectId).value
    console.log(selectId + ": " + value)
}