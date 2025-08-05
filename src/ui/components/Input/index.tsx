import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error = false, size = 'md', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          styles.input,
          styles[`input--${size}`],
          { [styles['input--error']]: error },
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
