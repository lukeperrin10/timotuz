const _ = require('lodash')

const AdaptiveHelper = {
  muiActiveTabSelect(currentUrl, tabs, setSelectedTab) {
      let urlValues = {}
      tabs.forEach((tab, index) => {
        urlValues[`/${_.snakeCase(tab)}`] = index
      })

    if (urlValues[currentUrl] !== undefined) {
      setSelectedTab(urlValues[currentUrl])
    }    
  }
}

export default AdaptiveHelper