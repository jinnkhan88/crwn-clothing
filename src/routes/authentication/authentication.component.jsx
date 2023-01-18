import SigninForm from "../../components/sign-in-form copy/sign-in-form.component";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase.utils";

import "./authentication.styles.scss";
const SignIn = () => {
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default SignIn;
