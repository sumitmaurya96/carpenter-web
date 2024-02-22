import { BsFillEyeSlashFill } from "react-icons/bs";

const Login = ({ handleInputChange, handleLogin, handleForgetPassword }) => {
  return (
    <>
      <div className="container--responsive flex flex--justify-content-center flex--align-items-center">
        <form className="login bg--shadow bg--radius mt--100 flex flex--direction-column flex--justify-content-center flex--align-items-center">
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            className=""
            onChange={handleInputChange}
          />
          <div className="position--relative width--column-one flex flex--justify-content-center">
            <input
              type="text"
              name="password"
              placeholder="password"
              className=""
              onChange={handleInputChange}
            />
            <BsFillEyeSlashFill className="position--absolute eye-icon" />
          </div>
          <span className="color--grey" onClick={handleForgetPassword}>
            Forget Password?
          </span>
          <button
            type="submit"
            className="bg--radius pd--10 login--btn fs--20 mt--30"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
