window.addEventListener('load', function() {
    /*banner */
    /*轮播图1 */
    /*自动轮播*/
    //自动轮播，定时器，时间。
    var banner = this.document.querySelector('.banner');
    var pics = banner.querySelectorAll('img');
    var lis = banner.querySelectorAll('li');
    var timer01 = this.setInterval(autoChange, 2000);
    var index = 0;

    function autoChange() {
        index++;
        if (index == pics.length) {
            index = 0;
        }
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = 'none'
            lis[i].className = ''

        }
        pics[index].style.display = 'block'
        lis[index].className = 'current'
    }
    //当鼠标点击圆点就对应的显示图片
    //1.当鼠标进入banner(onmouseover)区域内，自动轮播暂停。
    banner.addEventListener('mouseover', function() {
        //清除定时器
        clearInterval(timer01);
    });
    //离开后继续轮播(onmouseout)
    banner.addEventListener('mouseout', function() {
        //恢复定时器
        timer01 = setInterval(autoChange, 2000);
    });
    //2.点击圆点，跳转得到对应的图片
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function() {
            //排他思想一，包括所有圆点都不加current,所有图片也不显示
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
                pics[i].style.display = 'none';
            }
            //排他思想二，只有被点击的圆点加current，显示对应的图片
            this.className = 'current';
            index = this.getAttribute('index');
            pics[index].style.display = 'block';
        })
    }

    //让鼠标点击左边按钮就倒着走，点右边就顺着走
    var left = banner.querySelector('#left');
    var right = banner.querySelector('#right');
    left.addEventListener('click', function() {
        index--;
        if (index < 0) {
            index = pics.length - 1;
        }
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = 'none'
            lis[i].className = ''
        }
        pics[index].style.display = 'block'
        lis[index].className = 'current'
    })
    right.addEventListener('click', function() {
            autoChange();
        })
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