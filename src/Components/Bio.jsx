import serviceText from "../assets/text/services.txt?raw";
const services = serviceText.split("\n");
export default function Bio() {
  return (
    <div id="content-home" className="content-item">
      <div id="bio">
        <h5>with</h5>
        <h1>Michelle Moody Adshead</h1>
        <ul id="bio-services">
          {services.map((service, id) => (
            <li key={id}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
