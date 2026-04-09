const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const vehicles = [
  {
    owner: 'Niranjan',
    vehicle: 'Suzuki SCross',
    serviceDate: '2026-05-10',
    insuranceRenewal: '2026-08-15',
    pollutionCheck: '2026-06-20'
  },
  {
    owner: 'Rahul',
    vehicle: 'Honda City',
    serviceDate: '2026-04-28',
    insuranceRenewal: '2026-07-30',
    pollutionCheck: '2026-05-18'
  },
   {
    owner: 'Ajith',
    vehicle: 'Volkswagon',
    serviceDate: '2026-10-31',
    insuranceRenewal: '2028-07-30',
    pollutionCheck: '2026-05-18'
  }
];

app.get('/', (req, res) => {
  res.render('index', { vehicles });
});

app.listen(3000, () => {
  console.log('Vehicle Service Reminder App running on port 3000');
});
