const utils = require('./utils');
const expect = require('expect');
const app = require('../server/server').app;
const request = require('supertest');

describe('Utils', () => {
    it('should add two no', () => {
        var res = utils.add(22, 22);
        expect(res).toBe(44).toBeA('number');
    });

    it('should give square', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
    });

    it('should expect value', () => {
        // expect(12).toNotBe(11);
        // expect({name:"a"}).toEqual({name:"a"});
        // expect([1,2,3]).toInclude(7);
        expect([1, 2, 3]).toExclude(7);

    });

});

it('should set name', () => {
    var names = "abc xyz";
    var res = {
        location: "india"
    };

    utils.setName(res, names);
    expect(res).toInclude({
        fn: 'abc',
        ln: 'xyz'
    });
    // expect(res).toEqual(res1);
    // expect(res['fn']).toBeA('string').toBe('abc');

});

it('should add async', (done) => {
    utils.syncAdd(22, 22, (sum) => {
        expect(sum).toBe(44).toBeA('number');
        done();
    });

});

it('should return response', (done) => {
    request(app)
        .get('/')
        .expect('Hello world')
        .expect(200)
        .expect((res) => {
            expect(res.text).toInclude('Hello');
        })
        .end(done);
});