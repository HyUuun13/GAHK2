/**
 * ResultsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    json: async function (req, res) {
    
        var result = await Results.find();
    
        return res.json(result);
      },
  

};

