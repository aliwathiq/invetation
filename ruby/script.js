const messages = [
    "Are you sure?",
    "Really sure??",
    "like positive?",
    "just think about it",
    "oh what u afraid to lose?",
    "If you play ill buy u sword",
    "and a shield",
    "and a gun..?",
    "double homuscide is double the fun",
    "Just think about it!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}