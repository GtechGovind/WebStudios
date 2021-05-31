import Clients from "./Clients";
import About from "./About";
import Cta from "./Cta";
import WhyUs from "./WhyUs";


function Main() {
    return (
        <main id="main">
            <Clients />
            <About
                title = "We create what others can't!"
                feature1 = "Responsive - Works on all devices"
                feature2 = "Trendy, intuitive design and user experience"
                feature3 = "Relevant, authoritative website content"
                feature4 = "Product visuals and descriptions"
                feature5 = "Product visuals and descriptions"
                discrption = "WebStudios (Web & Software Development) is a website and android app development company. Here at WebStudios we design, develop and manage your business websites. We provide complete solutions for your business to worldwide viral. WebStudios services include WEB HOSTING, Logo designing, E‐Commerce solution, Multimedia solutions, Print‐media solution, Internet marketing and many more. We specialize in customized web site and android and ios app designing. With an effitiently skilled and hardworking team we ensure that you get the best. We create every website compatible with W3c standards (World Wide Web Consortium). We provide you with convincing and attractive website catering to your business needs and goals."
                BtnText = "Learn More"
            />
            <WhyUs
                title1 = "Why choose us ?"
                title2 = "We create technical beauty."
                discription = "At WebStudios IT Solutions we can offer you a wide range of specialized services to meet all your business needs. Our dedicated team of designers, programmers, and search marketing consultants provide a high-quality service that demonstrates their years of experience in the Internet industry. We are flexible. Incredibly flexible. We are happy to hear what sounds silly and try to understand the strangest ideas. Our services exceed expectations. As a customer, you can expect prompt service and genuine attention. We operate simply, avoiding excessive terms and conditions and conditions. The reason we're good at what we do is because we love what we do."
                Question1 = "Who are we?"
                Question2 = "What technologies we use?"
                Ans1 = "WebStudios - Educational Consultant & IT Solutions is a web design and development company located in Mumbai, Maharashtra. Our vision is to provide high-quality, value-added IT solutions to our clients by combining technical skills and domain expertise, a focus on operations and a commitment to long-term relationships with clients. We analyze websites, evaluate trends, share best web practices, and give you the best advice and tools to reach new customers."
                Ans2 = "PHP, Angular and MEAN stack, React, Vue.js, Django (Python), WebAssembly, Content personalization through machine learning, Progressive web apps (PWA) and accelerated mobile pages (AMP), Relevant, authoritative website content, Product visuals and descriptions, Product visuals and descriptions"
            />
            <Cta
                title = "Call To Action"
                subtitle = "Want an estimated amount for your Project or want to know more call us now!"
                btnText = " WhatsApp Us Now "
            />

        </main>
    );
}

export default Main;
