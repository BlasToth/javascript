const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// mouse
let mouse = {
    x: null,
    y: null,
    radius: 3
}
window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x + canvas.clientLeft/2;
        mouse.y = event.y + canvas.clientTop/2;
});

function drawImage() {
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    class Particle {
        constructor(x, y, color, size) {
            this.x = x + canvas.width/2 - png.width * 2,
            this.y = y + canvas.height/2 - png.height * 2,
            this.color = color,
            this.size = 2,
            this.baseX = x + canvas.width/2 - png.width * 2,
            this.baseY = y + canvas.height/2 - png.height * 2,
            this.density = (Math.random() * 2000) + 1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            ctx.fillStyle = this.color;

            // collision detection
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx;
            let forceDirectionY = dy / 1000;

            // max distance, past that the force will be 0
            const maxDistance = 100;
            let force = (maxDistance - distance) / maxDistance;
            if (force < 0) force = 0;

            let directionX = (forceDirectionX * force * this.density * 300.6);
            let directionY = (forceDirectionY * force * this.density * 300.6);

            if (distance < mouse.radius * this.size) {
                this.x = directionX;
                this.y = directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/10;
                } if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy/10;
                }
            }
            this.draw()

        }
    }
    function init() {
        particleArray = [];

        for (let y = 0, y2 = data.height; y < y2; y++) {
            for (let x = 0, x2 = data.width; x < x2; x++) {
                if (data.data[(y * 4 * data.width) + (x *4 ) + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    let color = "rgb(" + data.data[(y * 4 * data.width) + (x * 4)] + "," +
                                        data.data[(y * 4 * data.width) + (x *4) + 1] + "," +                                        
                                        data.data[(y * 4 * data.width) + (x *4) + 2] + ")";
                    particleArray.push(new Particle(positionX * 1.8, positionY * 1.8, color));
                }
            }
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(235,235,235,.5)';
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
        }
    }
    init();
    animate();

    window.addEventListener('resize', 
        function() {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });
}

const png = new Image();
png.src = "data:image/png;base64,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+b13322emQEvzgtanPMGCi4aAaEMiuqCxGQQOnet9yghyFoWZFVFa0vroayun4lFo5iPMfc2hBCwGc66nXE3ln8vxJNy1ViYdGzqbIAxo3tMCLhtoaqqLllfX3+gubk5YRjG4gekoBKu7mDHnHTMV08rgsKhYwJL29oO19XVfer3+/l85ELmze29+omcX/agaRpQVTe2bLnr19XVVcP5VuPXDyALfUzc4TuOA+7Y2LDp9mPr1294ORAIJKeeAX8TkHmU4KyuIxAo0R977AvP1tRU9xX6MV4XgMx3E+Kru1fAyGYhK4xv377thTvuuOOFYDCoG4Yxr+dySfO18q61OrrQ3oMQAss0wLmNu7fcs3vr1gf/xOVyRScerjxf44YoaZvO1S0AI0Qupcy5jS1bthz/4lNPfVvT3H3XqtnZDWtDCgbctGyoMsveccfm488888wzmUzm4/lycW8CgnO9uxzbgWUbqKyoTNx3370vPvroo3/GGOu1LOuansN+4wAiBHixyw+HqqjWypXLBx95ZPsPN2/e/JeJREK/ElrSTUAuA4BiYoxziHwXBU3T9Nq62tiDD9x/YPPmzX986NCh7kwms2C8Qen6mPvJk8k5BzgHFwICRMgSc3wlAaO1dcnw7bff/npra+uPNm36XNfx48edheaWS0KAOg6HbdtzXhAzS9M/oaMTmQRI/p3LkszdPo/t83nMqqrq/hUrlvffcsstu1etWvWzeHw80tcXwrU03BeREJEggMUooRQL8czPiY2eiaCMgIKAUgYmMSiyAlVVoWlu7vP5RisrK8/U1Nb0V5SXv790aftgaWnpe6OjI7FYbCTX+9FxFvRykyorK379xBOP/a94PF7GJIkvKESK564UBIIKWZYcWZa5JEmOS3XZfp/PLA0G7aqqqmGPx/uex+M5bhgG/+nPflrkds11J9HZHP9/AAsg/qJrwvasAAAAAElFTkSuQmCC";

window.addEventListener('load', (event) => {
    console.log('page has loaded');
    ctx.drawImage(png, 0, 0);
    drawImage();
});
