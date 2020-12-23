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

// console.log($('div').eq(1).find('.some'));
// console.log($('.more').closest('.active'));
console.log($('div').eq(0).siblings());