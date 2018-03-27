
function setDray(className) {
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
        $("." + className).width(segWidth);
        $("." + className).height(segWidth * 2 / 3);
    }
} 