// 2)

const express = require('express');
const app = express();
const port = 3000;

//Add
app.get('/calculator/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
  });

  //Minius
  app.get('/calculator/minus', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
  });

  //Times
  app.get('/calculator/times', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
  });
  
  //Divide
  app.get('/calculator/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
  });

  app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
  });

