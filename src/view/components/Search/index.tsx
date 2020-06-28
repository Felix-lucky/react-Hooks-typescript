import React, { useRef } from 'react';
import styles from './style.module.scss';


const Search = ({ fun }: any) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if(inputEl && inputEl.current && inputEl.current.value !== '') {
      console.log(inputEl.current.value)
      fun(inputEl.current.value, true);
    }
  };
  return (
    <div className={styles.container}>
      <input ref={inputEl} className={styles.input} type="text"/>
      <button onClick={handleClick} className={styles.button}>Search</button>
    </div>
  );
};


export default Search;