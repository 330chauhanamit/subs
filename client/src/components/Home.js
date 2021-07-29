import { useState } from "react";
import {Link} from "react-router-dom"
const axios = require("axios");


const Home = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(userEmail)) {
      setError("Please Enter valid Email address");
      return;
    }
    const res = axios.post("/addUser", {
      userEmail,
    });
    await res
      .then((resp) => {
        setMessage(resp.data.message);
        setUserEmail("");
      })
      .catch((e) => {
        setError(e.response.data.error);
      });
  };
  return (
    <div className="vh-100 bg-dark ">
      <nav className="navbar navbar-expand-lg bg-light navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark fs-4" to="/">Subsciption Form</Link>
        </div>
      </nav>
      <div className="container-fluid position-absolute top-50 start-50 translate-middle h-80">
        <div className=" col-lg-4 container text-center">
          <div className="col-form-label text-align-center text-light fs-3 mb-3">
            <label>Subscribe our NewsLetter</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="example@email.com"
              onFocus={()=>{
                setMessage("");
                setError("");
              }}
              onChange={(e) => {
                setUserEmail(e.target.value);

              }}
              value={userEmail}
            />
            <input
              className="btn btn-primary"
              type="button"
              value="Submit"
              onClick={(e)=>onSubmit(e)}
            />
          </div>
          {message && (
            <div className="alert alert-success m-2" role="alert">
              {message}
            </div>
          )}
          {error && (
            <div className="alert alert-danger m-2" role="alert">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
