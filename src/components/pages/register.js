import React from 'react';

class Register extends React.Component {
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
            <h1>Register</h1>
        )
    }
}

export default Register;