// Simple WebSocket Server for Flappy Bird MK64 Multiplayer Online
const http = require('http');
const WebSocket = require('ws');

let socketServer;

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>Flappy Bird MK64</title></head>
        <body style="font-family: Arial; padding: 50px;">
          <h1>🎮 Flappy Bird MK64 Multiplayer! 🐦🏎️</h1>
          <p>This is a multiplayer version of Flappy Bird with Mario Kart 64 power-ups!</p>
          
          <h2>Features:</h2>
          <ul>
            <li>🌐 Real-time online multiplayer (up to 8 players)</li>
            <li>⭐ Mario Kart 64 Power-Ups: Mushroom, Flower, Shell Shield, Star</li>
            <li>🎯 Player selection and lobby system</li>
            <li>⚡ Speed boost mechanics from MK64</li>
          </ul>
          
          <h3>Power-Up Guide:</h3>
          <details>
            <summary><strong>Mushroom 🍄</strong></summary>
            Double speed & get extra life - like in Mario Kart 64!
          </details>
          <details>
            <summary><strong>Flower 🌸</strong></summary>
            Smaller but faster movement!
          </details>
          <details>
            <summary><strong>Shell Shield 🛡️</strong></summary>
            Golden invincibility - perfect powerup from MK64!</details>
          </details>
          <details>
            <summary><strong>Star ⭐</strong></summary>
            
    <li>Bullet bill speed - go super fast!</li>
          </details>
          
          <h3>Screenshots:</h3>
          <p style="text-align: center; margin-top: 50px;">
            🎮 Game running at localhost:8080 🎮
          </p>
          
          <script src="/game.html"></script>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

httpServer.listen(8080, () => console.log('Flappy Bird MK64 Server running on http://localhost:8080 🚀'));
