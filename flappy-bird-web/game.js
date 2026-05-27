// FLAPPY BIRD - Browser Edition (Working)
'use strict';

// Game Configuration - all tunable!
const CONFIG = {
  gravity: 0.65,        // Downward force per frame
  lift: -12,            // Upward boost when tapping
  pipeSpeed: 3,         // Horizontal speed of pipes
  gapMin: 170,          // Minimum gap between pipes (pixels)
  gapMax: 280,          // Maximum gap
  spawnInterval: 160,   // Frames between spawns (~2.7s at 60fps)
  birdX: 135            // Fixed horizontal position from left edge
};

// Game State
let canvas;
let ctx;
let game = {
  state: 'start',         // start, playing, paused, gameover
  bird: { x: CONFIG.birdX, y: 250, v: 0 },     // Bird properties
  pipes: [],              // Array of pipe data {x, gapY}
  score: 0,              // Current score
  highScore: parseInt(localStorage.getItem('flappyHighScore')) || 0   // Best score
};

let animationId = null;  // Animation loop ID
let canvasWidth, canvasHeight;  // Canvas dimensions stored here

// Initialize game
function init() {
    const container = document.getElementById('game-container');
    if (!container) return false;
    
    createCanvas(container);
    addControls();
    startGameLoop();
    return true;
}

// Create canvas element
function createCanvas(parent) {
    const width = parent.clientWidth - 20;
    const height = parent.clientHeight * 0.85;
    
    canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    canvas.style.display = 'block';
    canvas.style.marginTop = '43%';
    canvas.style.left = 'calc(50% - ' + (width/2) + 'px)';
    
    ctx = canvas.getContext('2d');
    parent.insertBefore(canvas, parent.firstChild);
    
    canvasWidth = width;
    canvasHeight = height;
}

// Setup controls and listeners
function addControls() {
    const container = document.getElementById('game-container');
    if (!container || !canvas) return;
    
    // Keyboard controls
    container.addEventListener('keydown', (e) => handleInput(e));
    container.addEventListener('touchstart', onGameTap, { passive: true });
    canvas.addEventListener('mousedown', onGameTap);
}

// Handle keyboard input
function handleInput(e) {
    if (game.state === 'playing') {
        jump();
        return;
    } else if (e.code === 'Space' || e.code === 'ArrowUp') {
        restartGame();
        return;
    }
}

// Handle touch or mouse tap - same behavior for both
function onGameTap() {
    if (game.state === 'playing') {
        jump();
    } else if (['start', 'paused', 'gameover'].includes(game.state)) {
        restartGame();
    }
}

// Restart game (reset bird position and clear pipes)
function restartGame() {
    game.bird.y = canvasHeight * 0.4;
    game.bird.v = 0;
    game.pipes = [];
    game.score = 0;
    game.highScore = parseInt(localStorage.getItem('flappyHighScore')) || 0;
    game.state = 'playing';
    startGameLoop();
}

// Apply lift boost when tapping
function jump() {
    if (game.state !== 'playing') return false;
    game.bird.v += CONFIG.lift; // Add upward boost!
}

// Update bird position and spawn pipes
function update() {
    if (game.state !== 'playing') return;
    
    // Apply gravity to bird
    game.bird.v += CONFIG.gravity;    // Add downward force each frame
    game.bird.y += game.bird.v;        // Move bird vertically
    
    // Spawn new pipe every spawnInterval frames (about 2.7 seconds at 60fps)
    if (--game.frameCount < 0) {       // Decrease timer by 1, stop spawning when done
        game.pipes.push({
            x: canvasWidth,           // New pipe starts at right edge of screen
            gapY: Math.random() * (CONFIG.gapMax - CONFIG.gapMin) + CONFIG.gapMin // Gap size
        });
        game.frameCount = CONFIG.spawnInterval;
    }
    
    // Move all pipes left by pipeSpeed units (pixels per frame)
    for (let i = game.pipes.length - 1; i >= 0; i--) {
        game.pipes[i].x -= CONFIG.pipeSpeed;
        
        // Check if bird hit top or bottom of screen
        if (game.bird.y < 0 || game.bird.y > canvasHeight) {
            gameOver();
            return;
        }
        
        // Check collision with pipes
        const pipe = game.pipes[i];
        if (pipe.x + 50 >= game.bird.x && pipe.x <= game.bird.x + 50) {
             // Bird is horizontally aligned with this pipe - check vertical gap!
             // If bird's Y position is above the top pipe OR below bottom pipe -> collision!
            gameOver();
            return;
        }
    }
    
}

function draw() {
    if (!canvas || !ctx) return;
    
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw pipes first (so bird is drawn on top - visible when collision occurs)
    for (let i = 0; i < game.pipes.length; i++) {
        const pipe = game.pipes[i];
        
        // Top pipe (from top of screen down to gap)
        ctx.fillStyle = '#4a9c5e';     // Green color
        ctx.fillRect(pipe.x, 0, 70, canvasHeight - pipe.gapY);  // Pipe from top to gap
        
        // Bottom pipe (from bottom up to gap)  
        ctx.fillRect(pipe.x, canvasHeight - pipe.gapY + 15, 70, 32);    // Gap space
    }
    
    // Draw bird last (on top of pipes so visible when collision happens)
    const gradient = ctx.createRadialGradient(game.bird.x, game.bird.y, 5, game.bird.x, game.bird.y, game.bird.radius);
    gradient.addColorStop(0, '#FFD700'); // Yellow (golden color for bird)
    gradient.addColorStop(1, '#F7941D'); // Orange-ish darker edge
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    
    // Draw rounded bird shape (circle)
    ctx.arc(game.bird.x, game.bird.y, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // Add eye dot (simple detail)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(game.bird.x + 8, game.bird.y - 5, 4, 0, Math.PI * 2);
    ctx.arc(game.bird.x - 10, game.bird.y + 3, 4, 0, Math.PI * 2);
    ctx.fill();
}

// Check for collision and end game if hit
function gameOver() {
    if (game.state === 'gameover') return; // Already dead
    
    game.state = 'gameover';
    
    // Update high score from storage
    const newHighScore = Math.max(game.score || 0, game.highScore);
    localStorage.setItem('flappyHighScore', newHighScore.toString());
    game.highScore = newHighScore;
}

// Start the animation loop
function startGameLoop() {
    if (animationId) cancelAnimationFrame(animationId);
    
    function animate() {
        update();
        draw();
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}