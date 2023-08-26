import { Button } from "./style";
import whats from "../../assets/whatsapp.png";
import gmail from "../../assets/gmail.png";
import lin from "../../assets/linkedin.png";

export default function ButtonContact() {
  return (
    <>
      <Button>
        <button className="btn">
          <span>Contatos</span>
          <div className="container">
            <img src={whats} className="icon" alt="whats" />
            <img src={gmail} className="icon" alt="gmail" />
            <img src={lin} className="icon" alt="lin" />
          </div>
        </button>
      </Button>
    </>
  );
}
