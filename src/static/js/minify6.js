/* Minify: missing file 'tpl/www/images/swiper/swiper.jquery.min.js' */

;$(function(){secPackage();});function secPackage(){var wrap=$(".ztPack .secPackage");var packagesBox=$(".packagesBox",wrap);$("a",packagesBox).click(function(){var index=$(this).attr("index");var li=$(this).closest(".itemLi");var hd=$(".infoBox .photo .hdli2",li);$("a",packagesBox).removeClass("active");$(this).addClass("active");$("li",hd).eq(index-1).click();})}
$(function(){var ztHalfSlide=$("[data='ztHalfSlide']");if(ztHalfSlide.length){ztHalfSlide.each(function(){J_ztHalfSlide($(this))})}});function J_ztHalfSlide(wrap){if(!wrap.length){return false}
var isbig=wrap.attr("data-big"),bdbox=wrap.attr("data-bd")?wrap.attr("data-bd"):'.bd',hdbox=wrap.attr("data-hd")?wrap.attr("data-hd"):'.hd',bd=isbig?$(".bBd",wrap):$(bdbox,wrap),hd=isbig?$(".bHd",wrap):$(hdbox,wrap),hdli=$(".hdli",hd),hdli2=$(".hdli2",hd),pager=$(".pager",hd),prev=isbig?$(".bPrev",wrap):$(".prev",wrap),next=isbig?$(".bNext",wrap):$(".next",wrap),effect=wrap.attr("data-effect"),dir=wrap.attr("data-dir"),speed=wrap.attr("data-speed"),auto=wrap.attr("data-auto"),loop=wrap.attr("data-loop"),center=wrap.attr("data-center"),view=wrap.attr("data-view"),group=wrap.attr("data-group"),space=wrap.attr("data-space"),stop=wrap.attr("data-stop"),type=wrap.attr("data-type"),move=wrap.attr("data-move"),autoheight=wrap.attr("data-autoheight"),packages=$(".packages",wrap);hdli.hide();var bSlide=new Swiper(bd,{effect:effect?effect:'slide',fadeEffect:{crossFade:true},direction:dir?dir:'horizontal',speed:(speed?Number(speed):.8)*1000,autoplay:{delay:(auto?Number(auto):4)*1000,disableOnInteraction:0},loop:loop=='0'?0:1,loopedSlides:loop=='0'?0:5,centeredSlides:center=='1'?1:0,slidesPerView:view?(view=='auto'?'auto':Number(view)):1,slidesPerGroup:group?Number(group):1,slideActiveClass:'active',spaceBetween:space?Number(space):10,navigation:{prevEl:prev,nextEl:next},allowTouchMove:(move=='0'||isbig)?false:true,autoHeight:autoheight=='1'?1:0,pagination:{el:pager.length?pager:hd,type:type?type:'bullets',clickable:1,bulletClass:'inline',bulletActiveClass:'active',renderBullet:function(index,className){if(pager.length){var li=$("li",hdli).eq(index).html(),liStyle=$("li",hdli).eq(index).attr("style")?$("li",hdli).eq(index).attr("style"):'';return'<li class="'+className+'" style="'+liStyle+'">'+li+'</li>';}else{return'<span class="'+className+'"></span>';}}},on:{init:function(swiper){var cur=this.realIndex;$("li",hdli2).eq(cur).addClass("active").siblings("li").removeClass("active");if(packages.length){$("a[index]",packages).removeClass("active");$("a[index='"+(cur+1)+"']",packages).addClass("active");}},slideChangeTransitionStart:function(){var cur=this.realIndex;$("li",hdli2).eq(cur).addClass("active").siblings("li").removeClass("active");if(packages.length){$("a[index]",packages).removeClass("active");$("a[index='"+(cur+1)+"']",packages).addClass("active");}}},lazy:{loadPrevNext:1,loadPrevNextAmount:5,loadOnTransitionStart:1},});var curIndex=$("li.current",hd).index();if(curIndex){$("li",hd).eq(curIndex).addClass("active").siblings("li").removeClass("active");if(loop=='0'){bSlide.slideTo(curIndex,10,false);}else{bSlide.slideToLoop(curIndex,10,false);}}
if(stop==1){bd.hover(function(){bSlide.autoplay.stop();},function(){bSlide.autoplay.start();});}
if(hdli2.hasClass("useHover")){$("li",hdli2).hover(function(){var index=$(this).index();$("li",hdli2).eq(index).addClass("active").siblings("li").removeClass("active");if(loop=='0'){bSlide.slideTo(index,10,false);}else{bSlide.slideToLoop(index,10,false);}});}else{$("li",hdli2).click(function(){var index=$(this).index();$("li",hdli2).eq(index).addClass("active").siblings("li").removeClass("active");if(loop=='0'){bSlide.slideTo(index,10,false);}else{bSlide.slideToLoop(index,10,false);}});}}