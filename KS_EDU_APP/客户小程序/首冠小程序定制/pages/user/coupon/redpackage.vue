<template>

		<view class="coupon-box">
			<view class="coupon-item" v-for="(item,i) in list" :key="i">
				<view class="coupon-left">
					<text style="font-size: 14px;">￥</text>{{item.price}}
				</view>
				<view class="coupon-right" style="color:rgba(1,12,23,1);font-size:12px;padding-left: 15px;box-sizing: border-box;">
					<view style="font-size:14px;margin-top: 10px;">{{item.minamount == 0?'无金额门槛限制':'满'+item.minamount+'元使用'}}</view>
					<view style="color:rgba(136,136,136,1);margin-top: 5px;">{{item.use_condition ? item.use_condition : '无限制'}}</view>
					<view style="margin-top: 5px;">有效期：<text style="color:#EC3D26;">{{item.begindate}}- -{{item.enddate}}</text></view>
				</view>
			</view>
			<uni-load-more :status="moreStatus" v-if="pageCount > 0"></uni-load-more>
			<ks-empty type="list" v-else>暂无红包</ks-empty>
		</view>
</template>

<script>
	import {UniLoadMore} from 'components/uni/uni-load-more/uni-load-more'
	import {KsEmpty} from 'components/ks-components/empty/empty'
	import {GetUserRedPacketList} from 'api/user'
	export default{
		components:{
			KsEmpty,
			UniLoadMore
		},
		data(){
			return {
				page:1,
				pageCount:0,
				moreStatus:"",
				list:[]
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getList()
		},
		/*滚动加载*/
		onReachBottom(){
			this.page++
			if(this.page<=this.pageCount){
				this.getList(this.page)			
			}	
		},
		/*导航栏方法*/
		onNavigationBarButtonTap(){
			uni.navigateTo({
			    url: '/pages/user/coupon/unredpackage'
			});
		},
		methods:{
			getList(p=1){
				this.page = p
				if(this.page==1){
					this.list = []
				}
				this.moreStatus = 'loading'
				GetUserRedPacketList({
					page:this.page,
					pagesize:10,
				}).then(res=>{
					this.pageCount = res.pagecount
					if(this.page >= this.pageCount){
						this.moreStatus = 'noMore'
					}else{
						this.moreStatus = 'more'
					}
					if(res.result){
						this.list = this.list.concat(res.data)
					}
				})		
			}
		}
	}
</script>

<style scoped>
	.coupon-box{
		padding: 10px;
		background: #fff;
	}
	.coupon-item{
		background:rgba(255,255,255,1);
		display: flex;
		border-radius:4px;
		height: 85px;
		margin-top: 10px;
	}
	.coupon-left{
		width: 85px;
		height: 85px;
		box-shadow:-3px 0px 5px 0px rgba(1,12,23,0.08);
		border-radius:4px;
		border-right: 1px dashed #010C17;
		text-align: center;
		line-height: 85px;
		font-size:24px;
		font-weight:500;
		color:rgba(1,12,23,1);
	}
	.coupon-right{
		flex: 1;
		box-shadow:3px 0px 5px 0px rgba(1,12,23,0.08);
		border-radius:4px;
	}
</style>
