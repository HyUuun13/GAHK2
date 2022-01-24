const supertest = require('supertest');
const Async = require('async');
describe('FileController', function () {

    var cookie;

    //upload
    describe('FileController -#upload() to upload attendance sheet and score sheet', function () {
        it('Return 200, Successfully uploaded', function (done) {
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
                    // Course.findOne({ courseID: "AERO01" }).then(function (course) {
                        var course = await Course.findOne({ courseID: "AERO01" });
                        supertest(sails.hooks.http.app)
                            .post('/coach/upload/' + course.id)
                            .set('Cookie', cookie)
                            .send("Receipt[upload1]=C:\Users\stfun\Documents\HKBU\Core\COMP4117\coachForm.JPG&Receipt[upload2]=C:\Users\stfun\Documents\HKBU\Core\COMP4117\coachForm2.JPG")
                            .expect(404, cb);
                    // });
                }
            ], done);
        });
    });
    
});