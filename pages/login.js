import React from "react";
import Header from '../components/header';
import fetch from 'isomorphic-unfetch';

class Login extends React.Component {
    handleSubmit = async (e) => {
        console.log("Submitted state: ", this.state);
        e.preventDefault();
        let res = {};
        const body = {
            "username":this.state.username,
            "password":this.state.password,
        };
        console.log("body: ", body);
        const formData = document.querySelector("#loginForm")
        try {
            res = await fetch('http://localhost:8080/login',{
                method: 'POST',
                body:new FormData(formData),
                // mode: "no-cors",
                credentials: 'include',
                headers: {
                    //'Content-Type': 'multipart/form-data',
                    //"Origin": "http://localhost",
                   // "credentials": "same-origin",
                    //"Access-Control-Request-Method":"POST"
                }
            });

        } catch (e) {
            console.log(e);
            throw e;
        }
        return false;
    };
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render () {
        return (
            <div>
                <Header/>
                <p>This is login page</p>
                <form id="loginForm" role="form" onSubmit= {this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" name="username" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" name="password"  onChange={this.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Login;
