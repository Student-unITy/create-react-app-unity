import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }

    render() {
        return (
            <h1>Login</h1>
        )
    }
}

export default Login;