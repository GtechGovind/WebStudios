import Contact from '../Components/Sections/Contact'
import Hero from "../Components/Sections/Hero";

function Contacts() {
    return (
        <>
            <Hero
                title = "Home / Contacts"
                btnVisibility = "false"
            />

            <Contact
                title = "Get in tuch with our experts our visit us now! To get estimated cost for your new business website or feature trending android App?"
                location = "Kamgar Nagr Kurla, Mumbai Maharashtra 24, India"
                email = "gtech.govind2000@gmail.com"
                number = "+91 79771 92875"
                mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7702107739199!2d72.8844805880384!3d19.06018286677002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8bd1c420613%3A0x3cb4384619d96931!2sPrince!5e0!3m2!1sen!2sin!4v1622461354365!5m2!1sen!2sin"
            />
        </>
    );
}

export default Contacts;
