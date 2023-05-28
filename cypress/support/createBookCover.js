const fs = require('fs')
const path = require('path')
const { createCanvas } = require('canvas')

function createCover(title, author) {
  const canvas = createCanvas(600, 900)
  const ctx = canvas.getContext('2d')

  
  ctx.fillStyle = '#f0f0f0' 
  ctx.fillRect(0, 0, 600, 900)

  ctx.font = '30px Arial'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'black'

  ctx.fillText(title, 300, 450)

  ctx.font = '20px Arial'
  ctx.fillText(author, 300, 500)

  const buffer = canvas.toBuffer('image/jpeg')
  const dir = path.join(__dirname, '../fixtures');
  
  // Создаем папку, если она еще не существует
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(dir, 'bookCover.jpg'), buffer)
}

createCover('bookName', 'AuthorName')


function createCover(title, author) {
  const canvas = createCanvas(600, 900)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#f0f0f0'
  ctx.fillRect(0, 0, 600, 900)

  ctx.font = '30px Arial'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'black'

  ctx.fillText(title, 300, 450)

  ctx.font = '20px Arial'
  ctx.fillText(author, 300, 500)

  const buffer = canvas.toBuffer('image/jpeg')
  const dir = path.join(__dirname, '../fixtures');
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(dir, 'bookCover.jpg'), buffer)
}
