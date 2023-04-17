function feliratValtozas() {
    value = document.getElementById('felirat').value;
    document.getElementById('udvozlet').innerText = value;
}

function betumeretValtozas() {
    value = document.getElementById('betumeret').value;
    document.getElementById('udvozlet').style.fontSize = value + 'px';
}

function hatterszinValtozas() {
    value = document.getElementById('hatterszin').value;
    document.getElementById("minta").style.backgroundColor = value;
}

// function balkepvaltozas() {
//     value = document.querySelector("#kepbal").value;
//     document.querySelector("#kep1").src = value;
// }

// function jobbkepvaltozas() {
//     value = document.querySelector("#kepjobb").value;
//     document.querySelector("#kep2").src = value;
// }

function kepValtozas(selectId, kepId) {
    value = document.getElementById(selectId).value;
    document.getElementById(kepId).src = value;
}