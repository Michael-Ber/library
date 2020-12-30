import "./lib/lib";
import $ from "./lib/lib";

// $('.active').toggleClass('helloo');

$('button').on('click', function() {
    $(this).toggleClass('active');
});

$('button').on('click', function() {
    $(this).html("i'm here");
});

$('button').on('click', function() {
    console.log($('div').eq(5).index());
});


console.log($('div').eq(5));

// const elem = $('button')[0];
// let start = null;
// function step(timeStamp) { // после каждого вызова функции timeStamp меняется ~ на 17мс, а start остается прежним 
//     if(!start) {
//         start = timeStamp;
//     }
//     console.log(start, timeStamp);
//     let progress = timeStamp - start;
//     elem.style.transform = `translateX(${+Math.min(progress/10, 200)}px)`;
//     if(progress < 2000) {
//         window.requestAnimationFrame(step);
//     }
// }
// window.requestAnimationFrame(step);

// $('button').fadeIn('5000');
$('button').click(function() {
    $('button').moveRight('4000');
});