window.addEventListener('load', function() {
    /*无缝滚动 */
    let box = document.querySelector(".box");
    // let widthS = document.getElementById("widthS").offsetWidth;
    let span = box.querySelector('span');
    box.innerHTML += box.innerHTML;
    let left = 0;
    let time = setInterval(rolling, 35);
    let widthS = 836 * 2;

    function rolling() {
        left -= 2;
        if (left == -(widthS)) {
            left = 0;
        }
        box.style.left = left + "px";
    }
    box.addEventListener("mouseover", function() {
        clearInterval(time);
    })
    box.addEventListener("mouseout", function() {
            time = setInterval(rolling, 35);
        })
        //倒计时
    function getTime() {
        var date = new Date(); //获取当前时间
        var date2 = +new Date('2023-6-30 00:00:00'); //得到任意日期
        var times = (date2 - date) / 1000; //获取秒数
        var d = parseInt(times / 60 / 60 / 24); //天
        d = d < 10 ? '0' + d : d;
        var h = parseInt(times / 60 / 60 % 24); //小时
        h = h < 10 ? '0' + h : h;
        var minute = parseInt(times / 60 % 60); //分
        minute = minute < 10 ? '0' + minute : minute;
        var haominu = parseInt(times % 60); //秒
        haominu = haominu < 10 ? '0' + haominu : haominu;
        var day = document.getElementById('day');
        //通过id名获取对应的元素，如第一个span
        day.innerText = d;
        //第一个span存入内容d
        var h1 = document.getElementById('h1');
        h1.innerText = h;
        var miu1 = document.getElementById('miu1');
        miu1.innerText = minute;
        var miao1 = document.getElementById('miao1');
        miao1.innerText = haominu;
    }
    var time01 = setInterval(getTime, 10);
})