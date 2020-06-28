import React from 'react';
import styles from './style.module.scss';

interface Props {
  title: string
};

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
  <div className={styles.container}>
    <h2>{title}</h2>
  </div>
  );
}

export default Header;