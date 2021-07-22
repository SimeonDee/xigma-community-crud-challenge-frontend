import { React, Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component{
    render(){
        return(
            <div className="content">
                <h1 className="main-title">Welcome to Xigma Community</h1>
                <hr />
                <section>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="caro-img d-block w-100" src="images/techCommunity4.jpeg" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="caro-img d-block w-100" src="images/techCommunity3.jpeg" alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="caro-img d-block w-100" src="images/techCommunity2.jpeg" alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only" style={{color:"white", fontWeight:"600", fontSize:"20px"}}>Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only" style={{color:"rgb(19, 110, 214)"}}>Next</span>
                        </a>
                    </div>
                </section>
                <hr />
                <section>
                    <div className="main-image-left">
                        <img className='home-side-img' src="images/techcommunity.jpeg" alt="" />
                    </div>
                    <div className="main-content-right">
                       <p>
                            welcome to xigma! a community for computer science students and techies. 
                            Here tutors, professionals and students can be connected to each other and
                            can make good use of this platform to learn and grow. <br />
                    
                            <Link to='/members' className="link"> View Existing members &gt;&gt;</Link>.
                        </p>
                        <p>
                            Join us on <a href="https://discord.gg/Bek3zHWV" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}> discord. </a>
                        </p>
                    </div>
                </section>
            </div>
            
        )
    }
}