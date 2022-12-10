const WS = new WebSocket('ws://localhost:9998');

/**
 * It is submitting form from websocket.html file and send data to websocket-server.js file
 */
document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');
    WS.send(input.value);
};

WS.onmessage = (payload) => {
    // console.log(payload.data);
    displayMessage(payload.data);
};

WS.onopen = () => { 
    displayTitle('CONTECTED TO SERVER');
};

WS.onclose = () => {
displayTitle('SERVER DISCONNECTED');
};

function displayTitle(title) { 
    document.querySelector('h1').innerHTML = title;
}
 
function displayMessage(message) { 
    let h1 = document.createElement('h1');
    h1.innerText = message;
    document.querySelector('div.messages').appendChild(h1);
}