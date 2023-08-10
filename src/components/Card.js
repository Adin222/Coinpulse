import "./Card.css";
export const Card = ({ image, name, text, index }) => {
  return (
    <div className={`information c${index}`}>
      <div>
        <img className="imgs" src={image} alt="SomePicture" />
      </div>
      <div className="name">{name}</div>
      <div className="text">{text}</div>
    </div>
  );
};
