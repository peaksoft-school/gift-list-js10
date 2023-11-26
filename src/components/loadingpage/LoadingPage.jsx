// import { GUI } from 'dat.gui'
// import React, { useEffect } from 'react'

export const LoadingPage = () => {
   // const CONFIG = {
   //    'rotate-x': -24,
   //    'rotate-y': -32,
   //    height: 40,
   //    width: 20,
   //    depth: 20,
   //    packaged: true,
   // }

   // const UPDATE = () =>
   //    Object.keys(CONFIG).forEach((key) => {
   //       if (typeof typeof CONFIG[key] === 'boolean') {
   //          if (CONFIG[key]) {
   //             return document.documentElement.style.setProperty(`--${key}`, 1)
   //          }
   //          return document.documentElement.style.setProperty(`--${key}`, 0)
   //       }
   //       return document.documentElement.style.setProperty(
   //          `--${key}`,
   //          CONFIG[key]
   //       )
   //    })

   // const CTRL = new GUI()
   // const RTO = CTRL.addFolder('Rotation')
   // RTO.add(CONFIG, 'rotate-x', -90, 90, 1).onChange(UPDATE).name('X')
   // RTO.add(CONFIG, 'rotate-y', -90, 90, 1).onChange(UPDATE).name('Y')

   // const SIZE = CTRL.addFolder('Size')
   // SIZE.add(CONFIG, 'height', 10, 50, 1).onChange(UPDATE).name('Height')
   // SIZE.add(CONFIG, 'width', 10, 50, 1).onChange(UPDATE).name('Width')
   // SIZE.add(CONFIG, 'depth', 10, 50, 1).onChange(UPDATE).name('Depth')

   // CTRL.add(CONFIG, 'packaged').onChange(UPDATE).name('Package?')

   // useEffect(() => {
   //    UPDATE()
   // }, [])

   return (
      <p>Loading...</p>
      // <div>
      //    <input id="package" type="checkbox" />
      //    <label className="close" htmlFor="package">
      //       Close /
      //    </label>
      //    <label className="open" htmlFor="package">
      //       Open
      //    </label>
      //    <div className="scene">
      //       <div className="gift">
      //          <div className="gift__gift">
      //             {/*  TODO: remove or replace */}
      //             <svg
      //                style={{ height: '10px', width: '10px' }}
      //                viewBox="0 0 362.6 388.5"
      //                role="img"
      //             >
      //                <path
      //                   d="M156.6,239l-88.3,64.8c-10.6,7.1-18.8,11.8-29.4,11.
      // 8c-21.2,0-38.9-18.8-38.9-40c0-17.7,14.1-30.6,27.1-36.5 l1
      // 03.6-44.7L27.1,148.3C13,142.5,0,129.5,0,111.8
      // C0,90.7,18.8,73,40,73c10.6,0,17.7,3.5,28.3,11.8l88.3,64.8L144.
      // 8,44.7 C141.3,20,157.8,0,181.3,0c23.5,0,40,18.8,36.5,43.6l-11.8,106l
      // 88.3-64.8c10.6-8.2,18.8-11.8,2
      // 9.4-11.8c21.2,0,38.8,17.7,38.8,38.9 c0,18.8-12.9,30.6-27.1,36.5l-1
      // 03.6,45.9L335.5,239c14.1,5.9,27.1,18.8,27.1,37.7c0,21.2-18.8,38.9-40
      // ,38.9 c-9.4,0-17.7-4.7-28.3-11.8L206,239l11.8,104.8c3.5,24.7-12.9,44.
      // 7-36.5,44.7c-23.5,0-40-18.8-36.5-43.6L156.6,239z"
      //                   fill="hsl(30, 2.105263157894729%, 62.745098039215684%)"
      //                />
      //             </svg>
      //          </div>
      //          <div className="gift__side gift__side--right" />
      //          <div className="gift__side gift__side--front" />
      //          <div className="gift__side gift__side--left">
      //             {/* <div className="gift__label"/> */}
      //          </div>
      //          <div className="gift__side gift__side--back" />
      //          <div className="gift__lid gift-lid">
      //             <div className="gift-lid__side gift-lid__side--top">
      //                <div className="gift__ribbon" />
      //                <div className="gift__ribbon" />
      //                <div className="gift__ribbon" />
      //                <div className="gift__ribbon" />
      //             </div>
      //             <div className="gift-lid__side gift-lid__side--back" />
      //             <div className="gift-lid__side gift-lid__side--front" />
      //             <div className="gift-lid__side gift-lid__side--left" />
      //             <div className="gift-lid__side gift-lid__side--right" />
      //          </div>
      //       </div>
      //    </div>
      // </div>
   )
}
