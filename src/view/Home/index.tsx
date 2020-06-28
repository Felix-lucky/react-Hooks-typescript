import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getData } from 'api';
import Header from 'components/Header';
import Search from 'components/Search';
import List from 'components/List';
import styles from './style.module.scss';


const Home = () => {
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  const [params, setParams] = useState<any>({s: 'main', page: 1});
  const getList = ( val?: any, flag?: boolean ) => {
    const newParams = {s: params.s, page: params.page};
    if(val !== undefined) {
      newParams.s = val;
    }
    setParams(newParams);
    getData(newParams).then(res => {
      if( res && res.data&& res.data.Response === 'True') {
        const result = res && res.data && res.data.Search;
        if(flag) {
          setData(result);
        } else {
          setData([...data, ...result]);
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const handleClick = () => {
    setParams({s: params.s, page: ++params.page});
    getList();
  }

  useEffect(() => {
    getList();
  }, []);

  const goDetail = (id: string) => {
    history.push('/detail/' + id);
  };

  return (
    <div className={styles.container}>
      <Header title={'react-typescript-hooks'} />
      <Search fun={getList}  />
      <div >
        <List >
          {
            data.map((item, index) => {
              return <List.Item onClick={goDetail} key={index} {...item} />
            })
          }
        </List>
      </div>
      <button disabled={data.length < 10 ? true : false} className={styles.btn} onClick={handleClick}>Load More</button>
    </div>
  );
};


export default Home;