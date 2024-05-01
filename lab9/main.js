document.addEventListener("DOMContentLoaded", function () {
    var leftArea = document.getElementById("left");
    var leftCircle = leftArea.children[0];
    var rightArea = document.getElementById("right");
    var rightCircle = rightArea.children[0];
    var vs = document.getElementById("vs");

    leftArea.addEventListener("click", function () {
        var i = parseInt(leftCircle.innerText) + 1;
        var l = i + 1;
        leftCircle.innerText = i;
        leftArea.style.flex = l;
        var r = parseInt(rightArea.style.flex || 1);
        vs.style.left = (100 * l / (l + r)) + "%";
    });

    rightArea.addEventListener("click", function () {
        var n = parseInt(rightCircle.innerText) + 1;
        var m = n + 1;
        rightCircle.innerText = n;
        rightArea.style.flex = m;
        var l = parseInt(leftArea.style.flex || 1);
        vs.style.left = (100 * l / (l + m)) + "%";
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            var i = parseInt(leftCircle.innerText) + 1;
            var l = i + 1;
            leftCircle.innerText = i;
            leftArea.style.flex = l;
            var r = parseInt(rightArea.style.flex || 1);
            vs.style.left = (100 * l / (l + r)) + "%";
        } else if (event.key === "ArrowRight") {
            var n = parseInt(rightCircle.innerText) + 1;
            var m = n + 1;
            rightCircle.innerText = n;
            rightArea.style.flex = m;
            var l = parseInt(leftArea.style.flex || 1);
            vs.style.left = (100 * l / (l + m)) + "%";
        }
    });
});
