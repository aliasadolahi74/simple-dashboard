'use client';
import { useAuth } from '@/src/contexts/AuthContext';
import styles from './style.module.scss';
import Image from 'next/image';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const userResult = user?.results?.[0];
  const userName = userResult?.name;
  const fullName = userName ? `${userName.first} ${userName.last}` : '';

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.dashboardTitle}>Dashboard</h1>
          <button onClick={logout} className={styles.logoutButton}>
            Logout
          </button>
        </div>

        <div className={styles.welcomeSection}>
          {userResult?.picture?.large && (
            <div className={styles.profileImage}>
              <Image
                fill
                src={userResult.picture.large}
                alt={`${fullName} profile`}
              />
            </div>
          )}
          <h2 className={styles.welcomeTitle}>Welcome back{fullName ? `, ${fullName}` : ''}!</h2>
          <p className={styles.dashboardSubtitle}>{`Here's your dashboard overview`}</p>
        </div>

        {userResult && (
          <div className={styles.userInfo}>
            <div className={styles.userInfoCard}>
              <h3 className={styles.cardTitle}>Profile Information</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Name:</span>
                  <span className={styles.infoValue}>
                    {userName?.title} {fullName}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span className={styles.infoValue}>{userResult.email}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Phone:</span>
                  <span className={styles.infoValue}>{userResult.phone}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>
                    {userResult.location.city}, {userResult.location.state}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Age:</span>
                  <span className={styles.infoValue}>{userResult.dob.age} years old</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Username:</span>
                  <span className={styles.infoValue}>{userResult.login.username}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
