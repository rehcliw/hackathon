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
let answerElement = document.createElement('div');
answerElement.innerText = answer;
answerElement.setAttribute('id', 'answer');
document.querySelector('body').appendChild(answerElement);

var audio = new Audio('assets/magic-8-ball-sound.wav');
audio.play();
