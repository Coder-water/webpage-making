var timer = null;
function start(){
 
            timer = setInterval(function(){
                // 1.找到所有的 单元格
                var allTd = document.getElementsByTagName("td");
 
                // 3.获取一个随机数
                var num = parseInt(Math.random()*51);
 
                // 2.遍历所有单元格，将所有单元格加上背景颜色
                for (var i=0; i<allTd.length; i++) {
                    if (i == num) {
                        allTd[i].className = "tdBg";
                    } else {
                        allTd[i].className = "";
                    }
                }
            }, 1);
        }
 
function end(){
            clearInterval(timer);
        }
		$("#btn").click(function(){
			$.get("js/predata.json",{},function(data){
				console.log(data);
				var ul = $("<ul></ul>");
				for(var i = 0; i < data.length ; i++){
					var user = data[i];
					var li = "<li>" + user.name + "</li>";
					ul.append(li);
				}
				console.log(ul);
				$("body").append(ul);
			});
		})