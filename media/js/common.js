
//点击事件
mui('#pullrefresh, #footer-jump, #offCanvasSideScroll, #content-jump, .guide-box').on('tap', 'a', function() {
	var id = this.getAttribute('href');
	if(id == "javascirpt:void(0)" || id == ""){
		return false;
	}else{
		console.log("111");
		mui.openWindow({
			id: id,
			url: this.href
		});
	}
	
		
})