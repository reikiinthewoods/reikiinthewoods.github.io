import ContactLine from "./ContactLine.jsx";
import Media from "./Media.jsx";
import contactText from "../assets/text/contacts.txt?raw";
import mediaText from "../assets/text/medias.txt?raw";
const imageModules = import.meta.glob("../assets/icons/*.{jpg,png,jpeg,svg}", {
  import: "default",
  eager: true,
});
function getImage(fileName) {
  const path = Object.keys(imageModules).find(
    (path) => path.split("/").pop().split(".")[0] == fileName
  );
  return path ? imageModules[path] : null;
}
function getInfoMappings(text) {
  const infoArr = text.split("\n");
  const infoMap = new Map();
  infoArr.forEach((infoPiece) => {
    const infoLineArr = infoPiece.split(": ");
    infoMap.set(infoLineArr[0], infoLineArr[1]);
  });
  return infoMap;
}
const contactMap = getInfoMappings(contactText);
const mediaMap = getInfoMappings(mediaText);
const contactData = [];
contactMap.forEach((value, key) => {
  if (key == "email") {
    const newVal = value;
    contactData.push({
      icon: getImage(key),
      contact: newVal,
    });
  } else {
    contactData.push({
      icon: getImage(key),
      contact: value,
    });
  }
});
const mediaData = [];
mediaMap.forEach((value, key) => {
  mediaData.push({
    icon: getImage(key),
    link: value,
  });
});
export default function Footer() {
  return (
    <div id="footer">
      <div>
        <h2>CONTACTS</h2>
        <div id="contact-content">
          {contactData.map((contact, id) => {
            return <ContactLine key={id} contact={contact} />;
          })}
        </div>
      </div>
      <div>
        <h2>SOCIALS</h2>
        <div>
          <div id="icons">
            {mediaData.map((platform, id) => {
              return <Media key={id} platform={platform} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
