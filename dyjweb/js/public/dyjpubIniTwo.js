
$(document).ready(
function () {
    $("#divMainImg").height(window.innerHeight);
    var musicDom = document.getElementById("music");
    if (musicDom) {
        musicDom.play();
    }
    $("#linkToComparer").click(function () {
        window.location = "../dyjComparerPage.htm";
    });

    $("#linkToAbout").click(function () {
        window.location = "../dyjAboutPage.htm";
    });

    $("#linkToLast").click(function () {
        window.location = "../dyjLastPage.htm";
    });

    $("#linkToMain").click(function () {
        //        window.location = "../page/dyjMainPage.htm";
        window.location = "../dyjMainPage.htm";
    });


    $("#linkToTwo").click(function () {
        window.location = "dyjNewthWalk.htm";
    });

    $("#linkToThree").click(function () {
        window.location = "dyjNewthChallenge.htm";
    });

    $("#linkToFour").click(function () {
        window.location = "dyjNewthFind.htm";
    });
    $("#linkToFive").click(function () {
        window.location = "dyjNewHouse.htm";


    });
//      window.onresize = function (e) {
//            var winWidth = document.documentElement.clientWidth;
//            var winHeight = document.documentElement.clientHeight;
//            var segWidth = 0;
//            if (winWidth >= 800) {
//                segWidth = winWidth / 3;
//            } 
//            else   {
//                segWidth = winWidth;
//            }

//            $(".dyj - footer - logo").width(segWidth-20);
//            $(".dyj-footer-right").width(segWidth - 20);
//            $(".dyj-footer-center").height(segWidth -20);

//        }
//        window.onresize();
}

);