import { Link } from "react-router-dom";
import "./styles/notFound.css"

export default function Page404() {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <Link className="border p-[10px] rounded-[10px] text-white" to="/">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
