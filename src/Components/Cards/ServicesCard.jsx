import {NavLink} from "react-router-dom";

function Services(props) {
    return (
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
                <div className="icon"><i className="bx bx-file"/></div>
                <h4><NavLink to={ props.url }> { props.title } </NavLink></h4>
                <p className="text-justify"> { props.discription } </p>
            </div>
        </div>
    );
}

export default Services;
