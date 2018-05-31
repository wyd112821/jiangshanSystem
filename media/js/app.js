//侧滑容器父节点
var offCanvasWrapper = mui('#offCanvasWrapper');
 //菜单容器
var offCanvasSide = document.getElementById("offCanvasSide");

 //移动效果是否为整体移动
var moveTogether = false;
 //侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
var classList = offCanvasWrapper[0].classList;


 //主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
 //实现ios平台的侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
	offCanvasWrapper[0].addEventListener('shown', function(e) { //菜单显示完成事件
		plus.webview.currentWebview().setStyle({
			'popGesture': 'none'
		});
	});
	offCanvasWrapper[0].addEventListener('hidden', function(e) { //菜单关闭完成事件
		plus.webview.currentWebview().setStyle({
			'popGesture': 'close'
		});
	});
}