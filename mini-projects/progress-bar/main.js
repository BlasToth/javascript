const prog = document.getElementById('file');
const para = document.getElementById('para');
prog.value = 0;

function incrementBar() {
    para.innerText = prog.value++ + " %";
}

setInterval(incrementBar, 500);

