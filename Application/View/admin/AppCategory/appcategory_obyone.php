<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<title>一级分类排序</title>
<link rel="shortcut icon" href="favicon.ico"> 
<link href="<?php echo UOOT;?>Public/admin/css/general.css" rel="stylesheet">
<link href="<?php echo UOOT;?>Public/app/css/form.css?<?php echoHash(); ?>" rel="stylesheet" />
<link href="<?php echo UOOT;?>Public/admin/css/reset.css" rel="stylesheet">
<link href="<?php echo UOOT;?>Public/app/fonts/iconfont.css?<?php echoHash(); ?>" rel="stylesheet" />
<script src="<?php echo UOOT;?>Public/common/js/jquery.js"></script>
 <style>
.col-sm-2 {width:16.6666667%}
</style>
</head>
<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
 <div id="manage_top" class="menu_top_fixed  p15 height73" >
      <div class="ibox-title fl mr15 ml15">
        <h3 class="fl">一级分类排序</h3>
   		</div>
       <div class="fr mt5">
			<div class="fl ks-top-search">
				<a href="<?php echo M_URL('AppCategory'); ?>" class="ks-bt bt-def"><i class="iconfont icon-fanhui"></i>返回</a>
			</div>  
		</div>	
    </div><br /><br /><br />
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
              
                <div class="ibox-content">
                    <table class="table table-striped table-bordered table-hover">
                       <thead>
                       <tr class="gray-bg">
                           <th >栏目ID</th>
                           <th >栏目名称</th>
                           <th>序号</th>
                           <th >一级栏目操作</th>
                       </tr>
                        </thead>
                        <tbody>
                      <?php
					  $html = '';
					  $count=count($appcategory);
					  foreach($appcategory as $k=>$v)
					  {
						$html .= "<tr>
									<td >$v[categoryid]</td>
									<td>$v[categoryname]</td>
									<td>$v[rootid]</td>
									<td>
										<div class='form-group'>";
			   if($page->now_page!=1||$k!=0){
									$html .= "<form target='hidframe'  method='post' action='".M_URL('AppCategory','byOneUp',$v['categoryid'],GP('p-'.$page->now_page))."' class='form-horizontal'>
											<div class='col-sm-2'>
											   <input type='hidden' name='rootid' value='$v[rootid]'/>
											   <select class='form-control' name='MoveNum'>
												   <option>向上移动</option>";
											for($i=1;$i<$page->maxperpage*($page->now_page-1)+$k+1;$i++)
											{
											   $html .= "<option value='$i'>$i</option>";
											}	   
											$html .= "</select>
											</div>
											<div class='col-sm-2'>
												<button type='submit' class='btn btn-primary'>修改</button>
											</div>
											</form>";
											}
 if($page->now_page!=$page->total_pages||$k!=$count-1){							 
									$html .= "<form target='hidframe'  method='post' action='".M_URL('AppCategory','byOneDown',$v['categoryid'],GP('p-'.$page->now_page))."' class='form-horizontal'>
											<div class='col-sm-2'>
												<input type='hidden' name='rootid' value='$v[rootid]'/>
												<select class='form-control' name='MoveNum'>
													<option>向下移动</option>";
											for($i=1;$i<$page->totalput-$page->maxperpage*($page->now_page-1)-$k;$i++)
											{
											   $html .= "<option value='$i'>$i</option>";
											}
											$html .= "</select>
											</div>
											<div class='col-sm-2'>
												<button type='submit' class='btn btn-primary'>修改</button>
											</div>
											</form>";
											}
								$html .= "</div>
									</td>
								</tr>";
						 }
						 echo $html;
					  ?>
                        </tbody>
                    </table>
                </div>
                <div class="footer-page"> <div class="mt15"><?php echo $page->show(3); ?></div></div>
                
            </div>
        </div>
    </div>
</div>
<script src="<?php echo UOOT;?>Public/common/js/common.js"></script>
<script>
loadScorllJs();
</script>
</body>

</html>