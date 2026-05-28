# 🐦 Flappy Bird MK64 - Online Multiplayer with Power-Ups! 🏎️

<div align="center">
     <strong>A Supercharged Flappy Bird Experience! ☄️</strong><br>
     
      Inspired by Mario Kart 64 - Now with real-time multiplayer and power-up mechanics!
     
     <br>
     ⭐ ⭐ ⭐
 </div>

---

## 🚀 What's New? 

### 💯 Full Implementation Complete!

**✅ ONLINE MULTIPLAYER:** Real-time WebSocket-based system supporting up to 8 players simultaneously!

**⭐ MARIO KART 64 POWER-UPS:**

1. 🍄 **Mushroom:** Doubles your speed AND grants extra life - the classic MK64 turbo!
2. 🌸 **Flower:** Makes you smaller but SUPER fast (Turbo mode just like in MK64!)
3. 🛡️ **Shell Shield:** Golden invincibility shield from Shell 64! Perfect protection!
4. ⭐ **Star (Bullet Bill):** Maximum Bullet Bill speed! Go SUPER FAST!
5. ? **Question Block:** Double score multiplier - become a Superstar like in MK64!

**🎮 COMPLETE GAMEPLAY FEATURES:**
- Player color selection screen with real-time lobbies
- Real-time synchronization between players (online multiplayer)
- Power-up pickup mechanics scattered throughout the game field
- Multiplayer racing leaderboard and competitive gameplay
- Full canvas-based rendering for smooth performance
- Game state persistence across power-ups

---

## 📦 Installation & Setup

### Quick Start:
```bash
git clone git@github.com:hrbrt88/pocs.git
cd pocs/flappy-bird-web

npm install
npm start
```

### OR Direct Deployment:
- Visit: http://localhost:8080 (or your server IP)
- Game loads automatically in browser!
- Select your color and join the multiplayer lobby!

---

## 🔧 How to Play

### **Step 1 - Player Selection:**
Choose your avatar color from the lobby screen (Red, Blue, Green, Purple, etc.)

### **Step 2 - Enter Lobby:**
- Your selected color appears in the multiplayer lobby
- Real-time updates show other players connecting
- Wait for all players to be ready!

### **Step 3 - Racing Mode:**
Once game starts:
- Click spacebar, arrow up, or tap screen to flap/jump
- Collect power-ups scattered around the field!
- Avoid pipes and obstacles (classic Flappy Bird)
- Watch your position in the race leaderboard

### **Power-Up Collection:**
When you collect a Mario Kart 64 power-up:

🍄 **Mushroom Pickup:**
- Your speed doubles instantly!
- Get an extra life - survive longer!
- Lasts for ~0.5 seconds (gameplay duration)

🌸 **Flower Pickup:**
- Shrink your character size
- Go TURBO fast (speed multiplier increases!)
- Like the Flower power in Mario Kart 64!

🛡️ **Shield Pickup:**
- Golden invincibility shield appears!
- Crashes don't kill you - just knock back!
- Perfect survival power-up from the shell in MK64!

⭐ **Star Pickup:**
- Bullet Bill mode activated!
- Maximum velocity (infinite speed!)
- Like being powered by a Bullet Bill in MK64!

---

## 🎯 Game Mechanics Explained

### Power-Up System:

| Power-Up | Icon | Effect | Inspired By |
|----------|------|---------|-------------|
| Mushroom 🍄 | Speed Boost + Extra Life | 2x speed, +1 life | Mario Kart Turbo! |
| Flower 🌸 | Turbopower Speed | Smaller, faster movement | MK64 Flower power-up! |
| Shell Shield 🛡️ | Invincibility Golden Shell | Unkillable for a while! Gold shell protection! | Shell 64's shield! |
| Star ⭐ | Bullet Bill Speed | Maximum speed mode! | Bullet Bill in MK64! |
| Question Block ? | Score Multiplier | 2x points when collected! | Superstar mechanics! |

### Multiplayer:
- Real-time player synchronization via WebSocket!
- See other players appear/disappear based on connection status
- Competition for first place - collect power-ups strategically!
- Leaderboard tracks real-time rankings

---

## 🏗️ Tech Stack

**Frontend:**
- HTML5 Canvas API for smooth game rendering
- Vanilla JavaScript (no frameworks, pure JS goodness!)
- Responsive design with CSS gradients and animations

**Network:**
- WebSocket for real-time multiplayer synchronization
- Up to 8 concurrent players supported!
- Server hosted on Node.js HTTP/WebSocket service

**Architecture:**
- Single HTML file for easy deployment
- No build tools needed - just run server.js!
- Pure JavaScript game loop with physics engine

---

## 🎮 Controls

### **Desktop (Browser):**
- `Spacebar` or `Arrow Up` → Flappy/jump
- `Click/Tap` → Same effect as keys
- Game responds to any input method!

### **Mobile:**
- Touch anywhere to flap
- Full touch-compatible experience!

---

## 🚀 Deploy Options

### Option 1 - Local Development:
```bash
cd flappy-bird-web
node server.js
# Open http://localhost:8080
```

### Option 2 - Static Site Deployment (Netlify/Vercel):
Just upload the `flappy-bird-web/` folder! Each page becomes a playable instance.

---

## 📝 Features Checklist

| Feature | Status | Description |
|---------|--------|-------------|
| ✅ | ✅ Complete | Player selection with avatar colors |
| ✅ | ✅ Complete | Real-time online multiplayer (8 players) |
| ✅ | ✅ Complete | All 5 Mario Kart 64 power-ups! |
| ✅ | ✅ Complete | Power-up pickup mechanics |
| ✅ | ✅ Complete | Multiplayer leaderboard & ranking |
| ✅ | ✅ Complete | Collision detection (pipes/obstacles) |
| ✅ | ✅ Complete | Game state synchronization |
| ✅ | ✅ Complete | Restart functionality after game over |

---

## 🎯 Demo Mode vs Online Mode

### **Demo Mode (Running Without Network Server):**
- Single player only (your local session)
- All power-ups available!
- Test the mechanics without multiplayer!

### **Online Mode (With WebSocket Server):**
- Real-time multiplayer with up to 8 players!
- See other players in real time
- Strategic power-up collection for racing advantage!
   
---

## 🛠️ Project Structure

```
flappy-bird-web/
├── game.html          # Main game UI and canvas
├── game.js            # Game logic with Power-Ups & Multiplayer
├── index.html         # Landing page describing features
├── server.js          # Node.js WebSocket server for online multiplayer
├── package.json       # Dependencies and scripts
└── README.md          # This file 📖

```

---

## 🎮 Mario Kart 64 Power-Up Details

### **Mushroom 🍄 - The Turbo Power-Up!**
- Just like in MK64! Double speed mode for aggressive racing!
- Extra life saved lives through crashes and obstacles!
- Lasts short duration, use wisely during competitive moments!

### **Flower 🌸 - The Flower Star!**
- Smaller but SUPER fast movement (Turbo mode!)
- Exactly what you get from the Flower in MK64 gameplay!
- Speed advantage for overtaking competitors!

### **Shell Shield 🛡️ - Shell 64's Golden Shell!**
- Invincible golden shield appears around you!
- Unkillable, just knocked backwards safely!
- Perfect moment to survive dangerous racing moments!

---

## 💡 Usage Examples

**Quick Start:**
```bash
# Clone & Run Locally
git clone git@github.com:hrbrt88/pocs.git
cd pocs/flappy-bird-web
npm install
npm start

# Or just navigate to localhost:8080 in your browser!

```

---

## 🎉 Credits & Fun Facts

**Inspired by:**
- Mario Kart 64 (Nintendo 64 era) - For the iconic MK64 power-up mechanics from the mid-90s!
- Flappy Bird (2013) - The addictive physics-based puzzle game that started it all!

---

## 👥 Multiplayer Info

**Online Players:** Up to 8 concurrent players via WebSocket real-time network synchronization!

Each player controls their own character and competes for the best position. Strategic power-up collection is key to winning races!</li>

---

**Enjoy the ride, have fun racing on a supercharged Flappy Bird MK64 adventure! 🏎️🎮**
