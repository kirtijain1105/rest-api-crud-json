const common = require('./common');

const updateBookRoutes = (app) => {
app.put('/UpdateBook/:id', (req, res) => {

    common.readFile(data => {
      
        
       var bookId = req.params["id"];
        var dataToUpdate=data[bookId];
        dataToUpdate.Name=req.body.name;
        common.writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('book updated');
        });
    },
        true);
  });
}

module.exports=updateBookRoutes;