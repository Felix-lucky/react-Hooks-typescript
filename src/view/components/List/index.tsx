import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from './style.module.scss';

interface Props {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
  onClick: any
};

const Index: React.FC <{children?: any}>= ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
    );
};

let Item: React.FC<any> = ({Title, Poster, Year, imdbID, onClick}: Props) => {
  const handleClick = () => {
    onClick(imdbID);
  }
  return (
    <div className={styles.item} onClick={handleClick}>
      <h2 className={styles.title}>{Title}</h2>
        <div className={styles.img}>
        <LazyLoad 
          scroll={true}
          height={200} 
          placeholder={<img height="100%" width="100%" src={require('images/default.gif')} />}>
          <img   src={Poster} alt=""/>
        </LazyLoad>
        </div>
      <div className={styles.time}>{Year}</div>
    </div>
  );
}


type props = typeof Index & {
  Item: typeof Item,
}

const List = Index as props;
List.Item = Item;

export default List;