const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Server del mio Blog')
})


const posts = [
    {
        title: "Ciambellone",
        content: "Questo è il contenuto del primo post",
        image: "/img/ciambellone.jpeg",
        tags: ["dolce", "colazione"]
    },
    {
        title: "Cracker alla barbabietola",
        content: "Questo è il contenuto del secondo post",
        image: "/img/cracker_barbabietola.jpeg",
        tags: ["salato", "spuntino"]
    },
    {
        title: "Pane fritto dolce",
        content: "Questo è il contenuto del secondo post",
        image: "/img/pane_fritto_dolce.jpeg",
        tags: ["dolce", "colazione"]
    },
    {
        title: "pasta barbabietola",
        content: "Questo è il contenuto del secondo post",
        image: "/img/pasta_barbabietola.jpeg",
        tags: ["salato", "pranzo"]
    },
    {
        title: "Torta paesana",
        content: "Questo è il contenuto del secondo post",
        image: "/img/torta_paesana.jpeg",
        tags: ["dolce", "dessert"]
    }
]

app.get('/bacheca', (req, res) => {

    res.json(posts)
})