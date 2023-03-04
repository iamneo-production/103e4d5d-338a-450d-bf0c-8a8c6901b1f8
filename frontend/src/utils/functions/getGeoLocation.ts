const getGeoLocation = (callback: PositionCallback) => {
  if (navigator.geolocation) {
    try {
      navigator.geolocation.getCurrentPosition(callback)
    } catch (e) {
      console.log("Something went wrong detecting the location")
    }
  } else {
    console.log("No location found")
  }
}

export default getGeoLocation
