// Import both router and express modules from the controller folder 
const {express, router} = require('./controller');
// Express app
const app = express();
// port 
const port = parseInt(process.env.PORT) || 4000;
// Middleware - Application level
app.use(
    router,
    express.json(),
    express.urlencoded({
        extended:true
    })
);
// Listen
app.listen(port, ()=> {
    console.log(`The server is running @ port ${port}`);
})