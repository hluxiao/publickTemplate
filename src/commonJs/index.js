const common = {
    //自适应中间内容区
    initCotentH:function(){
        let initH = document.body.clientHeight || document.documentElement.clientHeight,
                navBarH = document.getElementsByClassName("van-nav-bar")[0]?document.getElementsByClassName("van-nav-bar")[0].offsetHeight:0,
                searchH = document.getElementById("search")?document.getElementById("search").offsetHeight:0,
                tabBarH = document.getElementsByClassName("van-tabbar--fixed")[0]?document.getElementsByClassName("van-tabbar--fixed")[0].offsetHeight:0,
                contentScrollH = document.getElementById('contentWrap');
        contentScrollH.style.height = (initH-navBarH-tabBarH-searchH) + 'px'             
    },
}

export default common;