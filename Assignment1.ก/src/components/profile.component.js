import React, { Component } from "react";

function Profile(){
        var {name} = "Chirakit Limsomboon";
        var {phone} = "085-066-5055";
        var {birth} = "28-06-1997";
        return (
            <form>
                <h3>Profile</h3>

                <h5>Name : <span>{name}</span></h5>

                <h5>Tel : <span>{phone}</span></h5>

                <h5>Birthday : <span>{birth}</span></h5>
                
                <br/>
                <h3>-----------------------</h3>
                <br/>

                <h3>Edit Profile</h3>

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
                    <input type="tel" className="form-control" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>

                <div className="form-group">
                    <label>Birthday</label>
                    <input type="date" className="form-control" placeholder="Birthday"/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Update</button>
            </form>


        );
        
    }
   
export default Profile;
