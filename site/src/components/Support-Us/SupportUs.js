import React from 'react'
import '../styles/SupportUs.css'
import {FaCcPaypal} from "react-icons/fa"
import {FcCellPhone} from "react-icons/fc"
import {AiOutlineBank} from "react-icons/ai"

function SupportUs(){
    return(
        <section className="SupportUs-Container" id="Screen-Size">
            <div className="Details-Section">
                <h1>Support Us</h1>
                <p>The Christian Union is committed in undertaking various projects that need funding. This ranges from welfares that pertain the students and the community around the University. For this to happen effectively the union needs support from you. This can be support through prayers, Financial or any other way.  You can use </p>
                <p><b>PHILIPPIANS 2:4</b> Let each of you look not only to his own interests, but also to the interests of others.</p>
                <p><b>GALATIANS 6:10</b> Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.</p>
            </div>
            <div className=" Payment-Section">
                <p>For any Cash Contribution support us through:</p>
                <div className="Payment-cont">
                    <div>
                        <h1>VIA M<i className="Red"><FcCellPhone/></i>ESA</h1>
                        <p><b>Our PAYBILL NO:</b> 7056069</p> <p><b>Account Name: </b>Welfare</p>
                        <hr/>
                    </div>
                    <div>
                        <h1>VIA PAYPAL   <i><    FaCcPaypal/></i></h1>
                        <p>mutcunion@gmail.com</p>
                        <hr/>
                    </div>
                    <div>
                        <h1>BANK ACCOUNT <  AiOutlineBank/></h1>
                        <p><b>Bank Account:</b> XXXXX </p><p><b>Bank Name: KCB Bank</b></p> <p>Murang'a Branch</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
        )
    }
            
export default SupportUs;