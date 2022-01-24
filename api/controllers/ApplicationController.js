/**
 * ApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  apply: async function (req, res) {
    var course = await Course.findOne(req.params.id);
    // if (!req.session.userId) {
    //   res.set('location','/user/login?r='+encodeURIComponent(req.url));
    //   return res.status(403).send({message: '請先登入方可進行網上報名，按確定前往登入頁面'});
    // }
    var user = await User.findOne(req.session.userId);
    //var emailto = ["20209460@life.hkbu.edu.hk", "18253008@life.hkbu.edu.hk", "17214432@life.hkbu.edu.hk", "18251625@life.hkbu.edu.hk"];

    if (req.method == "GET") {
      if ((course.minAge != '' && user.Age < course.minAge) || (course.maxAge != '' && user.Age > course.maxAge)){
        if (req.wantsJSON) {
          res.status(403);
          return res.json("你的年齡不符合此課程要求。");
        } else {
          return res.redirect('/course/'+course.id);
        }
      } else if (req.session.Age >= 18) {
        return res.status(406).json("此為親子項目，請使用子女的帳戶報名。");
      }
      if (course.status==2){
        if (req.wantsJSON) {
          res.status(403);
          return res.json("此課程已截止。");
        } else {
          return res.redirect('/course/'+course.id);
        }
      }

      // layout:false

      return res.view('application/form', { applycourse: course, curruser: user});
    }
    else {
      var exist = await Application.findOne({ course: course.id, applicationOwner: user.id });
      if (!exist) {
        if (course.category == "普及體操") {

          if (req.body.parent == 'true') {
            var parent = await User.findOne({ Email: req.body.ParentAc });

            if (parent) {
              if(parent.Email != req.session.Email) {
                // if(parent.Age < req.session.Age && req.session.Age >= 18 ){
                //   return res.status(406).json("家長年齡不能小於子女! 請使用子女的帳戶報名。");
                // } else {
                  await Course.addToCollection(course.id, 'applicant').members(user.id);
                  var application = await Application.findOne({ course: course.id, applicationOwner: user.id });
                  await Application.addToCollection(application.id, "applicant").members(parent.id);

                  var email = await Email.findOne({title:"課程申請已收到"});
                  sails.hooks['email-without-ejs'].send({
                    to: req.session.Email,
                    subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
                    html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${req.session.ChiName}`),
                  },function(err) {console.log(err || "課程申請已收到 worked!")})
                // }

              } else {
                return res.status(406).json("你不能與自己報名此課程。");
              }
            } else {
              return res.status(406).json("此家長用戶不存在。");
            }

          } else {
            var parent = await User.findOne({ Email: req.body.EmailParent });

            if (!parent) {
              await Course.addToCollection(course.id, 'applicant').members(user.id);
              var application = await Application.findOne({ course: course.id, applicationOwner: user.id });

              var email = await Email.findOne({title:"課程申請已收到"});
              sails.hooks['email-without-ejs'].send({
                to: req.session.Email,
                subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
                html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${req.session.ChiName}`),
              },function(err) {console.log(err || "課程申請已收到 worked!")})

            } else {
              return res.status(406).json("此家長電郵地址已註冊。");
            }
          }

        } else {
          await Course.addToCollection(course.id, 'applicant').members(user.id);
          var application = await Application.findOne({ course: course.id, applicationOwner: user.id });

          var email = await Email.findOne({title:"課程申請已收到"});
          sails.hooks['email-without-ejs'].send({
            to: req.session.Email,
            subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
            html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${req.session.ChiName}`),
          },function(err) {console.log(err || "課程申請已收到 worked!")})

        }

      }
      else
        return res.status(409).json("你已報名此課程");

      await Application.updateOne(application.id).set(req.body);

      return res.redirect('/user/application');

    }

  },

  json: async function (req, res) {

    var application = await Application.find().populate("applicant");

    return res.json(application);
  },

  json2: async function (req, res) {

    var application = await Application.find().populate("applicant").populate('produce');

    return res.json(application);
  },

  adminEdit: async function (req, res) {

    var application = await Application.findOne({id: req.params.id});
    if (!application) return res.notFound();
    var course = await Course.findOne({id: application.course});
    var user = await User.findOne({id: application.applicationOwner});
    var email = application.ParentAc;

    if (req.method == "GET") {
      return res.view('admin/applyHandle/editApplication', { applycourse: course, curruser: user, application: application });

    } else {
      if (course.category == "普及體操") {
        if (req.body.parent == 'true') {
          var parent = await User.findOne({ Email: req.body.ParentAc });
          var oldparent = await User.findOne({ Email: email });
          if (parent) {
            req.body.GenderParent = '';
            if(parent.Email != req.session.Email) {
                if(oldparent) {
                  if(oldparent.Email != parent.Email) {
                    await Application.removeFromCollection(application.id, "applicant").members(oldparent.id);
                    await Application.updateOne(application.id).set(req.body);
                    await Application.addToCollection(application.id, "applicant").members(parent.id);
                } else {
                  await Application.updateOne(application.id).set(req.body);
                }
              } else {
                await Application.updateOne(application.id).set(req.body);
                await Application.addToCollection(application.id, "applicant").members(parent.id);
              }
            }else {
              return res.status(409).json("你不能與自己報名此課程。");
            }
          } else {
            return res.status(409).json("此家長用戶不存在。");
          }
        } else {
          var oldparent = await User.findOne({ Email: email });
          var parent = await User.findOne({ Email: req.body.EmailParent });
          if (!parent) {
            if(oldparent){
              await Application.removeFromCollection(application.id, "applicant").members(oldparent.id);
              await Application.updateOne(application.id).set(req.body);
            } else{
              await Application.updateOne(application.id).set(req.body);
            }
          } else {
            return res.status(409).json("此家長電郵地址已註冊。");
          }
        }
      } else {
        await Application.updateOne(application.id).set(req.body);
      }

    var id = parseInt(application.course);

    return res.redirect('/admin/course/' + id + '/applicant');
    }
  }

};

