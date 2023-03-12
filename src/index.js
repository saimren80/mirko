const express = require('express');
const app = express();
const path = require('path');
const port  = process.env.port || 3000;
const hbs = require('hbs');
const path_file = (folderName) => {
    return path.join(__dirname,folderName);
}
const staticPath = path_file('../public');
const templatePath = path_file('../templates/views');
const partialsPath = path_file('../templates/partials');

// tell to hbs engine for default folder is template not iews
app.set('views',templatePath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


// routing
app.get('/', (req, res) => {
    res.render('index');
})
//about page
app.get('/about', (req,res) => {
    res.render('about');
})
app.get('/service', (req, res) => {
    res.render('service');
})
app.get('/plans', (req, res) => {
    res.render('plan');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/terms', (req, res) => {
    res.render('terms');
})

app.get('/privacy', (req, res) => {
    res.render('privacy');
})
app.get('/article', (req, res) => {
    res.render('article');
})
app.get('/weather', (req, res) => {
    res.render('weather');
})
app.listen(port, () => {
    console.log(`Server started on Port No - ${port}`);
});
