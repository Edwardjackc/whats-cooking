let ab =('Hello world');
let siteData = 'siteData'

//local storage 
localData = JSON.parse(localStorage.getItem('siteData'))
localStorage.setItem('siteData', JSON.stringify(siteData))
console.log(siteData)
console.log(localStorage.getItem('siteData'))

span.innerHTML = localData.siteName