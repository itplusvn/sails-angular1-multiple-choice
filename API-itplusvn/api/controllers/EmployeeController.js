/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findEmployeebyEmpnum: function (req, res) {
    var id = req.param('id');
    Employee.findOne({empnum: id})
      .exec(function (err, user) {

        if (err)
          res.json({error: err});
        if (user === undefined)
          res.json({notFound: true});
        else
          res.json({notFound: false, userData: user});

      });
  }
};

