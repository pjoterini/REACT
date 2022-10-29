const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb').MongoClient

mongodb.connect(process.env.CONNECTIONSTRING, async function(err, client) {
  const db = client.db()
  const results = await db.collection('pets').find().toArray()
  console.log(results)
})

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const path = require('path')

app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


function getWeather(req, res, next) {
    req.visitorWeater = true
    next()
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', getWeather, (req, res) => {
    console.log(req.cookies)
    res.render('home', {
        isRaining: req.visitorWeater,
        pets: [{name: 'meows', species: 'cat'}, {name: 'barks', species: 'dog'}]
    })
})

app.get('/about', (reg, res) => {
   res.send('sup about')
})

app.post('/result', (req, res) => {
    if (req.body.color.trim().toUpperCase() === 'BLUE') {
        res.send('noice')
    } else {
        res.send('badddd')
    }
    res.send('thank for submittin')
})

app.get('/api/pets', (req, res) => {
    res.json([{name: 'meows', species: 'cat'}, {name: 'barks', species: 'dog'}])
})

app.get("/api/animal/:name", (req, res) => {
    if (req.params.name === "meowsalot") {
      res.json({ name: "Meowsalot", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-1.jpg", bio: "This cat is great and very vocal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque." })
    } else if (req.params.name === "barksalot") {
      res.json({ name: "Barksalot", species: "dog", "photo": "https://learnwebcode.github.io/json-example/images/dog-1.jpg", bio: "This dog is very communicative. Deleniti, tempora quis commodi qui inventore ratione rem porro doloribus et obcaecati cumque quibusdam voluptatibus iure nisi aut minima consequuntur, officiis esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit." })
    } else if (req.params.name === "purrsloud") {
      res.json({ name: "Purrsloud", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg", bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque. Lorem ipsum." })
    } else {
      res.json("Animal not found.")
    }
  })

  app.get("/fake-search", (req, res) => {
    console.log(req.query)
    res.json("Thank you for your request.")
  })

  app.post("/api/secret", (req, res) => {
    if (req.body.username === "johndoe" && req.body.password === "qwerty") {
      res.json("You have secret access for us to tell you that 2 + 2 is 4.")
    } else {
      res.json("That is incorrect.")
    }
  })

app.listen(3000)

