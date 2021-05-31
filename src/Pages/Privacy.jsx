import Hero from "../Components/Sections/Hero";
import PrivacyPolicy from "../Components/Sections/PrivacyPolicy";

function Privacy() {
    return (
        <>
            <Hero
                title = "Privacy & Policies"
                btnVisibility = "false"
            />
            <div className="container">
                <PrivacyPolicy />
            </div>
        </>
    );
}

export default Privacy;
