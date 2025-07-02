export default function ContactLine(Props) {
  const { contact } = Props;
  return (
    <div className="contact-line">
      <img src={contact.icon}></img>
      <h4>{contact.contact}</h4>
    </div>
  );
}
