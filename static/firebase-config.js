/*
 * Firebase configuration.
 *
 * NOTE: This API key is a *client-side identifier* required by Firebase for
 * browser requests. It is NOT a secret. Access control is enforced by Firebase
 * Security Rules, not by this key.
 *
 * Recommended hardening (done in Google Cloud Console, not in code):
 *   1. Restrict this key to the domains that serve this site
 *      (e.g. perceptua.blue, localhost).
 *   2. Limit the key to only the APIs the app uses
 *      (Identity Toolkit, Firestore, Cloud Storage).
 *   3. Ensure Firestore and Storage Security Rules follow least-privilege.
 */
var config = {
  apiKey: "AIzaSyBRljRdh4qzZtsr-Fs_0p18HtbryFKNtSU",
  projectId: "perceptua-b6ea3",
  databaseURL: "https://perceptua-b6ea3.firebaseio.com",
  storageBucket: "gs://perceptua-b6ea3.appspot.com/",
};
firebase.initializeApp(config);
