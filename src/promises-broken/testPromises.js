'use strict';

describe("promises", function () {
    context('async-await', () => {

        async function asyncLoadJson(url) { // (1)
            let response = await fetch(url); // (2)
            if (response.status === 200) return await response.json()
            throw new HttpError(response);
        }

        class HttpError extends Error {
            constructor(response) {
                super(`${response.status} for ${response.url}`);
                this.name = 'HttpError';
                this.response = response;
            }
        }

        it('async loadJson throws 404 error', async () => {
            const url = 'https://javascript.info/no-such-user.json'

            try{
                await asyncLoadJson(url)
            } catch (err) {
                assert.instanceOf(err, HttpError);
                assert.equal(err.response.status, 404);
            }
        });

        it('rethrow example rewritten to async/await', async () => {
            async function demoGithubUser(name) {
                try {
                    return await asyncLoadJson(`https://api.github.com/users/${name}`);;
                } catch (e) {
                    if (e instanceof HttpError && e.response.status === 404) {
                        return await demoGithubUser()
                    } else {
                        throw e;
                    }
                }
            }
            let name = 'kraczak';


            let failed = true;
            try {
                let user = await demoGithubUser(name);
                assert.equal(user.login, name);
                failed = false;
            } catch (e) {
                if (e instanceof HttpError && e.response.status === 403) {
                    failed = false;
                }
            }
            assert.isFalse(failed); // blocked by too many requests
        });
    });
});