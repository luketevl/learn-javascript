const startGame = function(sprite){
	let word;
	let step =1;
	let positions =[];

	const _hasLetter = function(letter){
		return new RegExp(letter, 'gi').test(word);
	};
	const tryLetter = function(letter){
		if(_hasLetter(letter)){
			const reg = new RegExp(letter, 'gi');
			while(matchs = reg.exec(word)){
				positions[matchs.index] = word[matchs.index];
			}
		}
		else{
			sprite.nextFrame();
		}
	};
	const _createPositions = function (wordSecret){
		positions = Array(wordSecret.length).fill('');
	}
	const setSecretWork = function(wordSecret){
		word = wordSecret;
		_createPositions(word);
		nextStep(2);
	};
	const getPositions = function(){
		return positions;
	};

	const getStep = function(){};
	const nextStep = function(step){
		step = step;
	};

	return{
		setSecretWork,
		getPositions,
		getStep,
		tryLetter
	}

};