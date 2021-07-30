import React from 'react';
import { Link } from 'react-router-dom';

export function Home(){

    return(
        <div id="home">
            {/* <h2>Home</h2> */}
            <div id="welcomeItem">
                <div id="welcomeItem2">
                    <h2>Welcome to</h2>
                    <h1><span>Heating</span> Service</h1>
                    <p id="overline">If you have any problems with your heating system, please let us know: fill in our application form and <Link to="/request" className='link'><span> request an appointment</span></Link>.</p>
                    {/* <button class="redButton">Learn more</button> */}
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
                <button class="redButton">Learn more</button>
            </div>

            <div className="columns">
                <div className="leftPart">
                <h2>Services</h2>
                <p className="leftPart1">Ut ut elit dolor. Vivamus fermentum sodales tellus id egestas. Integer viverra, erat vel laoreet congue, dui felis rhoncus leo, sed tempor massa lorem ut tortor. Etiam dapibus purus purus, sed eleifend urna feugiat vitae. Pellentesque consectetur
                    consequat urna et dapibus. Fusce consequat magna arcu. Curabitur augue sem, blandit sed turpis eget, aliquam dignissim odio. Aenean sed nisi ultrices, accumsan nisl eu, tincidunt dui.
                </p>
                <ul>
                    <li class="leftList">Heating sysem repair</li>
                    <li class="leftList">Installation of new radiator</li>
                    <li class="leftList">Maintenance of internal installation </li>
                    <li class="leftList">Leak repair</li>
                    <li class="leftList">Valve replacement</li>
                    <li class="leftList">Relocation of radiator</li>
                </ul><br/>
            </div>
            <div className="rightPart">
                <div className="rightPart2">
                    <h2>Heating sysem repair</h2>
                    <p>Nunc sit amet laoreet augue. Proin sem felis, lobortis ut sem vitae, facilisis consequat odio. Vestibulum nec efficitur quam. Sed vulputate nisi leo, ac consequat lacus euismod ut. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Curabitur et pulvinar augue, ac bibendum ex. Suspendisse consequat ante nisl, quis finibus nulla pellentesque sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                    </p>
                </div>
            </div>
        </div>

        <div class="Company">
            <h2><b>Get in touch</b></h2>
            <p class="Company1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor aliquet placerat. Nunc cursus nisi malesuada felis consequat, eget venenatis libero mollis. Phasellus libero justo, accumsan ac neque non, tincidunt molestie velit. Integer ac
                    turpis in purus ornare porta vitae et ante. Sed auctor purus ut nibh elementum, vel sollicitudin nibh facilisis. Quisque ac egestas enim. Sed feugiat risus rhoncus metus varius, at dignissim mauris sagittis. Vestibulum pretium est eu justo
                    pretium finibus. Vestibulum a interdum justo. Curabitur sit amet massa a lorem dapibus suscipit ac ac dolor. Nam ut imperdiet eros. Etiam non porta lorem, vitae porttitor elit. Integer vel porttitor lorem. Donec suscipit lorem orci, sit amet
                    placerat justo placerat sed.
            </p>
            <button class="redButton">Contact us</button>
        </div>

    </div>
    )
};