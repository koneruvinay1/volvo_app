import React from 'react'
import HotelList from './HotelList'
import SearchBar from './Searchbar'

const Rooms = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <SearchBar/>
      <HotelList/>
    </div>
  )
}

export default Rooms