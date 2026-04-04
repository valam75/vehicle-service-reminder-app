const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const vehicles = [
  {
    owner: 'Niranjan',
    vehicle: 'Hyundai i20',
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
  }
];

app.get('/', (req, res) => {
  res.render('index', { vehicles });
});

app.listen(3000, () => {
  console.log('Vehicle Service Reminder App running on port 3000');
});
