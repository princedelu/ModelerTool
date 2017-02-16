
module.exports = {

    login: function(req, res, next) {
        res.status(200).json({ "jwt" : "rrrr" }); 
    },

    logout: function(req, res) {
        res.send(200);
    }
};
