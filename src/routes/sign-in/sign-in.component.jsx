import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase.utils";

const SignIn = () => {
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={loginUser}> Sign In with Google Popup</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
