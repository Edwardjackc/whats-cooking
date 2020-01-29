let ab =('Hello world');
let siteData = 'siteData'

//local storage 
localData = JSON.parse(localStorage.getItem('siteData'))
localStorage.setItem('siteData', JSON.stringify(siteData))


console.log(siteData)
console.log(localStorage.getItem('siteData'))

input.innerHTML = localData.siteName



function openSideBar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeSideBar() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}