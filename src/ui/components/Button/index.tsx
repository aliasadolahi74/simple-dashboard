import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  loading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[`button--${variant}`],
          size === 'full' ? styles['button--full'] : styles[`button--${size}`],
          { [styles['button--loading']]: loading },
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
