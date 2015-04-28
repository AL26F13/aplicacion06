// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on('tap',function (){
		navigator.vibrate(1000);
	}); // tap a btnvibrar
	$('#btnbeep').on('tap', function (){
		navigator.beep(1);
	}); // tap a bntbeep
	$('#izquierda').on('swipeleft', function (){
		alert("Barrio a la izquierda")
	});//barrer a la izquierda
	$('#derecha').on('swiperigth', function (){
		alert("Barrio a la derecha")
	});//barrer a la derecha
}); 
});

