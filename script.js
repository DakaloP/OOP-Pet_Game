class Pet {
  constructor(name, soundText, image,soundUrl) {
    this.name = name;
    this.soundText = soundText;
    this.image = image;
    this.soundUrl = new Audio(soundUrl);//Audio
    this.playCount = 0;
  }

  speak() {
    alert(this.soundText);
    this.soundUrl.currentTime = 0; // ensures restart each click
    this.soundUrl.play();
  }

  play() {
    this.playCount++;
    this.speak();
    updateCounter(this.playCount);
    showFunActions(this.name);
    this.soundUrl.play;
  }
}

// Global variable to store the chosen pet
let currentPet = null;

// Function to choose a pet
function choosePet(type) {
  if (type === 'dog') {
    currentPet = new Pet('Dog', 'Woof! 🐶',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8x1-7sQlvgNwQSNaGYYqOTvAnyXNZo1wFqw&s',
       'Media/small-dog-barking-381828.mp3');
  } else if (type === 'cat') {
    currentPet = new Pet('Cat', 'Meow! 🐱','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZNGq9_b4Z0Gw-_HXeJLlI0wOPUJnT020Xg&s',
      'Media/cat-meow-sound-383823.mp3'
    );
  } else if (type === 'snake') {
    currentPet = new Pet('Snake', 'Hiss! 🐍','https://images.pexels.com/photos/1394938/pexels-photo-1394938.jpeg',
      'Media/snake-hiss-95241.mp3'
    );
  } else if (type === 'rabbit') {
    currentPet = new Pet('Rabbit', 'Snore! 🐇','https://images.pexels.com/photos/20178218/pexels-photo-20178218.jpeg',
      'Media/rabbit-sounds-358172.mp3'
    );
  }

  if (currentPet) {
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
}

// Function to play with the pet
function playWithPet() {
  if (currentPet) {
    currentPet.play();
  }
}

// Function to update the counter
function updateCounter(count) {
  document.getElementById('counter').innerText = `Times played: ${count}`;
}

// Function + Loop: Fun pet actions
function showFunActions(petName) {
  let actions = [];

  switch (petName) {
    case 'Dog':
      actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
      break;
    case 'Cat':
      actions = ['Meow', 'Purr', 'Chase Mouse'];
      break;
    case 'Snake':
      actions = ['Slither', 'Hiss', 'Hide in Rocks'];
      break;
    case 'Rabbit':
      actions = ['Hop', 'Nibble Carrot', 'Dig Hole'];
      break;
  }

  const actionBox = document.getElementById('actions');
  actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';

  for (let i = 0; i < actions.length; i++) {
    actionBox.innerHTML += '✅ ' + actions[i] + '<br>';
  }
}
