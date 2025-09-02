import './homeProjects.css';

export default function HomeProjects({ image, title, link }) {
  return (
    <div className="homeProject">
      <a href={link} target='_blank'>
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </a>
    </div>
  );
}
