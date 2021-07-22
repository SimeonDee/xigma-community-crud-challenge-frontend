import { React } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">XIGMA </Link> */}
                <Link class="navbar-brand" to="/">
                    <img src="images/logo3.png" alt="" style={{width: "150px", height: "60px"}} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/members">Members</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/members/add">Add Member</Link>
                        </li>
                    </ul>

                    <div class="welcome-user">
                        <span class="text-white"> Welcome, <span className="username">{props.username}</span> </span>
                    </div>
                </div>
                
            </div>
        </nav>

    )
    
}