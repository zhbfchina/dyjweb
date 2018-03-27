
$(document).ready(
function () {
    $("#divMainImg").height((window.innerWidth / 1.7));



    window.onresize = function (e) {
        $("#divMainImg").height((window.innerWidth / 1.7));

        $(".dyj-img-over-word").height($(".dyj-img-over-word").width() / 1.5);
        $(".dyj-img-over-word-companer").height($(".dyj-img-over-word-companer").width() / 1.5);

        var winWidth = document.documentElement.clientWidth;
        var winHeight = document.documentElement.clientHeight;
        var segWidth = 300;
        if (winWidth >= 1500) {
            segWidth = winWidth / 5;
        } else if (winWidth >= 1200 && winWidth < 1500) {
            segWidth = winWidth / 4;
        }
        else if (winWidth >= 900 && winWidth < 1200) {
            segWidth = winWidth / 3;
        }
        else if (winWidth >= 600 && winWidth < 900) {
            segWidth = winWidth / 2;
        }
        else if (winWidth < 600) {
            segWidth = winWidth;
        }
        $(".dyj-img-word").width(segWidth - 5);
        $(".dyj-img-word").height((segWidth - 5) * 2 / 3);

    }
    window.onresize();
}

);