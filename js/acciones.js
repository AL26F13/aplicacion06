// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on('tap',function (){
		navigator.vibrate(1000);
	}); // tap a btnvibrar
	$('#btnbeep').on('tap',function (){
		navigator.notification.beep(1);
	}); // tap a bntbeep
	$('#izquierda').on('swipeleft',function (){
		alert("Barrio a la izquierda")
	});//barrer a la izquierda
	$('#derecha').on('swiperight',function (){
		alert("Barrio a la derecha")
	});//barrer a la derecha
	document.addEventListener("pause",function (){
		$('#listado').append("<p> La aplicacion se pausó </p>");
	});//pausa cierra
	document.addEventListener("resume",function (){
		$('#listado').append("<p> Se reinicio la aplicacion </p>");
	});//se despauso
	$(window).on('orientationchange',function(e){
		$('#listado').append("<p> Orientcion: " + e.orientation + "</p>");
	});//cambiar de orientacion
}); 
});

