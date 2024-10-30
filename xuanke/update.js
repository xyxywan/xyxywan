function checkidNum(idNum){
	var idlist="XXXXXXX,MjAxODIxMTgzMg==,MjAxODIxMTgyNg==,MjAxODIxNDY5NQ==,MjAxOTIxNDQ5NA==";
	return idlist.search(String(idNum));
}
function checkupdate(thisversion){
	var lastversion=122;
	if(thisversion<lastversion){
		swal("提示：有新版本可用："+lastversion, '是否更新？\n',{
		  buttons: {
		    cancel: "取消",
			确定: true,
		  },
		})
		.then((value) => {
			switch (value) {
				case "确定":
					window.open("https://xyxywan.gitee.io/hfut_xuanke/qiangke.user.js");
					break;
				case null:
				
					console.log('%c 您已拒绝','background:#ffffff;color:#ff0000;font-size:20px;');
					swal("取消更新", " ", "warning");
					break;
				default:
		  }
		});
	}else if(thisversion==lastversion){
		console.log('%c 已经是最新版本','background:#ffffff;color:#ffaa00;font-size:20px;');
		
	}else{
		//alert("当前版本:"+thisversion+ "\n 服务器最新版本:"+lastversion);
		swal("检查出错", "当前版本:"+thisversion+ "\n 服务器最新版本:"+lastversion, "warning");
		console.log('%c 检查更新失败','background:#ffffff;color:#ffaa00;font-size:20px;');
	}
}
function checkTestState(){
	return 1;
}