
const Helper = {
  muiActiveTabSelect = ({currentUrl, urlValues, setSelectedTab}) => {
    if (urlValues[currentUrl]) {
      setSelectedTab(urlValues[currentUrl])
    }    
  }
}

export default Helper