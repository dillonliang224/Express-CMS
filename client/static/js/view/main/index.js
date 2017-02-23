var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../../store/main');

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: []
        };
        this.getData();
    }

    render() {
        var self = this;
        var messages = this.state.messageList;
        var arr = [];
        console.log('are you kinding me');

        messages
        .forEach(function(em) {
            arr.push(<li key={em}> {em} </li>);
        });
        return <section className="pageContentInner">
            <div className="head-section"><h1>MessageList: </h1></div>
            <ul>
                {arr}
            </ul>
        </section>;
    }

    getData() {
        var self = this;
        store
        .getAllData(function (data) {
            var i = 0;
            var len = data.length;
            console.log('data: ' + data);
            var messageListArr = [];
            for(; i<len; i++) {
                // messageListArr[i] = data[i].Message;
                messageListArr[i] = data[i];
            }
            self.setState({messageList: messageListArr});
            //console.log(self.state.messageList.length);
        })
    }
}

ReactDOM.render(
  <MessageList />,
  document.getElementById('main-container')
);