function Skills(props) {
    return (
        <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">

                <div className="row">

                    <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                        <img src="assets/img/skills.png" className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">

                        <h3> { props.title } </h3>

                        <p className="font-italic">  </p>

                        <div className="skills-content">

                            <div className="progress">
                                <span className="skill">{ props.skill1 } <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={ props.skillPercentage1 } aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">{ props.skill2 } <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={ props.skillPercentage2 } aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">{ props.skill3 } <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={ props.skillPercentage3 } aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">{ props.skill4 }<i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;