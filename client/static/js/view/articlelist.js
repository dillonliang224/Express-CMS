var React = require('react');
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
        articles.forEach(function (article, index) {
            articleNodeArr.push(<li key={'dillon-' + index}> {index + 1}. {article.title} -- {article.meta.publish_time} </li>);
        });

        return (
            <section className='mod-articles'>
                <header>简书</header>
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
};
