import Img from "../assets/Rectangle 90.png"
export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-img" >
                <img src={Img} alt="intro-image" />
            </div>
            <div className="intro-details">
                <div className="intro-text">
                    <h1 className="name">Laura Smith</h1>
                    <p className="det">Frontend Developer</p>
                    <p className="web">laurasmith.website</p>
                </div>
                <div className="intro-buttons">
                    <div className="intro-email"><i class="fa-solid fa-envelope"></i>Email</div>
                    <div className="intro-linkedIn"><i class="fa-brands fa-linkedin"></i>LinkedIn</div>

                </div>
            </div>
        </div>
    )
}