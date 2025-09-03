import React, { useState } from 'react';
import Input from '../components/common/Input.tsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../components/common/Button.tsx';
import illustrationPicture from '../assets/icons/illustrationPicture.svg';
import Logo from '../components/ui/Logo';
import GoogleButton from '../components/common/GoogleButton';
import './RegisterPage.css';
import { signInWithGoogle } from '../services/auth/firebaseAuthService';
import { registerUser } from '../services/auth/registerService';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!nombre || !email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    setLoading(true);
    const { user, error } = await registerUser(nombre, email, password);
    if (user) {
      setSuccess('¡Cuenta creada exitosamente!');
      setTimeout(() => navigate('/'), 1500);
    } else {
      setError('Error al crear la cuenta. ' + (error?.message || 'Inténtalo de nuevo.'));
    }
    setLoading(false);
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      const { user, error } = await signInWithGoogle();
      if (user) {
        // Éxito en registro con Google
        navigate('/');
      } else {
        setError('Error al registrar con Google. Inténtalo de nuevo.');
        console.error(error);
      }
    } catch (err) {
      setError('Error inesperado. Inténtalo más tarde.');
      // Error inesperado
    }
    setLoading(false);
  };

  return (
    <div className='register-bg'>
      <div className='register-illustration'>
        <div className='register-badge'>
          <Logo text='INNOVAPAZ' size='medium' variant='white' />
        </div>
        <img
          src={illustrationPicture}
          alt='Ilustración INNOVAPAZ'
          className='register-illustration-img'
        />
      </div>
      <div className='register-box'>
        <h1 className='register-title'>Crear una cuenta</h1>
        <p className='register-subtitle'>
          Comienza a simplificar la gestión de tu empresa en solo unos minutos
        </p>
        <form className='register-form' onSubmit={handleRegister}>
          <Input
            id='registerFirstName'
            name='firstName'
            label='Nombre'
            placeholder='Tu nombre'
            type='text'
            containerWidth='full'
            size='medium'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <Input
            id='registerEmail'
            name='email'
            label='Correo electrónico'
            placeholder='ejemplo@email.com'
            type='email'
            containerWidth='full'
            size='medium'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id='registerPassword'
            name='password'
            label='Contraseña'
            placeholder='Contraseña'
            type='password'
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
            containerWidth='full'
            size='medium'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            id='registerConfirmPassword'
            name='confirmPassword'
            label='Confirma tu contraseña'
            placeholder='Confirma tu contraseña'
            type='password'
            showTogglePassword
            showPasswordIcon={FaEye}
            hidePasswordIcon={FaEyeSlash}
            containerWidth='full'
            size='medium'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div>
            <Button
              title={loading ? 'Creando cuenta...' : 'Crear cuenta'}
              backgroundColor='var(--bg-100)'
              textColor='var(--pri-900)'
              hasBackground={true}
              borderColor='transparent'
              titleFontWeight='normal'
              containerWidth='full'
              height='large'
              type='submit'
              disabled={loading}
            />
          </div>

          <div>
            <GoogleButton
              label='Registrarse con Google'
              onClick={handleGoogleRegister}
              disabled={loading}
            />
          </div>

          {error && <p className='error-message'>{error}</p>}
          {success && <p className='success-message'>{success}</p>}

          <div className='register-footer'>
            <span className='register-footer-text'>¿Ya tienes cuenta?</span>
            <span className='register-footer-link' onClick={() => navigate('/login')}>
              Inicia Sesión
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
