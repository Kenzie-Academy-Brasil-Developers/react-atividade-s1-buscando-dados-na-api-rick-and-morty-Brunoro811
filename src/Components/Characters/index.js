import CharCard from "../CharCard";
import "./style.css";
function Characters({ characterList }) {
  return (
    <div className="Characters">
      {characterList.map((item) => (
        <CharCard
          key={item.id}
          name={item.name}
          image={item.image}
          status={item.status}
        />
      ))}
    </div>
  );
}
export default Characters;
