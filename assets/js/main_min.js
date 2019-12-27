"use strict";if(typeof jQuery==="undefined"){throw new Error("Jolpai requires jQuery to work on!");}$.jolpaiObj={};$.jolpaiObj.options={};$.jolpaiObj.TopMenu=function(){var navMenu=$('.menu-list')
navMenu.onePageNav();$(window).on('scroll resize',function(e){if($(this).scrollTop()>70){$('.header-section').addClass('sticky animated fadeInDown');}else{$('.header-section').removeClass('sticky animated fadeInDown');}e.preventDefault();});$('.responsive').on('click',function(event){$('.menu-list').slideToggle(400);$('.header-section').toggleClass('bgc');event.preventDefault();});$('.menu-list li a').on('click',function(event){if($(window).width()<768){$('.menu-list').slideUp(400);$('.header-section').removeClass('bgc');}});};$.jolpaiObj.TestimonialCarousel=function(selector){if($(selector).length){$(selector).owlCarousel({dots:false,nav:true,loop:true,margin:30,smartSpeed:700,items:1,autoplay:true,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']});}};$.jolpaiObj.HeroSlider=function(selector){if($(selector).length){$(selector).owlCarousel({dots:false,nav:false,loop:true,smartSpeed:700,items:1,autoplay:true,animateIn:'fadeIn',animateOut:'fadeOut'});}};$.jolpaiObj.BgImage=function(selector){if($(selector).length){$(selector).each(function(){var image=$(this).data('bg');$(this).css({'background-image':'url('+image+')','background-size':'cover','background-repeat':'no-repeat'});});}};$.jolpaiObj.VideoBg=function(selector,videoid){if($(selector).length){$(selector).YTPlayer({fitToBackground:true,videoId:videoid});}};$.jolpaiObj.ProgressBar=function(selector){if($(selector).length){$(selector).each(function(){var progress=$(this).data("progress");var prog_width=progress+'%';if(progress<=100){$(this).append('<div class="bar-inner" style="width:'+prog_width+'"><span>'+prog_width+'</span></div>');}else{$(this).append('<div class="bar-inner" style="width:100%"><span>'+prog_width+'</span></div>');}});}};$.jolpaiObj.Portfolio=function(selector){if($(selector).length){var $container=$('.isotope_items');$container.imagesLoaded().progress(function(){$container.isotope();});$('.portfolio-filter li').on("click",function(){$(".portfolio-filter li").removeClass("active");$(this).addClass("active");var selector=$(this).attr('data-filter');$(".isotope_items").isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false,}});return false;});}};$.jolpaiObj.MagnificPopup=function(){$('.default-popup').magnificPopup({type:'image',removalDelay:400,zoom:{enabled:true,duration:300}});};$.jolpaiObj.Particles=function(selector){if($(selector).length){particlesJS('particles',{"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1.5,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true,"config_demo":{"hide_card":false,"background_color":"#b61924","background_image":"","background_position":"50% 50%","background_repeat":"no-repeat","background_size":"cover"}});}};$.jolpaiObj.Typed=function(selector){if($(selector).length){$(selector).typed({strings:["Freelancer","Grafiker","Yazılımcı","Web Tasarımcı"],typeSpeed:10,loop:true,backDelay:700});}};$.jolpaiObj.ContactForm=function(selector){if($(selector).length){$(selector).validate({rules:{name:{required:true,},email:{required:true,email:true},message:{required:true,}},submitHandler:function(form){$.ajax({type:"POST",dataType:"json",url:'mail.php',data:$(form).serialize(),success:function(data){if(data.status=="1"){$("#result").empty().html('<span class="alert alert-success">'+data.msg+'</span>');$(selector)[0].reset();}else{$("#result").empty().html('<span class="alert alert-danger">'+data.msg+'</span>');}}});}});}};$.jolpaiObj.SmoothScroll=function(selector){if($(selector).length){$(selector).on('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top-0},1000);event.preventDefault();});}};$(function(){$.jolpaiObj.TopMenu();$.jolpaiObj.TestimonialCarousel('#testimonial-carousel');$.jolpaiObj.HeroSlider('.hero-slider');$.jolpaiObj.BgImage('.bg-cms');$.jolpaiObj.VideoBg('#video-bg','hihYqk15e6Y');$.jolpaiObj.ProgressBar('.progress-bar-style')
$.jolpaiObj.Portfolio('.isotope_items');$.jolpaiObj.MagnificPopup();$.jolpaiObj.Typed('.element');$.jolpaiObj.Particles('#particles');$.jolpaiObj.ContactForm('#contact_form');$.jolpaiObj.SmoothScroll('.smooth-scroll');new WOW().init();});$(window).on('load',function(){$(".loader").fadeOut();$("#preloder").delay(100).fadeOut("slow");$('.cswitch').on('click',function(e){$('.colour-switch').toggleClass('active');$('.colour-switch span').on('click',function(e){$('.colour-switch span').removeClass('active');$(this).addClass('active');var colourID=$(this).data("color");$('.template-skins').load().attr('href','assets/css/skins/'+colourID+'.css');e.preventDefault();});e.preventDefault();});});