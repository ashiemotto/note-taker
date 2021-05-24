// Dependencies

const express = require('express');


// Sets up the Express App

const app = express();
const PORT =  process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// sets up router paths
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);












// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
