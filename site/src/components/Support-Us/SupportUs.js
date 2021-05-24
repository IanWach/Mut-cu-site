import React from 'react'
import './SupportUs.css'

function SupportUs(){
    return(
        <div className="SupportUs-Container" id="Screen-Size">
            <div className="First-Section">
                <h1>Support Us</h1>
                <p>Serving in the church is not something we should need a special invitation to do. In every church there will be needs to meet and Christians to disciple. Church involvement is evidence that you are a Christian in first place because it is an avenue for using your spiritual gift to help others.</p>
                <button>Learn More</button>
            </div>
            <div className="Second-Section">
                <p id="First-Paragraph"><b>Galatians 6:9</b>	Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.</p>
                <br/>
                <p id="Second-Paragraph"><b>6:10</b>	Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.</p>
            </div>
        </div>
    )
}
export default SupportUs