import './homeLogos.css';

export default function HomeLogos({ image, title}) {
  return (
    <div className="homeLogos">
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  );
}
