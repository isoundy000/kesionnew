<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit"> 
<title>kesion教育平台</title>
<meta name="Keywords" content="kesion教育平台"/>
<meta name="Description" content="kesion教育平台" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<link href="<?php echo UOOT;?>Public/app/css/style.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/app/css/main.css?<?php echoHash(); ?>" rel="stylesheet" />
<script src="<?php echo UOOT;?>Public/common/js/jquery.js" type="text/javascript"></script>



</head>
<body class="bg-gary">
<div class="contentBox bRadius10 bg-white w100">
    
	<div class="infoBox">
	   <form target="hidframe"  action="<?php echo M_URL($this->AppName.'/Index','doSetting','',GP('')) ?>" method="post" id="myform">
		   <div class="webConBox">
             <div class="configTab" style="display:block;">
                 <table>
                     <tr>
                         <td class="leftTd alignRight fsize16 c-92 w300">是否开启考试模块:</td>
					     <td class="rightTd alignLife">
                
					        <input type="radio" name="setting0" value="1"  <?php if(isset($setting[0]))if($setting[0] ==1) echo 'checked'; ?> class="radioInput">
                            <span class="radioName fsize16 c-92">启用</span>
                            <input type="radio" name="setting0" value="0"  <?php if(isset($setting[0])){if($setting[0] ==0) echo 'checked';} ?> class="radioInput">
                            <span class="radioName fsize16 c-92">不启用</span>
					     </td>
                     </tr>
                     
                      <tr>
                         <td class="leftTd alignRight fsize16 c-92 w300">试卷是否需要审核：</td>
					     <td class="rightTd alignLife">
                             <input type="radio" name="setting1" value="1"  <?php if(isset($setting[1])){if($setting[1] ==1) echo 'checked';}else{echo 'checked'; } ?> class="radioInput">
                            <span class="radioName fsize16 c-92">启用</span>
                            <input type="radio" name="setting1" value="0"  <?php if(isset($setting[1])){if($setting[1] ==0) echo 'checked';} ?> class="radioInput">
                            <span class="radioName fsize16 c-92">不启用</span>

					     </td>
                      </tr>
                      <tr>
                         <td class="leftTd alignRight fsize16 c-92 w300">是否开启分类：</td>
					     <td class="rightTd alignLife">
                             <input type="radio" name="setting2" value="1"  <?php if(isset($setting[2])){if($setting[2] ==1) echo 'checked';}else{echo 'checked'; } ?> class="radioInput">
                            <span class="radioName fsize16 c-92">启用</span>
                            <input type="radio" name="setting2" value="0"  <?php if(isset($setting[2])){if($setting[2] ==0) echo 'checked';} ?> class="radioInput">
                            <span class="radioName fsize16 c-92">不启用</span>

					     </td>
                      </tr>
                     <tr>
					     <td class="leftTd alignRight w300"></td>
					     <td class="rightTd alignLife"><input type="submit"  class="generalBtn c-fff fsize16 bRadius5" value="确认" name="confirm"></td>
				   </tr>
                 </table>
             </div>
			
		   </div>
	   </form>
	   <div class="hLh40"></div>
    </div>
</div>
<script src="<?php echo UOOT;?>Public/common/js/common.js"></script>

<script>
	function aaa(){
		parent.closePopup(window.name);
	}
</script>

</body>
</html>
