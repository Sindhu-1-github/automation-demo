const assert = require('assert');
const RecentlyPlayedStore = require('../pageobjects/demo.page');

describe('RecentlyPlayedStore', function () {
    let store;

    beforeEach(function () {
        store = new RecentlyPlayedStore(3);
    });

    it('should add and retrieve recently played songs correctly', async ()=> {
        await store.addSong('user1', 's1');
        await store.addSong('user1', 's2');
        await store.addSong('user1', 's3');
        let result = await store.getRecentlyPlayed('user1');
        console.log('Output:', result);

        store.addSong('user1', 's4');
        result = store.getRecentlyPlayed('user1');
        console.log('Output:', result);

        await store.addSong('user1', 's2');
        result = await store.getRecentlyPlayed('user1');
        console.log('Output:', result);

        await store.addSong('user1', 's1');
        result = await store.getRecentlyPlayed('user1');
        console.log('Output:', result);
    });

    it('should handle multiple users', async ()=> {
        await store.addSong('user1', 's1');
        await store.addSong('user2', 's2');
        await store.addSong('user1', 's3');
        await store.addSong('user2', 's4');
        let result1 = await store.getRecentlyPlayed('user1');
        let result2 = await store.getRecentlyPlayed('user2');
        console.log('Output for user1:', result1);
        console.log('Output for user2:', result2);
    });

    it('should return an empty list if no songs have been played for a user', async ()=> {
        let result = await store.getRecentlyPlayed('user1');
        console.log('Output:', result);
    });
});
