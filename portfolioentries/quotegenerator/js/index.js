/*var isInIframe = windowStatus();
var url = "http://http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";*/
<script
var currentQuote = 'I am Superman';
var currentAuthor = 'Superman';


/*function windowStatus() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};*/

$(document).ready(function () {
/*    $('#twitterbutton').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));*/

   /* $('#waxbutton').click(function () {
        $.ajax({
            url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function (data) {
                var post = data.shift(); // The data is an array of posts. Grab the first one.
                currentAuthor = $('#quote-title').text(post.title);
                currentQuote = $('#quote-content').html(post.content);

                // If the Source is available, use it. Otherwise hide it.
                if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                    $('#quote-source').html('Source:' + post.custom_meta.Source);
                } else {
                    $('#quote-source').text('');
                }
            },
            cache: false
        });
    });
*/
    document.getElementById("quote").innerHTML = '"' + currentQuote + '"';
    document.getElementById("author").innerHTML = ' - ' + currentAuthor + '.';
//};

/*
$('#twitterbutton').click(function () {
    var url = 'https://twitter.com/intent/tweet?hashtags=quotes&text=';
    url += '"';
    url += currentQuote;
    url += '" - ';
    url += currentAuthor;
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
});
*/

