function getUrlParam(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}function showMask(){$("#bg").show(),$("body").css("overflow","hidden")}function hideMask(){$("#bg").hide(),$("body").css("overflow","")}function isLogin(){return!!localStorage.hasOwnProperty("login")||(showMask(),!1)}$(function(){$(".getPrice").click(function(){$("html, body").animate({scrollTop:$("#form").offset().top},1e3)});var a=!0,e=$(".topBar").offset().top;$(window).scroll(function(){var i=$(document).scrollTop();e<i?($(".topBar").addClass("fixTop"),$("#introduction").addClass("newTop")):($(".topBar").removeClass("fixTop"),$("#introduction").removeClass("newTop")),a&&$(".main .box").each(function(e){var t=$(this).index(),a=$(this).offset().top+$(this).outerHeight(!0)-57;if(i<a)return $(".topBar ul li").eq(t).addClass("on").siblings().removeClass("on"),!1})}),$(".topBar ul li").click(function(){a=!1;var e=$(this).index();$(this).addClass("on").siblings().removeClass("on");var t=$(".main .box").eq(e).offset().top;$("body,html").animate({scrollTop:t},500,function(){a=!0})}),$(".close").click(function(){hideMask()}),$("#login").click(function(){var e=$("#account").val(),t=$("#pwd").val();""==e?$("#bg .error").html("请输入账号"):""==t?$("#bg .error").html("请输入密码"):$.ajax({url:common_url+"/login",type:"post",async:!0,data:{account:e,password:t},dataType:"json",success:function(e){0==e.status?(localStorage.setItem("userLogin","isLogin"),hideMask()):$("#bg .error").html("账号或密码有误!")}})});var t=getUrlParam("id");t&&$.ajax({url:common_url+"/getProductDetail?id="+t,type:"get",async:!0,dataType:"json",success:function(e){if(e){var t=e.list[0];$(".name h2").text(t.commonProductName),document.title=t.name+"-中力电动叉车|搬运车价格|厂家-搬运绿色 提升未来",t.anotherName?$(".name p").text(t.name+" "+t.anotherName):$(".name p").text(t.name),$("#form .titleName").val(t.commonProductName);for(var a="",i=0;i<t.firstFocusImage.length;i++)a+='<div class="swiper-slide"><img src="'+img_url+t.firstFocusImage[i]+'" alt=""></div>';$(".view .swiper-wrapper").html(a),$(".preview .swiper-wrapper").html(a),$(".preview .swiper-wrapper .swiper-slide").eq(0).addClass("active-nav");var o=new Swiper(".view .swiper-container",{onSlideChangeStart:function(){!function(){$(".preview .active-nav").removeClass("active-nav");var e=$(".preview .swiper-slide").eq(o.activeIndex).addClass("active-nav");if(!e.hasClass("swiper-slide-visible"))if(e.index()>r.activeIndex){var t=Math.floor(r.width/e.width())-1;r.slideTo(e.index()-t)}else r.slideTo(e.index())}()}});$(".view .arrow-left,.preview .arrow-left").on("click",function(e){e.preventDefault(),0!=o.activeIndex?o.slidePrev():o.slideTo(o.slides.length-1,1e3)}),$(".view .arrow-right,.preview .arrow-right").on("click",function(e){e.preventDefault(),o.activeIndex!=o.slides.length-1?o.slideNext():o.slideTo(0,1e3)});var r=new Swiper(".preview .swiper-container",{slidesPerView:"auto",allowTouchMove:!1,onTap:function(){o.slideTo(r.clickedIndex)}});var s="";for(i=0;i<t.sellingPoint.length;i++)""!=t.sellingPoint[i]&&(s+="<li><span></span>"+t.sellingPoint[i]+"；</li>");$(".salePointUl").html(s);var n="";for(i=0;i<t.introduceImage.length;i++)n+='<img src="'+img_url+t.introduceImage[i]+'"/>';$(".productImgs").html(n);var l="";for(i=0;i<t.othersImage.length;i++)l+='<img src="'+img_url+t.othersImage[i]+'"/>';if($(".otherDataImg").html(l),0<t.video.length){var c="";for(i=0;i<t.video.length;i++)c+='<video src="'+img_url+t.video[i]+'" controls="controls">您的浏览器不支持 video 标签。</video>';$(".videoBox").html(c)}else $("#video h2").text("暂无视频");t.file?($("#example .download").html('参数样本：<a href="javascript:;" oid="'+t.id+'" class="downfile"><i class="iconfont icon--wenjianxiazai"></i>'+t.commonProductName+'</a><img src="img/click.png"/>'),$(".downfile").click(function(){var e=$(this).attr("oid");if(!localStorage.hasOwnProperty("userLogin"))return showMask(),!1;$.ajax({url:common_url+"/getUrl",type:"get",async:!0,data:{id:e,type:1},dataType:"json",success:function(e){e.url&&window.open(img_url+e.url)}})})):$("#example .download").html("参数样本：暂无下载文件"),t.partsList?($("#example .download2").html('零件目录：<a href="javascript:;" oid="'+t.id+'" class="downfile2"><i class="iconfont icon--wenjianxiazai"></i>'+t.commonProductName+'</a><img src="img/click.png"/>'),$(".downfile2").click(function(){var e=$(this).attr("oid");if(!localStorage.hasOwnProperty("userLogin"))return showMask(),!1;$.ajax({url:common_url+"/getUrl",type:"get",async:!0,data:{id:e,type:3},dataType:"json",success:function(e){e.url&&window.open(img_url+e.url)}})})):$("#example .download2").html("零件目录：暂无下载文件");var d="";for(i=0;i<t.parameterList.length;i++){d+='<div class="tdTitle"><span class="suo"></span>'+t.parameterList[i].name+'</div><table class="'+t.parameterList[i].id+'">';for(var m=0;m<t.parameterList[i].propertyList.length;m++)d+='<tr class="'+t.parameterList[i].propertyList[m].id+'"><td width="100px">'+t.parameterList[i].propertyList[m].code+'</td><td width="350px">'+t.parameterList[i].propertyList[m].name+'</td><td width="150px">'+t.parameterList[i].propertyList[m].unit+"</td></tr>";d+="</table>"}$(".tables").html(d),$(".tdTitle").click(function(){var e=$(".tdTitle").index(this),t=$(".tdTitle").index(this)+1;$(".suo").eq(e).hasClass("fang")?($(".suo").eq(e).css("background","url(../img/suo.png) no-repeat"),$(".suo").eq(e).removeClass("fang"),$("table").eq(t).show()):($(".suo").eq(e).css("background","url(../img/fang.png) no-repeat"),$(".suo").eq(e).addClass("fang"),$("table").eq(t).hide())});var p=e.list,u=600;for(i=0;i<p.length;i++){u+=300,$(".tableBox").css("width",u+"px"),$(".tableHead").append('<td style="width:300px"><a class="addCompare" href="productCompare.html?id='+p[i].id+'">+对比</a></td>');for(m=0;m<p[i].parameterList.length;m++)for(var v=0;v<p[i].parameterList[m].propertyList.length;v++)$("."+p[i].parameterList[m].propertyList[v].id).append('<td width="300px">'+p[i].parameterList[m].propertyList[v].value+"</td>")}u<=900&&$(".tableBox").css("padding-left","130px")}}});for(var i=document.getElementsByTagName("input"),o=0;o<i.length;o++)"text"==i[o].getAttribute("type")&&(i[o].oninput=function(){this.value=this.value.replace(/(^\s+)|\s+$/g,"")});$("#formSubmit").on("click",function(){var e=$("#form .name").val(),t=$("#form .phone").val(),a=$("#form .area").val(),i=$("#form .mail").val(),o=$("#form .titleName").val(),r=$("#form .content").val();""==e||null==e?$(".tips").html("请输入姓名！"):""==t?$(".tips").html("请输入手机号！"):""==a?$(".tips").html("请输入所在地！"):""==o?$(".tips").html("请输入主题！"):""==r?$(".tips").html("请输入内容！"):$.ajax({url:common_url+"/contactUs",type:"post",async:!0,data:{name:e,phone:t,place:a,email:i,title:o,content:r},dataType:"json",success:function(e){1==e.status?layer.msg("提交成功",{icon:1,time:1e3}):layer.msg(e.message,{icon:7,time:1e3}),$("#form .name").val(""),$("#form .phone").val(""),$("#form .area").val(""),$("#form .mail").val(""),$("#form .titleName").val(""),$("#form .content").val("")}})})});