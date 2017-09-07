$(function() {
$('img').hide();
$('#messageF').hide();
var voeux = ["May your life get flooded with happiness", "May your every morning become the most beautiful morning", "I wish the smile always stick to your face", "my lovely sister","May This birthday bring a lot of excitement in your Life","^_^"];
var $list = $('ul');



	$list.append('<li>' + voeux[0] + '</li>');
	$("li:last").slideUp(0).delay(1000).fadeIn(1000);

	$list.append('<li>' + voeux[1] + '</li>');
	$("li:last").slideUp(0).delay(3000).fadeIn(1000);

	$list.append('<li>' + voeux[2] + '</li>');
	$("li:last").slideUp(0).delay(7000).fadeIn(1000);

	$list.append('<li>' + voeux[3] + '</li>');
	$("li:last").slideUp(0).delay(9000).fadeIn(1000);

	$list.append('<li>' + voeux[4] + '</li>');
	$("li:last").slideUp(0).delay(11000).fadeIn(1000);

	$list.append('<li>' + voeux[5] + '</li>');
	$("li:last").slideUp(0).delay(13000).fadeIn(1000);


$('img').show();
$("img").slideUp(0).delay(15000).fadeIn(1500);
$('#messageF').show();
$('#messageF').slideUp(0).delay(15000).fadeIn(1500);



});
