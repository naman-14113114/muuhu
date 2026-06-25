const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function main() {
  const imgPath = 'C:\\Users\\sahil\\.gemini\\antigravity\\brain\\f29cb73d-dc8c-4575-841d-ccc1df791e42\\media__1782382133918.jpg';
  const outPathAU = 'E:\\1st YEAR DTU\\New folder\\muuhu\\apps\\au\\public\\media\\products\\buudy-led-mask\\images\\ipl_price_comparison.jpg';
  
  // also save the original $129 version for US/UK/CA
  const outPathUS = 'E:\\1st YEAR DTU\\New folder\\muuhu\\apps\\us\\public\\media\\products\\buudy-led-mask\\images\\ipl_price_comparison.jpg';
  const outPathUK = 'E:\\1st YEAR DTU\\New folder\\muuhu\\apps\\uk\\public\\media\\products\\buudy-led-mask\\images\\ipl_price_comparison.jpg';
  const outPathCA = 'E:\\1st YEAR DTU\\New folder\\muuhu\\apps\\ca\\public\\media\\products\\buudy-led-mask\\images\\ipl_price_comparison.jpg';
  
  fs.copyFileSync(imgPath, outPathUS);
  fs.copyFileSync(imgPath, outPathUK);
  fs.copyFileSync(imgPath, outPathCA);

  const img = await loadImage(imgPath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const bgData = ctx.getImageData(img.width - 10, img.height / 2, 1, 1).data;
  ctx.fillStyle = `rgb(${bgData[0]}, ${bgData[1]}, ${bgData[2]})`;
  
  // Since we don't know the exact coordinates, we can just save it for US/UK/CA.
  // For AU, let's use the canvas to draw a box around where $129 is, and write $199.
  // Actually, wait, let's just create a new image for AU. 
  // Let's guess the coordinates. The image is 1080x1080.
  // The "$129" is around x=850, y=700.
  // Let's draw a large rectangle to cover the price.
  ctx.fillRect(img.width * 0.78, img.height * 0.58, img.width * 0.2, img.height * 0.08);
  
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${Math.round(img.height * 0.045)}px serif`;
  ctx.fillText('$199', img.width * 0.79, img.height * 0.635);

  const out = fs.createWriteStream(outPathAU);
  const stream = canvas.createJPEGStream();
  stream.pipe(out);
  out.on('finish', () => console.log('Image edited for AU'));
}
main().catch(console.error);
