'use strict';

describe("Generators", function () {

    context('pseudoRandom', () => {
        it("with seed 1 it generates 16807, 282475249, 1622650073", function () {
            let gen = pseudoRandom(1);
            assert.equal(gen.next().value, 16807)
            assert.equal(gen.next().value, 282475249)
            assert.equal(gen.next().value, 1622650073)
        });


        it('generates uniform distribution', () => {
            let gen = pseudoRandom(1);
            let n = 10000;
            let result = 0;
            let map = new Map();
            for (let i = 0; i < n; i++) {
                let val = gen.next().value % 10;
                result += val;
                map.set(val, map.get(val) ? map.get(val) + 1 : 1);
            }
            assert.closeTo(result/n, 4.5, 0.1);

        });

        it('generates uniform distribution - version 2nd', () => {
            let gen = pseudoRandom(1);
            let k = 10;
            let n = 10000;
            let result = Array.from(
                {length: n},
                () => gen.next().value % k
            );
            assert.closeTo(result.reduce((a, b) => a + b) / n, 4.5, 0.1);

        });

    });

});
