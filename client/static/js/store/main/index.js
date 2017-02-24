var EventEmitter = require('events').EventEmitter;

class Store_Article extends EventEmitter {
    constructor() {
        this.allData = null;
    }

    getAllData(callback) {
        var self = this;
        fetch(
            "/data/getMessage/"
        )
        .then(function(res) {
            console.log('res: ' +res);
            if (res.ok) {
                console.log('is ok');
                //console.log(res.data);
                res.json().then(function(data) {
                    console.log('dillon here has data ');
                    self.allData = data;
                    callback(self.allData);
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, function(e) {
            console.log("Fetch failed!", e);
        });
    }

    getArticleById(callback) {
        var self = this;
        fetch ("/api/article/")
        .then(function (res) {
            // todo
        }, function (e) {
            console.log('dillon: you need to know, fetch article with article id failed!', e);
        });
    }

    getArticles (callback) {
        var self = this;
        fetch ('/api/articles/')
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    self.articles = data;
                    callback(self.articles);
                });
            }
        }, function (e) {
            console.log('dillon: you need to know, fetch articles failed!', e);
        });
    }
}

module.exports = new Store_Article();