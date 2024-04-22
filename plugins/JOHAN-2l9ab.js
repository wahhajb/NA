const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

handleCommand(req, res) {
    const command = req.body.command;
    
   
    switch(command) {
        case ''.لقبي':
            res.send('لقبك هو يوهان');
            break;
        case '.الألقاب':
        
           
            res.send('الألقاب الخاصة بك هي ...');
            break;
        default:
            res.send('أمر غير صالح');
    }
}

app.post('/command', handleCommand);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
