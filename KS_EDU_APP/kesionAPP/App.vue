<script>
	export default {
		data() {
			return {
			
			}
		},
		onLaunch: function() {
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) { 
				/*查询可更新版本*/
			    uni.request({  
			        url: 'https://e.kesion.com/webapi/app/CheckUpdateApp',  
			        data: {  
			            version: 1,  
			            name: widgetInfo.name
			        },
			        success: (res) => {  
						var data = res.data
			            if (!data.result || !data.downurl) {
							return
						}
						uni.downloadFile({  
							url: data.downurl,  
							success: (downloadResult) => {  
								if (downloadResult.statusCode === 200) {  
									plus.runtime.install(downloadResult.tempFilePath, {  
										force: false  
									}, function() {  
										console.log('install success...');  
										plus.runtime.restart();  
									}, function(e) {  
										console.error('install fail...');  
									}) 
								}  
							}  
						})
			        }  
			    })
			})
			// #endif
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	@import url("/static/common/reset.css");
	body{
		background: #f6f6f6;
	}
	image{will-change: transform}
	.flex-box__space{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.flex-box{
		display: flex;
		align-items: center;
	}
	.flex-box__column{
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.flex-box__space--column{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	.uni_14{
		font-size: 14px;
	}
	.ks-course__title--1{
		overflow: hidden;
		white-space: nowrap;
		word-wrap:break-word;
		text-overflow: ellipsis;
		font-size:16px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(26,26,26,1);
		line-height: 24px;
	}
	.ks-course__title--2{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		word-wrap:break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size:16px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(26,26,26,1);
		line-height: 24px;
		max-height: 48px;
	}
	/*alert*/
	.ks-alert{
	    width: 100%;
	    padding: 8px 16px;
	    margin: 0;
	    box-sizing: border-box;
	    border-radius: 4px;
	    position: relative;
	    background-color: #f4f4f5;
	    color: #909399;
	    overflow: hidden;
	    opacity: 1;
	    align-items: center;
	}
	.ks-alert--success{
	    background-color: #f0f9eb;
	    color: #67c23a;
	}
	.ks-alert--warning{
	    background-color: #fdf6ec;
	    color: #e6a23c;
	}
	.ks-alert--error{
	    background-color: #fef0f0;
	    color: #f56c6c;
	}
	.ks-line{
		position: relative;
	}
	.ks-line::after{
		content: '';
		width: 100%;
		height: 1px;
		background: rgba(0,0,0,0.1);
		position: absolute;
		left: 0;
		bottom: 0;
		transform: scaleY(0.5);
	}
</style>
