!function(p){var u={init:function(n,a){return u.addhtml(n,a),void u.bindEvent(n,a)},addhtml:function(u,r){return function(){u.empty(),r.shownum<5&&(r.shownum=5),r.pageNum<r.shownum&&(r.shownum=r.pageNum);var n=r.shownum-4,a=parseInt((r.shownum-5)/2);if(0<(r.shownum-5)%2)var e=a+1;else e=a;if(1<r.current?u.append('<a href="javascript:;" class="prebtn">上一页</a>'):(u.remove(".prevPage"),u.append('<span class="disabled">上一页</span>')),4<r.current&&r.pageNum>r.shownum&&(u.append('<a href="javascript:;" class="zxfPagenum">1</a>'),u.append('<a href="javascript:;" class="zxfPagenum">2</a>'),u.append("<span>...</span>")),4<r.current&&r.current<r.pageNum-n&&r.pageNum>r.shownum)var t=r.current-a,p=r.current+e;else if(4<r.current&&r.current>=r.pageNum-n&&r.pageNum>r.shownum)t=r.pageNum-n,p=r.pageNum;else if(r.pageNum<=r.shownum)t=1,p=r.shownum;else t=1,p=r.shownum-1;for(;t<=p;t++)t<=r.pageNum&&1<=t&&(t==r.current?u.append('<span class="zxfPagenum '+r.activepage+'">'+t+"</span>"):t==r.current+1?u.append('<a href="javascript:;" class="zxfPagenum '+r.activepaf+'">'+t+"</a>"):u.append('<a href="javascript:;" class="zxfPagenum">'+t+"</a>"));p<r.pageNum&&u.append("<span>...</span>"),r.current>=r.pageNum?(u.remove(".nextbtn"),u.append('<span class="disabled">下一页</span>')):u.append('<a href="javascript:;" class="nextbtn">下一页</a>'),u.append("<span>共<b>"+r.pageNum+"</b>页，</span>"),u.append('<span>到第<input type="text" class="zxfinput" value="'+r.current+'"/>页</span>'),u.append('<span class="zxfokbtn">确定</span>')}()},bindEvent:function(e,t){return e.off("click"),e.on("click","a.prebtn",function(){var n=parseInt(e.children("span.current").text()),a=p.extend(t,{current:n-1});u.addhtml(e,a),"function"==typeof t.backfun&&t.backfun(a)}),e.on("click","a.zxfPagenum",function(){var n=parseInt(p(this).text()),a=p.extend(t,{current:n});u.addhtml(e,a),"function"==typeof t.backfun&&t.backfun(a)}),e.on("click","a.nextbtn",function(){var n=parseInt(e.children("span.current").text()),a=p.extend(t,{current:n+1});u.addhtml(e,a),"function"==typeof t.backfun&&t.backfun(a)}),e.on("click","span.zxfokbtn",function(){var n=parseInt(p("input.zxfinput").val()),a=p.extend(t,{current:n});u.addhtml(e,a),"function"==typeof t.backfun&&t.backfun(a)}),void e.on("keydown","input.zxfinput",function(){"13"==event.keyCode&&p(".zxfokbtn").click()})}};p.fn.createPage=function(n){var a=p.extend({pageNum:15,current:1,shownum:9,activepage:"current",activepaf:"nextpage",backfun:function(){}},n);u.init(this,a)}}(jQuery);