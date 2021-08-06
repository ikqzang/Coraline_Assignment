import React, { Component } from "react";

function Singup(){
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" required></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required></input>
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="Enter your first name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Enter your last name" />
                </div>

                <div className="form-group">
                    <label>Tel</label>
                    <input type="tel" className="form-control" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                </div>

                <div className="form-group">
                    <label>Birthday</label>
                    <input type="date" className="form-control" placeholder="Birthday" required></input>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
            </form>


      
);
        
}

export default Singup;