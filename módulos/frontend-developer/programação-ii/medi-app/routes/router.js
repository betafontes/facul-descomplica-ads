import  { express } from 'express';

let router = express.Router();

router.get(
  '/', function (req, res) {
    console.log('Received a GET request at /');
      res.status(200).json({ message: 'Hello, World!' });
  }
)

export default router;