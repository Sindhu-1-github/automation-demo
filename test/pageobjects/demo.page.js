const Page = require('./page');

class RecentlyPlayedStore {
    constructor(capacity) {
        this.capacity = capacity;
        this.store = {};
    }

    addSong(user, song) {
        if (!this.store[user]) {
            this.store[user] = [];
        }

        const songIndex = this.store[user].indexOf(song);
        if (songIndex !== -1) {
            this.store[user].splice(songIndex, 1);
        }

        if (this.store[user].length === this.capacity) {
            this.store[user].shift();
        }

        this.store[user].push(song);
    }

    getRecentlyPlayed(user) {
        return this.store[user] || [];
    }
}

module.exports = RecentlyPlayedStore;