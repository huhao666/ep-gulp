$(function(){var l=["lunboCenBox1","lunboCenBox2","lunboCenBox3","lunboCenBox4","lunboCenBox5"],t=0;setInterval(function(){var e=l.pop();l.unshift(e),$(".lunboCen li").each(function(e){$(this).removeClass().addClass(l[e])}),4<++t&&(t=0),$(".anniu li").removeClass().eq(t).addClass("active")},3e3),$(".anniu li").click(function(){var e=$(this).index(),a=e-t;if(0!=a)if(0<a){l=(n=l.splice(-a,a)).concat(l),$(".lunboCen li").each(function(e){$(this).removeClass().addClass(l[e])}),t=e,$(".anniu li").removeClass().eq(t).addClass("active")}else{var n=l.splice(0,-a);l=l.concat(n),$(".lunboCen li").each(function(e){$(this).removeClass().addClass(l[e])}),t=e,$(".anniu li").removeClass().eq(t).addClass("active")}});for(var e=document.getElementsByTagName("input"),a=0;a<e.length;a++)"text"==e[a].getAttribute("type")&&(e[a].oninput=function(){this.value=this.value.replace(/(^\s+)|\s+$/g,"")});$("#form .title").val("小金刚专题"),$("#formSubmit").on("click",function(){var e=$(".name").val(),a=$(".phone").val(),n=$(".place").val(),l=$(".email").val(),t=$(".title").val(),i=$(".content").val();""==e||null==e?$(".tips").html("请输入姓名！"):""==a?$(".tips").html("请输入手机号！"):""==n?$(".tips").html("请输入所在地！"):""==t?$(".tips").html("请输入主题！"):""==i?$(".tips").html("请输入内容！"):$.ajax({url:common_url+"/contactUs",type:"post",async:!0,data:{name:e,phone:a,place:n,email:l,title:t,content:i},dataType:"json",success:function(e){1==e.status?layer.msg("提交成功",{icon:1,time:1e3}):layer.msg(e.message,{icon:7,time:1e3}),$(".name").val(""),$(".phone").val(""),$(".place").val(""),$(".email").val(""),$(".title").val(""),$(".content").val("")}})})});