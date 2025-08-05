import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import styles from '@/src/login/styles/ui.module.scss';
import Label from '@/src/ui/components/Label';
import Input from '@/src/ui/components/Input';
import Button from '@/src/ui/components/Button';

const loginSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const handleFormSubmit = async (data: LoginFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <Label htmlFor="email">
          <Mail className={`${styles.icon} ${styles.iconInline}`} />
          Email Address
        </Label>
        <Input
          {...register('email')}
          type="email"
          id="email"
          placeholder="Enter your email"
          error={!!errors.email}
          disabled={isSubmitting || isLoading}
        />
        {errors.email && <p className={styles.formErrorMessage}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <Label htmlFor="password">
          <Lock className={`${styles.icon} ${styles.iconInline}`} />
          Password
        </Label>
        <div className={styles.formInputContainer}>
          <Input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            error={!!errors.password}
            disabled={isSubmitting || isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.formInputToggle}
            disabled={isSubmitting || isLoading}
          >
            {showPassword ? <EyeOff className={styles.icon} /> : <Eye className={styles.icon} />}
          </button>
        </div>
        {errors.password && <p className={styles.formErrorMessage}>{errors.password.message}</p>}
      </div>
      <Button type="submit" variant="primary" size="full" disabled={isSubmitting || isLoading}>
        {isSubmitting || isLoading ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
};

export default LoginForm;
