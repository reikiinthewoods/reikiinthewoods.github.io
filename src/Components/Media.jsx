export default function Media(Props) {
  const { platform } = Props;
  return (
    <a href={platform.link} target="_blank">
      <img src={platform.icon}></img>
    </a>
  );
}
