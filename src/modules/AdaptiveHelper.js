
const AdaptiveHelper = {
  muiActiveTabSelect(currentUrl, urlValues, setSelectedTab) {
    if (urlValues[currentUrl] !== undefined) {
      setSelectedTab(urlValues[currentUrl])
    }    
  }
}

export default AdaptiveHelper