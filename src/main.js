import micro from 'micro'
import send from './helpers/sendMessage'

const server = micro(

  async function (req, res) {

    const { subject, message, senderEmail } = await micro.json(req)

    await send(subject, message, senderEmail)

    return 'Successfully sent!'

  }

)

server.listen(process.env.PORT || 3000, () => console.log('Listening...'))

export default server
