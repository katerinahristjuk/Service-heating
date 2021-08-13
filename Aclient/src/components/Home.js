import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

export function Home(){

    const services = [
        {title: "Heating sysem repair", text: "Nunc sit amet laoreet augue. Proin sem felis, lobortis ut sem vitae, facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptoshimenaeos."},
        {title: "Installation of new radiator", text: "Nunc sit amet laoreet augue. Proin sem felis, lobortis ut sem vitae, facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet"},
        {title: "Maintenance of internal installation", text: "Nunc sit amet laoreet augue. Proin sem felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptoshimenaeos."},
        {title: "Leak repair", text: "Proin sem felis, lobortis ut sem vitae, facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptoshimenaeos."},
        {title: "Valve replacement", text: "Facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptoshimenaeos."},
        {title: "Relocation of radiator", text: "Lobortis ut sem vitae, facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptoshimenaeos."}
    ];

    const [selectedService, setSelectedService] = useState({title: "Heating sysem repair", text: "Nunc sit amet laoreet augue. Proin sem felis, lobortis ut sem vitae, facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptoshimenaeos."})

    return(
        <div id="home">
            <div id="welcomeItem">
                <div id="welcomeItem2">
                    <h2>Welcome to</h2>
                    <h1><span>Heating</span> Service</h1>
                    <p id="overline">If you have any problems with your heating system, please let us know: fill in our application form and <Link to="/interventions/request" className='link'><span> request an appointment</span></Link>.</p>
                </div>
            </div>
            <div class="infoBlock">
                <h2><b>About us</b></h2>
                <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor aliquet placerat. Nunc cursus nisi malesuada felis consequat, eget venenatis libero mollis. Phasellus libero justo, accumsan ac neque non, tincidunt molestie velit. Integer ac
                    turpis in purus ornare porta vitae et ante. Sed auctor purus ut nibh elementum, vel sollicitudin nibh facilisis. Quisque ac egestas enim. Sed feugiat risus rhoncus metus varius, at dignissim mauris sagittis. Vestibulum pretium est eu justo
                    pretium finibus. Vestibulum a interdum justo. Curabitur sit amet massa a lorem dapibus suscipit ac ac dolor. Nam ut imperdiet eros. Etiam non porta lorem, vitae porttitor elit. Integer vel porttitor lorem. Donec suscipit lorem orci, sit amet
                    placerat justo placerat sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor aliquet placerat. Nunc cursus nisi malesuada felis consequat, eget venenatis libero mollis. Phasellus libero justo, accumsan ac neque non, tincidunt molestie velit. Integer ac
                    turpis in purus ornare porta vitae et ante. Sed auctor purus ut nibh elementum, vel sollicitudin nibh facilisis. Quisque ac egestas enim. Sed feugiat risus rhoncus metus varius, at dignissim mauris sagittis. Vestibulum pretium est eu justo
                    pretium finibus. Vestibulum a interdum justo. Curabitur sit amet massa a lorem dapibus suscipit ac ac dolor. Nam ut imperdiet eros. Etiam non porta lorem, vitae porttitor elit. Integer vel porttitor lorem. Donec suscipit lorem orci, sit amet
                    placerat justo placerat sed.l
                </p>
                <button class="redButton"><Link to="/contact" className='link'>Learn more</Link></button>
            </div>
            <div className="columns">
                <div className="leftPart">
                <h2>Services</h2>
                <p className="leftPart1">Ut ut elit dolor. Vivamus fermentum sodales tellus id egestas. Integer viverra, erat vel laoreet congue, dui felis rhoncus leo, sed tempor massa lorem ut tortor. Etiam dapibus purus purus, sed eleifend urna feugiat vitae. Pellentesque consectetur
                    consequat urna et dapibus. Fusce consequat magna arcu. Curabitur augue sem, blandit sed turpis eget, aliquam dignissim odio. Aenean sed nisi ultrices, accumsan nisl eu, tincidunt dui.
                </p>
                <ul>
                    {services.map(service => {
                        return(
                            <li class="leftList" onPointerOver={(e) => setSelectedService(service)}>{service.title}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="rightPart">
                <div className="rightPart2">
                    <h2>{selectedService.title}</h2>
                    <p>{selectedService.text}
                    </p>
                </div>
            </div>
        </div>
        <div class="infoBlock">
            <h2><b>Get in touch</b></h2>
            <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor aliquet placerat. Nunc cursus nisi malesuada felis consequat, eget venenatis libero mollis. Phasellus libero justo, accumsan ac neque non, tincidunt molestie velit. Integer ac
                    turpis in purus ornare porta vitae et ante. Sed auctor purus ut nibh elementum, vel sollicitudin nibh facilisis. Quisque ac egestas enim. Sed feugiat risus rhoncus metus varius, at dignissim mauris sagittis. Vestibulum pretium est eu justo
                    pretium finibus. Vestibulum a interdum justo. Curabitur sit amet massa a lorem dapibus suscipit ac ac dolor. Nam ut imperdiet eros. Etiam non porta lorem, vitae porttitor elit. Integer vel porttitor lorem. Donec suscipit lorem orci, sit amet
                    placerat justo placerat sed.
            </p>
            <button class="redButton"><Link to="/contact" className='link'>Contact us</Link></button>
        </div>
    </div>
    )
};