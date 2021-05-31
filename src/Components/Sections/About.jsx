function About(props) {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About Us</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-6">

                        <p> { props.title } </p>
                        <ul>
                            <li><i className="ri-check-double-line"/> { props.feature1 } </li>
                            <li><i className="ri-check-double-line"/> { props.feature2 } </li>
                            <li><i className="ri-check-double-line"/> { props.feature3 } </li>
                            <li><i className="ri-check-double-line"/> { props.feature4 } </li>
                            <li><i className="ri-check-double-line"/> { props.feature5 } </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">

                        <p className="text-justify"> { props.discrption } </p>

                        {/*<NavLink to="/blog" className="btn-learn-more"> { props.BtnText } </NavLink>*/}

                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
