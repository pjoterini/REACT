import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('set search value')

    const handleInput = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClick = () => {
        setSearchValue('')
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
        <input type="text" value={searchValue} onChange={handleInput} />
        {searchValue}
        { shouldDisplayButton ? false : <button onClick={handleClick}>clear</button>}

        {filteredProducts.map((product) => {
            return <li key={product}>{product}</li>
        })}

        </div>
    )
}

export default SearchBar