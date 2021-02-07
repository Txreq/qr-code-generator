const fetch = require('node-fetch')
const fs  = require('fs')
const os = require('os')

function toQRCode(){
        var canvas = document.getElementById('canvas')
        var text = document.getElementById('text').value
        var button = document.getElementById('save')
        url = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${text}`
        setTimeout(function(){
            canvas.src = url
        }, 200)  
        button.addEventListener('click', async () => {
            let response = await fetch(url)
            let buffer = await response.buffer()
            let path = `C:/Users/${os.userInfo().username}/Pictures/${text}.png`
            fs.writeFile(path, buffer, (err) => {
                if(err) {
                    alert(`Failed to save the image, try to launch the application as adminstration !`)
                }
                alert(`Image succesfuly saved ! \nLocation: ${path}`)
            });
        }) 
}
