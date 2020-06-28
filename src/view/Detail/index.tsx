import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrData } from 'api';
import styles from './style.module.scss';

const Detail = () => {
  const [data, setData] = useState<any>();
  const params: any = useParams();
  const result: any[] = [];
  const keys = ['Poster', 'Ratings', 'Title', 'Year'];

  useEffect(() => {
    getCurrData({i: params.id}).then(res => {
      setData(res && res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  if(data) {
    for(let key in data) {
      !keys.includes(key) && result.push(<p key={key}><span>{key}：</span>{data[key]}</p>)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{data && data.Title}</h2>
        <b>（{data && data.Year}）</b>
      </div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={data && data.Poster} alt=""/>
        </div>
        <div className={styles.info}>
          {result}
        </div>
      </div>
    </div>
  );
};


export default Detail;