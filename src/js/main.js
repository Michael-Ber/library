import "./lib/lib";
import $ from "./lib/lib";


$('.btn-primary').click(function() {
    $('.text1').fadeOut('4000');
});
$('.btn-success').click(function() {
    $('.text1').fadeIn('4000');
});
$('.btn-warning').click(function() {
    $('.text1, .text2').fadeToggle('4000');
});

