import Bio from "./Bio";
import Slideshow from "./Slideshow";
import Description from "./Description";
import Guide from "./Guide";
export default function MainContent(Props) {
  const { images } = Props;
  return (
    <div id="content">
      <div id="service-info-content">
        <h2>Book your next mindfulness experience</h2>
        <Bio />
        <div id="spotlight">
          <Slideshow images={images} />
          <Description />
        </div>
        <Guide />
      </div>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=16859302&ref=embedded_csp"
        title="Schedule Appointment"
        width="100%"
        height="1000px"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
