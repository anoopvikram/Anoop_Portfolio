import React from "react";
import "./styles/grid.css"
import "./styles/grid-animation.css"
import { useNavigate } from "react-router-dom";
import "./styles/grid-phone.css"


function Grid(){
    const navigate = useNavigate();
    return(
        <div className="grid-container">
            <div className="grid-item web" onClick={() => navigate('/dev')}>
                <img src="/public/assets/developer.webp" className="developer" alt="Developer"  />
            </div>
            
            <div className="grid-item social">
                <a href="https://www.instagram.com/blendwithav/" target="_blank" rel="noopener noreferrer">
                    <div className="socials insta"></div>
                </a>
                <a href="https://www.linkedin.com/in/anoop-vikram" target="_blank" rel="noopener noreferrer">
                    <div className="socials linkedin"></div>
                </a>
                <a href="https://www.youtube.com/@anoopvikram7995" target="_blank" rel="noopener noreferrer">
                    <div className="socials youtube"></div>
                </a>
            </div>

            <div className="grid-item image" onClick={() => navigate('/about')}>
                <img src="/public/assets/profile.webp" className="profile-image" alt="Profile" />
            </div>


            <div className="grid-item animate" onClick={() => navigate('/animation')}>
                <img src="/public/assets/animate.webp" className="animator" alt="Animator"  />
            </div>

            <div className="grid-item contact">
                <p>Watch My Latest YouTube Video: </p>
                <a href="https://youtu.be/7l4QngJms9I?feature=shared" target="_blank" className="yt-btn">Watch Now !!!</a>
            </div>

            <div className="grid-item connect" onClick={() => navigate('/contact')} >
                <p>Let's Connect !</p>
                <div className="send"></div>
            </div>

            <div className="grid-item work">
                <p>Services Offering: </p>
                <div className="works webdev">Web Development</div>
                <div className="works three">3d Animation</div>
                <div className="works video">Video Editing</div>
                <div className="works product">Product Design</div>
            </div>
        </div>
    )
}

export default Grid;