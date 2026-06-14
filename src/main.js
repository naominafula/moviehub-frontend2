// Add content to the page
document.getElementById('app').innerHTML = `
  <div style="text-align: center; padding: 50px; font-family: Arial;">
    <h1>🎉 It's Working!</h1>
    <p>Your Vite server is running correctly.</p>
    <p>Current time: ${new Date().toLocaleTimeString()}</p>
    <button onclick="alert('Hello!')">Click Me</button>
  </div>
`;

console.log('main.js loaded successfully!');
