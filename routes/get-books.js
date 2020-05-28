const common = require('./common');

const bookRoutes = (app, fs) => {

    // variables
    const dataPath =common.filename;

    // READ
    app.get('/GetBooks', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = bookRoutes;