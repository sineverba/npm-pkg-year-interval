'use strict';

var expect = require('chai').expect;
var interval = require('../src/index');
const { assert } = require('chai');

describe('#interval', function() {
    /**
     * Return "2020" (if we are currently in 2020)
     */
    it('Should return only current year', function() {
        var currentYear = new Date().getFullYear();
        var result = interval(currentYear);
        expect(result).to.equal(currentYear);
    });

    it('Should return two years', function() {
        var startYear = "2010";
        var currentYear = new Date().getFullYear();
        var result = interval(startYear);
        expect(result).to.equal(`2010 - ${currentYear}`);
    });

    it('Should throw error', function() {
        assert.throws( () => {
            interval();
        }, Error)
    });
})