const startGame = function(sprite){
	let word;
	let step =1;
	let positions =[];

	const _hasLetter = function(letter){
		return new RegExp(letter, 'gi').test(word);
	};
	const tryLetter = function(letter){
		if(!letter.trim()){
			throw Error('Invalid letter.')
		}
		if(_hasLetter(letter)){
			const reg = new RegExp(letter, 'gi');
			while(matchs = reg.exec(word)){
				positions[matchs.index] = word[matchs.index];
			}
			return true;
		}
		else{
			sprite.nextFrame();
			return false;
		}
	};
	const _createPositions = function (wordSecret){
		positions = Array(wordSecret.length).fill('');
	}
	const setSecretWork = function(wordSecret){
		if(!wordSecret.trim()){
			throw Error('Invalid word.')
		}
		word = wordSecret;
		_createPositions(word);
		nextStep(2);
	};
	const getPositions = function(){
		return positions;
	};

	const win = function(){
		return positions.length ? !positions.some(el => el == '') : false;
	};

	const winOrLose = function (){
		return win() || lose();
	};

	const restart = function(){
		step = 1;
		positions = [];
		word = '';
		sprite.reset();
	};

	const lose = function(){
		return sprite.isFinished();
	}
	const getStep = function(){
		return step;
	};
	const nextStep = function(stepWord){
		step = stepWord;
	};

	return{
		setSecretWork,
		getPositions,
		getStep,
		tryLetter,
		win,
		lose,
		restart,
		winOrLose
	}

};