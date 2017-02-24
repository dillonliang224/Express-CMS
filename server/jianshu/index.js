var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs');

var url = 'http://www.jianshu.com/'
var article_list = [];

var data = {
    title: 'jianshu',
    author: 'dillon liang',
    date: Date.now(),
    articles: []
}

function startGame(url) {
  getData(url)
}

function getData(url) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var home = cheerio.load(body)
      var list = home('#list-container .note-list li')
      list.each(function (index, item) {
        let article_id = home(this).find('.content .title').attr('href').replace('/p/', '')

        request('http://www.jianshu.com/p/' + article_id, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            let $ = cheerio.load(body, {decodeEntities: false}),
              title = $('.article .title').text(),
              avatar_info = $('.article .author .avatar'),
              author_id = avatar_info.attr('href').replace('/u/', ''),
              author_avatar = avatar_info.find('img').attr('src'),
              author_name = $('.article .author .info .name a').text().trim(),
              article_meta = $('.article .author .info .meta'),
              publish_time = article_meta.find('.publish-time').text().trim(),
              wordage = article_meta.find('.wordage').text().trim(),
              content = $('.article .show-content ').html()

            let article = {
              id: article_id,
              title: title,
              author: {
                id: author_id,
                name: author_name,
                avatar: author_avatar
              },
              meta: {
                publish_time: publish_time,
                wordage: wordage
              },
              content: content,
              is_from_jianshu: true
            }

            // data.articles.push({'article': article})
            fs.appendFile('./data/' + article_id + '.json', JSON.stringify(article), function (err) {
              if (!err) {
                console.log('article id: ' + article_id + ' write to file successfully');
              }
            })
            // console.log(article);
          }
        })
      })
    }
  })
}

startGame(url)
