const createController = function (game){
	const $input = $('.entrada');
	let $positions = $('.lacunas');


	const start = function(){

        $input.keypress(function (event) {
            if (event.which == 13) {
                switch (game.getStep()) {
                    case 1:
                        saveSecretWord();
                        break;
                    case 2:
                        readTry();
                        break;
                }
            }
        });
	};

	const saveSecretWord = function(){
		try{
			game.setSecretWork($input.val().trim());
			$input.val('');
			changePlaceholder('try');
			showPositions();
		}
		catch(ex){
			alert(ex.message);
		}
	};

	const changePlaceholder = function(text){
		$input.attr('placeholder', text);
	};

	const showPositions = function(){
		$positions.empty();
		game.getPositions().forEach(position => 
			$('<li>').addClass('lacuna')
					.text(position)
					.appendTo($positions)
					);
	};

	const readTry = function(){
		try{
			if(game.winOrLose()){
				if(game.win()){
					alert('You win! ;)');
				}else if(game.lose()){
					alert('You lose! ;(');
				}	
				restart();
				
			}else{
				game.tryLetter($input.val().trim());	
				$input.val('');
				showPositions();
			}			
		}
		catch(ex){
			alert(ex.message);
		}
		
	};

	const restart = function(){
		game.restart();
		$positions.empty();
		changePlaceholder('palavra secreta');
	}


	return {
		start
	}

}
createController(startGame(createSprite('.sprite'))).start();