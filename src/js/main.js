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

function test() {
    console.log('1');
    const _test1 = () => {
        return 1+1;
    };
    return _test1();
}

const a = test();
console.log(a);