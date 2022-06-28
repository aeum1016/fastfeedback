import * as admin from 'firebase-admin';

var serviceAccount = require('../firebase-admin-keys.json');
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      'https://fast-feedback-demo-98606-default-rtdb.firebaseio.com/',
  });
}

export default admin.firestore();
