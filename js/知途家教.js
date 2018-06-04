$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	  		autoplay:2000,
	        loop:true,//在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
	        autoplayDisableOnInteraction:false,//用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
	        pagination:".swiper-pagination",
	        paginationClickable:true,//点击分页器的指示点分页器会控制Swiper切换。

	    });
	$.ajax({
		url:"http://api.zhituteam.com/api/index",
		type:"get",
		dataType: "json",
		success:function(res){
			var str="";
			for(var i=0;i<res.data.teacher.length;i++){
				var subjectStr="";
				for(var j=0;j<res.data.teacher[i].subject.length;j++){
					subjectStr+='<span class="math">'+res.data.teacher[i].subject[j].label+'</span>'
				};
				var gradeStr="";
				for(var k=0;k<res.data.teacher[i].grade.length;k++){
					gradeStr+='<span class="level">'+res.data.teacher[i].grade[k].label+'</span>'
				};
				str+='<div class="teacher"><img src="'+res.data.teacher[i].image+'"><span class="chen">'+res.data.teacher[i].name+'</span>'+subjectStr+''+gradeStr+'<span class="time">'+res.data.teacher[i].teach_time+'</span><p>'+res.data.teacher[i].teach_year+'</p><div class="introduced"><img src=".//image/yuan.png"><span>专职教师</span><img src=".//image/yuan.png"><span>'+res.data.teacher[i].is_confirm+'</span><img src=".//image/yuan.png"><span>'+res.data.teacher[i].is_star+'</span></div></div>'
			};
			$(".teacher-sss").html(str);
		},
		error:function(res){

		}
	})
	

})



// var str="";
//     		for(var i=0;i<res.data.teacher.length;i++){
//                 var sub="";
//                 for(var j=0;j<res.data.teacher[i].subject.length;j++){
//                     sub+='<span class="teach-one">'+res.data.teacher[i].subject[j].label+'</span>';
//     		    }
//                 var gra="";
//                 for(var k=0;k<res.data.teacher[i].grade.length;k++){
//                     gra+='<span class="teach">'+res.data.teacher[i].grade[k].label+'</span>';
//                 }
//                 str+='<div class="bar"><div class="ms"><img src="'+res.data.teacher[i].image+'" alt=""></div><div class="introduce"><p class="name"><span class="chen">'+res.data.teacher[i].name+'</span><span class="teach-one">'+sub+'</span><span class="teach">'+gra+'</span><span class="hour">已授200课时</span></p><p class="add">9年教龄</p><p class="work"><span>专职教师</span><span>已认证</span><span>明星教师</span></p></div></div>';
//             }
//     		$(".person-bar").html(str);
