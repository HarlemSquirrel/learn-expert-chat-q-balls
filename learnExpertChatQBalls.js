/****************************************************************

	********** HarlemSquirrel's **********
	*** Learn Expert Chat Q-Balls Script ***
	Run this script once when you load https://learn.co/expert-chat
	and click the red ball on the Qs you'd like to watch

*****************************************************************/


function addBallClassesToHead() {
	// Add the ball and redBall classes to the head
	$('<style>', {
		type: 'text/css',
		text:
			'.ball{border:1px solid red;border-radius:50%;display:inline-block;padding:5px;}' +
			'.redBall{ background:red }'
	}).appendTo("head");
}

function addBallsToQs() {
	// Add red circle to each question node with one that will toggle filled in when clicked
	$('.fc--question-node:not(:has(>.ball))').prepend($('<div>', {
		"class":"ball",
		onclick:"$(this).toggleClass('redBall')"
	}));
}

// Run once
addBallClassesToHead();
addBallsToQs();

window.setInterval(function(){
	// runs every 30 seconds, first run delayed by 30s
  addBallsToQs();
}, 30000);
