<template>
	<div class="footer">
		{{msg}}
	</div>
</template>

<script>
import Vue from 'vue' 
export default {
	name:'Footer',
	data(){
		return {
			msg:"我是页面底部"
		}
	}
}
</script>

<style>
.footer{
	position:fixed;
	bottom:0;
	left:0;
	color:#fff;
	text-align: center;
	height:40px;
	width:100%;
	line-height:40px;
	background:#09c;
}
</style>