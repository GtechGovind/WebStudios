import Hero from "../Components/Sections/Hero";
import Service from '../Components/Sections/Services'

function Services() {
    return (
        <>
            <Hero
                title = "Home / Services"
                btnVisibility = "false"
            />

            <Service />

        </>
    );
}

export default Services;