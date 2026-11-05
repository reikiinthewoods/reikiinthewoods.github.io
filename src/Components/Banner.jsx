import name from "../assets/text/name.txt?raw";
export default function Banner() {
  return (
    <>
      <h1 id="banner" className="name-header">
        {name}
      </h1>
      <h1 id="banner-placeholder" className="name-header">
        &nbsp;
      </h1>
    </>
  );
}
