<template>
	<div class="header">
		{{msg}}，从父组件中得到的数据：“{{message}}”
	</div>
</template>

<script>
export default{
	name:"Header",
	data(){
		return {
			msg:'我是页面头部'
		}
	},
	props:['message'],
}
</script>

<style>
.header{
	position:fixed;
	top:0;
	left:0;
	color:#fff;
	text-align: center;
	height:40px;
	width:100%;
	line-height:40px;
	background:#09c;
}

</style>