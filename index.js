// إضافة استعلام عند النقر على زر

$( function() {


	function show(menu) {
		$(".main_aladdin").hide("Flod");
		$(".aladdin_AboutME_menu").hide("Flod");
		$(".aladdin_work_menu").hide("Flod");

	$(`.${menu}`).show("Flod");

    }
        // $('.myButton').click(function() {
        //   Swal.fire({
        //     title: 'مرحبًا!',
        //     text: 'هذا نص تنبيه SweetAlert2.',
        //     icon: 'success',
        //     confirmButtonText: 'حسنًا'
        //   });
        // });
      // ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}

$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



$(document).ready(function() {
	$(".aladdin_AboutME_menu").hide();
	$(".aladdin_work_menu").hide();

	$(".main_aladdin").show();


        $.get(`https://japi.rest/discord/v1/user/376752463971352577`).then((idk) => {
			
	 const data = idk.data;

	 $( ".aladdin_profile_main" ).empty();



	 if(data.bannerURL != null)
	 {

		$( ".aladdin_profile_main" ).append( `<img src="${data.bannerURL}" class="aladdin_banner">` )
	} else {
		$( ".aladdin_profile_main" ).append( `<img src="https://media.discordapp.net/attachments/1132423311721250928/1200145409994137691/b6d6a3f8459a3c13b0f8ecb2a0849c29.png?ex=65c51d83&is=65b2a883&hm=9722111e8c6636ca70b9ae591eb2ee4dacb3cec302b74647691d69c7d282eee6&=&format=webp&quality=lossless" class="aladdin_banner">` )

	}
	 $( ".aladdin_profile_main" ).append( `<img src="${data.avatarURL}" class="aladdin_img">` );
	
	})
	setTimeout(function(){ test(); });

});
//=========================aladdin_buttons================================\\

$(document).on('click', '.aladdin_home', function() {
	show("main_aladdin")
})

$(document).on('click', '.aladdin_AboutME', function() {
	show("aladdin_AboutME_menu")
})

$(document).on('click', '.aladdin_work', function() {
	$.get(`https://mini-furtive-donkey.glitch.me/aladdin_work`).then((idk) => {

	  if (idk.success) {
		$( ".my_work" ).empty();

		const data = idk.data;
  
		// تحقق من وجود البيانات قبل الوصول إليها
		if (data && data.length > 0) {
		  // قم بفحص كل عنصر في المصفوفة

		  data.forEach(item => {
			let preview = "disabled";
			let url = "#";
			if(item.preview == true){
				preview = "";
				url = item.url;
			}
			const div = `
			<div class="card  text-center text-bg-dark mb-3" style="width: 18rem; border: 2px solid var(--mainColor);">
			<img src="${item.img}" class="card-img-top" alt="img">
			<div class="card-body">
			  <h5 class="card-title">${item.title}</h5>
			  <p class="card-text">${item.description}</p>
			  <a href="${url}" class="btn btn-primary ${preview}">Preview</a>
			</div>
		  </div> 
			`
			$( ".my_work" ).append(div );
		});
		} else {
		  console.log('No data found');
		}
	  } else {
		console.log('Request was not successful');
	  }
	});
  
	show("aladdin_work_menu");
  });
  
// let time = 0;
// let m = 0;

// setInterval(function(){
// 	time++;
	
// 	if(time == 60){
// 		time = 0
// 		m++;
// 	}
// 	$('.time').text(`${m}:${time}`)


// },1000)

//=========================aladdin_content================================\\
$(document).on('click', '#discord-icon', function() {
	window.location.href = "https://discord.gg/gV9XNvzcPp";
})

$(document).on('click', '#steam-icon', function() {
	window.location.href = "https://steamcommunity.com/id/aladdin-y/";
})


$(document).on('click', '#paypal-icon', function() {
	window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NZZPSAKE3XRUW";
})


$(document).on('click', '#github-icon', function() {
	window.location.href = "https://github.com/aladdin-y";
})




$(document).on('click', '#spotify_icon', function() {
	window.location.href = "https://open.spotify.com/user/31dfd4642nwfhrehxurvrbx2gbc4";
})



$(document).on('click', '#valorant', function() {
	window.location.href = "https://preview.explorant.space/account/i9QujbFy/";
})






})
