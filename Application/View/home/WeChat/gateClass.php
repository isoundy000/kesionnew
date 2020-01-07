<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="renderer" content="webkit"> 
    <title>互动列表</title>
    <link href="<?php echo UOOT ?>Public/common/drag/css/reset.css" rel="stylesheet">
    <link href="<?php echo UOOT ?>Public/wechat/css/home.css" rel="stylesheet">
    <link href="<?php echo UOOT;?>Public/app/fonts/iconfont.css?<?php echoHash(); ?>" rel="stylesheet" />
    <link href="<?php echo UOOT ?>Public/wechat/css/intention.css" rel="stylesheet">
    <link href="<?php echo UOOT ?>Public/wechat/css/graphic.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo UOOT ?>Public/wechat/css/campus.css"/>
    <script>
    	var uoot = '<?php echo UOOT ?>';	
    </script> 	
    <style type="text/css">
    	body{
    		padding-top:0.5rem;
    	}
    	.add{
			width: 2.5rem;
			height: 2.5rem;
			background: -webkit-linear-gradient(top,#007BED,#00AEEB); /* Safari 5.1 - 6.0 */
		    background: -o-linear-gradient(top,#007BED,#00AEEB); /* Opera 11.1 - 12.0 */
		    background: -moz-linear-gradient(top,#007BED,#00AEEB); /* Firefox 3.6 - 15 */
			background: linear-gradient(top,#007BED,#00AEEB);
			position: fixed;
			bottom: 40px;
			left: 0;
			right:0;
			margin: auto;
			border-radius: 50%;
			line-height: 50px;
			text-align: center;
			
		}
		.add img{
			vertical-align: middle;
			max-width: 100%;
		}
    </style>
</head>
	<body>
    	<div id="classlist" class="wrap" v-cloak>
    		<template v-if="classArr.length>0">
	    		<div class="graphic-item" v-for="(item,index) of classArr" :key="item.classid">
	    			<div class="graphic-item-t" @click="open(item.url)">
	    				<div class="img-wrap">
	    					<img :src="item.defaultpic" alt="" />
	    				</div>
	    				<div class="info">
	    					<div class="title">{{item.title}}</div>
	    					<div class="price-wrap">
	    						<div class="price-type active" v-if="item.status==2">已上架</div>
	    						<div class="price-type" v-if="item.status==0 ">已下架</div>
	    						<div class="price" v-if="item.chargetype==0">免费</div>
	    						<div class="price" v-else-if="item.chargetype==1">{{item.price}}</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div class="graphic-item-b">
	    				<div class="item" v-if="item.status==0 " @click="shelf(item.classid,index,2)">上架</div>
	    				<div class="item" v-if="item.status==2" @click="shelf(item.classid,index,0)">下架</div>
	    				<div class="item" @click="share(item.classid,index)">分享</div>
	    				<!--<a class="item" :href="'<?php echo UOOT ?>'+item.posterurl">生成海报</a>-->
	    			</div>
	    		</div>
	    	</template>
	    	<template v-else><div class="nodata"></div></template>
    		
    		<div class="masked" v-show="confirmFlag" @click="confirmFlag=false"></div>
    		<div class="confirm" v-show="confirmFlag">
				<div class="confirm-header">提示</div>
				<div class="confirm-content">
					确定执行此操作
				</div>
				<div class="confirm-btn-wrap">
					<div class="btn cancel" @click="cancel">取消</div>
					<div class="btn sur" @click="sure">确定</div>
				</div>
			</div>
			<!--全局确认框-->
			<div class="masked" v-show="shareFlag" @click="shareFlag=false"></div>			
			<div class="confirm" v-show="shareFlag" style="width: 95%;">
				<div class="confirm-header">分享设置</div>
				<div class="share-content">
					<div class="title2">分享标题</div>
					<input type="text" class="input" v-model="shareInfo.sharetitle"/>
					<div class="title2">分享封面</div>
					<div class="cover-wrap">
						<div class="img-wrap">
							<img :src="shareInfo.sharepic" alt="" />
						</div>
						<div class="info">
							<div class="tips">图片要求300*300以上,方形像素</div> 
							<label class="btn" for="file">修改封面</label>
							<input type="file" id="file" @change="inchangeCover" style="display: none;"/>
						</div>
					</div>
					<div class="title2">分享说明</div>
					<textarea class="explain" v-model="shareInfo.shareintr"></textarea>
				</div>
				<div class="confirm-btn-wrap">
					<div class="btn cancel" @click="shareCancel">取消</div>
					<div class="btn sur" @click="shareSure">确定</div>
				</div>
			</div>
			<!-- 全局提示框 -->
			
		    <div v-show="visible" class="dialog-tips dialog-center">
		          <div>{{message}}</div>
		    </div>
    	</div>
		<!--<div class="courselist" id="courselist">
			
		</div>
		<div class="loadings" id="loadings"></div>
		<div class="add" onclick="location.href='<?php echo M_URL('WeChat','addcourse')?>'">
			<img src="<?php echo UOOT ?>Public/wechat/images/add.png"/>
		</div>-->
	</body>
	<script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <script src="<?php echo UOOT ?>Public/wechat/js/share.js" type="text/javascript"></script>
	<script src="<?php echo UOOT ?>Public/common/js/currency/gate.js" type="text/javascript"></script>
	<script type="text/javascript">
		module.import('gateClass')
	</script>
</html>