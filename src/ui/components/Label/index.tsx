import { forwardRef, LabelHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
  optional?: boolean;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, size = 'md', required = false, optional = false, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          styles.label,
          styles[`label--${size}`],
          className,
        )}
        {...props}
      >
        {children}
        {required && <span className={styles.label__required}>*</span>}
        {optional && <span className={styles.label__optional}>(optional)</span>}
      </label>
    );
  },
);

Label.displayName = 'Label';

export default Label;
