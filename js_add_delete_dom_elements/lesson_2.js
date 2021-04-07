window.onload = init;

let messageText, sendButton, chatArea;
let counter = 0;

function init() {
  messageText = document.getElementById("message-text");
  sendButton = document.getElementById("send-message");
  chatArea = document.getElementsByClassName("chat")[0];

  sendButton.onclick = sendMessage;
}

function sendMessage() {
  const text = messageText.value;
  if (text == "") {
    return;
  }
  messageText.value = "";
  let msgDiv = document.createElement("div");
  if (counter % 2 == 0) {
    msgDiv.setAttribute("class", "message my-message");
  } else {
    msgDiv.setAttribute("class", "message incoming");
  }

  msgDiv.setAttribute("id", counter);
  msgDiv.innerHTML = text;
  msgDiv.onclick = deleteMsg;
  chatArea.appendChild(msgDiv);
  counter++;
}

function deleteMsg(msg) {
  msg.target.parentNode.removeChild(msg.target);
}

// function onMessageClick(msg) {
//   let msgBox = msg.target;
//   let deleteDiv = document.createElement("div");
//   deleteDiv.setAttribute("class", "delete");
//   let deleteImg = document.createElement("img");
//   deleteImg.src = "delete.svg";
//   deleteDiv.appendChild(deleteImg);
//   if (msgBox.classList.contains("incoming")) {
//     deleteDiv.classList.add("delete-right");
//   } else {
//     deleteDiv.classList.add("delete-left");
//   }
//   msgBox.appendChild(deleteDiv);
// }
