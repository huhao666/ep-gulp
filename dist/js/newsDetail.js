$(function(){var e=$("#nav").offset().top;$(window).scroll(function(){$(document).scrollTop()>=e?($("#nav").addClass("fixnav"),$("#banner").addClass("new"),$("#nav .logo").addClass("logoNew")):($("#nav").removeClass("fixnav"),$("#banner").removeClass("new"),$("#nav .logo").removeClass("logoNew"))});var t=window.location.search.split("=")[1];$.get(common_url+"/getNewsDetail",{id:t},function(e){var t=e.newsDetail;document.title=t.title+"-中力电动叉车|搬运车价格|厂家-搬运绿色 提升未来",$(".top .nTitle").text(t.title),$(".top .nTime").text(t.time.split("T")[0]),$(".detail").html(unescape(t.content)),t.pre?($(".prev a:eq(0)").attr({href:"newsDetail.html?id="+t.pre.id}),$(".prev span:eq(0)").text(t.pre.title)):$(".prev:eq(0)").hide(),t.next?($(".next a:eq(0)").attr({href:"newsDetail.html?id="+t.next.id}),$(".next span:eq(0)").text(t.next.title)):$(".next:eq(0)").hide()})});