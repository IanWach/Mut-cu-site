import React from 'react';
import ReactDOM from 'react-dom';
import './AboutUs.css'


function Introduction(){
    return(
        <div className="Main-Container">
            <div className="Intro-Banner">
                <h1>WHO WE ARE & WHAT WE DO</h1>
            </div>
            <img className="Image-Logo" src={"/images/MutcuLogo.png"}/>
            <div className="Intro-Container">
                <div className="Par-Container">
                    <p className="IntroP-1"><b>M</b>urng'a University of Technology Christian Union (MUTCU) is Et occaecat minim mollit quis dolore in deserunt. Sit incididunt eiusmod enim sint esse ut cillum. Reprehenderit pariatur anim reprehenderit eiusmod id consequat dolore. Fugiat ullamco esse qui adipisicing culpa nulla consectetur occaecat consectetur fugiat. Culpa eu in sit excepteur sint exercitation ad elit duis reprehenderit officia.</p>
                    <p className="IntroP-2">Ex nostrud consectetur occaecat sint veniam quis laboris ex enim aliquip sunt sint. Minim aute et reprehenderit sit. Aute nisi proident veniam ea adipisicing amet duis velit nostrud non laboris occaecat duis cillum. Ad proident eiusmod proident tempor tempor consectetur adipisicing esse minim ea velit magna commodo.</p>
                    <p className="IntroP-3"> Cillum ut esse deserunt laborum. Labore officia reprehenderit veniam Lorem aliquip culpa ad ipsum culpa deserunt eiusmod. Velit ex voluptate esse voluptate magna amet occaecat enim voluptate fugiat occaecat labore eiusmod Lorem.</p>
                    <p>Labore aliquip laboris et nostrud fugiat ea velit. Cillum amet voluptate ea officia consectetur. Magna mollit adipisicing duis culpa culpa ut in deserunt aliquip amet nisi do reprehenderit. </p>
                   
                </div>
                <div className="Side-Container">
                    <img className="ian" src={"/images/ch.JPG"} />
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
                <hr/>
            <em>Dolore incididunt eu occaecat consectetur culpa.</em>
            </div>
            

            
             <h1 className="CuInfo-Heading">MUTCU INFORMATION</h1>
             <div className="CuInfo-Container">
                <img src="" alt="" className="LogoPNG"/>
                <div className="CuInfo-1">
                    <h2 >Motto:</h2>
                    <p>Proident excepteur duis in pariatur proident reprehenderit consectetur Lorem.</p>
                </div>
                <div className="CuInfo-2">
                    <h2 >Vision Statement</h2>
                    <p>Eiusmod reprehenderit consequat mollit laboris ullamco cillum adipisicing et ea laboris. Anim occaecat officia elit aliquip dolore sunt sunt eiusmod ut velit anim qui.  </p>
                </div>
                <div className="CuInfo-3">
                    <h2 >Mission Statement</h2>
                    <p>Laboris cillum laborum non dolore. Officia elit dolor et sunt fugiat magna dolor commodo deserunt deserunt occaecat laborum. Sint velit ut voluptate laborum reprehenderit elit eiusmod ad. Tempor dolore nisi.</p>
                </div>

            </div>
            <div className="Aims-Container">
                <h2 className="Aims-Heading">Aims of the Union</h2>
                <div className="Aim-1">
                    <h3>Discipleship</h3>
                    <p>Do non cillum sint cupidatat consequat do nostrud incididunt ut. Eiusmod dolore eiusmod reprehenderit dolore labore. Id enim irure reprehenderit adipisicing sit esse do sint anim consectetur sit irure.</p>
                </div>
                <div className="Aim-2">
                    <h3>Evangelism</h3>
                    <p>Amet aute do occaecat consequat. Sunt sint Lorem nostrud eu ut proident commodo nulla mollit esse nostrud. Do reprehenderit ullamco eiusmod irure laboris esse dolor eu duis. Proident labore sit pariatur ex nulla esse excepteur fugiat eu adipisicing aute ad.</p>
                </div>
                <div className="Aim-3">
                    <h3 >Mission Work</h3>
                    <p>Exercitation esse ex sunt fugiat dolor mollit veniam enim aliquip. Est consectetur elit dolore do. Occaecat in est adipisicing consectetur minim nostrud ut est veniam qui. Non anim ullamco mollit occaecat aliqua dolor laboris do est commodo ipsum deserunt ullamco laborum.</p>
                </div>
                <div className="Aim-4">
                    <h3>Leadership Development</h3>
                    <p>Dolor ea eiusmod laborum aliquip adipisicing consequat pariatur occaecat do. Non elit et officia velit cupidatat excepteur cupidatat ad nulla incididunt non consequat. Minim ex sit commodo consequat aute ipsum do tempor culpa eu et.</p>
                </div>
            </div>
        </div>
    )
}
export default Introduction