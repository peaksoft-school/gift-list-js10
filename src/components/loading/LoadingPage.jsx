import React from 'react'
import styles from './LoadingPage.module.css'

console.log(styles)

export const LoadingPage = () => {
   return (
      <div className={styles.body}>
         <input
            className={`${styles.package} ${styles.input}`}
            type="checkbox"
         />
         <label className={styles.close} htmlFor="package">
            Close /
         </label>
         <label className={styles.open} htmlFor="package">
            Open
         </label>
         <div className={styles.scene}>
            <div className={styles.gift}>
               <div className={styles.gift__gift}>
                  {/* TODO: remove or replace  */}
               </div>
               <div
                  className={`${styles.gift__side} ${styles['gift__side--right']}`}
               />
               <div
                  className={`${styles.gift__side} ${styles['gift__side--front']}`}
               />
               <div
                  className={`${styles.gift__side} ${styles['gift__side--left']}`}
               >
                  {/* <div className="gift__label"/> */}
               </div>
               <div
                  className={`${styles.gift__side} ${styles['gift__side--back']}`}
               />
               <div className={`${styles.gift__lid} ${styles['gift-lid']}`}>
                  <div
                     className={`${styles['gift-lid__side']} ${styles['gift-lid__side--top']}`}
                  >
                     <div className={`${styles.gift__ribbon}`} />
                     <div className={`${styles.gift__ribbon}`} />
                     <div className={`${styles.gift__ribbon}`} />
                     <div className={`${styles.gift__ribbon}`} />
                  </div>
                  <div
                     className={`${styles['gift-lid__side']} ${styles['gift-lid__side--back']}`}
                  />
                  <div
                     className={` ${styles['gift-lid__side']} gift-lid__side--front`}
                  />
                  <div
                     className={`${styles['gift-lid__side']} ${styles['gift-lid__side--left']}`}
                  />
                  <div
                     className={`${styles['gift-lid__side']} ${styles['gift-lid__side--right']}`}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
