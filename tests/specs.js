/**
 * Mocha tests.
 *
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

/* eslint-env mocha */

var should = require('should'),
    codes  = require('../index');


describe('main', function () {

    it('should pass: 3 codes groups', function () {
        should(Object.keys(codes).length).equal(3);
    });

    it('should pass: group size match', function () {
        var size = Object.keys(codes['1']).length;

        (Object.keys(codes['2T']).length === size && Object.keys(codes['2B']).length === size).should.equal(true);
    });

    it('should pass: get items', function () {
        (codes['1']['fr']).should.deepEqual(['French', 'Français']);
        (codes['2T']['fra']).should.deepEqual(['French', 'Français']);
        (codes['2B']['fre']).should.deepEqual(['French', 'Français']);
    });
});
