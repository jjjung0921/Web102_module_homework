import { Link } from "react-router-dom";
import { image } from "../../image";

const Phrases = [
  "How it works",
  "Gifts",
  "About",
  "logo",
  "Login",
  "Members",
  "Contracts",
];

function topnav(phrase, index) {
  if (phrase == "logo") return <img src={image("logo")} id="logo" key={index} alt="logo"/>;
  else if (phrase == "About")
    return (
      <Link to="/about" className="phrases" key={index}>
        {phrase}
      </Link>
    );
  else return <div className="phrases" key={index}>{phrase}</div>;
}

export const Header = () => {
  return (
    <div id="header">
      {Phrases.map((phrase, index) => (
        topnav(phrase, index)
      ))}
    </div>
  );
};
