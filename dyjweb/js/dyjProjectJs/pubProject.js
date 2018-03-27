
$(document).ready(function () {
    $("#divMainImg").height((window.innerWidth / 1.7));

    window.onresize = function (e) {
        $("#divMainImg").height((window.innerWidth / 1.7));

        $(".dyj-project-img-word-img").height($(".dyj-project-img-word-img").width() / 1.5);
        $(".dyj-img-over-word-Project").height($(".dyj-img-over-word-Project").width() / 1.5);
        $("#divProjectContent").height($(".dyj-border-div").height() + 40);
   
    }
    window.onresize();
});