const app = express();

require('dotenv').config();

const port = process.env.port;

app.use(cors());
app.use(express.json());

readdirSync('./Ticket').map((route) => app.use('/api/test', require('./Ticket/' + route)));

const Server = () => {
    db();

    app.listen(port, () => {
        console.log("Listening to port: ", port);
    })
}
