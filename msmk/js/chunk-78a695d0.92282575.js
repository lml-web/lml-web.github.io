(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a695d0"],{2898:function(t,n,s){},"846a":function(t,n,s){"use strict";s("2898")},"97d5":function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("van-nav-bar",{attrs:{title:"设置密码","right-text":"跳过"},on:{"click-right":t.onClickRight}}),s("div",{staticClass:"set_container"},[s("div",{staticClass:"pass_container"},[s("van-field",{class:1==t.nother?"changBottom":"",attrs:{placeholder:"请设置登录密码"},on:{focus:function(n){t.nother=!0},blur:function(n){t.nother=!1}},model:{value:t.password1,callback:function(n){t.password1=n},expression:"password1"}})],1),s("div",{staticClass:"pass_container"},[s("van-field",{class:1==t.aginnother?"changBottom":"",attrs:{placeholder:"请再次输入密码"},on:{focus:function(n){t.aginnother=!0},blur:function(n){t.aginnother=!1}},model:{value:t.password2,callback:function(n){t.password2=n},expression:"password2"}})],1)]),s("div",{staticClass:"login_button_container"},[s("div",{staticClass:"login_button_wrapper"},[s("van-button",{attrs:{type:"primary",size:"large",round:"",color:"linear-gradient(to right, #FF9349, #FC5500)"},on:{click:t.paaSure}},[t._v("确认")])],1)])],1)},o=[],r={data(){return{nother:!1,aginnother:!1,password1:"",password2:""}},methods:{onClickRight(){this.$router.push("/setPerson")},paaSure(){this.password1===this.password2&&this.$router.push("/setPerson")}}},e=r,i=(s("846a"),s("c701")),c=Object(i["a"])(e,a,o,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-78a695d0.92282575.js.map