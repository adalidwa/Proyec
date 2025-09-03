// Debug Firebase Configuration
export const debugFirebaseConfig = () => {
  console.log('🔥 Firebase Debug Info:');
  console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY ? '✅ Present' : '❌ Missing');
  console.log(
    'Auth Domain:',
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? '✅ Present' : '❌ Missing'
  );
  console.log(
    'Project ID:',
    import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✅ Present' : '❌ Missing'
  );
  console.log(
    'Storage Bucket:',
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? '✅ Present' : '❌ Missing'
  );
  console.log(
    'Messaging Sender ID:',
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? '✅ Present' : '❌ Missing'
  );
  console.log('App ID:', import.meta.env.VITE_FIREBASE_APP_ID ? '✅ Present' : '❌ Missing');

  // Only in development
  if (import.meta.env.DEV) {
    console.log('🔧 Firebase Config Values:');
    console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY);
    console.log('Auth Domain:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
    console.log('Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);
  }
};
