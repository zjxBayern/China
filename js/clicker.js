function checkForm() {
	lis = document.getElementsByTagName("li");
	var err;
	for(i = 0; i < lis.length; i++) {
		ins = lis[i].getElementsByTagName("input");
		if(ins.length > 0) {
			err = true;
			for(t = 0; t < ins.length; t++) {
				if(ins[t].checked == true) {
					err = false;
				}
			}
			if(err == true) {
				alert("请选择！");
				return false;
			}
		}
	}
}

$(function() {
	$("#look").bind("click", function() {
		
		var a=document.getElementById('echarts');
		var original = 0; //原始分
		var transform = 0; //转化分
		var radioList = $(":checked"); //所有被选radio
		var items = radioList.size(); //条目数
		radioList.each(function() {
			original += parseInt($(this).val());
		});
		transform = ((original - items) / (items * 4)) * 100;
		//初始化echarts实例

		var bmiChart = echarts.init(a);
		//指定图表的配置项和数据
		var option = {
			title: {
				text: '体质得分',
				
			},
			tooltip: {},
			legend: {
				data: ['分数']
			},
			xAxis: {
				data: ["原始分", "转化分", "正常最低分"]
			},
			yAxis: {},
			series: [{
				name: '分数',
				type: 'bar',
				data: [original, transform, 60]
			}]
		};
		// 使用刚指定的配置项和数据显示图表
		bmiChart.setOption(option);
		DIVshowEcharts.style.position="fixed";
		DIVshowEcharts.style.top="100px";
		DIVshowEcharts.style.left="450px";
		DIVshowEcharts.style.display="block";
        
	});
	

});

function DIVclose(){
	document.getElementById("DIVshowEcharts").style.display="none";
}
