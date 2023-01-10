
const ContactUs = () => {
    function handleSubmit (){
        alert('Form submitted successfully.')
    }
    
    return ( 
        <div className="ContactUs">
            <div className="col1 column left1">
            <h2>
                Contact Us 
            </h2>
            <p>Send your inquires here</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" placeholder="First name &nbsp;  Last name"/>
                <br />

                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" />
                <br />

                <label htmlFor="subject">Subject:</label>
                <input type="text" name="subject" />
                <br />

                <label htmlFor="message">Message:</label>
                <br />
                <textarea name="message" id="" cols="40" rows="10" placeholder="Enter text here..."></textarea>
                <br />

                <button type="submit">Send Message</button>
            </form>
            </div>

            <div className="col2 column right1">
                <h2>Our Office</h2>
                <p>Address: Ikolaba Estate, Ibadan, Oyo state.</p>
                <p>Phone: +234 813 900 0000</p>
                <p>Email: contactus@neoplux.com</p>

                <br />

                <h2>Business Hours</h2>
                <p>Monday - Friday </p>
                <p>09:00 am to 04:00 pm</p>
                <br />

                <h2>Get in Touch</h2>
                <p>Feel free to reach out to us with your inquiries, our service desk is always ready to attend to and address any questions and information.</p>
            </div>
        </div>
     );
}
 
export default ContactUs;
