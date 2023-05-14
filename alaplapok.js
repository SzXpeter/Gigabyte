function show() {
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