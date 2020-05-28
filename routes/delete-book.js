const common = require('./common');

const deleteBookRoutes = (app) => {
    app.delete('/DeleteBook/:id', (req, res) => {

        common.readFile(data => {
          
            
           var bookId = req.params["id"];
            delete data[bookId];
            common.writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('book deleted');
            });
        },
            true);
      });
}

module.exports=deleteBookRoutes;