const prompt = require('prompt');
var properties1 = [
    {
        name: 'Ball1',
        validator: /.[0-9XxQq/]+$/,
        warning: "Username must be only single digits, 'X', '/' or 'Q' to quit"
    }
];

var properties2 = [
    {
        name: 'Ball2',
        validator: /.[0-9XxQq/]+$/,
        warning: "Username must be only single digits, 'X', '/' or 'Q' to quit"
    }
];

prompt.start();

var maxFrames = 10;  //! might grow based on late-game marks
var frames = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
var gameScore = 0;

function DrawScoreboard() {

    console.clear;

    //build the board
    var topline =   "_______________________________________\n";  //39 wide
    var botline = "\n----------------------------------------";  //40 wide
    var scoreboard = topline;

    // Write the frame numbers
    for (var y = 1; y <= maxFrames; y++) {
        scoreboard += '|';
         if (y < 10) 
            scoreboard += ' ';
         scoreboard += y + '|';
    }

    scoreboard += '\n';
    // Write the frame scores
    for( y=1; y <= maxFrames; y++)
    {
        scoreboard += '| ' + frames[y] + '|';
    }

    scoreboard += botline;
    scoreboard += '  [' + gameScore + ']';
    scoreboard += '\n';

    console.log(scoreboard);
}

function DrawMenu(frm) {
    const frameName = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
    // First ball
    prompt.get(`${frameName[frm]} frame. First ball? ('X' for strike, '/' for 2nd ball spare, '0-9' or 'Q' to quit`,
    (val) => {
        rl.write(`<${val}>`)
    }
);

}

//! Main app loop
for(let x =1; x <= maxFrames; x++)
{
    var frameScore = 0;    //current frame

    DrawScoreboard();

//! Draw menu and score
    DrawMenu(x);    // pass frame

//! get command from user

//! process command. 'Q' to end, else digit, 'X' or '/' are valid (w/conditions)

//! update gameScore, maxFrames
gameScore += parseInt(frameScore, 10);
}

