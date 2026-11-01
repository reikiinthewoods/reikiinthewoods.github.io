import name from "../assets/text/name.txt?raw";
export default function Banner() {
  return (
    <>
      <div id="banner-wrapper">
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
