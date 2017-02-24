var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../../store/main');

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: []
        };
        this.getData();
    }

    //render() {
    //    var self = this;
    //    var messages = this.state.messageList;
    //    var arr = [];
    //    console.log('are you kinding me');
//
    //    messages
    //    .forEach(function(em) {
    //        arr.push(<li key={em}> {em} </li>);
    //    });
    //    return <section className="pageContentInner">
    //        <div className="head-section"><h1>MessageList: </h1></div>
    //        <ul>
    //            {arr}
    //        </ul>
    //    </section>;
    //}

    render() {
        var articles = this.state.articleList,
            articleNodeArr = [];
        articles.forEach(function (article) {
            articleNodeArr.push(<li> {article.title} </li>);
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
        //store.getAllData(function (data) {
        //    var messageListArr = [];
        //    for(var i = 0, len = data.length; i < len, i++) {
        //        // messageListArr[i] = data[i].Message;
        //        messageListArr[i] = data[i];
        //    }
        //    self.setState({messageList: messageListArr});
        //})

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
  <MessageList />,
  document.getElementById('main-container')
);