import micro from 'micro'

const server = micro(



)

server.listen(process.env.PORT || 3000, () => console.log('Listening...'))

export default server
