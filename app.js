// NOTE: 
// NOTE: AJAX CALLS ONLY FOR BOOK AND THEN FILTER WHAT NEEDED.
// NOTE: 

window.data = 'hi';

$(function () {
    var b = 'John';
    var v = '3:16';
    var dataString;

    $('.getVerses').on('click', function () {
        b = $('.bookName').val();
        v = $('.verseNumber').val();
        console.log(b, v);


        ajaxCall(b, v);
    });

    function dostuff(data) {
        console.log('data', data);

        var stuff = data['Joel'];

        var count = Object.keys(stuff).length;
        console.log(count);

        // console.log(stuff.length);

        for (let index = 0; index < stuff.length; index++) {
            
            
            
        }

        console.log(stuff);

        $(".result").html(stuff);


    }



    function ajaxCall(book, verse) {
        $.getJSON("books/joel.json", function () {
            console.log('success');
        })
        .done(function (data) {
            // console.log(JSON.stringify(data));
            dostuff(data);
        })
        .fail(function () {
            console.log('error');
        });
    }








});