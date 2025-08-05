"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/contexts/AuthContext';
import styles from './style.module.scss';
import LoginForm from '@/src/login/components/LoginForm';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleOnLogin: (data: { email: string; password: string }) => Promise<void> = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const userData = await response.json();
      login(userData);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageCard}>
        <div className={styles.loginPageHeader}>
          <h1 className={styles.loginPageTitle}>Welcome Back</h1>
          <p className={styles.loginPageSubtitle}>Sign in to access your dashboard</p>
        </div>

        <LoginForm onSubmit={handleOnLogin} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default LoginPage;
