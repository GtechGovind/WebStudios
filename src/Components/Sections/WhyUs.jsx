import './css/WhyUS.css'

function WhyUs(props) {
    return (
        <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">

                <div className="row">

                    <div
                        className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                        <div className="content">

                            <h3> { props.title1 } <strong> { props.title2 } </strong></h3>
                            <p className="text-justify"> { props.discription } </p>

                        </div>

                        <div className="accordion-list">
                            <ul>
                                <li>

                                    <a data-toggle="collapse" className="collapse" href="#accordion-list-1">
                                        <span>01</span> { props.Question1 }
                                    </a>

                                    <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
                                        <p className="text-justify"> { props.Ans1 } </p>
                                    </div>

                                </li>

                                <li>

                                    <a data-toggle="collapse" className="collapse" href="#accordion-list-2">
                                        <span>02</span> { props.Question2 }
                                    </a>
                                    <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                                        <p className="text-justify"> { props.Ans2 } </p>
                                    </div>

                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img back_img" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                </div>

            </div>
        </section>
    );
}

export default WhyUs;