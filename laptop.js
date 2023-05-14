function show() {
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