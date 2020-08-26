import React, {useEffect,useState} from 'react';
import styles from './hello-world.module.css';

export function HelloWorld(props){

    const [active,setActive] = useState(0);

    useEffect(()=>{
        if (props.num === undefined){
            props.initDataAction();
        }
        if (active){
            setTimeout(()=>{
                setActive(0);
            },1200);
        }
    });

    const increment = ()=>{
        setActive(1);
        props.incrementDataAction(props.num);
    }

    const decrement = ()=>{
        setActive(1);
        props.decrementDataAction(props.num);
    }

    const clear = () => {
        setActive(1);
        props.clearDataAction();
    }

    const init = () => {
        setActive(1);
        props.initDataAction();
    }


    return(
        <div className={styles.container}>
            <h3 className={styles.helloWorld}>Hello World! - {props.num !== undefined?props.num:0}</h3>
            {
                !active?<div className={styles.row}>
                    <div className={styles.col}>
                        <button onClick={clear}>Clear</button>
                    </div>
                    <div className={styles.col}>
                        <button onClick={init}>Init</button>
                    </div>
                    <div className={styles.col}>
                        <button onClick={increment}>Increment</button>
                    </div>
                    <div className={styles.col}>
                        <button onClick={decrement}>Decrement</button>
                    </div>
                </div>:null
            }

            <div className={styles.bar + ' '+ (active?styles.animateProgress:'')}></div>
        </div>
    );
}
