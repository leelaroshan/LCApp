import React, { useState } from 'react';

import axios from 'axios';

export default function Email() {

 const [emailStatus, setEmailStatus] = useState();

    const sentWelcomeEmail = () => {
        axios.post('http://localhost:5000/sent-email', {

            "companyName": data.companyQuoteForm,
            "companyType": data.companyTypeSelectedForm,
            

            "message": "Welcome to Language Community App ! please click here to confirm your Registration",
            "quoteKey": data.quoteKey
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("all good here...", response.status)
                    setEmailStatus("Quote Email Sent Successfully to the client !")
                } else {
                    console.log("error", response.status)
                    setEmailStatus("Quote Email NOT sent, Please contact your Admin Team !")
                }
            })
            .catch(function (error) {
                console.log(error);
                setEmailStatus("Quote Email NOT sent, Please contact your Admin Team !")
            });
    }
    //end of Function to send








    return (
        <div>
            <button onClick={sentWelcomeEmail}>Sent Email</button>
            
        </div>
    )
}


