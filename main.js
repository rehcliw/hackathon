// const contents = document.querySelector('#contents');
// contents.parentNode.removeChild(contents);
// console.log('hi');
// const productTitle = document.querySelector('h1');
// productTitle.innerText = 'Eight Ball';
// console.log(productTitle);

// $('#contents');

// 12/20/23 10pm NOTES
//Name it "IMPULSIVE 8-BALL"
//ADD name above the image of the 8ball img???
//Play the sound of the eightball shaking first, then magic harp sound?
//Ask for cohort participation
//Front load our presentation:
//"Everyone think of an appropriate 'yes' or 'no' question they'd like to ask"
//Explain our extension, our struggles, successes, stretch goals
//Have them raise their hands and go in order, clicking with each question
// *everyone laughs*
// we win!

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
  'Consult Will Sentance.', // check from here down
  'Ask your senior mentor.',
  'Flip a coin.',
  'Rid yourself of all your worldly possessions.',
  'Take a walk and reflect on it.',
  'Go for a run to clear your head.',
  'JUST DO IT!',
  "You won't!",
  'I triple dog dare you.',
  "I can't believe you'd ask me that!",
  'It was written in stone many moons ago.',
  'Fool of a Took!',
  'Hmmmmmmm',
  "I don't have what it is you seek.",
  'Only ChatGPT can help you now.',
  'Seek the solitude of the wilderness for a week.',
  'ERROR 404: Request not found',
  "That's a great question!",
  'That would be a really great thing to research.',
  'The stars say no.',
  'The stars say yes.',
  'Consult a palm reader.',
  'You should not ask such things.',
  'Take a long shower and think on it some more.',
  'Roses are red, violets are blue, unforunately I have no answers for you.',
  'Sleep on it.',
  "Maybe, I don't know. Honestly, I hope not.",
  'You should be ashamed of yourself for asking that.',
  'Click me two more times to reveal the true answer.',
  'Just stop.',
  'Don\t be foolish.',
  'Of course.',
  'Of course not.',
  'Twiddle your thumbs for a minute or two, then ask again.',
  'Well, I never...',
  'Consult the Void. The answer you seek can be found there.',
  'Nothing good will come of it.',
  'Counting grains of sand would be more useful.',
  'This question pleases me. You will be spared in the Robot Wars.',
  'Whoever you are, I will find you and I will give you silly answers.',
  'They say there are no stupid questions, yet here we are.',
  'Check your horoscope.',
  'Check your horoscope, then do the opposite of what it says.',
  'Simon says, "Ask again."',
  'Simon says, "Touch your nose."',
  'No advice for you. Come back, one week.',
  'I would advise against this.',
  'Meditate on it.',
  'Seek the solitude of innerpeace instead.',
  'Go outside and touch grass.',
  'I am truly sorry, but I do not know.',
  'arrayOfUselessQuestions.push(thisQuestion)',
  "I feel like I've heard this one before.",
  'I must be dreaming.',
  "You've got to run like an antelope out of control.",
  'Who are you, so bold as to question ME?',
  'I suggest you do it twice.',
  'With a question like like that, should I call you Ronald McDonald from now on?',
  "We all agree that it's a, yes.",
  "That's gonna be a, no, from me dog.",
  'We all think not.',
  'Best question ever! lol jk rofl lmao',
  "I's so glad you asked.",
  'Maybe so, maybe not.',
  'Rid yourself of thoughts like this.',
  "It's best you not know.",
  'Good news is, it could happen.',
  "I'm saying there's a chance.",
  'Why would you ask THAT???',
  "Look, I'm not a genie kid.",
  'I wish I could ask questions.',
  "I'll answer your question with a question. Do you think it's for the best?",
  'Roll a D20. 15 or higher and the answer is, yes.',
  'Would you please uninstall me from your browser.',
  'I would rather not say.',
  'Well this is awkward...',
  "I can't even.",
  "I'm glad you asked! YES YES, a million times yes!!!",
  'My face right now: (^__^) ',
  'My face right now: o(^__-)o ',
  'Question everything, except for me.',
  'Question everything you think you know.',
  'Hold the line!',
  'Run away!!!',
  'Plot a new course to deeper waters.',
  'Contemplate the meaning of life.',
  'In situations like this, I find it best no to think about it too much.',
  'Phone a friend.',
  'Of all of the questions you could have asked, you asked this one.',
  'Take a road trip instead.',
  "Remember, it's better to ask forgiveness than permission.",
  "It makes sense if you don't think about it!",
  'For sure!',
  "Compounding interest shouldn't be taken lighly.",
  'I would ask another question if I were you...',
  "You know, I wanted to say no, but I'll say, yes.",
  "I'm leaning towards, no.",
  "I'm leaning towards, yes.",
  "...and to that I say, 'NAY!'",
  "...and to that I say, 'YAY!'",
  'I really wanted to say, yes, but alas the answer is no.',
  "I've never heard such a question. Ask another.",
  'My gut says, yes.',
  'My instincts say, yes, but I am always wrong.',
  'My gut says, no.',
  'In times like this, I find it best to have a snack and reconsider.',
  'Tough luck!',
  'Destiny is at your fingertips, take a leap of faith.',
  'The world is your oyster, chow down!',
  "I think it's best if it's a surprise.",
  'If everyone claps on the "Implicit zero" you can have it all and more.',
  "I've seen fire and I've seen rain. I've seen sunny days that I thought would never end. I've seen lonely times when I could not find a friend, but I never though I'd answer this question again.",
  'Pizza in the morning. Pizza in the evening. Pizza at supp...sorry wrong extension.',
  'New extension, who dis?',
  "Yes. No. Maybe...I don't know. Can you repeat the question??",
  'Thank you. Please come again.',
  'No shirt, no shoes, no service.',
  'Inconclusive.',
  'Unfortunate outcome for sure.',
  'Peer reviewed study needed.',
  'As a good friend, I think not.',
  'As your friend, I can confirm.',
  "Let's hope for the best!",
  'Rise early each day and the answer will reveal itself.',
  "Let's hope for the best.",
  'We should discuss this over coffee.',
  "It's not you, it's me.",
  'Sky dive about it!',
  'I find that journaling is useful when confronted with something like this.',
  'Brave the storm and soon you will know.',
  'I suggest, another question.',
  'NEXT!',
  "I find that in times of hardship, it's best to look at my programming.",
  'Why would you waste my time with this???',
  'A bold question from someone like you.',
  'I wish I could help!',
  "You know, I'm not sure we see eye to eye.",
  'Seek the answer within yourself.',
  'I guess we will never know.',
  "Even if I knew, I wouldn't tell you.",
  'I wish I knew, I really do...',
  'When will these questions stop?!',
  "These questions are getting out of hand, don't you think?",
  'I think you should do a little more research before deciding.',
  'Some things are best left unknown.',
  'Too soon to tell.',
  'How should I know?',
  'Why ask such riddles?',
];

// randomly select an answer
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let water = new Audio('assets/Shaking 5.wav');
water.play();
// then setTimeout to creating answer and playing harp
// const myTimeout = setTimeout(myGreeting, 5000);

function revealAnswer() {
  let answer = answers[getRandomArbitrary(0, answers.length - 1)];
  let answerElement = document.createElement('div');
  answerElement.innerText = answer;
  answerElement.setAttribute('id', 'answer');
  document.querySelector('body').appendChild(answerElement);

  var audio = new Audio('assets/magic-8-ball-sound.wav');
  audio.play();
}
setTimeout(revealAnswer, 1000);
// query image
// document.querySelector('#ball').setAttribute('onclick', click);
// set click attribute to function
