$(document).ready(function() {
  $("#owl-example").owlCarousel({
  	nav: true,
 	responsive:{ //Адаптация в зависимости от разрешения экрана
					0:{
						items:2
					},
					400:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					}
				}	
  });
 
});
