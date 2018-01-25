const user = require('./user')
const login = require('facebook-chat-api')

login(user.info, (err, api) => {
  if (err) return console.error(err)

  api.listen((err, message) => {
    console.log(message)
    //api.sendMessage(message.body, message.threadID)
  })
})