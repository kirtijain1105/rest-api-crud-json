const common = require('./common');
const saveBookRoutes = (app) => {
  app.post('/SaveBook', (req, res) => {

    common.readFile(data => {
        const newUserId = Object.keys(data).length + 1;
        // add the new book
        data[newUserId] = req.body;
  
        common.writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new book added');
        });
    },
        true);
  });
}


module.exports = saveBookRoutes;