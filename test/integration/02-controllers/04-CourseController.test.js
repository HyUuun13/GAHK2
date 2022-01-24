const supertest = require('supertest');
const Async = require('async');
describe('CourseController', function () {

    let cookie;

    // describe('CourseController - #create() to create course with Course[courseID] = AERO13-2021, Course[quota] = 20, Course[maxAge] = 29,  & Course[category] = 健美體操 without admin login', function () {
    //     it('Return 403, Forbidden', function (done) {
    //         supertest(sails.hooks.http.app)
    //             .post('/course/create')
    //             .send("Course[courseID]=AERO13-2021&Course[quota]=20&Course[maxAge]=29&Course[category]=健美體操")
    //             .expect(403, done);
    //     });
    // });

    describe('CourseController - #create() to create course with Course[courseID] = AERO12-2021, Course[quota] = 20, Course[maxAge] = 29,  & Course[category] = 健美體操 with admin login', function () {
        it('Return 200, Successfully created', function (done) {
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
                function (cb) {
                    supertest(sails.hooks.http.app)
                        .post('/course/create')
                        .set('Cookie', cookie)
                        .send("Course[courseID]=AERO12-2021&Course[quota]=20&Course[maxAge]=29&Course[category]=健美體操")
                        .expect(200, cb);
                }
            ], done);
        });
    });

    //read
    describe('CourseController - #read() to read the detail information of the Course[courseID] = AERO01', function () {
        it('Return 200, Successfully read', function (done) {
            Course.findOne({ courseID: "AERO01" }).then(function (course) {
                supertest(sails.hooks.http.app)
                    .get('/course/read/' + course.id)
                    .expect(200, done);
            });
        });
    });
    //delete
    describe('CourseController - #delete() to set Course[status] = 3 of Course[courseID] = ACRO01 with admin login', function () {
        it('Return 200, Successfully deleted', function (done) {
            Course.findOne({ courseID: "ACRO01" }).then(function (course) {
                supertest(sails.hooks.http.app)
                    .post('/course/delete/' + course.id)
                    .set('Cookie', cookie)
                    .expect(204, done);
            });
        });
    });
    //update
    describe('CourseController - #update() to update the course Course[courseID] = AG03 with Course[quota] = 50 with admin login', function () {
        it('Return 200, Successfully updated', function (done) {
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
                    // Course.findOne({ courseID: "AG03" }).then(function (course) {
                        var course = await Course.findOne({ courseID: "AG03" });
                        supertest(sails.hooks.http.app)
                            .post('/course/update/' + course.id)
                            .set('Cookie', cookie)
                            .send("Course[courseID]=AG03&Course[quota]=50&Course[maxAge]=29&Course[category]=健美體操")
                            .expect(200, cb);
                    // });
                }
            ], done);

        });
    });
    //search
    describe('CourseController - #search() to filter all course by Course[level] = L2', function () {
        it('Return 200, Successfully search', function (done) {
            supertest(sails.hooks.http.app)
                .get('/course?level=L2')
                .expect(200, done);

        });
    });
});
