var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../store/index.js');

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: []
        };
        this.getData();
    }

    render() {
        var articles = this.state.articleList,
            articleNodeArr = [];
        articles.forEach(function (article) {
            articleNodeArr.push(<li key={article.id}> {article.title} -- {article.meta.publish_time} </li>);
        });

        return (
            <section>
                <header>jianshu Articles</header>
                <ul>
                    {articleNodeArr}
                </ul>
            </section>
        );

    }

    getData() {
        var self = this;

        store.getArticles(function (data) {
            var articleListArr = [];
            for (var i = 0, len = data.length; i < len; i++) {
                articleListArr[i] = data[i];
            }
            self.setState({articleList: articleListArr});
        })
    }
}

ReactDOM.render(
  <ArticleList />,
  document.getElementById('main-container')
);