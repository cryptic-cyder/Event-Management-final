'use client'
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const router=useRouter();
  const [user,setUser]=useState();
  useEffect(()=>{
    setUser(localStorage.getItem('user'));
  },[])

  const handleLogOut = () => {
    
    localStorage.removeItem('user');
    setUser('');
    router.push('/login')
  }
  return (
    <div>
      <header className="bgImage" style={{backgroundImage:'url(../images/bgImage1.jpg)'}}>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header" >
              
              <Link  href="/" className="nav navbar-brand"><strong>CUET Sports and Cultural Events</strong>
                
                
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link  href="/">Home</Link>
              </li>
              <li>
                <Link  href="/viewEvents">Events</Link>
              </li>
             
              <li>
                <Link  href="/feedback">Feedback</Link>
              </li>
              <li>
                <Link  href="/about">About</Link>
              </li>
              {user===''?(  <li className="btnlogout">
                <Link  className="btn btn-default navbar-btn" href="/login">
                  Login <span className="glyphicon glyphicon-log-in"></span>
                </Link>
              </li>):(
                  <li className="btnlogout">
                  <button className="btn btn-default navbar-btn" onClick={handleLogOut}>
                    Logout <span className="glyphicon glyphicon-log-in"></span>
                  </button>
                </li>
              )}
            
              <div
                className="modal fade"
                id="login"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document"> 
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="modal-title" id="myModalLabel">
                        Login
                      </h4>
                    </div>
                    <div className="row">
                      <div className="modal-body">
                        <div className="col-md-6 col-md-offset-3">
                          <form action="login" method="POST">
                            <div className="form-group">
                              <label for="username">Username:</label>
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                value=""
                              />
                              <span className="error"></span>
                            </div>
                            <div className="form-group">
                              <label for="password">Password:</label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                value=""
                              />
                              <span className="error"></span>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-default loginbtn"
                            >
                              Login
                            </button>
                            <Link 
                              className="btn btn-default navbar-btn rgsterbtn"
                              href="register_form"
                            >
                              Register
                            </Link>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default closebtn"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <div className="col-md-12">
          <div className="container">
            <div className="jumbotron">
              <h1>Sports and Cultural Events are the weapon of change.</h1>
              <p>
              The CUET Sports and Cultral Event Management System at Chittagong University of Engineering and Technology (CUET) is a vibrant and dynamic system dedicated to promoting a culture of physical fitness, teamwork, and sportsmanship among the university's student body. Committed to fostering a sense of community and well-being, the sstem organizes and participates in various sports and recreational activities.
              </p>
              <p id="dateAndTime"></p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;