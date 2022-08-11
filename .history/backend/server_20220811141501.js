const express = require('express');
 const app = express();
  app.get('/', (req, res) => {
     res.json({ message: 'Hello there!', }); });
      app.listen(, () => {
         console.log('Server is running'); });