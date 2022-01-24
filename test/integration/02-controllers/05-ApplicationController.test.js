const supertest = require('supertest');
const Async = require('async');
describe('ApplicationController', function () {

    var cookie;

    describe('#apply() to apply the course Course[courseID] = AERO01 with User[Username] = test1 & User[Age] = 12 & Application[payment] = cash', function () {
        it('Return 200, Successfully applied', function (done) {
            Async.series([
                function (cb) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ email: 'test1@user.com', password: 'user123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            cb();
                        });
                },
                async function (cb) {
                    // Course.findOne({ courseID: "AERO01" }).then(function (course) {
                        var course = await Course.findOne({ courseID: "AERO01" });
                        supertest(sails.hooks.http.app)
                            .post('/course/'+course.id+'/application')
                            .set('Cookie', cookie)
                            .send("Application[payment]=cash")
                            .expect(200, cb);
                    // });
                }
            ], done);
        });
    });

    describe('#adminEdit() to edit the submitted course application Course[CourseID] = ACRO05 & User[Email] = testuser14@user.com with Application[payment]=cheque with admin login', function () {
        it('Return 200, Successfully edit', function (done) {
            Async.series([
                function (cb) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ email: 'kenny@admin.com', password: 'hkbu123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            cb();
                        });
                },
                async function (cb) {
                    const course7 = await Course.findOne({ courseID: "ACRO05" });
                    const user16 = await User.findOne({ Email: "testuser14@user.com" });
                    let application = await Application.findOne({ course: course7.id, applicationOwner: user16.id });
                    supertest(sails.hooks.http.app)
                        .post('/admin/application/'+application.id+'/edit')
                        .set('Cookie', cookie)
                        .send("Application[payment]=cheque")
                        .expect(200, cb);
                }
            ], done);
        });
    });
    
});

// describe('ApplicationController', function () {

//     describe('ApplicationController - #apply() to apply the course Course[courseID] = AERO12-2021 with User[Username] = test0 & User[Age] = 30', function () {
//         it('User test0 is not allowed to apply this course', function (done) {
//             Course.findOne({ courseID: 'AERO12-2021' }).then(function (course) {
//                 Test.find({ sort: 'createdAt DESC' }).then(function (data) {
//                     supertest(sails.hooks.http.app)
//                         .get('course/'+ course.id+'/application')
//                         .set('Cookie', data[0].cookie)
//                         // The following two lines making the request as normal form submission instead of AJAX request
//                         .set('Accept', 'text/html,application/xhtml+xml,application/xml')
//                         .send('Course[courseID]=AERO12-2021&User[Username]=test0&User[Age]=30')
//                         .expect(403, done);
//                 });
//             });
//         });
//     });
//     describe('ApplicationController - #apply() to apply the course Course[courseID] = AERO12-2021 with User[Username] = test1 & User[Age] = 12 & Application[payment] = cash', function () {
//         it('User test0 is not allowed to apply this course', function (done) {
//             Course.findOne({ courseID: 'AERO12-2021' }).then(function (course) {
//                 Test.find({ sort: 'createdAt DESC' }).then(function (data) {
//                     supertest(sails.hooks.http.app)
//                         .get('course/'+ course.id+'/application')
//                         .set('Cookie', data[0].cookie)
//                         // The following two lines making the request as normal form submission instead of AJAX request
//                         .set('Accept', 'text/html,application/xhtml+xml,application/xml')
//                         .send('Course[courseID]=AERO12-2021&User[Username]=test0&User[Age]=30')
//                         .expect(200, done);

//                 });
//             });
//         });
//     });
// });
// >>>>>>> 4c98bc1f0eef911e1181b6669291022b11669028
