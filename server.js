const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');
const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//applisten
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;