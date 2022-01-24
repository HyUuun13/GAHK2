/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const DataURI = require('datauri/sync');

module.exports = {
  //By Dev Scheme Team/////



  upload: async function (req, res) {



    var upload1 = new Promise(function (resolve, reject) {
      req.file('attendance').upload(function (err, files) {
        if (err)
          return res.serverError(err);
        //console.log("examResult");

        // console.log(files);


        resolve(files);

        //   return res.json({
        //     message: files.length + ' file(s) uploaded successfully!',
        //     files: files
        //   });
      });
    });

    var upload2 = new Promise(function (resolve, reject) {
      req.file('examResult').upload(function (err, files) {
        if (err)
          return res.serverError(err);
        //console.log("attendance");

        // console.log(files);

        resolve(files);
        // return res.json({
        //   message: files1.length + ' file(s) uploaded successfully!',
        //   files1: files1
        // });
      });
    });

    var files1 = await upload1;
    var files2 = await upload2;

    for (let f of files1) {
      var fileData = DataURI(f.fd);
      // console.log(fileData)
      var model = await Course.update(req.params.id).set({
        attendance: f.fd,
        // examResult: files2

      });
    }
    // files1.forEach(async function (f) { // f => {

    // });

    for (let f of files2) {
      var fileData = DataURI(f.fd);
      // console.log(fileData)
      var model = await Course.update(req.params.id).set({
        examResult: f.fd,
        // examResult: files2

      });
    }

    console.log(files1);
    console.log(files2);

    // files2.forEach(async function (f) { // f => {
    //   var fileData = DataURI(f.fd);
    //   // console.log(fileData);
    //   var model = await Course.update(req.params.id).set({ //pid=course id
    //     examResult: files2
    //   });
    // })

    console.log(files1);
    console.log(files2);

    ////////////////////////////Change status after update/////////////////////////////////
    req.body.docStatus = 1;

    await Course.updateOne(req.params.id).set(req.body); //save testarea ans5, and submit status

    var course = await Course.findOne(req.params.id).populate('coach');
    //var emailto = ["20209460@life.hkbu.edu.hk", "18253008@life.hkbu.edu.hk", "17214432@life.hkbu.edu.hk", "18251625@life.hkbu.edu.hk"];

    var admin = await User.findOne({Email: "17214432@life.hkbu.edu.hk"});

    /////////////////////////////////////////////////////////////
    // var length1 = upload1.files.length;
    // var length2 = upload2.files.length;

    // console.log("1", upload1.files.length);
    // console.log("2", upload2.files.length);
    /*
    if (files1 && files2) {
      return res.status(200).json("你已成功上載檔案");
    } else if (!files1 && !files2) {
      return res.status(404).json("你沒有上載全部檔案");
    };*/

    if (course.category == "普及體操") {
      if (files1.length == 0) {
        return res.status(404).json("你沒有上載全部檔案");
      } else {

        var email = await Email.findOne({title:"教練已上載資料"});
        sails.hooks['email-without-ejs'].send({
          to: admin.Email,
          subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
          html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${course.coach[0].ChiName}`),
        },function(err) {console.log(err || "教練已上載資料 worked!")})

        await Results.update({ course: course.id }).set({ isVerified: 0 });

      }

    } else {
      //check all files is uploaded
      if (files1.length == 0 || files2.length == 0) {
        return res.status(404).json("你沒有上載全部檔案");
      } else {

        var email = await Email.findOne({title:"教練已上載資料"});
        sails.hooks['email-without-ejs'].send({
          to: admin.Email,
          subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
          html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${course.coach[0].ChiName}`),
        },function(err) {console.log(err || "教練已上載資料 worked!")})

      }
    }



    return res.redirect('/coach/passFail/' + course.id);
  },

};

