$(function(){var e=$("#nav").offset().top;$(window).scroll(function(){$(document).scrollTop()>=e?($("#nav").addClass("fixnav"),$("#banner").addClass("new"),$("#nav .logo").addClass("logoNew")):($("#nav").removeClass("fixnav"),$("#banner").removeClass("new"),$("#nav .logo").removeClass("logoNew"))}),$.get(common_url+"/getBannerList",{type:1},function(e){for(var i=e.bannerList,a="",n=0;n<i.length;n++)i[n].url?a+='<div class="swiper-slide"><a href="'+i[n].url+'" target="_blank"><div class="bannerBox" style="background: url('+img_url+i[n].file+') 50% 0px no-repeat;"></div></a></div>':a+='<div class="swiper-slide"><a href="javascript:;"><div class="bannerBox" style="background: url('+img_url+i[n].file+') 50% 0px no-repeat;"></div></a></div>';$("#banner .swiper-wrapper").html(a);new Swiper("#banner .swiper-container",{direction:"horizontal",loop:!0,autoplay:3e3,speed:800,pagination:"#banner .swiper-pagination",paginationClickable:!0,nextButton:"#banner .swiper-button-next",prevButton:"#banner .swiper-button-prev",autoplayDisableOnInteraction:!1})}),$.ajax({url:common_url+"/getNavList",type:"get",async:!0,dataType:"json",success:function(e){if(e){for(var i=e.navList,a="",n=0;n<i.length&&7!=n;n++)a+='<li><a href="productGroup.html?groupid='+i[n].id+'"><div class="img" style="background: url('+img_url+i[n].defaultImageBefore+') no-repeat center center;"><img src="'+img_url+i[n].defaultImageAfter+'" alt="产品系列图片" /></div><p><a href="productGroup.html?groupid='+i[n].id+'">'+i[n].name+"</a></p></a></li>";$(".centerUl").html(a)}}}),$(".histroy li").mouseover(function(){$(this).children("img").addClass("changeShow").parent().siblings().children("img").removeClass("changeShow")}),$.get(common_url+"/getNewsList",{year:"",currentPage:1},function(e){var i=e.newsList,a="",n="";i[0].bigImg?a+='<img src="'+img_url+i[0].bigImg+'"/><span>'+i[0].title+"</span>":a+='<img src="img/newsDetail.jpg"/><span>'+i[0].title+"</span>",$(".newsList_l").html(a);for(var t=0;t<3;t++)i[t].bigImg?n+='<li data="'+img_url+i[t].bigImg+'" id="'+i[t].id+'"><a href="newsDetail.html?id='+i[t].id+'"><h3>'+i[t].title+'</h3></a><a href="newsDetail.html?id='+i[t].id+'"><div>'+i[t].brief+"</div></a><p>"+i[t].time.split("T")[0]+"</p></li>":n+='<li data="img/newsDetail.jpg" id="'+i[t].id+'"><a href="newsDetail.html?id='+i[t].id+'"><h3>'+i[t].title+'</h3></a><a href="newsDetail.html?id='+i[t].id+'"><div>'+i[t].brief+"</div></a><p>"+i[t].time.split("T")[0]+"</p></li>";$(".newsUl").html(n),$(".newsUl li").eq(0).addClass("newActive"),$("#scrollDiv ul li").mouseenter(function(){$(this).addClass("newActive").siblings().removeClass("newActive");var e=$(this).attr("data"),i=$(this).children().find("h3").text();$(".newsList_l").find("img").attr("src",e),$(".newsList_l").find("span").text(i)})})});