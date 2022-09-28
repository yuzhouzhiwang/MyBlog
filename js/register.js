window.addEventListener('load', function() {
    //tab栏切换
    var p01 = document.querySelector('.p01')
    var spans = p01.querySelectorAll('span')
    var forms = document.querySelectorAll('form')
    for (var i = 0; i < spans.length; i++) {
        //利用循环遍历每一个span，绑定点击事件
        spans[i].setAttribute('index', i)
            //给每一个span加上index属性，值为i
            //此时普通邮箱的index值为0，VIP邮箱的index值为1
        spans[i].onclick = function() {
            //排他思想一，清除所有span上的类
            for (var i = 0; i < spans.length; i++) {
                spans[i].className = ''
            }
            //排他思想二，给当前点击的span加上类
            this.className = 'current'
                //当span被点击时，立马获取到index值，将其存入一个变量中。
            var index = this.getAttribute('index')
            for (var i = 0; i < forms.length; i++) {
                //排他思想一，让每一个form都先隐藏
                forms[i].style.display = 'none';
            }
            //排他思想二，让当前被击的span对应的form显示。
            forms[index].style.display = 'block';
        }
    }
    //下拉菜单
    var lists = this.document.querySelectorAll('.list');
    for (var i = 0; i < lists.length; i++) {
        lists[i].addEventListener('mouseover', function() {
            this.children[1].style.display = 'block'
        })
        lists[i].addEventListener('mouseout', function() {
            this.children[1].style.display = 'none'
        })
    }
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
    var time = setInterval(getTime, 10);

})