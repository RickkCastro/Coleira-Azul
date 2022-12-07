// import statusCodes along with GoogleSignin
import auth from "@react-native-firebase/auth";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

export async function googleSignIn() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
