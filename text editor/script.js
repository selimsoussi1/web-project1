function changeColor() {
    var color = document.getElementById('colorPicker').value;
    document.getElementById('editor').style.color = color;
}

function changeFontSize() {
    var fontSize = document.getElementById('fontSize').value + 'px';
    document.getElementById('editor').style.fontSize = fontSize;
}

function changeFontFamily() {
    var fontFamily = document.getElementById('fontFamily').value;
    document.getElementById('editor').style.fontFamily = fontFamily;
}