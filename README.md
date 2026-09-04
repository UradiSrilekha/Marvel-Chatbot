# 🦸 Marvel Chatbot

An AI-powered chatbot that brings the **Marvel Universe** to life!  
This project uses **React.js** for the frontend and integrates conversational logic so the bot can respond intelligently to user queries about Marvel characters, movies, and comics.

---

## 🚀 Live Demo
👉 [Marvel Chatbot](https://marvel-chatbot-c3rx.vercel.app/)

---

## 📂 Repository
👉 [GitHub Repository](https://github.com/UradiSrilekha/Marvel-Chatbot.git)

---

## 🌟 Features
- 🤖 **AI Chat Logic** – Implemented using custom JavaScript functions that process user input and generate responses.  
- 🦸 **Marvel Universe Knowledge** – Predefined responses and API calls to simulate conversations with Marvel heroes.  
- 🎨 **Interactive UI** – Built with React components for smooth, dynamic chat flow.  
- ⚡ **Real-Time Responses** – State management ensures instant replies without page reloads.  
- 🌐 **Deployed on Vercel** – Fast and reliable hosting for global access.  

---

## 🛠️ Tech Stack
- **Frontend:** React.js  
- **Logic:** JavaScript (chat handling, response mapping)  
- **Styling:** CSS  
- **Deployment:** Vercel  

---

## 🧩 How It Works
1. User enters a message in the chat box.  
2. The chatbot logic (written in JavaScript) parses the input.  
3. Based on keywords (like "Iron Man", "Avengers", "Thanos"), the bot returns a predefined or dynamic response.  
4. The conversation updates instantly using React state hooks.  

Example snippet from the code:
```javascript
const responses = {
  "iron man": "Tony Stark, genius billionaire, playboy philanthropist!",
  "thor": "God of Thunder ⚡, wielder of Mjolnir.",
  "thanos": "I am inevitable..."
};

function getBotResponse(input) {
  const key = input.toLowerCase();
  return responses[key] || "I’m still learning about that hero!";
}

