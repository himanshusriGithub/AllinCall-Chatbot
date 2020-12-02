const Q1 = document.getElementById(`Q1`);
const Q2 = document.getElementById(`Q2`);
const Q3 = document.getElementById(`Q3`);
const Q4 = document.getElementById(`Q4`);
const newConv = document.getElementById(`newChat`);
const midBox = document.querySelector('.midBox');
const lButton = document.querySelector('.launchButton');
const main = document.querySelector('.main');

let questionAsked = 0;

lButton.addEventListener('click', launchBot);

Q1.addEventListener('click', function(){
    questionAsked = 1;
    answerQuestion(questionAsked);
})
Q2.addEventListener('click', function(){
    questionAsked = 2;
    answerQuestion(questionAsked);
})
Q3.addEventListener('click', function(){
    questionAsked = 3;
    answerQuestion(questionAsked);
})
Q4.addEventListener('click', function(){
    questionAsked = 4;
    answerQuestion(questionAsked);
})

newConv.addEventListener('click', function(){
    questionAsked = 5;
    answerQuestion(questionAsked);
})

function answerQuestion(x) {
    switch (x){
        case 1:
            renderChatbox('Yes, FD can be closed before the original term of the FD. In the event of the Fixed Deposit being closed before completing the original term of the deposit, interest will be paid at the rate ...');
            break;
        case 2:
            renderChatbox(`Staying on top of your credit card bills is a key part of building and maintaining strong credit. Payment history is a key component of your credit scores and missing even one payment could have an impact that includes late fees or a higher interest rate in the future. Fortunately, it doesn't take too much effort to manage once you know what to look out for.`)    
            break;
        case 3:
            renderChatbox(`From the bank or from net banking`)
            break;
        case 4:
            renderChatbox(`5 years/10 years depending on choice`)
            break;
        case 5:
            renderChatbox();
            // console.log(`New convo time`)
    }
}

function renderChatbox(string=`Hello, I'm Iris. A virtual assistance created to solve your queries.`) {
    midBox.innerHTML='';
    
    var chatBox = document.createElement('div');
    chatBox.setAttribute('class', `chatBox`);
    
    var sendButton = document.createElement('img');
    sendButton.src = 'images/send-button.png'
    sendButton.setAttribute('class',`sendButton`);
    
    var messageBox = document.createElement('div');
    messageBox.setAttribute('class',`messageBox`);
    messageBox.innerHTML = `<span class="appText" style="top:12.5px; left:15px; font-weight: Medium;">${string}</span>`;

    var backButton = document.createElement('div');
    backButton.setAttribute('class','messageButtons');
    backButton.addEventListener('click', originalRender);
    backButton.innerHTML = `<span class="appText" style="top:4px; left:21px; font-weight: Medium;">Reload</span>`;

    midBox.appendChild(backButton);
    midBox.appendChild(messageBox);
    midBox.appendChild(chatBox);
    midBox.appendChild(sendButton);

    
}

function launchBot() {
    main.setAttribute('style',`visibility: visible;`);
    lButton.setAttribute('style', `visibility: hidden`);
    document.getElementById('#launchText').setAttribute('style',`visibility: hidden`);
}

function originalRender() {
    location.reload();
}