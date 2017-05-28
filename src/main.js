import micro, { send } from 'micro'
import sendMessage from './helpers/sendMessage'

const server = micro(

  async function (req, res) {

    const { subject, message, senderEmail } = await micro.json(req)

    try { sendMessage(subject, message, senderEmail) }
    catch (e) {
        send(e.message);
    }

    return 'Successfully sent!'

  }

)

server.listen(process.env.PORT || 3000, () => console.log('Listening...'))

export default server
