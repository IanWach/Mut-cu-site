import React from 'react'
import '../styles/SupportUs.css'
import {FiChevronsDown} from "react-icons/fi"
import {FiPhone} from "react-icons/fi"
import {FaCcPaypal} from "react-icons/fa"
import {FcCellPhone} from "react-icons/fc"

function SupportUs(){
    return(
        <div className="SupportUs-Container" id="Screen-Size">
            <div className="First-Container">
                <div className="First-Section">
                    <h1>Support Us</h1>
                    <p>Your support is highly appreciated. The Christian union undertakes different projects that need funding. /* This include the <i>Welfare Kitty:</i> which collaborates in helping needy students, <i>Prison and Rescue center visits</i>: that are conducted to provide spiritual and material support to the needy. You can play part by supporting us in any way. Through prayers and financial contributions towards the same. Thank you.</p>
                    <button href="#">See More Info  <FiChevronsDown /></button>
                </div>
                <div className="Second-Section">
                    <hr/>
                    <p id="First-Paragraph"><b>GALATIANS 6:9</b>	Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.
                    <br/>
                    <b>:10</b> Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.</p>
                    <p id="Second-Paragraph"><b>PHILIPPIANS 2:4</b> Let each of you look not only to his own interests, but also to the interests of others.</p>
                    <hr/>
                    { /*<br/>
                    <button>Support Us</button>*/}
                </div>
            </div>
            <div className="Payment-Container">
                <div>
                    <h1>Send Via VIA M<FcCellPhone/>ESA    <FiPhone/></h1>
                    <p>Our Paybill No: <b>7056069</b> Account Name: <b>Support</b></p>
                </div>
                <div>
                    <h1>VIA PAYPAL   <    FaCcPaypal/></h1>
                    <p>mutcunion@gmail.com</p>
                </div>
                <div>
                    <h1>BANK ACCOUNT</h1>
                    <h3>Bank Account: <b>XXXXX</b> <br/>Bank Name: <b>Xxxx Bank Murang'a Branch</b></h3>
                </div>
            </div>
        </div>
            )
            }
export default SupportUs;