import { Link } from "react-router-dom";
import img from "../Assets/images/errorfound.svg";

const Error = () => {
  return (

    <body>
      <div class="text-center">
        <div class="d-flex align-items-center justify-content-center">
          <a href="/">
            <img src={img} alt="Error In URL" />
          </a>
        </div>
      </div>
    </body>
  );
};
export default Error;
