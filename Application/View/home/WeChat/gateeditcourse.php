<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="renderer" content="webkit"> 
    <title>微门户</title>
    <link href="<?php echo UOOT ?>Public/common/drag/css/reset.css" rel="stylesheet">
    <link href="<?php echo UOOT ?>Public/wechat/css/home.css" rel="stylesheet">
    <link href="<?php echo UOOT ?>Public/wechat/css/setgate.css" rel="stylesheet">
    <script>
    	var uoot = '<?php echo UOOT ?>';
    	var wxid = '<?php echo $wxid ;?>';	
    </script> 	
    
</head>
<body>
	<div class="loadings" id="loadings"></div>
</body>
	<script src="<?php echo UOOT ?>Public/wechat/js/microportal/zepto.js"></script>
	<script src="<?php echo UOOT ?>Public/wechat/js/microportal/current.js?version=1.0"></script>
	<script src="<?php echo UOOT ?>Public/wechat/js/setcoursegate.js?version=1.0"></script>
</html>