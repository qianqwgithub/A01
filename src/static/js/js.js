/**
 * 单选
 */
function singleChoose(e) {
	const that = $(e);
	const field = that.attr("data-field");
	const val = that.attr("data-val");
	const bd = that.attr("data-bd");
	that.addClass("active").siblings("li").removeClass("active");
	selfData[field] = val;
	if(bd){
		$("."+bd).addClass("off").removeClass("on").siblings(".bd").addClass("on").removeClass("off");
	}
}

/**
 * 整个流程
 */
function goPage(e) {
	const wrap = $(".ztStyle");
	const page = $(e).attr("data-page");
	const validate = $(e).attr("data-validate");
	const phoneInput = $("#phone",wrap);
	const phone = phoneInput.val();
	const areaInput = $("#area",wrap);
	const area = areaInput.val();
	//验证
	if (validate) {
		switch (validate) {
			case 'ruanzhuang':
				if (!selfData.ruanzhuang) {
					layerAlert("请选择您的软装类型");
					return false;
				}
				break;
			case 'unit':
				if (!selfData.unit) {
					layerAlert("请选择您的户型");
					return false;
				}
				break;
			case 'dstyle':
				if (!selfData.dstyle) {
					layerAlert("请选择您喜欢的软装风格");
					return false;
				}
				break;
			case 'key':
				if (!selfData.key) {
					layerAlert("请选择装修中您关注的重点");
					return false;
				}
				break;
			case 'indent':
				if (!area) {
					layerAlert("请输入您家面积");
					areaInput.focus();
					return false;
				}
				if (!phone) {
					layerAlert("请输入您的手机号码，以便获取测试结果");
					phoneInput.focus();
					return false;
				}
				if (!(/^1[2-9]\d{9}$/.test(phone))) {
					layerAlert("请输入有效的手机号码");
					phoneInput.focus();
					return false;
				}
				break;
		}
	}
	//执行上下一步
	if (page) {
		$(".page",wrap).css({"display": "none","visibility": "hidden","opacity": 0});
		$("."+page,wrap).css({"display": "block","visibility": "visible"}).animate({"opacity": 1});
	}
	//选择完成
	if (page == 'pageResult') {
		//提交后台
		var tomsg = "提交成功，我们将第一时间与您取得联系！";
		var data = {
			tomsg: tomsg,
			isvcode: 1,
			totype: 'ajax',
			subject: "来源：PC-风格测试",
			phone: phone,
			area: area,
			content: '软装类型：' + selfData.ruanzhuang + ';户型：' + selfData.unit + ';软装风格：' + selfData.dstyle + ';关注的重点：' + selfData.key
		}
		var btn = $("#_phpok_submit",wrap);
		
		if(btn.hasClass("disabled")){
			layerAlert('您已经提交过了，感谢您的支持！', 6, 2000);return false
		}
		layer.load(4,{time: 5*1000});
		$.post('?c=post&f=setok&module_id=119', data, function(data2){
			layer.closeAll();
			if(data2.msg==tomsg){
				layer.confirm(data2.msg, {title: '提示', btn: ['知道了'], icon: 1});
				btn.addClass("disabled");
			}else{
				layer.confirm(data2.msg, {title: '提示', btn: ['知道了'], icon: 7});
			}
		},"json");
	}
}
