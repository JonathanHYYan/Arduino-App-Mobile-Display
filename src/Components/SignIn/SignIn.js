import {
  AlertHeader,
  AlertMain,
  BackgorundLogo,
  Input,
  Password,
  SignButton,
  Text,
  Title,
} from "./SignInStyles";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

// Component renders sign in page on app launch
const SignIn = () => {
  return (
    <>
      <AlertHeader>
        <Title>Smart Controller with Arduino Uno</Title>
      </AlertHeader>

      <AlertMain>
        <BackgorundLogo src={logo} />
        <Text>
          Welcome back to your smart controller before you can access your
          appliances we will need you to verify yourself with a password for
          security purposes.
          <br />
          <br />
          <br />
          Please sign in to verify access to your smart home tools
        </Text>
        <Password>
          <Input type="password" />
          <Link to="/main">
            <SignButton>Sign In</SignButton>
          </Link>
        </Password>
      </AlertMain>
    </>
  );
};

export default SignIn;
