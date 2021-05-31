import './css/Contact.css'

function Contact(props) {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p> { props.title } </p>
                </div>

                <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"/>
                                <h4>Location:</h4>
                                <p> {props.location} </p>
                            </div>

                            <div className="email">
                                <i className="icofont-envelope"/>
                                <h4>Email:</h4>
                                <p> {props.email} </p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"/>
                                <h4>Call:</h4>
                                <p> {props.number} </p>
                            </div>

                            <iframe className="frame_contact" src= { props.mapLocation } frameBorder="0" allowFullScreen/>

                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name"
                                           data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email"/>
                                    <div className="validate"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                                <div className="validate"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"/>
                                <div className="validate"/>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"/>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;
