import "./video.style.scss";

const Video = ({ src }) => {
  return (
    <video className="o-video" autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
