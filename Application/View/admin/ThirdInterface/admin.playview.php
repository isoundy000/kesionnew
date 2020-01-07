<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>测试页面</title>
    <link rel="stylesheet" href="//g.alicdn.com/de/prismplayer/1.5.7/skins/default/index.css" />
    <script type="text/javascript" src="//g.alicdn.com/de/prismplayer/1.5.7/prism-min.js"></script>
</head>
<body>
<div id="J_prismPlayer" class="prism-player"></div>
<!— prism-player为h5播放器皮肤的钩子类名，请务必加上 —>
<button id="J_clickToPlay" type="button">播放</button>
<script>
    // 初始化播放器
    var player = new prismplayer({
        id: "J_prismPlayer", // 容器id
        source: "http://live.kesion.com/AppName/StreamName.flv",// 视频地址
        autoplay: false,    //自动播放：否
        width: "100%",       // 播放器宽度
        height: "400px"      // 播放器高度
    });
    var clickDom = document.getElementById("J_clickToPlay");
    clickDom.addEventListener("click", function(e) {
    // 调用播放器的play方法
        player.play();
    });
    // 监听播放器的pause事件
    player.on("pause", function() {
        alert("播放器暂停啦！");
    });
</script>
</body>