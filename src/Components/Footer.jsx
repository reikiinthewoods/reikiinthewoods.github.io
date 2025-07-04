import Contacts from "./Contacts.jsx";
import name from "../assets/text/name.txt?raw";
export default function Footer() {
  return (
    <div id="footer">
      <h1 className="name-header">{name}</h1>
      <Contacts />
    </div>
  );
}
