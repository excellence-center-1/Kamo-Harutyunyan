import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import LoginPage from './login';
import SignupPage from './signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginPage: true,
    };
  }

  handleSignupClick = () => {
    this.setState({ isLoginPage: false });
  };

  handleLoginClick = () => {
    this.setState({ isLoginPage: true });
  };

  render() {
    const { isLoginPage } = this.state;

    return (
      <div className="app-container">
        {isLoginPage ? (
          <LoginPage handleSignupClick={this.handleSignupClick} />
        ) : (
          <SignupPage handleLoginClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);