import hawk from "../assets/images/hawk.png";
import name from "../assets/text/name.txt?raw";
export default function Banner() {
  return (
    <>
      <div id="banner-wrapper">
        <img id="banner-logo" src={hawk} alt="" />
        <h1 id="banner" className="name-header">
          {name}
        </h1>
      </div>
      <h1 id="banner-placeholder" className="name-header">
        &nbsp;
      </h1>
    </>
  );
}
