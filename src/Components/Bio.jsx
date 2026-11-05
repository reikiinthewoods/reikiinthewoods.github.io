import serviceText from "../assets/text/services.txt?raw";
import portrait from "../assets/images/portrait.jpg";
const services = serviceText.split("\n");
export default function Bio() {
  return (
    <div id="content-home" className="content-item">
      <div id="bio">
        <h5>WITH</h5>
        <h1>MICHELLE MOODY ADSHEAD</h1>
        <div id="portrait-wrapper">
          <img id="portrait" src={portrait}></img>
        </div>
        <ul id="bio-services">
          {services.map((service, id) => (
            <li key={id}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
