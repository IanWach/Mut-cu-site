import React from 'react';
import ReactDOM from 'react-dom';
import './AboutUs.css'
import { IntroData} from './IntroData'
import { InformationData} from './IntroData'

function Introduction(){
    return(
        <div className="Main-Container">
           
            <div className="container">
                <img className="Image-Banner" src={"/images/IntroBanner.jpg"}/>
                <div className="Intro-Banner">
                    <h1>WHO WE ARE ?</h1>
                </div>
            </div>
            <img className="Image-Logo" src={"/images/MutcuLogo.png"}/>
            <div className="Intro-Container">
                <div className="Par-Container">
                    <p className="IntroP-1"><b>M</b>urng'a University of Technology Christian Union (MUTCU) is Et occaecat minim mollit quis dolore in deserunt. Sit incididunt eiusmod enim sint esse ut cillum. Reprehenderit pariatur anim reprehenderit eiusmod id consequat dolore. Fugiat ullamco esse qui adipisicing culpa nulla consectetur occaecat consectetur fugiat. Culpa eu in sit excepteur sint exercitation ad elit duis reprehenderit officia.</p>
                    <p className="IntroP-2">Ex nostrud consectetur occaecat sint veniam quis laboris ex enim aliquip sunt sint. Minim aute et reprehenderit sit. Aute nisi proident veniam ea adipisicing amet duis velit nostrud non laboris occaecat duis cillum. Ad proident eiusmod proident tempor tempor consectetur adipisicing esse minim ea velit magna commodo.</p>
                    <div className="Side-Container" className="Hide-Image">
                    <div>
                        <img className="ian" src={"/images/ch.JPG"} />
                    </div>
                    </div>
                    <p className="IntroP-3"> Cillum ut esse deserunt laborum. Labore officia reprehenderit veniam Lorem aliquip culpa ad ipsum culpa deserunt eiusmod. Velit ex voluptate esse voluptate magna amet occaecat enim voluptate fugiat occaecat labore eiusmod Lorem.</p>
                    <p>Labore aliquip laboris et nostrud fugiat ea velit. Cillum amet voluptate ea officia consectetur. Magna mollit adipisicing duis culpa culpa ut in deserunt aliquip amet nisi do reprehenderit. </p>
                </div>
                <div className="Side-Container">
                    <div>
                        <img className="ian" Id="Hide-Img" src={"/images/ch.JPG"} />
                    </div>
                    <div className="Activity-list">
                        <p>What we do</p>
                        <ol>
                            <li>Activity of the union one</li>
                            <li> Activity of the union 2</li>
                            <li> Activity of the union Three</li>
                            <li> Activity of the union 4</li>
                            <li> Activity of the union five</li>
                            <li> Activity of the union 6</li>
                        </ol>
                    </div>
                </div>
            </div>
             <em><b>"</b>  Its all about Jesus Christ</em>
            <div className="Border-B"></div>
                <h1 className="CuInfo-Heading">MUTCU INFORMATION</h1>
             <div className="CuInfo-Container">
                <img src="" alt="" className="LogoPNG"/>
                    {IntroData.map((Item, index) =>{
                    return(
                        <div key={index} className={Item.ClsName}>
                            <h2>{Item.Title}</h2>
                            <p>{Item.Info}</p>                
                        </div>
                    )
                })}
            </div>
            <div className="Aims-Container">
                <h2 className="Aims-Heading">Aims of the Union</h2> 
            {InformationData.map((Item, index) =>{
                return(
                    <div key={index} className={Item.cName}>
                        <h3>{Item.Heading}</h3>
                        <p>{Item.Content}</p>                
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default Introduction