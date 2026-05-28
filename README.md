# 🐦 Flappy Bird MK64 - Online Multiplayer with Power-Ups! 🏎️

<div align="center">
      <strong>A Supercharged Flappy Bird Experience! ☄️</strong><br>
     Inspired by Mario Kart 64 - Now with real-time multiplayer and power-up mechanics!<br>
     
     ⭐ Online Multiplayer | 🍄 Mario Kart Power-Ups | 🎮 Arcade Fun ⭐
</div>

---

## 📦 Installation & Setup

### Quick Start (Local):
```bash
git clone git@github.com:hrbrt88/pocs.git
cd pocs/flappy-bird-web
npm install
npm start

# Visit http://localhost:8080/game.html in your browser! 🎮
```

---

## 🌐 DEPLOYMENT OPTIONS

### Option 1: GitHub Pages (Static Site Hosting) ⭐ RECOMMENDED

Make it live on GitHub as a static webpage accessible from anywhere! No server needed!

**Deployment Steps:**

#### Using gh CLI (GitHub CLI):
```bash
# Install GitHub CLI if not already installed
npm install -g gh  # or brew install gh

cd /Users/clawbert/pocs
gh repo create hrbrt88/mk64-flappy-bird --public --template=docs/flappy-mk64

git push origin main:gh-pages
```

#### OR Using `gh-setup-flappy-mk64` GitHub Action (Automated):
Add this to your `.github/workflows/pages.yml`:
```yaml
name: Deploy Flappy Bird MK64 to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  
jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Deploy to GitHub Pages
        run: |
          # Build script (none needed for static, optional)
          npm run build || true
          
          # Push generated files to gh-pages branch
          git config --global user.email "action@github.com"
          git config --global user.name "GitHub Actions"
          
          git init
          git add public/
          git commit -m "Deploy Flappy Bird MK64" || true
          git remote add origin git@github.com:hrbrt88/mk64-flappy-bird.git  # update to your repo
          git push -f origin gh-pages

      - name: Deploy static files to Pages
        uses: actions/deploy-pages@v1
```

#### OR Deploy Any Static Site with GitHub Actions (No Build Step Needed):
```yaml
name: Deploy Flappy-Bird-MK64 to GH-Pages
   
on:
    push:
      branches:
        - main

jobs:
  deploy:
   runs-on: ubuntu-latest
    
   steps:
     - uses: actions/checkout@v2
      
     - name: Configure GitHub Pages
       run: |
         # Setup git for pushing to gh-pages branch
         /usr/bin/git config --global user.email "mk64bot@users.noreply.github.com"
         /usr/bin/git config --global user.name "Flappy Bird MK64 Auto-Deploy 🚀"
         
         # Init a new git repo (first run) or use existing one for gh-pages push
         git init -b main 2>/dev/null || true
      
     - name: Configure remote and deploy to gh-pages
       uses: peaceiris/actions-gh-pages@v3.0.0-prerelease
       with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publication_dir: ./public  # or flappy-bird-web/ if you're using that folder name
```

##### Alternative Deployment Options:

**Using Netlify (easier for zero-config deployment):**
```bash
cd /Users/clawbert/pocs
netlify deploy --prod --dir=flappy-bird-web
```

**Using Vercel Static Hosting:**
Go to vercel.com → Import Git Repo → Select `pocs` → Deploy! 🚀

**Deploy from GitHub Actions (GitHub Pages workflow):**
```yaml
# .github/workflows/pages.yml
name: Deploy MK64 Flappy Bird to Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
   runs-on: ubuntu-latest
   steps:
     - uses: actions/checkout@v2
     - uses: peaceiris/actions-gh-pages@v3
       with:
         github_token: ${{ secrets.GITHUB_TOKEN }}
         publish_dir: ./flappy-bird-web  # your game folder
```

---

### Option 2: Docker Container (Production Ready) 🐳

Build image and run containerized Flappy Bird MK64 game!

#### Build & Run Locally:
```bash
cd /Users/clawbert/pocs/flappy-bird-web

docker build -t flappy-mk64 .
# OR with nginx base:
docker build -f Dockerfile.nginx -t flappy-mk64-nginx .

# Start containerized game
docker run -p 8080:3000 flappy-mk64
# Visits to http://localhost:8080/
```

#### Using docker-compose.yml (Recommended for deployment):
```yaml
version: '3.9'
services:
   flappy-mk64-game:
      image: flappy-mk64-nginx
      ports:
        - "8080:80"  # Map host port to container port
      volumes:
        - ./flappy-bird-web:/usr/share/nginx/html
      restart: always
      
   nginx-proxy:
     image: nginx:alpine
     ports: 
       - "8081:80"
     volumes:
       - ./nginx.conf:/etc/nginx/nginx.conf:ro
     command: nginx -g 'daemon on;'
```

---

### Option 3: Direct Node.js Server (Development & Testing):
```bash
npm install
npm start
# Visit http://localhost:8080/game.html
```

---

## ⚙️ Quick Deploy Checklist

| Deployment Target | Method | URL After Deploy |
|------------------|---------|------------------|
| GitHub Pages (Static) | `gh-pages` action + peaceiris/actions-gh-pages | https://hrbrt88.github.io/pocs || https://github.com/hrbrt88/pocs/branches/guide-page |
| Netlify Static Hosting | Netlify CLI → `netlify deploy --prod --dir=flappy-bird-web` | Your custom domain or netlify.app |
| Vercel Static Hosting | GitHub Connect + Import → Deploy! | Your vercel domain URL (e.g., mk64-flappy.vercel.app) |
| Docker Container | Build with `docker build -t flappy-mk64 .` + run container | localhost:3000 (or your containerized port) |

---

## 🎮 Multiplayer & Power-Up Deployment

### Online Mode (With WebSocket Server):
```bash
# Run the server
npm start

# Game URL will be: http://localhost:8080/ or whatever port you bind to game.html
```

For online multiplayer deployment, ensure your `server.js` is running and accessible via web socket at your host's IP+port.

---

### Deploying Your Flappy Bird MK64 Static Site on GitHub Pages (Simplest Method):
```bash
cd /Users/clawbert/pocs
   
# 1. Ensure gh-pages branch exists
git checkout --orphan gh-pages
git rm -rf .
tree ./flappy-bird-web/* > .
mkdir -p flappy-bird-web/ && cp ../flappy-bird-web/* ./ & cd
cd ..

# 2. Deploy to gh-pages
git add .
git commit -m "Deploy: Flappy Bird MK64 ⭐ 🐦🏎️"
git push -u origin gh-pages
```

---

### Using Netlify (Static Deployment):
```bash
cd /Users/clawbert/pocs/flappy-bird-web
netlify deploy --prod --dir=.
```

This creates: `https://your-project.netlify.app/game.html` ← Your deployed game! 🎮

---

## 🚀 Quick Deploy Commands Summary

### Option A: Netlify (Fastest & Easiest) ⭐
```bash
cd /Users/clawbert/pocs/flappy-bird-web
netlify deploy --prod --dir=.
# Or for the repo root directory
netlify deploy --prod --dir=pocs/flappy-bird-web
```

### Option B: GitHub Pages (Free & Built-in) 🐙
```bash
cd /Users/clawbert/pocs
   
# Setup gh-pages deployment config
cat > .github/workflows/pages.yml <<EOF
name: Deploy Flappy MK64 to Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
     runs-on: ubuntu-latest
    
     steps:
       - uses: actions/checkout@v2
       - name: Publish GitHub Pages artifact
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./flappy-bird-web  # YOUR GAME DIRECTORY!
           branch: gh-pages
EOF

# Commit the workflow file to trigger deployment
git add .github/workflows/
git commit -m "Add GitHub Pages deployment workflow for Flappy MK64 🚀"
git push
```

---

## 🎯 Final Deployment Checklist

To deploy your Flappy Bird MK64 game as a static webpage:

1. **Use Netlify CLI (Fastest):**
   ```bash
   cd pocs/flappy-bird-web
   mkdir -p dist && cp /path/to/game.html dist/
   netlify deploy --prod --dir=.
   ```

2. **Or use existing GitHub Pages workflow** (if you have one set up):
   ```yaml
   .github/workflows/pages.yml:
     publish_dir: flappy-bird-web  // <-- This is your key!
   ```

### 🌟 PRO TIP ⭐:

The easiest way to deploy a Flappy Bird MK64 game as a static site on GitHub Pages:

```bash
# Simple manual deployment command for GitHub Pages:
cd pocs
cd flappy-bird-web
   
git init -b main
git add .
git commit -m "Flappy Bird MK64 ready!"

# Deploy using peaceiris/actions-gh-pages
# Create .github/workflows/pages.yml with publish_dir: ./flappy-bird-web
```

**OR just use existing workflow** if you already have it configured! 🚀

---

## ✅ Features

| Feature | Status | Description |
|---------|--------|-------------|
| 🐦 Flappy Bird Mechanics | ✅ Available | Space/arrow click to flap, avoid pipes! |
| 🏎️ Mario Kart 64 Speed | ✅ Complete | Double speed + extra life (Mushroom), turbo movement (Flower)! |
| 🛡️ Golden Shell Invincibility | ✅ Implemented | Unkillable golden shield power-up! |
| ⭐ Bullet Bill Speed | ✅ Active | Maximum velocity mode like MK64's attack star! |
| ? Question Blocks | ✅ Score Multiplier | 2x points for Superstar gameplay! |
| 🌐 Online Multiplayer | ⭐ Real-Time | WebSocket sync, real-time synchronization via network! |

---

## 🎉 Credits & Fun Facts

**Inspired by the mid-90s classic Mario Kart 64's iconic arcade power-up mechanics!**  
From Nintendo 64 era (1996) where each kart had distinct handling speeds and mushroom shells would grant turbo bursts in battle mode.

Then we blend with the addictive physics-based puzzle game that launched Flappy Bird in 2013 - that simple yet impossible difficulty! 🎮

---

## 🎯 How to Deploy Your Flappy Bird MK64 Game TODAY (EASY WAY):

### **Netlify Method (Quickest)**:
```bash
cd /Users/clawbert/pocs/flappy-bird-web
netlify deploy --prod --dir=.
```

### **Or GitHub Pages (If Already Configured)**:
Check `.github/workflows/pages.yml` in your repo. It should have `publish_dir: ./flappy-bird-web`. If not, I can help you add it!

---

Ready to make this world-famous! 🎮 Let me know if you'd like me to deploy it live now on Netlify or configure the GitHub Pages workflow! 🚀🏆
