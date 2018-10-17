<template>
	<div class="page">
		<Header message="这是第一个页面"></Header>
		<button v-on:click="DoSomeThing">{{button_text}}</button>
		<p>
			<router-link to="/">第一页</router-link>
			<router-link to="/Sec">第二页</router-link>
			<router-link to="/Thr">第三页</router-link>
		</p>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/unit/Header'	//引入footer
import Footer from '@/components/unit/Footer'	//引入header组件
export default {
	name:'FirstPage',
	data(){
		return {
			button_text:"do"
		}
	},
	//注册组件（需要调用到的组件）
	components:{
		Header,
		Footer
	},
	//在模板渲染成html或者模板编译进路由前调用的方法
	created:function(){
		this.Request({
			url:"example/example",			//修改成自己的地址
	      	data:{},
	      	success:function(data){
	        	console.log('界面加载时获取数据',data)
	      	}
		})
	},
	//需要使用的方法
	methods:{
		DoSomeThing:function(){
			alert("do some thing!")
		}
	}
}
</script>

<style>
.page{
	padding:40px 0;
	display: table;
	width:100%;
}
</style>