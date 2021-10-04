let screen = document.querySelector('.screen')
let frames = document.querySelectorAll(".slide");
let current_frame = document.querySelector("#slide1");

const frameInfo = {
    slide1: {
        delay: '0.5',
        text: 'Hey there, I\'m Robo! 👋',
    },
    slide2: {
        delay: '3',
        text: 'I\'m a robot. 🤖',
    },
    slide3: {
        delay: '8',
        text: 'I like to code.',
    },
    slide4: {
        delay: '10.5',
        text: 'You can contact me at Robo#0345 on Discord.',
    },
    slide5: {
        delay: '13',
        text: 'That\'s it for now! 👋',
    },
};
let count=0;

Object.keys(frameInfo).forEach((frame) => {
    console.log(count);
    count++;

    let delay = parseFloat(frameInfo[frame].delay) * 1000;
    let totalTime = parseFloat(frameInfo[frame].delay) + parseFloat(frameInfo[frame].time) * 1000;
    setTimeout(() => {
        screen.innerHTML = `
            <div class="slide" id="${frame}">
                <h1>${frameInfo[frame].text}</h1>
            </div>
        `;
    }, delay)
});