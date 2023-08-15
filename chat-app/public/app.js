// public/app.js
const socket = io();

// Handle form submission to send messages
const form = document.getElementById('form');
const input = document.getElementById('input');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

// Receive and display messages
const messages = document.getElementById('messages');
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});
