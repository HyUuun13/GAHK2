const supertest = require('supertest');
const Async = require('async');
describe('ReceiptController', function () {

    var cookie;

    //showAll with no data
    describe('ReceiptController - #showAll() to export all receipt record into an excel with Receipt.length = 0', function () {
        it('Return 404, Not found', function (done) {
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
                            .post('/receipt/showAll')
                            .set('Cookie', cookie)
                            // .send("Application[payment]=cash")
                            .expect(404, cb);
                    // });
                }
            ], done);
        });
    });

    //create
    describe('ReceiptController -#create() to create receipt with Receipt[amount] = 350 with admin login', function () {
        it('Return 200, Successfully created', function (done) {
            Async.series([
                function (cb) {
                    cb();
                },
                async function (cb) {
                    const course7 = await Course.findOne({ courseID: "ACRO05" });
                    const user16 = await User.findOne({ Email: "testuser14@user.com" });
                    let application = await Application.findOne({ course: course7.id, applicationOwner: user16.id });

                    supertest(sails.hooks.http.app)
                        .post('/receipt/'+application.id)
                        .set('Cookie', cookie)
                        .send("Receipt[amount]=300")
                        .expect(200, cb);
                }
            ], done);
        });
    });

    //delete
    describe('ReceiptController -#delete() to delete a receipt with Receipt[amount] = 300 with admin login', function () {
        it('Return 200, Successfully delete', function (done) {
            Async.series([
                function (cb) {
                    cb();
                },
                async function (cb) {
                    await Receipt.create({ amount: 300 });
                    const receipt = await Receipt.findOne({ amount: 300 });
                    supertest(sails.hooks.http.app)
                        .post('/receipt/delete/'+receipt.id)
                        .set('Cookie', cookie)
                        // .send("Receipt[amount]=300")
                        .expect(200, cb);
                }
            ], done);
        });
    });

    //show all
    describe('ReceiptController -#showAll()  to export all receipt record into an excel', function () {
        it('Return 200, Successfully show all', function (done) {
            Async.series([
                function (cb) {
                    cb();
                },
                async function (cb) {
                    await Receipt.create({ amount: 300 });
                    await Receipt.create({ amount: 200 });
                    // const receipt = await Receipt.findOne({ amount: 300 });
                    supertest(sails.hooks.http.app)
                        .post('/receipt/showAll')
                        .set('Cookie', cookie)
                        // .send("Receipt[amount]=300")
                        .expect(200, cb);
                }
            ], done);
        });
    });
    
});