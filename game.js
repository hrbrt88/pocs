/**
 * Flappy Bird - Browser Edition
 * A simple browser-based clone of the classic arcade game
 */

const CONFIG = {
    gravity: 0.8,
    lift: -14,
    pipeSpeed: 2.5,
    gapSize: 220,
    spawnRate: 120,
    birdRadius: 25,
    colors: {
        skyTop: '#87CEEB',
        skyBottom: '#EEDD8F',
        pipeGreen: '#4a9c5e',
        birdYellow: '#FFD700'
     }
};

let canvas, ctx;
let keys = {};
let gameState = 'start'; // start, playing, paused, gameover

// Game objects
const bird = { x: 50, y: 200, velocity: 0, rotation: 0 };
let pipes = [];
let frameCount = 0;
let spawnTimer = 0;
let pipeDistance = 0;
let score = 0;
let highScore = parseInt(localStorage.getItem('flappyHighScore')) || 0;

function init() {
    const container = document.getElementById('game-container');
    if (!container) return false;
    
        // Create canvas element
        canvas = document.createElement('canvas');
        canvas.id = 'gameCanvas';
    
        const width = container.clientWidth;
        const height = container.clientHeight;
    
        canvas.width = width;
        canvas.height = height;

         // Append to DOM
        container.appendChild(canvas);
    
    ctx = canvas.getContext('2d');
    
    gameState = 'start';
    bird.velocity = 0;
    
    console.log('Flappy Bird initialized! Press SPACE or Tap to fly.');
    return true;
}

// Handle keyboard input
function handleKey(e) {
    keys[e.code] = true;
}

// Store key release events
document.onkeyup = () => {
    keys[callbackCode] = false;
};


document.addEventListener('keydown', handleKey);

// Jump function (called on any jump source)
function jump() {
     if (!canvas) return;
    
           // Only play bird sound if game is running and audio context is available
        const ctx = canvas.getContext('2d');
        
        try {
            if (window.AudioContext && window.audioContext == null) {
                window.ctx = new AudioContext();
            }
        } catch(error) {
           // WebAudio not available
        }

        if (window.AudioContext && window.ctx) {
            const osc = window.ctx.createOscillator();
            const gain = window.ctx.createGain();
            osc.connect(gain);
            gain.connect(window.ctx.destination);
            
            osc.frequency.value = 600;
            gain.gain.value = 0.1;
        }

      // Update bird physics
    if (gameState === 'playing') {
      bird.velocity = CONFIG.lift;
    } else {
      // Start game on any input when at start screen or after death
      return startGame();
    }
}

// Game over
function gameOver() {
     gameState = 'gameover';
    
        // Update high score display
        const finalScoreDisplay = document.getElementById('final-score');
        if (finalScoreDisplay) {
             finalScorePlay.textContent = score;
        }

    const bestScoreDisplay = document.getElementById('best-score');
       if (bestScoreDisplay) {
           const newHigh = Math.max(score, highScore);
           bestScoreDisplay.textContent = newHigh;
           highScore = newHigh;

            // Save to localStorage - must use the actual config format
         if (highScore > 0) {
             try {
                 localStorage.setItem('flappyHighScore', JSON.stringify(highScore));
                 } catch(err) { console.error(err); }
              } else { highScore = score; }

    // Show game over screen
    showScreen('gameover');
   }
}

function resetGame() {
     bird.y = canvas.height / 2 - 10;
    birds.velocity = 0;
