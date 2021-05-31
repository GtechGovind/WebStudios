function Cta(props) {
    return (
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">

                <div className="row">
                    <div className="col-lg-9 text-center text-lg-left">

                        <h3> { props.title } </h3>
                        <p> { props.subtitle } </p>

                    </div>

                    <div className="col-lg-3 cta-btn-container text-center">
                        <a className="cta-btn align-middle" href="https://api.whatsapp.com/send/?phone=917977192875&text=Can+we+arrange+a+meeting?"> {props.btnText} </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Cta;
