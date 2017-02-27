var React = require('react');

class Footer extends React.Component {

  render() {
    var time = Date();
    return (
      <footer>
        <ul>
          <li className='footer-email'>Email: dillonliang224@gmail.com</li>
          <li className='footer-name'>Author: Dillon Liang</li>
        </ul>
        <span className='time'>{time}</span>
      </footer>
    )
  }
}
