window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
function remove_screen(e) {
    if ($(e).parent().parent().attr('id') != 'list_1') {
        $(e).parent().parent().remove()
    }
}
function remove_video(e) {
    if ($(e).parent().parent().attr('id') != 'list_1') {
        $(e).parent().parent().remove()
    }
}
$(function () {
    console.log("comes");

    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;
    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    
    var greet_ele = document.getElementById('greeting');
    if  (greet_ele !=  null) {
        document.getElementById('greeting').innerHTML = '<b>' + greet + '</b>';
    }


    $("#add_screen").on("click", function() {
        console.log("add screen");
        
        var default_ = $('.screen_lists #list_1').clone();
        var len = $('.screen_lists .row').length;
        default_.attr('id', 'list_'+(len+1));

        $('.screen_lists').append(default_)

    });

    $("#add_video").on("click", function() {
        console.log("add video");
        
        var default_ = $('.video_lists #list_1').clone();
        var len = $('.video_lists .row').length;
        default_.attr('id', 'list_'+(len+1));

        $('.video_lists').append(default_)

    });
})
