exports.install=function(Vue,options){
  Vue.prototype.serverSrc="http://api.example.com/";
  Vue.http.options.emulateJSON = true;
  Vue.prototype.Request=function(opt){
    this.$http.post(Vue.prototype.serverSrc+opt.url,opt.data)
    .then(response =>{
      opt.success(response.body)&&opt.success;
    })
    .catch((response)=>{
    	opt.error	
    })
  }
}