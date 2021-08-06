import React, { Component } from "react";

function Login(){

    return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>


                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
 
 );
        
}

export default Login;