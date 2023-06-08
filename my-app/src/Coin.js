import React from 'react'
import "./Coin.css"

const Coin = ({ icon,name, symbol,supply, price, volume, priceChange, marketCap, marketCapRank}) => {
    return (
        <>
        <tr className="coinRow">
        <td data-label="Coin"><img src={icon} alt="cryptoCoin" class="coinImage"></img></td>
        <td data-label="Name">{name}</td>
        <td data-label="Symbol">{symbol.toUpperCase()}</td>
        <td data-label="Supply">{supply.toLocaleString()}</td>
        <td data-label="Price">{price.toLocaleString()}</td>
        <td data-label="Market Cap Rank">{marketCapRank}</td>
        {/* {
            (priceChange < 0) ? 
            (<td data-label="Price Change Percentage" className="loss">{priceChange.toFixed(2)}%</td>) : 
            (<td data-label="Price Change Percentage" className=" gain">+{priceChange.toFixed(2)}%</td>)
        } */}
        <td data-label="Price change">{priceChange.toLocaleString()}</td>
        <td data-label="Market Cap">{marketCap.toFixed(2).toLocaleString()}</td>
        <td data-label="Volume">{volume.toFixed(2).toLocaleString()}</td>
        </tr>
        </>
    )
}

export default Coin;