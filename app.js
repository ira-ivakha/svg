
$(document).ready(function() {
    $('#fullpage').fullpage();
});

document.getElementById('start-draw-chart').onclick = function(){
    document.getElementById('pie-wrapper').classList.add('pie-animated');
};

document.getElementById('chart-progress').onchange = function(){
    document.getElementById('pie-progress').style.strokeDasharray = ''+ this.value*526/100 + ' 526' ;
};

//
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var myColor = 'red';
//
// document.getElementById('color').oninput = function(){
//     myColor = this.value;
// }
//
//
//
// canvas.onmousedown = function(event){
//     canvas.onmousemove = function(event){
//         var x = event.offsetX;
//         var y = event.offsetY;
//         ctx.fillRect(x-5, y-5, 10, 10);
//         ctx.fillStyle = myColor;
//         ctx.fill();
//     }
//     canvas.onmouseup = function(){
//         canvas.onmousemove = null;
//     }
// }