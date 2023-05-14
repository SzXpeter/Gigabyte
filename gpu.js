function show() {
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