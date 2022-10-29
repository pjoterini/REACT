import React from 'react'
import CountButton from './CountButton'
import SearchBar from './SearchBar/SearchBar'

const products = [
  'toohts',
  'mouth wash',
  'trtrlto'
]
const productss= [
  'toohtdasdsads',
  'mouth wasadsdash',
  'trtdsadasdlto'
]




const App = () => {
  return (
    <div>
      <CountButton incrementBy={1}/>
      <CountButton incrementBy={5}/>
      <CountButton incrementBy={7}/>
      <SearchBar products={products} />
      <SearchBar products={productss} />
    </div>
  )
}

export default App