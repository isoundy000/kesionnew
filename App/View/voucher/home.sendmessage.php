<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<title>kesion教育平台</title>
<meta name="Keywords" content="kesion教育平台"/>
<meta name="Description" content="kesion教育平台" />
<link href="<?php echo UOOT;?>Public/app/css/style.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/app/css/common.css" rel="stylesheet">
<link href="<?php echo UOOT;?>Public/app/css/reset.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/app/css/form.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/app/css/laydate.css" rel="stylesheet">
<script src="<?php echo UOOT;?>Public/common/js/jquery.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo UOOT;?>Public/common/js/layer/laydate.js"></script>
<style>
	.ml30{position: relative;top: 5px; margin-left: 20px!important;}
	.span-inline label{display: block;float: none!important;margin-bottom: 10px;}
	label{display: block;float: none;}
</style>
</head>
<body class="ks-wrap"> 
 	<form target="hidframe" id="myform"  action="<?php echo M_URL($this->AppName.'/Index','dosendmessage',$id,GP(''));?>"  method="post" enctype="multipart/form-data">
	<div id="ksBoxContent" class="view-content">
		<!--公告-->
		<div class="message">
			<div class="form-row clearfix">
				<?php 
					$Data006['wxid']      = $this->wxid;
					$Data006['modelname'] = 'Sendvoucher'; 
					$IndexModel = M('Application/IndexModel');
					echo $IndexModel->show_mail($Data006);
				?>
          	</div>
	    </div>	
   </div>		
   </form>
   <div id="ksBoxFooter" class="form-footer clearfix" >
		<span class="d-inline-block">
			<input type="button" onClick="do_reg()"  class="ks-bt bt-pue mr10" value="开始发送" name="save">
	       	<input type="button" onClick="closeSend()" class="ks-bt bt-def" value="取消">
		</span>
   </div>
<script src="<?php echo UOOT;?>Public/common/js/common.js"></script>
<script>
datatime('#datatime');//时间
function closeSend(){
	 top.closePopup(window.name );//g关闭弹窗
}
function do_reg(){
	var title      = $("input[name='title']").val();
	var content    = $("textarea[name='content']").val();
	var inputer    = $("input[name='inputer']").val();
    if(title==''){Alert('标题不能为空');return false;}	
	if(content==''){Alert('内容不能为空');return false;}	
	if(inputer==''){Alert('发件人不能为空');return false;}
	$('#myform').submit();
}
</script>
</body>
</html>
