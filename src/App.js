import { useState } from 'react'
import { SizesSelect } from './components/SizesSelect'

export function App() {
   const [selectedSize, setSelectedSize] = useState('')
   const changeSelectedSize = (e) => setSelectedSize(e.target.value)
   return (
      <div style={{ margin: '50px' }}>
         <SizesSelect
            selectedSize={selectedSize}
            handleChange={changeSelectedSize}
         />
      </div>
   )
}
