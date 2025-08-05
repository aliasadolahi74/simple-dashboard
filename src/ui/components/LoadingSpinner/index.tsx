import styles from './LoadingSpinner.module.scss';

type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className={styles.fullScreenContainer}>
        <div className={`${styles.spinner} ${styles[`spinner--${size}`]}`} />
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  return <div className={`${styles.spinner} ${styles[`spinner--${size}`]}`} />;
};

export default LoadingSpinner;
