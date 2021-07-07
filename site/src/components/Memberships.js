import React from 'react';
import './Memberships.css'

function Membership(){
    return(
        <ol className="Membership-Container">
            <h1>The Union Membership</h1>
            <div className="Union-Membership">
                <li className="Full-Memb">
                    <h2>Full Membership</h2>
                    <p>Ullamco dolor voluptate ad eu. Et consectetur in consequat quis ipsum laboris enim exercitation cillum eiusmod esse. Dolore cupidatat ullamco consequat pariatur occaecat officia. Sunt ea adipisicing anim adipisicing nisi.</p>
                </li>
                <li className="Alumni-Memb">
                    <h2 >Alumni Membership</h2>
                    <p>Consequat ex nulla quis consectetur. Culpa do cupidatat consequat anim id est. Amet dolore veniam aliqua ipsum deserunt. Exercitation nulla occaecat in laboris labore deserunt veniam minim duis ad irure velit.</p>
                </li>
                <li className="Special-Memb">
                    <h2>Special Membership</h2>
                    <p>Elit veniam officia nisi est ipsum qui nulla veniam incididunt ea nulla mollit. Eu do ea officia consectetur Lorem culpa veniam commodo eu. Id sint pariatur velit quis enim velit nostrud culpa nulla id.</p>
                </li>
            </div>
        </ol>
    )
}
export default Membership