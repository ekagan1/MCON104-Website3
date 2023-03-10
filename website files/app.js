const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.get('', (req, res) => {
   res.sendFile(__dirname + '/public/html/login.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))