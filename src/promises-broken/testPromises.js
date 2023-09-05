'use strict';

describe("promises", function () {
    context('async-await', () => {

        async function asyncLoadJson(url) { // (1)
            let response = await fetch(url); // (2)
            if (response.status === 200) return await response.json()
            throw new Error(response.status);
        }

        it('async loadJson throws 404 error', async () => {
            const url = 'https://javascript.info/no-such-user.json'

            try{
                await asyncLoadJson(url)
            } catch (err) {
                assert.instanceOf(err, Error);
                assert.equal(err.message, 404);
            }
        });



    });
});