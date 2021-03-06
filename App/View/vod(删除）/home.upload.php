<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>
<input type="file" id="file"/>
<button id="uploads">上传视频</button>
<div id="abc"></div>
<body>
</body>
</html>
<script src="<?php echo UOOT;?>Public/common/js/baidu/jquery.js"></script>
<script src="<?php echo UOOT;?>Public/common/js/baidu/humanize.js" type="text/javascript"></script>
<script src="<?php echo UOOT;?>Public/common/js/baidu/bce-bos-uploader.bundle.min.js" type="text/javascript"></script>
<script src="<?php echo UOOT;?>Public/common/js/baidu/utils.js"></script>

<script>
var AK= getQuery('ak', '<?php echo $result->accessKeyId ?>');
var SK= getQuery('sk','<?php echo $result->secretAccessKey ?>');
var SESSION_TOKEN = '<?php echo $result->sessionToken ?>';


$('#uploads').click(function (){
uploader.start();
});
var UPTOKEN_URL = 'http://localhost.baidu.com:7788/ack';

var VOD_ENDPOINT = getQuery('vod.endpoint', 'http://vod.baidubce.com');
var VOD_BUCKET = getQuery('vod.bucket', 'bce-bos-uploader');
var VOD_EXTS = 'avi,mp4,flv,rm,rmvb,webm'.split(',');

var BOS_ENDPOINT = getQuery('bos.endpoint', 'http://bj.bcebos.com');
var BOS_BUCKET = 'bce-bos-uploader';

var DOC_ENDPOINT = getQuery('doc.endpoint', 'http://doc.baidubce.com');
var DOC_BUCKET = getQuery('doc.bucket', 'bce-bos-uploader');
var DOC_EXTS = 'txt,pdf,doc,docx,ppt,pptx,xls,xlsx'.split(',');
var DOC_MAX_SIZE = baidubce.utils.parseSize('100Mb');   // 文档最大 100Mb

var CHUNK_SIZE = '1m';

var doc = new baidubce.sdk.DocClient.Document({
  endpoint: DOC_ENDPOINT,
  credentials: {ak: AK, sk: SK},
  sessionToken: SESSION_TOKEN
});

var vod = new baidubce.sdk.VodClient.Media({
  endpoint: VOD_ENDPOINT,
  credentials: {ak: AK, sk: SK},
  sessionToken: SESSION_TOKEN
});

function uuid() {
  var value = Math.random() * Math.pow(2, 60);
  return parseInt(value).toString(36);
}

function getLSIndex(type, file) {
  var index = [type, AK, file.name, file.size, CHUNK_SIZE].join('&');
  return index;
}

function appendLS(key, item) {
  var value = [];
  try {
    value = JSON.parse(localStorage.getItem(key) || '[]');
  }
  catch (ex) {
  }

  value.push(item);
  localStorage.setItem(key, JSON.stringify(value));
}


function getUUIDFile(type, file) {
  var ext = getFileExtension(file);

  return type + '-' + uuid() + (ext ? '.' + ext : '');
}

function getFileExtension(file) {
  var chunks = file.name.split('.');
  var ext = chunks.length > 1 ? chunks.pop() : '';

  return ext;
}

function finVodKey(file, info) {
  var localKey = getLSIndex('vod', file);
  localStorage.removeItem(localKey);

  var options = {
    description: '测试文件'
  };
  var ext = getFileExtension(file);
  if (ext) {
    options.sourceExtension = ext;
  }
  $('#playurl1').val(file.__mediaId);

  addvodlist(file.__mediaId,file.name);
  vod.setMediaId(file.__mediaId).process(file.name, options)
    .then(function () {
      var row = getRowById(file.__id);
      row.setMediaId(file.__mediaId);
      appendLS('vods', file.__mediaId);
    });
}

function getVodKey(file) {
  var localKey = getLSIndex('vod', file);
  var localValue = localStorage.getItem(localKey);
  if (!localValue) {
    return vod.apply().then(function (response) {
      var mediaId = response.body.mediaId;
      var bucket = response.body.sourceBucket;
      var key = response.body.sourceKey;
      localStorage.setItem(localKey, JSON.stringify(response.body));
      file.__mediaId = mediaId;
      file.__object = key;
      file.__done = finVodKey;
      return {
        bucket: bucket,
        key: key
      };
    });
  }
  else {
    localValue = JSON.parse(localValue);
    file.__mediaId = localValue.mediaId;
    file.__object = localValue.sourceKey;
    file.__done = finVodKey;
    return {
      bucket: localValue.sourceBucket,
      key: localValue.sourceKey
    };
  }
}


function finBosKey(file) {
  var localKey = getLSIndex('bos', file);
  localStorage.removeItem(localKey);

  var row = getRowById(file.__id);
  row.setMediaId(file.__bosId);
}

function getBosKey(file) {
  var localKey = getLSIndex('bos', file);
  var localValue = localStorage.getItem(localKey) || getUUIDFile('bos', file);
  localStorage.setItem(localKey, localValue);

  file.__bosId = localValue;
  file.__object = 'uuid/' + localValue;
  file.__done = finBosKey;

  return {
    bucket: BOS_BUCKET,
    key: file.__object
  };
}

function getKey(file) {
  var ext = getFileExtension(file);

  if (ext && VOD_EXTS.indexOf(ext) != -1) {
    // 往视频服务上传
    return getVodKey(file);
  }
  else if (ext && DOC_EXTS.indexOf(ext) != -1) {
    // 往文档服务上传
    return getDocKey(file);
  }
  else {
    // 往BOS上传
    return getBosKey(file);
  }
}

var uploader = new baidubce.bos.Uploader({
  browse_button: '#file',
  multi_selection: true,
  bos_endpoint: BOS_ENDPOINT,
  bos_bucket: BOS_BUCKET,
  bos_multipart_parallel: 5,
  chunk_size: '8mb',

  bos_ak: AK,
  bos_sk: SK,
 uptoken: SESSION_TOKEN,

  // IE下面的 PostObject 请求不能用临时 ak 和 sk, 因此
  // 需要通过这个 URL 来动态计算 policy 签名
  // uptoken_url: UPTOKEN_URL,

  max_file_size: '50Gb',
  chunk_size: CHUNK_SIZE,
  flash_swf_url: '../bower_components/moxie/bin/flash/Moxie.swf',
  init: {
    FilesFilter: function (_, files) {
      // 添加更多的过滤规则，比如文件大小之类的
    },
    FilesAdded: function (_, files) {
      FilesAdded(_, files);
      $('#form').get(0).reset();
    },
    BeforeUpload: function (_, file) {
      file.__startTime = new Date().getTime();
      var row = getRowById(file.__id);
      row.setStatus('circle-arrow-up');
    },
    UploadProgress: function (_, file, progress, event) {
		var abc = toPercent(progress)
	  $('#abc').html(abc);
      var row = getRowById(file.__id);
      row.setProgress(progress);
  
  
    },
    ObjectMetas: function (_, file) {
      if (file.__target === 'doc') {
        // 如果文档进入 Multipart Upload 的模式，必须手工设置 x-bce-meta-md5
        // 如果是正常的 PutObject 模式，服务器会设置 ETag
        // 另外，文档会被限制在 100Mb 以内，所以本地计算 md5 应该不会特别慢
        return baidubce.utils.md5sum(file).then(function (md5) {
          return {
            'x-bce-meta-md5': md5
          };
        });
      }
    },
    Key: function (_, file) {
      return getKey(file);
    },
    FileUploaded: function (_, file, info ) {
      localStorage.removeItem(file.__uploadId);
   
      var time = ((new Date().getTime() - file.__startTime) / 1000).toFixed(2);
      var row = getRowById(file.__id);
      var url = [BOS_ENDPOINT, info.body.bucket, info.body.object].join('/');
      row.setStatus('ok-circle', true);
      row.setUrl(url);
      row.setTime(time);

      file.__done(file, info);
    },
    NetworkSpeed: function (_, bytes, time, pendings) {
		
      var speed = bytes / (time / 1000);
      var html = '上传速度：' + humanize.filesize(speed) + '/s';
      var seconds = pendings / speed;
	  
      if (seconds > 1) {
        var dhms = baidubce.utils.toDHMS(Math.ceil(seconds));
        html += '，剩余时间：' + [
          humanize.pad(dhms.HH, 2, '0'),
          humanize.pad(dhms.MM, 2, '0'),
          humanize.pad(dhms.SS, 2, '0')
        ].join(':');
      }

      $('.network-speed').html(html);
    },
    UploadComplete: function () {
      $('button[type=submit]').attr('disabled', true);
    },
    ListParts: function (_, file, uploadId) {
      // 恢复断点续传的时候，从本地获取 parts 的信息，避免从服务读取
      // 有时候服务器没有开放读取的权限
      try {
        var parts = localStorage.getItem(uploadId);
        return JSON.parse(parts);
      }
      catch (ex) {
      }
    },
    ChunkUploaded: function (_, file, result) {
      var partNumber = result.partNumber;
      var uploadId = result.uploadId;
      var response = result.response;
      var eTag = response.http_headers.etag;

      file.__uploadId = uploadId;

      if (eTag) {
        var parts = localStorage.getItem(uploadId);
        if (!parts) {
          parts = [];
        }
        else {
          parts = JSON.parse(parts);
        }

        parts.push({
          partNumber: partNumber,
          eTag: eTag
        });

        localStorage.setItem(uploadId, JSON.stringify(parts));
      }
    },
    Error: function (_, error, file) {
      var row = getRowById(file.__id);
      if (error.status_code === 0) {
        row.setStatus('pause', true);
      }
      else {
        row.setStatus('remove-circle', false);
        var errorMessage = $.isPlainObject(error) ? JSON.stringify(error) : String(error);
        row.setErrorMessage(errorMessage);
      }
    }
  }
});

$('button[type=submit]').click(function () {
  uploader.start();
  return false;
});


$('#view-vods-modal').on('shown.bs.modal', function (e) {
  var mediaIds = JSON.parse(localStorage.getItem('vods') || '[]');
  if (!mediaIds.length) {
    return;
  }

  $('#vods .empty').text('查询中...');
  var tasks = mediaIds.map(function (mediaId) {
    return vod.setMediaId(mediaId).get();
  });
  baidubce.sdk.Q.all(tasks).then(function (responses) {
    var medias = responses.map(function (response) {
      return response.body;
    });
    return medias;
  }).then(function (medias) {
    var html = [];
    for (var i = 0; i < medias.length; i++) {
      var item = medias[i];
      var title = item.attributes.title || '-';
      if (item.status === 'PUBLISHED') {
        title = '<a target="_blank" href="vod-viewer.html?id=' + item.mediaId +
          '&title=' + encodeURIComponent(title) + '">' + title + '</a>'
      }
      html.push(
        '<tr>'
        + '<td>' + (i + 1) + '</td>'
        + '<td class="doc-name">' + (title) + '</td>'
        + '<td>' + humanize.filesize(item.meta.sizeInBytes) + ' / ' + item.meta.durationInSeconds + '</td>'
        + '<td>' + (item.status) + '</td>'
        + '<td>' + (item.createTime) + '</td>'
        + '<td>' + (item.publishTime || '-') + '</td>'
        + '</tr>'
      );
    }
    $('#vods tbody').html(html.join(''));
  });
});

$('#view-docs-modal').on('shown.bs.modal', function (e) {
  var documentIds = JSON.parse(localStorage.getItem('docs') || '[]');
  if (!documentIds.length) {
    return;
  }

  $('#docs .empty').text('查询中...');
  var tasks = documentIds.map(function (docId) {
    return doc.get(docId);
  });
  baidubce.sdk.Q.all(tasks).then(function (responses) {
    var documents = responses.map(function (response) {
      return response.body;
    });
    return documents;
  }).then(function (documents) {
    documents.sort(function (a, b) {
      var ac = new Date(a.createTime).getTime();
      var bc = new Date(b.createTime).getTime();
      if (ac > bc) {
        return -1;
      }
      else if (ac < bc) {
        return 1;
      }
      return 0;
    });
    var html = [];
    for (var i = 0; i < documents.length; i++) {
      var doc = documents[i];
      // doc.docId -> 文档阅读ID，仅当文档状态为PUBLISHED时返回该字段
      var title = doc.status === 'PUBLISHED'
        ? '<a target="_blank" href="http://static.bcedocument.com/reader/v2/console/index.html?docId=' + doc.documentId + '&token=TOKEN&host=BCEDOC&enviroment=online">' + doc.title + '</a>'
        : doc.title;
      html.push(
        '<tr>'
        + '<td>' + (i + 1) + '</td>'
        + '<td class="doc-name">' + (title) + '<br/>' + doc.documentId + '</td>'
        + '<td>' + (doc.publishInfo ? humanize.filesize(doc.publishInfo.sizeInBytes) : '-') + '</td>'
        + '<td>' + (doc.status) + '</td>'
        + '<td>' + (doc.createTime) + '</td>'
        + '<td>' + (doc.publishTime || '-') + '</td>'
        + '</tr>'
      );
    }
    $('#docs tbody').html(html.join(''));
  });
});


function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}

function addvodlist(mediaId,name){
	
	var url = '<?php echo UOOT;?>Plus/Kesion.ajax.php?act=addvodlist';
	$.ajax({
		type:"post",
		url:url,
		data:{
			'name':name,
			'mediaId':mediaId,
			'userid' : <?php echo $this->userid ?>,
		},
		success:function(data){
              alert('上传成功,请稍后使用，正在转码中');
		},
	   
	 });
	
}		

</script>