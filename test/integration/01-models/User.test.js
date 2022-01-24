describe('User (model) initial data', function () {

    describe('Admin user', function () {
        it('should find an User acting as "admin"', function (done) {
            User.find({ role: 'admin' })
                .then(function (users) {

                    if (users.length == 0) {
                        return done(new Error(
                            'Should return 1 user -- the admin ' +
                            'But instead, got: no user found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });
    describe('Find user TestUser1', function () {
        it('Find the record of a User names TestUser1', function (done) {
            User.find({ EngName:'TestUser1' })
                .then(function (users) {

                    if (users.length == 0) {
                        return done(new Error(
                            'Should return 1 user -- the TestUser1 ' +
                            'But instead, got: no user found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });
    describe('Member user', function () {
        it('Find an User acting as "user"', function (done) {
            User.find({ role: 'user' })
                .then(function (users) {

                    if (users.length == 0) {
                        return done(new Error(
                            'Should return 1 user -- the user ' +
                            'But instead, got: no user found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });
    describe('Find admin User1', function () {
        it('Find the record of an Admin with Email "kenny@admin.com"', function (done) {
            User.find({ Email: 'kenny@admin.com',role:'admin' })
                .then(function (users) {

                    if (users.length == 0) {
                        return done(new Error(
                            'Should return 1 user -- the User1 ' +
                            'But instead, got: no user found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });
    describe('Find user parent1', function () {
        it('Find the record of a 34 year-old parent1"', function (done) {
            User.findOne({ Username: 'parent1' })
                .then(function (users) {

                    if (users.Age != 34) {
                        return done(new Error(
                            'Should return 1 user -- the parent ' +
                            'But instead, got: wrong age'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

});
describe('Coach (model) initial data', function (){
    describe('Find the coach "陳小文" who can teach "藝術體操"', function () {
        it('Find the record of coach "陳小文" who can teach "藝術體操"', function (done) {
            Coach.find({ Email: 'coach2@coach.com', disciplines: ["技巧體操", "健美體操", "男子競技體操", "女子競技體操", "藝術體操", "彈網訓練", "普及體操"] })
                .then(function (coachs) {

                    if (coachs.length == 0) {
                        return done(new Error(
                            'Should return the coach --  陳小文' +
                            'But instead, got: no coach found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

});