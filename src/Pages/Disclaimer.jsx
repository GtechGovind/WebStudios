import Hero from "../Components/Sections/Hero";
import Disclaimer from "../Components/Sections/Disclaimer";


function Disclaimers() {
    return (
        <>
            <Hero
                title = "Home / Disclaimer"
                btnVisibility = "false"
            />
            <div className="container mt-5 mb-5">
                <Disclaimer />
            </div>
        </>
    );
}

export default Disclaimers;