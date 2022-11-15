import React from 'react';
import { useState } from 'react';
import StarFilled from "../images/star-filled.png";
import StarEmpty from "../images/star-empty.png";
import Profile from "../images/profile.png";

function ContactCard(props) {

    const [contact, setContact] = useState(
        {
            firstName: "John",
            lastName: "Doe",
            phone: "+1 (719) 555-1212",
            email: "itsmyrealname@example.com",
            isFavorite: false
        }
    );


    let starIcon = contact.isFavorite ? StarEmpty : StarFilled
    console.log(starIcon);

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }


    return (
        <div>
            <main>
                <article className="card">
                    <img src={Profile} className="card--image" />
                    <div className="card--info">
                        <img src={starIcon}
                            className="card--favorite"
                            onClick={toggleFavorite}></img>
                        <h2 className="card--name">
                            {contact.firstName} {contact.lastName}
                        </h2>
                        <p className="card--number">
                            {contact.number}
                        </p>
                        <p className="card--email">
                            {contact.email}
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default ContactCard;