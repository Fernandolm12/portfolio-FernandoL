////////////////////////HEADER
const header1= document.getElementById("main-header");

//////////////////////NAV
const logo = document.getElementById("home-js");
const about =document.getElementById("link-about-js");
const services =document.getElementById("link-services");
const portfolio =document.getElementById("link-portfolio");
const contact =document.getElementById("link-contact");

////////////////////////SECTIONS
const aboutSection = document.getElementById("about-js");
const serviceSection = document.getElementById("services-js");
const portfolioSection = document.getElementById("portfolio-js");
const contactSection = document.getElementById("contact-js");
function scrollHeader() {
    if(window.scrollY > 50){
        header1.classList.add("background-js");
    }else{
        header1.classList.remove("background-js")
    }
    if(window.scrollY < aboutSection.offsetTop-200){
        logo.classList.add("active");
        }else{
         logo.classList.remove("active")
        }
        if(window.scrollY >aboutSection.offsetTop-200){
            about.classList.add("active");
            }else{
                about.classList.remove("active");
            }
            if(window.scrollY >serviceSection.offsetTop-200){
                services.classList.add("active");
                about.classList.remove("active");
                }else{
                    services.classList.remove("active")
                    }
                    if(window.scrollY > portfolioSection.offsetTop-200){
                        portfolio.classList.add("active");
                        services.classList.remove("active");
                            }else{
                                portfolio.classList.remove("active")
                                }
                                if(window.scrollY >contactSection.offsetTop-200){
                                    contact.classList.add("active");
                                    portfolio.classList.remove("active");
                                        }else{
                                            contact.classList.remove("active")
                                            }
}

document.onscroll=scrollHeader;


