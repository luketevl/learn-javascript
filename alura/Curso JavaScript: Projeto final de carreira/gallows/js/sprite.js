const createSprite= function (selector){
	const maxFrames = 9;
	const move = function (from, to){
		$(selector).removeClass(`frame${from}`).addClass(`frame${to}`);
	};
	const hasNext = function(next){
		return next <= maxFrames;
	};
	return {
		currentFrame: 1,
		nextFrame(){
			if(hasNext(this.currentFrame)){
				move(this.currentFrame, ++this.currentFrame);
			}
		},
		reset(){
			move(this.currentFrame,1);
			this.currentFrame = 1;
		},
		isFinished(){
			return !hasNext(this.currentFrame);
		}
	}
};