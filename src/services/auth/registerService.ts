import { auth, db } from '../../configs/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const registerUser = async (nombre: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Actualiza el perfil del usuario con el nombre
    await updateProfile(user, { displayName: nombre });
    // Guarda datos adicionales en Firestore
    await setDoc(doc(db, 'usuarios', user.uid), {
      nombre,
      email,
      createdAt: new Date(),
    });
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};
