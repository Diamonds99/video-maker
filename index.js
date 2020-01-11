
const robots = {
    userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js')
}

async function start() {
    const content = {}
    
    content = robots.userInput(content)
    content = await robots.text(content)
}

start()