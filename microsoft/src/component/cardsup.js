import React from 'react';
import './microsoft.css';

class CardsOne extends React.Component {
    render () {
        return (
            <div>

                {/* First Card Section */}

            <div className="card-deck m-5">
                <div className="card">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ogje?ver=bdc6&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">This is your 365</h5>
                        <p className="card-text">Discover what’s possible every day with Office 365.</p>
                        <a href = "component/microsoft.js">SHOP NOW ></a>
                    </div>    
                </div>
                <div className="card">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">Surface Book 2</h5>
                        <p className="card-text">Powerhouse performance in the ultimate laptop.</p>
                            <a href="component/microsoft.js">SHOP NOW ></a>

                        </div>
                </div>
                <div className="card">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37bh1?ver=33cd&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">Xbox Game Pass Ultimate</h5>
                        <p className="card-text">Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
                        <a href="component/microsoft.js">SHOP NOW ></a>
                        </div>
                </div>
                <div className="card">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1uWfh?ver=0868&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Xbox One S</h5>
                        <p className="card-text">The ultimate games and 4K entertainment system.</p>
                        <a href="component/microsoft.js">LEARN MORE</a>
                    </div>
                </div>
            </div>

            {/* Image between two Card Section */}

            <div className= "m-5">
                    <img src = "mid.png"></img>
            </div>

            {/* Sencond Card Section Starting */}

            <div>
                <h4 className = "m-5">For Work</h4>
            </div>

            <div className="card-deck m-5">
                <div className="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                            <h5 className="card-title">Windows 10 Enterprise</h5>
                            <p className="card-text">Download the free 90-day evaluation for IT professionals.</p>
                        <a href="component/microsoft.js">Download Now ></a>
                    </div>
                </div>
                <div className="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                            <h5 className="card-title">Office 365 for Business</h5>
                            <p className="card-text">Access your files from anywhere, online or offline.</p>
                        <a href="component/microsoft.js">SHOP NOW ></a>

                    </div>
                </div>
                <div className="card">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Explore Kubernetes</h5>
                        <p className="card-text">Learn how Kubernetes works and get started with cloud native app development today.</p>
                        <a href="component/microsoft.js">GET STARTED ></a>
                    </div>
                </div>
                <div className="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3sKm8?ver=08d4&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                            <h5 className="card-title">Get Visual Studio 2019</h5>
                            <p className="card-text">Download Visual Studio 2019, the productive, modern and innovative IDE.</p>
                        <a href="component/microsoft.js">DOWNLOAD NOW ></a>
                    </div>
                </div>
            </div>
            
            {/* Second Cards Section Ends here */}

            <div className = "row m-5 ">
                <p className = "col-2">Follow microsoft</p>
                <img src="https://image.flaticon.com/icons/svg/124/124010.svg" className = "nav_icon" ></img>
                <img src="https://image.flaticon.com/icons/svg/124/124021.svg" className="nav_icon" ></img>
                <img src="https://image.flaticon.com/icons/svg/174/174883.svg" className="nav_icon" ></img>
            </div>

            {/* Footer Section Starts Here */}
            <div className="jumbotron jumbotron-fluid  footer_text">
                <div className = "row">
                <div className = "container col-1">
                    <h5>What's new</h5>
                    <p className = " mt-3">Surface Go</p>
                    <p>Surface Pro</p>
                    <p>Windwos 10 apps</p>
                    <p>office apps</p>
                </div>
                <div className="container col-1">
                    <h5>Microsoft Store</h5>
                    <p className=" mt-3">Account profile</p>
                    <p>Download Center</p>
                    <p>Microsoft Store Support</p>
                    <p>Returns</p>
                    <p>Order tracking</p>
                </div>
                <div className="container col-1">
                    <h5>Education</h5>
                    <p className=" mt-3">Microsoft in education</p>
                    <p>Office for students</p>
                    <p>Office 365 for school</p>
                    <p>Microsoft Azure in education</p>
                </div>
                <div className="container col-1">
                    <h5>Enterprice</h5>
                    <p className=" mt-3">AppSource</p>
                    <p>Government</p>
                    <p>Healthcare</p>
                    <p>Manufacturing</p>
                    <p>Financial service</p>
                    <p>Retail</p>
                </div>
                <div className = "container col-1">
                    <h5>Developer</h5>
                    <p className = " mt-3">Microsoft Visuall Studio</p>
                    <p>Developer Network</p>
                    <p>TechNet</p>
                    <p>Channel 9</p>
                    <p>Office Dev Center</p>
                </div>
                <div className="container col-1">
                    <h5>Company</h5>
                    <p className=" mt-3">Careers</p>
                    <p>About Microsoft </p>
                    <p>Comapny news</p>
                    <p>Privacy at Microsoft</p>
                    <p>Investors</p>
                    <p>Security</p>
                </div>
            </div>
            
            <div className="row">
                <img src="https://image.flaticon.com/icons/png/512/685/685142.png" className="nav_icon"></img>
                <p className = "col-1 mt-2">English (India)</p>
                <p className = "mt-2">Contact Microsoft</p>
                <p className = "m-2" >Privacy & cookies</p>
                <p className="m-2" >Terms of use</p>
                <p className="m-2" >Trademarks</p>
                <p className="m-2" >About our ads</p>
                <p className="m-2" > © Microsoft 2019</p>
            </div>
            
            </div>
            
            {/* Footer Section Ends Here */}
        </div>
        );
    }
}
export default CardsOne;