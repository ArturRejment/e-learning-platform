import './Banner.scss';

import logo from './logo.png';
/* 
 * TODO
 * My courses: rozwijana lista
 */
const Banner = () => {
    return (
        
        <div className="mainBanner">
            <div id="bannerLogo">
                <img src={logo} />
            </div>
            <div id="bannerButtons">
                <div className="bannerButton"> <a href="home">Home</a></div>
                <div className="bannerButton">
                    <div className="dropdown">
                        <button className="dropbtn">My Courses
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="course">Course</a>
                            <a href="course">Course</a>
                            <a href="course">Course</a>

                        </div>
                    </div> 
                </div> 
                <div className="bannerButton"> <a href="contact">Contact</a> </div>
                <div className="bannerButton"> <a href="about">About</a> </div>
            </div>
        </div>
    )
};

export default Banner;
