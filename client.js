const socket = io('localhost:3000')
socket.on('connection')

const createMessCont = (mess) => {
    const p = document.createElement('p')
    p.innerHTML = mess
    const chat = document.querySelector('.chat')
    chat.appendChild(p)
}

socket.on('message', (data) => {
    createMessCont(data)
})

const updateChatters = (arg) => {
    const span = document.querySelector('.chatCounter')
    span.innerHTML = arg
}

socket.on("counter", (arg) => {
    updateChatters(arg)
});



const sendMessage = () => {
    const userName = document.querySelector('.name')
    const messageInput = document.querySelector('.message')
    socket.emit('message', `${userName.value}: ${messageInput.value}`)
}
