import './homeSoftwares.css';

export default function HomeSoftwares({ image, title, link }) {
  return (
    <div className="homeSoftware">
      <a href={link}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </a>
    </div>
  );
}
