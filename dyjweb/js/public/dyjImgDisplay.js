$(document).ready(
function () {
    var isMove = false;
    var moveDistance = 0;
    var sx = 0;
    var sy = 0;

    var ex = 0;
    var ey = 0;
    var scrollPosition = 0;
    $(".dyj-img-lst-img").mousedown(function (e) {
        isMove = true;
        sx = e.offsetX;
        sy = e.offsetY;
        segx = e.offsetX;
        segy = e.offsetY;
    });
    $(".dyj-img-lst").mouseup(function (e) {
        isMove = false;
    });
    $(".dyj-img-lst").mousemove(function (e) {
        if (isMove) {
            ex = e.offsetX;
            ey = e.offsetY;
            var tempDistance = Math.pow((ex - sx), 2) + Math.pow((ey - sy), 2);
            moveDistance = Math.pow(tempDistance, 0.5);
            if (moveDistance < 20) {
                return;
            }
            if (ex > sx) {
                $(".dyj-img-lst-wrap").scrollLeft($(".dyj-img-lst-wrap").scrollLeft() - moveDistance);
            } else {
                $(".dyj-img-lst-wrap").scrollLeft($(".dyj-img-lst-wrap").scrollLeft() + moveDistance);
            }

        }

    });

    $("#aImgLeft").mousedown(function (e) {
        $(".dyj-img-lst-wrap").scrollLeft($(".dyj-img-lst-wrap").scrollLeft() - 600);

    });

    $("#aImgRight").mousedown(function (e) {

        $(".dyj-img-lst-wrap").scrollLeft($(".dyj-img-lst-wrap").scrollLeft() + 600);
    });

}
);