import Header from '../components/header'
import fetch from 'isomorphic-unfetch';
import React from "react";

class  Logout extends React.Component{
    handleSubmit = async (e) => {
        e.preventDefault();

        let success =  true;
        let res = {success};
        let result
        try {
            res = await fetch('http://localhost:8080/logout', {
                method: 'GET',
                // mode: "no-cors",
                headers: {
                    //'Origin': 'http://localhost',
                    //'Content-Type': 'application/JSON',
                    //"Accept":"*/*",
                    //"Access-Control-Allow-Origin": "http://localhost",
                    //"Access-Control-Request-Headers": "*",
                    //"Access-Control-Allow-Methods": "GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH",
                    //"X-Requested-With": "XMLHttpRequest",
                    //"credentials": "include",
                },
                credentials: 'include'
            });
            result = res;
            console.log("res", result);
        }catch (errir) {
            console.error(errir);
            success = false;
            result = {success}
        }
        const data = result;

        console.log(` data fetched: ${data}`)

        return {
            data
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <p>This is logout page</p>
                <form id="logoutForm" role="form" onSubmit= {this.handleSubmit}>
                    {/*<div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password"  onChange={this.handleInputChange}/>
                </div>*/}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        )
    }
}
export default Logout;
