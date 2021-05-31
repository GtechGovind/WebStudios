import ServicesCard from "../Cards/ServicesCard";

function Services(props) {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Services</h2>
                    <p> { props.title } </p>
                </div>

                <div className="row">

                    <ServicesCard
                        title = "UI and UX design"
                        url = "/"
                        discription = "User interface is the design for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience."
                    />
                    <ServicesCard
                        title = "Software Development"
                        url = "/"
                        discription = "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks."
                    />
                    <ServicesCard
                        title = "Application Development"
                        url = "/"
                        discription = "Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires."
                    />
                    <ServicesCard
                        title = "QA Testing"
                        url = "/"
                        discription = "Software testing is an investigation conducted to provide stakeholders with information about the quality of the software product or service under test."
                    />
                    <ServicesCard
                        title = "Web Development"
                        url = "/"
                        discription = "Web developer is a programmer who is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser."
                    />
                    <ServicesCard
                        title = "E-Commerce Website"
                        url = "/"
                        discription = "E-commerce is the activity of buying or selling of products on online services or over the Internet."
                    />
                    <ServicesCard
                        title = "Domain & Hosting"
                        url = "/"
                        discription = "A web hosting service provider, provides the technologies and services needed for the website to be viewed in the Internet. Domain names are used to identify one or more IP addresses."
                    />
                    <ServicesCard
                        title = "Digital Marketing"
                        url = "/"
                        discription = "Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium."
                    />
                    <ServicesCard
                        title = "Creative Web Design"
                        url = "/"
                        discription = "Web design encompasses many different skills and disciplines in the production and maintenance of websites. It describe the design process relating to the front-end design of a website."
                    />
                    <ServicesCard
                        title = "Email & SMS Marketing"
                        url = "/"
                        discription = "Mailigen offers a robust SMS platform with worldwide message delivery, detailed reporting, link click tracking and integration with the email marketing channel to increase your overall conversion rates."
                    />
                    <ServicesCard
                        title = "Content Writing Services"
                        url = "/"
                        discription = "Content writers are professional writers who produce engaging content for use online. They're Internet-savvy individuals who create articles, blog posts, and other forms of written Web material."
                    />
                    <ServicesCard
                        title = "Web Application Development"
                        url = "/"
                        discription = "Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet."
                    />

                </div>
            </div>
        </section>
    );
}

export default Services;
