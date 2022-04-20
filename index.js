import express  from 'express';

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];
const toDay = new Date();
let str = "Não, hoje não é feriado";
let array= [];
let response = [];
const app = express(); 
app.get('/holidays', (req,res)=>{
    res.send(holidays);
});

app.get('/is-today-holiday', (req,res)=>{
  holidays.map(index =>{
    if(index.date === toDay.toLocaleDateString("en-US")) str = `Sim, hoje é ${index.name}`;
  })
  res.send(str);
});

app.get('/holidays/:day', (req,res)=>{
  const id = req.params.day;
  holidays.map(index =>{
    array = index.date.split('/')
    if(array[0] === id) response.push(index);
  })
  res.send(response);
  response = [];
});
app.listen(5000);