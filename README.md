# dome

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

一个简单的Vue栗子
包含知识点（页面路由,引入其他组件,父组件向子组件传值,resource数据请求）

1.页面路由

在components文件夹下面有三个页面组件（FirstPage.vue,SecPage.vue,ThrPage.vue）
unit文件夹下面公共组件有（Footer.vue,Header.vue）

在FirstPage.vue中
```
<script>
export default {
	name:'FirstPage',       //导出该模块文件
	data(){
		return {
			msg:"something is here"
		}
	}
}
</script>
```
在路由文件中/src/router/index.js
```
import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'    //引入FirstPage
import SecPage from '@/components/SecPage'
import ThrPage from '@/components/ThrPage'

Vue.use(Router)

export default new Router({
  routes: [
    //定义路由地址：http://localhost:8080/
    {
      path: '/',
      name: 'First',
      component: FirstPage
    },
    //定义路由地址：http://localhost:8080/#/Sec
    {
      path: '/Sec',
      name: 'Sec',
      component: SecPage
    },
    //定义路由地址：http://localhost:8080/#/Thr
    {
      path: '/Thr',
      name: 'Thr',
      component: ThrPage
    }
  ]
})
```
2.页面中引入其他组件

例：引入footer模块
Footer.vue文件
```
<template>
	<div class="footer">
		{{msg}}
	</div>
</template>

<script>
export default {
	name:'Footer',
	data(){
		return {
			msg:"我是页面底部"
		}
	}
}
</script>
```
想要在FirstPage.vue中引入Footer首先要引入模块
import Footer from '@/components/unit/Header'	
然后再components中注册该组件
```
components:{
		Footer
},
```
这些做完之后就可以使用<Footer></Footer>引用Footer.vue里面的内容了

3.父组件向子组件传值

在FirstPage.vue里面引入了<Header message="这是第一个页面"></Header>
【message="这是第一个页面"】用于向Header.vue入一个message值为‘这是第一个页面’
在Header中可以看到（利用props获取父组件传来的props）
```
<template>
	<div class="header">
		{{msg}}，从父组件中得到的数据：“{{message}}”    //将父组件传来的message显示在页面上
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
	props:['message'],                //获取到父组件传来的message
}
</script>
```
4.resource数据请求

首先要安装vue-resource
npm install vue-resource
封装方法（Request）/src/assets/js/HttpRequest.js
在/src/main.js中
```
import VueResource from 'vue-resource'    //加载vue-resource模块

import HttpRequest from './assets/js/HttpRequest'   //引入全局变量,调用封装方法
Vue.config.productionTip = false
Vue.use(VueResource)                  //使用模块
Vue.use(HttpRequest)                  //使用模块
```
在FirstPage.vue中可以看到调用该方法
```
import Header from '@/components/unit/Header'	//引入footer
import Footer from '@/components/unit/Footer'	//引入header组件
components:{
  Header,
  Footer
},
//在模板渲染成html或者模板编译进路由前调用的方法
created:function(){
	//调用Request
  this.Request({
    url:"example/example",
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
```
