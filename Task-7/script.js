const mockMessages = [
    "Hey, how's it going?",
    "Just finished that project we discussed",
    "Want to grab lunch later?",
    "I'm thinking about that new place downtown",
    "Have you been there before?"
];

function appendMessage(text,type){
    const chatbox= document.getElementById('chat-box');
    const messageDiv=document.createElement('div');
    messageDiv.classList.add("message",type);
    messageDiv.innerHTML=`<span>${text} <small>${new Date().toLocaleTimeString()}</small></span>`
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const text = userInput.value.trim();
    if (text === "") return;
    // console.log(text)
    
    // Send the message
    appendMessage(text, "sent");
    userInput.value = "";

    // Simulate receiving a response
    const delay = Math.random() * 2000 + 1000; // Random delay between 1-3 seconds
    console.log(mockMessages.length)
    setTimeout(() => {
        const randomMessage = mockMessages[Math.floor(Math.random() * mockMessages.length)];
        appendMessage(randomMessage, "received");
    }, delay);
}



// Simulate initial message
setTimeout(() => {
    appendMessage("Hey there! How are you?", "received");
}, 1000);
