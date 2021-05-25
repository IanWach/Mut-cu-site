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
                    <p id="First-Paragraph"><b>GALATIANS 6:9</b>	Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.
                    <br/>
                    <b>:10</b> Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.</p>
                    <br/>
                    <p id="Second-Paragraph"><b>PHILIPPIANS 2:4</b> Let each of you look not only to his own interests, but also to the interests of others.</p>
                    <button>Support Us</button>
                    <hr/>
            </div>
        </div>
    )
}
export default SupportUs