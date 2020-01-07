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
<link href="<?php echo UOOT;?>Public/app/css/live.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/app/css/main.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/app/fonts/iconfont.css?<?php echoHash(); ?>" rel="stylesheet" />
<!--<link href="Public/app/css/layer.css?<?php echoHash(); ?>" rel="stylesheet" />-->
<script src="<?php echo UOOT;?>Public/common/js/jquery.js"></script>
<style>
.courseList li{ position:relative; padding-left:229px;min-height:189px;padding-top:20px; padding-bottom:20px; padding-right:20px; border-bottom:1px solid #eee;}
.courseList li .tface{width:189px;height:189px; position:absolute;left:20px;top:20px; text-align:center;}
.borders{ border: 1px solid #eee}
.txt-sm {font-size:16px;color:red}
 label{display:inline-block;vertical-align:middle}
</style>
</head>
<body class="bg-gary">
<ul class="liveTab clearfix mb30">
   <li class="fl curr">
        <a href="<?php echo M_URL($this->AppName.'/Index','index','',GP('')); ?>" class="alignCenter">
            <span class="block  hLh40">
                 <i class="icon iconfont">&#xe609;</i>
            </span>
            <span class="block hLh35 fsize14">试卷管理</span>
        </a>
    </li>
   <li class="fl">
        <a href="<?php echo M_URL($this->AppName.'/Index','TkIndex','',GP('')); ?>" class="alignCenter">
            <span class="block  hLh40">
                  <i class="icon iconfont">&#xe673;</i>
            </span>
            <span class="block hLh35 fsize14">题库管理</span>
        </a>
    </li>
    <li class="fl">
        <a href="<?php echo M_URL($this->AppName.'/Index','paperAdd','',GP('')); ?>" class="alignCenter">
            <span class="block hLh40">
<i class="icon iconfont">&#xe748;</i>
            </span>
            <span class="block hLh35 fsize14">试卷添加</span>
        </a>
    </li>
    <li class="fl">  
        <a href="<?php echo M_URL($this->AppName.'/Index','addTk','',GP('')); ?>" class="alignCenter">
            <span class="block hLh40">
                <i class="icon iconfont">&#xe748;</i>
            </span>
            <span class="block hLh35 fsize14">题库添加</span>
        </a>
    </li>
</ul>
<div class="clear"></div>
<div class=" contentBox bRadius10 bg-white editPerson p20">
    <div class="generalTitle" style="margin-bottom: 30px">
        <span class="gTitle fsize18 c-3e verAlignMiddle">制作考卷</span>
        <a class="generalBeen c-fff fsize16 bRadius5 fr" >返回</a>
    </div>
    <div class="borders" style="padding: 0 20px" style="margin-bottom:30px">
    <form target="hidframe"  id="myform"  action="<?php echo  M_URL($this->AppName.'/Index','addTmtype',$paperid,GP('')) ?>" method="post">
    <div class="clearfix p10 borderBso">
        <label class="mr20 fsize14 c-92">
            试题类型：
            <select class="w150 inputText bRadius5" id="keytype1" name="tktype">
                    <option value="1">单选题</option>
                    <option value="2" >填空题</option>
                    <option value="3" >判断题</option>
                    <option value="4" >问答题</option>
                    <option value="5" >材料题</option>
            </select>
        </label>
        <label class="mr20 fsize14 c-92">
           显示为：
            <input type="text" class="w150 inputText bRadius5" name="title">
        </label>
        <label class="mr20 fsize14 c-92">
           每题分值：
           <input type="text" class="w150 inputText bRadius5" name="score">
        </label>
       
    </div>
    <div class="clearfix p10 borderBso">
        <label class="mr20 fsize14 c-92">
           说明：
            <input type="text" class="w150 inputText bRadius5" name="intro">
        </label>
    </div>
    <div class="clearfix p10 "><button class="generalBtn c-fff fsize16 " type="button" onClick="do_reg()">确定</button></div>
   </form>
</div>
 <form  action="<?php echo  M_URL($this->AppName.'/Index','tmtypeBatch',$paperid,GP('')) ?>" method="post">
<?php $end = count($tmType);  $count = 0;   
             foreach($tmType as $k=>$v){ 
                if($v['tktype']==1){ $tktype='单选题';}
			    elseif($v['tktype']==2){$tktype='填空题';}
				elseif($v['tktype']==3){$tktype='判断题';}
                elseif($v['tktype']==4){$tktype ='问答题';}
				elseif($v['tktype']==5){$tktype ='材料题';} 
				
				$number = count(explode(",",$v['tkIds']));
                
?>
  
    <div class="p10 bg-gary mt20 ">
     <div class="fl">
         <span class="c-333 fsize14">第<?php echo $k+1; ?>部分（<?php if(isset($tktype)){echo $tktype;} ?>）：
         <label class="fsize12 c-92"><input type="text" class="w150 inputText bRadius5" name="title[]" value="<?php echo $v['title'] ?>"></label></span>
     </div>
        <div class="fr">
           <a href="javascript:void(0);" onclick="Confirm('是否删除此题型？该操作不可逆!','<?php echo M_URL($this->AppName.'/Index','delTmtype',$v['typeId'],GP('paperid-'.$paperid)); ?>');">
            <button type="button" class="generalBeen delete-color mr20 bRadius5" >删除</button></a>
            <?php if($k!=0){ ?>
            <a href="<?php echo M_URL($this->AppName.'/Index','upOrderid',$v['typeId'],GP("paperid-$v[paperid]")); ?>"> 
            <button type="button"  class="generalBeen move-color mr20 bRadius5">上移</button></a>
            <?php }if($k!=($end-1)){ ?>
            <a href="<?php echo M_URL($this->AppName.'/Index','downOrderid',$v['typeId'],GP("paperid-$v[paperid]")); ?>"> 
            <button  type="button" class="generalBeen move-color mr20 bRadius5">下移</button></a>
            <?php }?>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="borderBso" style="padding: 20px 0">
        <button class="generalBeen delete-color mr20 bRadius5" type="button" onClick="tkList('<?php echo M_URL($this->AppName.'/Index','tkList',$v['typeId'],'',GP("")); ?>')">选择已有的试题</button>
        <label class="mr20 fsize14 c-333">
            每题分值：
            <input class="w80 inputText bRadius5 hLh20" name="score[]" value="<?php echo $v['score'] ?>"style="text-align: center" >
            <input type="hidden" name="id[]"  value="<?php echo $v['typeId'] ?>" >
        </label>
        <label class="mr20 fsize14 c-333">
           已添加试题数：<?php echo $number; ?>
        </label>

    </div>
    <?php $count +=$number; }?>
    <input type="submit" class="generalBtn c-fff fsize16 bRadius5" value="确定" name="confirm">
   </form>
     <div style="position: absolute;top: 293px;right: 58px;font-size: 16px;">总共选的题数：<stong class="txt-sm"><?php echo $count; ?></stong></div>
</div>
<script src="<?php echo UOOT;?>Public/common/js/common.js"></script>
<script>
    //添加课时
function tkList(url){
$.cookie('selectTk','',{ expires: -1 }); 	
layer.open({
        type: 2,
        area: ['850px', '600px'],
        fixed: false, //不固定
        maxmin: true,
		 title: ['添加试题','font-size:18px;'],
        content:url
    });
};
</script>
<script src="<?php echo UOOT;?>Public/common/js/jquery.cookie.js" type="text/javascript"></script>
<script>
loadScorllJs(); 
function do_reg()
{
	var title = $("input[name='title']").val();
	var score = $("input[name='score']").val();
	/*数字验证*/
	var num =/^[0-9]*$/;
    if(title==''){
		Alert('显示');
		return false;	
    }
    if(score==''){
		Alert('每题分数');
		return false;
	}
	if(!num.test(score)){
	    Alert('分数请输入数字');
		return false;
	}
	$("#myform").submit();
}	
</script> 
</body>
</html>
