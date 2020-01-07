<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title></title>
<link href="<?php echo UOOT;?>Public/admin/css/general.css" rel="stylesheet">
<link href="<?php echo UOOT;?>Public/admin/css/kesion-common.css" rel="stylesheet">
<link href="<?php echo UOOT;?>Public/webuploader/webuploader.css" rel="stylesheet">
<script src="<?php echo UOOT;?>Public/common/js/jquery.js" type="text/javascript"></script>
<style>
.w80 {width: 80px;}
</style>
</head>
<body class="gray-bg">
<div class="wrapper mt0">
    <div id="manage_top" class="menu_top_fixed p15 height73">
        <ul style=" float:left;">
        	<li><div id="picker" class="webuploader-container">本地上传</div></li>
            <li><a href="javascript:void(0);" onclick="addTypeChange('<?php echo M_URL('Index','TempaddFile','',GP('tempdir-'.urlencode($tempdir),true));?>','650px','400px');"><i class="one2017"></i>新建分组</a></li>
            <?php if(!empty($first)){?>
            <li><a href="<?php echo M_URL('Index','filelist','',GP('name-'.$name.',type-'.$type,true));?>"><i class="one2017"></i>顶层目录</a></li>
            <?php }?>
            <li><a href="javascript:void(0);" onclick="addTypeChange('<?php echo M_URL('Index','Syncimages','',GP('tempdir-'.$tempdir,true));?>','450px','250px');"><i class="one2017"></i>同步到百度云（当前目录）11111111111111</a></li>	
        </ul>
        <div class="ibox-tools" >
            <a href="javascript:void(0)" onclick="history.go(0)" class="collapse-link mt0">
                <i class="reflash"></i>
            </a>
        </div>
    </div>
</div>
<div class="ibox-content"><br /><br />
<div class="panel-heading">图库管理-----/<?php echo $tempdir;?>-------你点的file按钮的name是(测试用)----<?php echo $name;?></div>
<table class="table " >
    <thead>
    <tr>
        <th>图片目录</th><th>类型</th><th>大小</th><th>修改时间</th><th>操作</th>
    </tr>
    </thead>
    <tbody>
    <?php if(!empty($first)){?>
    <tr onClick="skip('<?php echo M_URL('Index','filelist','',GP('name-'.$name.',type-'.$type,true));?>')">
        <td>(..顶层目录)</td><td></td><td></td><td></td><td></td>
    </tr>	
    <tr onClick="skip('<?php echo M_URL('Index','filelist','',GP('tempdir-'.$tempdir.',back-1,name-'.$name.',type-'.$type,true));?>')">
        <td>(.上层目录)</td><td></td><td></td><td></td><td></td>
    </tr>
    <?php }?>
    <?php foreach($dirname as $k=>$v){?>
    <tr onClick="skip('<?php echo M_URL('Index','filelist','',GP('tempdir-'.$tempdir.',nowdir-'.urlencode($v).',name-'.$name.',type-'.$type,true));?>')">
        <td><i <?php if(is_dir($dir.$v)) {echo 'class="save"';}else{echo 'class="ie-icon"';}?>></i><?php echo iconv('gbk','utf-8',$v); ?></td>
        <td>目录</td>
        <td>3K</td>
        <td>2017/1/9 15:26:14</td>
        <td class="w80" onClick="doNone(event)"><i class="edit2017"></i></td>
        <!--<td class="w80" onClick="doNone(event)"><i class="delete2017"></i></td>
        <td class="w80" onClick="doNone(event)"><i class="manage2017"></i></td>-->
    </tr>
    <?php }?>
    <?php foreach($filename as $k=>$v){?>
    <tr class="card-li">
        <td class="card-img" src="<?php echo '/'.$tempdir.'/'.$v; ?>"><?php echo '/'.$tempdir.'/'.$v; ?></td><!--iconv('gbk','utf-8',-->
        <td>pdf文件</td>
        <td>3K</td>
        <td>2017/1/9 15:26:14</td>
        <td class="w80"><a href="javascript:void(0);" onclick="Confirm('是否删除此文件？该操作不可逆！','')"><i class="delete2017"></i></a></td>
    </tr>
    <?php }?>
    </tbody>
</table>
<?php if(empty($dirname)&&empty($filename)){?>
<div class="emptycss">没有发现任何内容</div>
<?php }?>
</div>
<script src="<?php echo UOOT;?>Public/common/js/common.js"></script>
<script src="<?php echo UOOT;?>Public/webuploader/webuploader.js"></script>
<script>
function uploadView2(x,y,other){
	 var limitSize=512000; //限制大小 KB
	 var fileExt="*.jpg;*.gif;*.png;*.bmp" //限制扩展名
	 var $ = jQuery,uploader,
	    ratio = window.devicePixelRatio || 1,
		// 缩略图大小
		thumbnailWidth  = x * ratio,
		thumbnailHeight = y * ratio,
		// 可能有pedding, ready, uploading, confirm, done.
        state = 'ready',
		// 判断浏览器是否支持图片的base64
		isSupportBase64 = ( function() {
			var data = new Image();
			var support = true;
			data.onload = data.onerror = function() {
				if( this.width != 1 || this.height != 1 ) {support = false;}
			}
			data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			return support;
	 } )();
	 uploader = WebUploader.create({
		auto: true,
		// 不压缩image
		resize: false,
		duplicate :false,
		//duplicate :true,
		multiple: false,
		// swf文件路径
		swf:'/Public/webuploader/Uploader.swf',
		// 文件接收服务端。
		server: other.url,
		accept: { // 只允许选择图片文件格式
			 title: 'file',
			 extensions: 'pdf',
			 mimeTypes: 'image/!*'
		},
		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		fileSingleSizeLimit: limitSize*1024, //限制单个上传图片的大小
		pick: {
			  id:other.picker,
		      innerHTML: '本地文件'
		} //上传图片的按钮，start
	}); 
	// 当有文件添加进来的时候
	uploader.on('fileQueued', function (file) {
		uploader.makeThumb( file, function( error, src ) {
			var img;
			if( isSupportBase64 ) {img = $('<img src="'+src+'">');}
			$(other.filelist).empty().append(img);
		},thumbnailWidth,thumbnailHeight );
	});
	uploader.on('uploadSuccess', function (file,response) {
		if(response.result=='succeed'){
			location.reload();
		}else{Alert('出现重复文件名称，或者压缩包没有config文件，请检查后重新上传');}
	});
	uploader.on('error', function (code) {
		var err = '';
		switch (code) {
			case 'F_EXCEED_SIZE':err += '单个文件大小不得超过' +  uploader.options.fileSingleSizeLimit + 'kb！';break;
			case 'Q_EXCEED_NUM_LIMIT':err += '最多只能上传' +  uploader.options.fileNumLimit + '张！';break;
			case 'Q_EXCEED_SIZE_LIMIT':err += '上传总大小超出'+limitSize;break;
			case 'Q_TYPE_DENIED':err += '无效图片类型，请上传正确的图片格式！';break;
			case 'F_DUPLICATE':err+='不能重复上传相同文件！';break;
			default:err += '上传错误，请刷新重试！错误代码：'+code;break;
		}
		Alert(err);
		return false;
	});
    uploader.on('all', function (type) {
		if (type === 'startUpload') {
			state = 'uploading';
		} else if (type === 'stopUpload') {
			state = 'paused';
		} else if (type === 'uploadFinished') {
			state = 'done';
		}else if(type === 'filesQueued'){
			state = 'restart';
		}
	}); 
}
</script>
<script>
uploadView2(180,120,{picker:'#picker',filelist:'#filelist',url:'/Plus/Uploader.php?act=filelist&wxid=<?php echo $this->wxid;?>'});
var type = '<?php echo $type;?>';
$(".card-li").click(function(){
	var src = $(this).find(".card-img").attr("src");
	if(type=='parent'){
		$(parent.document).find('input[name="<?php echo $name;?>"]')[0].value = src;
		$(parent.document).find("#<?php echo $name;?>").text(src);
	    parent.closePopup(window.name);
	}else if(type=='top'){
		$(parent.document).find('#main').contents().find('input[name="<?php echo $name;?>"]')[0].value = src;
	    $(parent.document).find('#main').contents().find("#<?php echo $name;?>").text(src);
	    top.closePopup(window.name);
	}
})
</script>
</body>
</html>

