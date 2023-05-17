import { AlertHeader, AlertMain, BackgorundLogo, Input, Password, SignButton, Text, Title } from "./SignInStyles";
import logo from '../../Assets/logo.png'

const SignIn = () => {
  return (
    <>
      <AlertHeader>
        <Title>Smart Controller with Arduino Uno</Title>
      </AlertHeader>
      
      <AlertMain>
        <BackgorundLogo src={logo} />
        <Text><br/><br/><br/>Welcome back to your smart controller before you can access your appliances we will need you to verify yourself with a password for security purposes.</Text>
        <Text>Please sign in to verify access to your smart home tools</Text>
        <Password>
            <Input type="password"/>
            <SignButton>Sign In</SignButton>
        </Password>
      </AlertMain>
    </>
  );
};

export default SignIn;
