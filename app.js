function go() {
    let slider = document.getElementById('myRange');
    slider.oninput = function() {
        outp =   this.value
    }
}
function goOne() {
    let slider1 = document.getElementById('myRange1');
    slider1.oninput = function() {
        out =   this.value
    }
}
function goTwo() {
    let slider2 = document.getElementById('myRange2');
    slider2.oninput = function() {
        ou =   this.value
    }
}
function changeColor(){
	var a = document.querySelector(".screen");
    var color = 'rgb('+ outp + ',' + out + ',' + ou +')';
    a.style.backgroundColor = color;
    a.innerHTML = color;
}








