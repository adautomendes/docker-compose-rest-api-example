module.exports = {
    search: (req, res) => {
        let { id } = req.query;

        let response;
        if (id) {
            // Buscar por id
            response = {
                id,
                timestamp: new Date()
            };
        } else {
            // Buscar todos
            response = {
                timestamp: new Date()
            };
        }

        return res.json(200, response);
    }
}