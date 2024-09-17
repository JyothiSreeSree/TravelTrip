import React from 'react'

const TravelContext = React.createContext({
  myTripsList: [],
  addTripList: () => {},
})

export default TravelContext
