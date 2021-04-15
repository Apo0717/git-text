const menuItems = document.getElementsByClassName('menu-item')

// 因為給了3個內容相同的ClassName，menuItems變為一個"偽陣列(HTMLCollection)"
// addEventListener 只能針對單一物件，所以要掛上監聽必須使用"迴圈"，不然得手動一個一個掛監聽~很累

for (let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener('mouseenter', function (event)
    {
        console.log(event.target.innerText)
        console.log(this.innerText)
    })
}
