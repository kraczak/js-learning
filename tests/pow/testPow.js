'use strict';

import { pow } from '../../src/pow/pow.js';
import assert from 'assert';

describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(2, 0), 1);
        assert.equal(pow(2, 1), 2);
        assert.equal(pow(2, -2), 1 / 4);
    })
});