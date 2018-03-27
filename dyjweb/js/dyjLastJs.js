$(document).ready(
function () {
    window.onresize = function (e) {
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
        $(".dyj-img-word").width(segWidth - 1);
        $(".dyj-img-word").height((segWidth - 1) * 2 / 3);
        var childCount = $("#divLastContent").children().length;
        if (winWidth >= 1500) {
            $("#divLastContent").height((childCount / 5) * $(".dyj-img-word").height() + 200);
        } else if (winWidth >= 1200 && winWidth < 1500) {
            $("#divLastContent").height((childCount / 4) * $(".dyj-img-word").height() + 200);
        }
        else if (winWidth >= 900 && winWidth < 1200) {
            $("#divLastContent").height((childCount / 3) * $(".dyj-img-word").height() + 200);
        }
        else if (winWidth >= 600 && winWidth < 900) {
            $("#divLastContent").height((childCount / 2) * $(".dyj-img-word").height() + 200);
        }
        else if (winWidth < 600) {
            $("#divLastContent").height((childCount / 1) * $(".dyj-img-word").height() + 200);
        }

    }
    for (var i = 1; i < 34; i++) {
        $("#divLastContent").append(AddSegment("dyjAboutPage.htm", "../res/imgs/last/" + i + ".jpg"));
    }

    window.onresize();

}
);



function AddSegment(textUrl, imgUrl) {

    var segment = '<div class="dyj-img-word">' +
                '<div class="dyj-img-word-img"  style="' + ' background-image: url(' + imgUrl + ');">' +
                    '<a class="dyj-img-words-link" href="' + textUrl + '" target="_blank">' +
                        '<div class="dyj-img-word-wrap">' +
                            '<div class="dyj-img-words">' +
                                ' <p> Newth青年文化社区 </p>' +
                                            '<p> 一起行动，改变世界，成为最好的自己</p>' +
                            '</div>' +
                        '</div>' +
                    '</a>' +
                '</div>' +
            '</div>';
    return segment;
}