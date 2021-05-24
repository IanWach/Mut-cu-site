import React from 'react'
import '../styles/SupportUs.css'

function SupportUs(){
    return(
        <div className="SupportUs-Container" id="Screen-Size">
            <div className="First-Section">
                <h1>Support Us</h1>
                <p>Your support is highly appreciated. The Christian union undertakes different projects that need funding. This include the <i>Welfare Kitty:</i> which collaborates in helping needy students, <i>Prison and Rescue center visits</i>: that are conducted to provide spiritual and material support to the needy. You can play part by supporting us in any way. Through prayers and financial contributions towards the same. Thank you.</p>
                <button href="#">Learn More</button>
            </div>
                <div className="Second-Section">
                    <hr/>
                    <p id="First-Paragraph"><b>Galatians 6:9</b>	Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.</p>
                    <br/>
                    <p id="Second-Paragraph"><b>6:10</b>	Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.</p>
                    <button>Support Us</button>
                    <hr/>
            </div>
        </div>
    )
}
export default SupportUs