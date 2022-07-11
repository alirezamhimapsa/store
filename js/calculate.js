function keysubmit(key) {
    document.getElementById('del').value += key;
}

function delet() {
    document.getElementById('del').value = "";
}

function equal() {
    document.getElementById('del').value = eval(document.getElementById('del').value);
}