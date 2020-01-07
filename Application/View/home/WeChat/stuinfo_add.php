<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="renderer" content="webkit"> 
    	<title>添加学员</title>
    <link href="<?php echo UOOT ?>Public/common/drag/css/reset.css" rel="stylesheet">
    <link href="<?php echo UOOT ?>Public/wechat/css/home.css" rel="stylesheet">
    <link href="<?php echo UOOT ?>Public/wechat/css/signin.css?201897" rel="stylesheet">
    <link href="<?php echo UOOT;?>Public/app/fonts/iconfont.css?<?php echoHash(); ?>" rel="stylesheet" />
    <script src="<?php echo UOOT;?>Public/common/js/jquery.js"></script> 
    <script>var uoot = '<?php echo UOOT ?>'; </script> 	
</head> 
<body >
	<form action="<?php echo M_URL('WeChat','dostuinfoadd','',GP('usertype-0')) ?>" method="post" id='myform' enctype="multipart/form-data">
	<div class="stuadd-list">
		
		<div id="upimg" class="clearfix">
			<div class="stuinfo-name">
				学生头像
			</div>
			<input type="file" name="defaultpic" id="uploads" style="width: 100%;" value="<?php if(!empty($userinfo)){echo Img($this->upload->getHead($userid)).'?'.rand(0,9999);}else{ echo nopic(6);} ?>" />
			<div class="imgbox" id="imgbox"><img id="thisimg" src="<?php if(!empty($userinfo)){echo Img($this->upload->getHead($userid)).'?'.rand(0,9999);}else{ echo nopic(6);} ?>"/>
				<div class="icon-txt"></div>
				<img class="camera" src="<?php echo UOOT ?>Public/wechat/images/camera.png"/>
				
			</div>
		</div>
		<ul>
			<li>
				<h4>学生姓名：</h4>
				<div>
					<input type="text" name="membername" id="" value="" />
				</div>
			</li>
			<li>
				<h4 style="top: 1rem;">性别：</h4>
				<div id="sex">
					
					<button type="button" id="sexb" onclick="sex(1)" class="active"  >男</button>
					<button type="button" id="sexg" onclick="sex(2)" >女</button>
					<input type="hidden" name="Sex" value="1" />
				</div>
			</li>
			<li>
				<h4>联系电话：</h4>
				<div>
					<input type="number" name="mobile"  placeholder="请输入联系方式" />
				</div>
			</li>
			<li>
				<h4>紧急联系人：</h4>
				<div>
					<input type="" name="emergencyContact" placeholder="请输入联系人"/>
				</div>
			</li>
			<li>
				<h4>紧急联系人电话：</h4>
				<div>
					<input type="number" name="emergencyContactTel" placeholder="请输入紧急人联系联系方式"/>
				</div>
			</li>
			<li>
				<h4>出生年月：</h4>
				<div>
					<input type="date" name="birthday"  placeholder="请输入联系人" />
				</div>
			</li>
		
			<li>
				<h4>学员账号：</h4>
				<div>
					<input type="" name="username" placeholder="请输入学员账号" />
				</div>
			</li>
			<li>
				<h4>密码：</h4>
				<div>
					<input type="" name="password" placeholder="请输入密码" />
				</div>
			</li>
			
		    <li class="stuinfo-li">
				<h4>所在地区</h4>
				<div>
					<?php echo $link->Linkage(1);?>   
				</div>
			</li>
			<li class="stuinfo-li">
				<h4>所在校区</h4>
				<div>
					<select  class="form-textbox " name="schoolid">
              			<option value="0">请选择</option>
              			<?php foreach($schoolAry as $k =>$v){?>
              			<option value="<?php echo $v['schoolid'] ?>" ><?php echo $v['school'] ?></option>
              			<?php }?>
              		</select>
				</div>
			</li>
		</ul>
		
		
		
	</div>
	</form>
	<footer class="footer">
		<div class="clearfix">
			<div class="zui-col-6">
				<div class="footer-foticon fb-white"onclick="history.go(-1)">
					取消
				</div>
			</div>
			<div class="zui-col-6" onclick="do_reg();">
				<div class="footer-foticon fb-blue">
					保存
				</div>
			</div>
		</div>
	</footer>
	<!--<script src="<?php echo UOOT ?>Public/common/js/z.methodLibrary.js" type="text/javascript"></script>-->
	<script type="text/javascript">
		function do_reg(){
			$('#myform').submit();
		}
        var oImg = $('#thisimg');
        document.getElementById('uploads').onchange =function(){  
            var url = window.URL.createObjectURL(this.files.item(0))  
            oImg.attr('src',url);  
        }  
       // oImg.src = getFileUrl(this);  
	    function getFileUrl(sourceId) {  
	        var url;  
	        if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE  
	            url = sourceId.value;  
	        } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox  
	            url = window.URL.createObjectURL(sourceId.files.item(0));  
	        } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome  
	            url = window.URL.createObjectURL(sourceId.files.item(0));  
	        }  
	        return url;  
	    }; 
	    function sex(sex){
	    	$('[name=Sex]').val(sex);
	    	if(sex == 1){
	    		$('#sexb').addClass("active");
	    		$('#sexg').removeClass();
	    	}else{
	    		$('#sexg').addClass("active");
	    		$('#sexb').removeClass();	
	    	}

	    }
	</script>
	<script src="<?php echo UOOT;?>Public/common/js/common.js"></script>
</body>
</html>