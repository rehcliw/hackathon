// const contents = document.querySelector('#contents');
// contents.parentNode.removeChild(contents);
// console.log('hi');
// const productTitle = document.querySelector('h1');
// productTitle.innerText = 'Eight Ball';
// console.log(productTitle);

// $('#contents');

// object full of answers
// declare answers, use chatGPT
let answers = [
  'Outlook not so good.',
  'Yes, definitely!',
  'Ask again later.',
  "Don't count on it.",
  'You may rely on it.',
  'My sources say no.',
  'Signs point to yes.',
  'Cannot predict now.',
  'Very doubtful.',
  'As I see it, yes.',
  'Reply hazy, try again.',
  'Better not tell you now.',
  'Yes, in due time.',
  'My reply is no.',
  'It is certain.',
  'Ask someone else.',
  'Without a doubt.',
  'Concentrate and ask again.',
  'Outlook good.',
  'Certainly not.',
];

// randomly select an answer
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let answer = answers[getRandomArbitrary(0, answers.length - 1)];
console.log(answer);

// 8Ball - icon
// activates on click
// sounds bites of water
/*
var audio = new Audio('audio_file.mp3');
audio.play();
function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}
.
.
.
<button onclick="play()">Play Audio</button>
*/

