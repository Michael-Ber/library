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

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title ???',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis facilis, nobis consequatur, consequuntur repellat tempore sapiente eveniet et cum modi qui sed commodi asperiores! Praesentium dolores ea quod provident rem?'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn', 'btn-danger'],
                    'true'
                ],
                [
                    'Save changes',
                    ['btn', 'btn-success', 'ml-10'],
                    'false',
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another',
                    ['btn', 'btn-warning', 'ml-10'],
                    'false',
                    () => {
                        alert('Hello world');
                    }
                ]
            ]
        }
    });  
});

// $().get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => console.log(res));
$().post('https://jsonplaceholder.typicode.com/posts', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.')
    .then(res => console.log(res));
