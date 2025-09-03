import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth, db } from '../configs/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import avatarDefault from '../assets/images/avatarlogin.png';

interface User {
  displayName: string;
  photoURL: string;
  email?: string;
  uid?: string;
}

interface UserContextProps {
  user: User | null;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  logout: async () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        let displayName = firebaseUser.displayName;
        // Si no hay displayName, buscar en Firestore y actualizar el perfil
        if (!displayName && firebaseUser.uid) {
          try {
            const docRef = doc(db, 'usuarios', firebaseUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const data = docSnap.data();
              if (data.nombre) {
                await updateProfile(firebaseUser, { displayName: data.nombre });
                displayName = data.nombre;
              }
            }
          } catch {
            // Si falla, dejar displayName como null
          }
        }
        const userData = {
          displayName: displayName || 'Usuario Anónimo',
          photoURL: firebaseUser.photoURL || avatarDefault,
          email: firebaseUser.email || '',
          uid: firebaseUser.uid,
        };
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  if (loading) {
    return <div>Cargando aplicación...</div>;
  }
  return <UserContext.Provider value={{ user, logout }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
