import "./style.css";
function CharCard({ name, image, status }) {
  return (
    <div className="CharCard">
      <h4 className="CharCard-Title">{name}</h4>
      <img className={status} src={image} alt={name} />
    </div>
  );
}
export default CharCard;
