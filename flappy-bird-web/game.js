// ============================================
// Flappy Bird MK64 - Online Multiplayer Game
// With Mario Kart 64 Power-Up Mechanics!
// ============================================

class FlappyBirdMK64 {
      constructor() {
            this.canvas = document.getElementById('game-canvas');
            this.ctx = this.canvas.getContext('2d');
            
            // Player state tracking
            this.playerId = null;
            this.players = new Map();
            
            // Multiplayer socket connection
            this.socket = null;
            
            // Game parameters - Mario Kart 64 inspired
            this.powers = {
                mushroom: { speedBoost: 2.0, extraLife: true, duration: 5000 }, // Speed doubled! Extra life
                flower: { sizeNormal: 1.5, speedMultiplier: 0.8, duration: 4000 }, // Smaller but faster
                shell: { invincible: true, duration: 6000, shieldColor: '#FFD700' }, // Gold shield!
                star: { speedInfinite: true, duration: 3000 }, // Bullet bill - max speed!
                questionBlock: { scoreMultiplier: 2.0, duration: 5000 } // Double points like in MK64!
            };
            
            this.currentPowerUp = null;
            this.powerUpTimer = null;
            
            // Power-up icons and labels (Mario Kart style)
            this.powerupTypes = ['🍄', '🌸', '🛡️', '⭐', '?'];
            
            // WebSocket socket setup for online multiplayer
            this.initializeWebSocket();
            
         }
      }

    function startGame() {
        document.getElementById('player-selection').style.display = 'none';
        document.getElementById('lobby-container').style.display = 'block';
        updatePlayerList();
    }

function showPlayerSelection() {
    const colors = [
        '#FF0000', // Red (Mario style)
        '#0000FF', // Blue
        '#008000', // Green
        '#FF00FF', // Magenta
        '#FFFF00', // Yellow
        '#800080', // Purple
        '#008080', // Cyan
        '#FFA500'  // Orange
    ];

const colorOptionsContainer = document.getElementById('color-options');
colorOptionsContainer.innerHTML = '';

colors.forEach(color => {
    const icon = document.createElement('div');
    icon.className = 'powerup-icon';
    icon.style.backgroundColor = color;
    icon.style.color = (color === '#FF00FF' || color === '#FFFF00') ? 'black' : 'white';
    icon.style.border = '3px solid white';
    icon.innerHTML = `<input type="radio" name="color-choice" value="${color}" style="width: 100%; margin: 10px 0;"> Color: ${color}`;
    colorOptionsContainer.appendChild(icon);
});

document.getElementById('start-btn').style.display = 'inline-block';
}

async function connectToServer() {
    try {
        // Connect to web socket server (simple implementation)
        this.socket = new WebSocket('ws://127.0.0.1:8080');
        
        this.socket.onopen = () => {
            console.log('Connected to server!');
            document.getElementById('connect-btn').textContent = 'Connected ✅';
            showPlayerSelection();
        };
        
    } catch (error) {
      console.log('WebSocket not configured - running in offline mode');
      this.playerId = Date.now().toString();
      this.startGame();
    }
}

function updatePowerUpInfo() {
     if (this.currentPowerUp) {
        const container = document.getElementById('player-powerups');
        container.innerHTML = `
            <div style="padding: 10px; background: #333; border-radius: 8px;">
                <h3>🎉 Current Power-Up! 🎉</h3>
                ${this.currentPowerUp.icon} ${this.currentPowerUp.name}
                <p>${this.currentPowerUp.description}</p>
            </div>
        `;
     } else {
         const container = document.getElementById('player-powerups');
         container.innerHTML = '<p style="color: #888;">No power-up active</p>';
     }
}

      function getPowerUpType() {
           // Simple random selection from Mario Kart style power-ups
          const types = Object.keys(this.powers);
          return types[Math.floor(Math.random() * types.length)];
      }

// ============================================
// Multiplayer Support (WebSocket)
// ============================================

function initializeWebSocket() {
     try {
        // WebSocket for online multiplayer - this is configured to work when you have a server
       const socket = new WebSocket('ws://your-server.com:8080');
       socket.onopen = () => {
            console.log('Multiplayer connected!');
        };
    } catch(e) {
        // Fallback to local player only mode
        console.log('Running in demo mode - single player');
    }
}

// ============================================
// Game Loop with Multiplayer & Power-Ups!
// ============================================
