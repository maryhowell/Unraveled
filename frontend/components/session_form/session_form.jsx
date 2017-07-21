import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => {

      this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Create Account</Link>;
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

    submitButtonText() {
     if (this.props.formType === 'login') {
       return "Log In";
     } else {
       return "Create Account";
        }
      }



  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {


    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <p> WELCOME</p>
            <br/>
            <label>
              <input type="text"
                placeholder="email"
                value={this.state.username}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>

            {this.renderErrors()}
            <input className="submitbutton"
              type="submit"
              value={this.props.formType === 'login' ? "Log In" : "Create Account"} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
