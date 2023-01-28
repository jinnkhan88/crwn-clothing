import SigninForm from "../../components/sign-in-form/sign-in-form.component";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase.utils";
import { AuthenticationContainer } from "./authentication.styles";

const SignIn = () => {
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <AuthenticationContainer>
      <SigninForm />
      <SignupForm />
    </AuthenticationContainer>
  );
};

export default SignIn;
