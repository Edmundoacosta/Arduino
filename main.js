$( document ).ready(function() {

	function connect(board, type){
		let url = 'http://www.kerberosdevelopment.com/registrar_evento.php?placa=' + board + '&tipo=' + type;
		$.get( url, function( data ) {
	  		console.log(data);
		});
	}

	//connect('ejemplo','S');
});