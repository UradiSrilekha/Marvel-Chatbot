// Browser Compatibility Check
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Speech Recognition API is not supported in this browser. Please use Chrome, Edge, or Safari.");
}

let recognition = null;
let isListening = false;
const statusEl = document.getElementById("status");
const chatBox = document.getElementById("chat-box");
const toggleBtn = document.getElementById("toggle-btn");

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    isListening = true;
    statusEl.innerText = "Marvel is listening...";
    toggleBtn.innerText = "Stop Marvel";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    appendMessage("You", transcript, "user");
    processUserInput(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech Error:", event.error);
    statusEl.innerText = `Error: ${event.error}`;
    isListening = false;
    toggleBtn.innerText = "Start Marvel";
  };

  recognition.onend = () => {
    isListening = false;
    if (statusEl.innerText === "Marvel is listening...") {
      statusEl.innerText = "Paused. Click button to speak.";
      toggleBtn.innerText = "Start Marvel";
    }
  };
}

function toggleListening() {
  if (!recognition) return;
  
  if (isListening) {
    recognition.stop();
  } else {
    try {
      recognition.start();
    } catch (e) {
      console.warn("Recognition already active", e);
    }
  }
}

function processUserInput(text) {
  const query = text.toLowerCase();
  let response = "I heard you, but I am not sure how to answer that yet.";

  if (query.includes("hello") || query.includes("hi")) {
    response = "Hello! I am Marvel. How can I assist you today?";
  } else if (query.includes("your name")) {
    response = "I am Marvel, your voice assistant.";
  } else if (query.includes("how are you")) {
    response = "I am operating at full capacity and ready to help!";
  } else if (query.includes("bye") || query.includes("stop")) {
    response = "Goodbye! Click the button whenever you want to chat again.";
  }

  appendMessage("Marvel", response, "marvel");
  speak(response);
}

function appendMessage(sender, text, className) {
  const p = document.createElement("p");
  p.className = className;
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;

  // Cancel any active speech output before starting new utterance
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  // Optional: Select a specific preferred voice if available
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.name.includes("Google") || v.lang === "en-US");
  if (preferredVoice) utterance.voice = preferredVoice;

  utterance.onend = () => {
    statusEl.innerText = "Click button to speak again.";
    toggleBtn.innerText = "Start Marvel";
  };

  window.speechSynthesis.speak(utterance);
}
