// Изображения для игры (Data URI в формате SVG)
const images = {
    background: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='430' height='900' viewBox='0 0 430 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230a1420'/%3E%3Cstop offset='100%25' stop-color='%23000d1a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='430' height='900' fill='url(%23a)'/%3E%3Cpath d='M0,50 L430,70 M0,100 L430,120 M0,150 L430,170 M0,200 L430,220 M0,250 L430,270 M0,300 L430,320 M0,350 L430,370 M0,400 L430,420 M0,450 L430,470 M0,500 L430,520 M0,550 L430,570 M0,600 L430,620 M0,650 L430,670 M0,700 L430,720 M0,750 L430,770 M0,800 L430,820 M0,850 L430,870' stroke='rgba(0,247,255,0.1)' stroke-width='1' fill='none'/%3E%3C/svg%3E",
    router: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='70' viewBox='0 0 80 60'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231a2a40'/%3E%3Cstop offset='100%25' stop-color='%230c1a2f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='80' height='70' rx='10' fill='url(%23a)'/%3E%3Crect x='0' y='0' width='80' height='15' rx='10' fill='%230c1a2f'/%3E%3Ccircle cx='20' cy='25' r='5' fill='%2300ff8c'/%3E%3Ccircle cx='40' cy='25' r='5' fill='%2300f7ff'/%3E%3Ccircle cx='60' cy='25' r='5' fill='%23ff296d'/%3E%3Crect x='-5' y='-20' width='5' height='20' fill='%232c3e50'/%3E%3Crect x='80' y='-20' width='5' height='20' fill='%232c3e50'/%3E%3Ctext x='40' y='50' text-anchor='middle' fill='%239b59b6' font-family='Arial' font-weight='bold' font-size='16'%3EVPONE%3C/text%3E%3C/svg%3E",
    rkn: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='80' viewBox='0 0 70 80'%3E%3Crect x='0' y='0' width='70' height='80' rx='10' fill='%23c0392b'/%3E%3Ctext x='35' y='65' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='16'%3EГГГ%3C/text%3E%3Ccircle cx='35' cy='25' r='8' fill='none' stroke='white' stroke-width='2'/%3E%3Cline x1='30' y1='25' x2='40' y2='25' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
    meta: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='70' viewBox='0 0 60 70'%3E%3Crect x='0' y='0' width='60' height='70' rx='10' fill='%231877f2'/%3E%3Ctext x='30' y='65' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='16'%3EMETA%3C/text%3E%3Cpath d='M25,20 L35,30 L30,30 L30,35 L25,35 L25,20 Z' fill='white'/%3E%3C/svg%3E",
    google: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'%3E%3Crect x='0' y='0' width='75' height='75' rx='10' fill='%23ea4335'/%3E%3Ctext x='37.5' y='65' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='16'%3EGOOGLE%3C/text%3E%3Ccircle cx='37.5' cy='25' r='10' fill='none' stroke='white' stroke-width='2' stroke-dasharray='15,10'/%3E%3Cline x1='37.5' y1='15' x2='37.5' y2='35' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
    max: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='65' height='85' viewBox='0 0 65 85'%3E%3Crect x='0' y='0' width='65' height='85' rx='10' fill='%23e50914'/%3E%3Ctext x='32.5' y='65' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='16'%3EMAX%3C/text%3E%3Cpath d='M25,20 L30,25 L30,35 L35,30 L40,35 L40,20 Z' fill='white'/%3E%3C/svg%3E",
    telegram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%230088cc'/%3E%3Cpath d='M10,20 L17,23 L20,32 L30,15' stroke='white' stroke-width='2' fill='none'/%3E%3Cpath d='M10,20 L30,15' stroke='white' stroke-width='2'/%3E%3Cpath d='M17,23 L20,32' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
    vpnKey: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35'%3E%3Cdefs%3E%3CradialGradient id='a' cx='50%25' cy='50%25' r='50%25' fx='50%25' fy='50%25'%3E%3Cstop offset='0%25' stop-color='%23e100ff'/%3E%3Cstop offset='100%25' stop-color='%239b59b6'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cpolygon points='17.5,0 35,17.5 17.5,35 0,17.5' fill='url(%23a)'/%3E%3Ctext x='17.5' y='22' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold' font-size='12'%3EVPN%3C/text%3E%3C/svg%3E",
    eye: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='rgba(0,0,0,0.7)'/%3E%3Ccircle cx='50' cy='50' r='35' fill='white'/%3E%3Ccircle cx='50' cy='50' r='20' fill='%230066cc'/%3E%3Ccircle cx='50' cy='50' r='10' fill='black'/%3E%3Ccircle cx='45' cy='45' r='3' fill='white'/%3E%3C/svg%3E",
    floppy: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect x='5' y='5' width='30' height='30' rx='2' fill='%231a2a40'/%3E%3Crect x='10' y='5' width='20' height='5' fill='%237f8c8d'/%3E%3Crect x='10' y='15' width='20' height='15' fill='%233498db'/%3E%3Ctext x='20' y='12' text-anchor='middle' fill='white' font-family='Arial' font-size='8'%3E3.5'%22%3C/text%3E%3C/svg%3E",
    nokia: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect x='5' y='10' width='30' height='25' rx='3' fill='%232c3e50'/%3E%3Crect x='10' y='15' width='20' height='10' fill='%231abc9c'/%3E%3Ccircle cx='20' cy='30' r='3' fill='%2334495e'/%3E%3Ctext x='20' y='35' text-anchor='middle' fill='white' font-family='Arial' font-size='8'%3ENOKIA%3C/text%3E%3C/svg%3E",
    cpu: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect x='5' y='5' width='40' height='40' fill='%2334495e'/%3E%3Crect x='10' y='10' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='20' y='10' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='30' y='10' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='10' y='20' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='20' y='20' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='30' y='20' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='10' y='30' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='20' y='30' width='5' height='5' fill='%23f1c40f'/%3E%3Crect x='30' y='30' width='5' height='5' fill='%23f1c40f'/%3E%3Ctext x='25' y='45' text-anchor='middle' fill='%2300f7ff' font-family='Arial' font-size='10' font-weight='bold'%3ECPU%3C/text%3E%3C/svg%3E",
    cooler: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%237f8c8d'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(0 30 30)' fill='%23bdc3c7'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(51.4 30 30)' fill='%23bdc3c7'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(102.8 30 30)' fill='%23bdc3c7'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(154.2 30 30)' fill='%23bdc3c7'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(205.6 30 30)' fill='%23bdc3c7'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(257 30 30)' fill='%23bdc3c7'/%3E%3Crect x='25' y='5' width='10' height='25' transform='rotate(308.4 30 30)' fill='%23bdc3c7'/%3E%3Ccircle cx='30' cy='30' r='10' fill='%23e74c3c'/%3E%3C/svg%3E",
    low_barrier: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='108' viewBox='0 0 100 108'%3E%3Crect x='0' y='0' width='100' height='108' rx='10' fill='%237f8c8d'/%3E%3Crect x='10' y='20' width='80' height='5' fill='%23555'/%3E%3Crect x='10' y='35' width='80' height='5' fill='%23555'/%3E%3Crect x='10' y='50' width='80' height='5' fill='%23555'/%3E%3Crect x='10' y='65' width='80' height='5' fill='%23555'/%3E%3Crect x='10' y='80' width='80' height='5' fill='%23555'/%3E%3C/svg%3E"
};

// Загрузка изображений
const loadedImages = {};
let imagesLoaded = 0;
const totalImages = Object.keys(images).length;

function loadImages(callback) {
    for (const [name, dataUri] of Object.entries(images)) {
        const img = new Image();
        img.onload = () => {
            loadedImages[name] = img;
            imagesLoaded++;
            if (imagesLoaded === totalImages) callback();
        };
        img.onerror = () => {
            console.warn(`Не удалось загрузить изображение: ${name}`);
            loadedImages[name] = null;
            imagesLoaded++;
            if (imagesLoaded === totalImages) callback();
        };
        img.src = dataUri;
    }
}

// Отладочная информация
console.log("Инициализация игры...");

// Получаем элементы DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreDisplay = document.getElementById('score-display');
const finalScore = document.getElementById('final-score');
const highScoreElement = document.getElementById('high-score');
const wifiIcon = document.getElementById('wifi-icon');
const powerUpTimer = document.getElementById('power-up-timer');
const debugInfo = document.getElementById('debug-info');
const koOverlay = document.getElementById('ko-overlay');

// Проверяем, все ли элементы найдены
if (!canvas || !startBtn) {
    console.error("Критические элементы не найдены!");
    if (debugInfo) debugInfo.textContent = "Ошибка: элементы не найдены";
} else {
    console.log("Все элементы успешно найдены");
}

// Размеры canvas
canvas.width = 450;
canvas.height = 900;

// Игровые переменные
let gameRunning = false;
let gameSpeed = 7;
let score = 0;
let highScore = localStorage.getItem('vpnRouterHighScore') || 0;
let obstacles = [];
let vpnKeys = [];
let telegramIcons = [];
let frames = 0;
let backgroundElements = [];
let particles = [];
let eyeX = canvas.width + 100;
let eyeY = 200;
let eyeSize = 0;
let computerComponents = [];
let vpnActive = false;
let vpnTimeLeft = 0;
let isFlying = false;
let flyTimeLeft = 0;
let fossils = [];
let pulseValue = 0;
let lastObstacleX = 0;
let activeTelegramIcon = null;
let telegramRopeLength = 0;
let lastObstacleType = '';
let jumpPressTime = 0;
let explosionParticles = [];
let collisionObstacle = null;
let collisionRouterX = 0;
let collisionRouterY = 0;
let collisionAnimationFrame = 0;
let isCollisionAnimating = false;

// Анимационные переменные для ног и антенн
let legAnimationFrame = 0;
let antennaAnimationFrame = 0;

// Обновляем лучший счет
highScoreElement.textContent = highScore;

// Позиция земли (поднята на 30% от низа экрана)
const groundY = canvas.height - (canvas.height * 0.3);

// Создаем фоновые элементы
function createBackgroundElements() {
    backgroundElements = [];
    
    // Добавляем элементы микросхем
    for (let i = 0; i < 20; i++) {
        backgroundElements.push({
            type: 'circuit',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.6,
            size: 5 + Math.random() * 15,
            speed: 0.2 + Math.random() * 0.8
        });
    }
    
    // Добавляем пыль
    for (let i = 0; i < 30; i++) {
        backgroundElements.push({
            type: 'dust',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 1 + Math.random() * 3,
            speed: 0.1 + Math.random() * 0.5
        });
    }
}

// Создаем ископаемые объекты под землей
function createFossils() {
    fossils = [];
    
    // Уменьшаем количество ископаемых в 4 раза (было 8, стало 2)
    for (let i = 0; i < 2; i++) {
        fossils.push({
            type: Math.random() > 0.5 ? 'floppy' : 'nokia',
            x: Math.random() * canvas.width,
            y: groundY + 20 + Math.random() * (canvas.height - groundY - 40),
            size: 30 + Math.random() * 20,
            rotation: Math.random() * Math.PI * 2,
            speed: 1 + Math.random() * 1  // Добавляем скорость движения
        });
    }
}

function updateFossils() {
    fossils.forEach(fossil => {
        fossil.x -= fossil.speed;
        if (fossil.x + fossil.size < 0) {
            fossil.x = canvas.width + fossil.size;
            fossil.y = groundY + 20 + Math.random() * (canvas.height - groundY - 40);
        }
    });
}

// Создаем компьютерные компоненты
function createComputerComponents() {
    computerComponents = [];
    
    // Добавляем процессоры
    for (let i = 0; i < 5; i++) {
        computerComponents.push({
            type: 'cpu',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            size: 30 + Math.random() * 20,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.05,
            speed: 0.2 + Math.random() * 0.5
        });
    }
    
    // Добавляем кулеры
    for (let i = 0; i < 3; i++) {
        computerComponents.push({
            type: 'cooler',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            size: 40 + Math.random() * 20,
            rotation: 0,
            rotationSpeed: 0.1 + Math.random() * 0.1,
            speed: 0.1 + Math.random() * 0.3
        });
    }
    
    // Добавляем провода
    for (let i = 0; i < 8; i++) {
        computerComponents.push({
            type: 'wire',
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.7,
            size: 20 + Math.random() * 20,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
            speed: 0.3 + Math.random() * 0.4,
            waveOffset: Math.random() * Math.PI * 2
        });
    }
}

// Класс частиц для анимаций
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 2 + Math.random() * 4;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.life = 20 + Math.random() * 30;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size *= 0.97;
    }
    
    draw() {
        ctx.globalAlpha = this.life / 50;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// Класс электрических разрядов
class Lightning {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.height = 100 + Math.random() * 200;
        this.life = 30;
        this.width = 2 + Math.random() * 3;
    }
    
    update() {
        this.life--;
    }
    
    draw() {
        ctx.strokeStyle = '#00f7ff';
        ctx.lineWidth = this.width;
        ctx.shadowColor = '#00f7ff';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        
        // Создаем зигзагообразную молнию
        ctx.moveTo(this.x, this.y);
        let currentY = this.y;
        let currentX = this.x;
        
        while (currentY < this.y + this.height) {
            currentY += 10 + Math.random() * 20;
            currentX += (Math.random() - 0.5) * 30;
            ctx.lineTo(currentX, currentY);
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;
    }
}

// Класс роутера
class Router {
    constructor() {
        this.width = 80;
        this.height = 60;
        this.x = 70;
        this.y = groundY - this.height;
        this.gravity = 0.6;
        this.velocity = 0;
        this.jumpForce = 16;
        this.isJumping = false;
        this.isDucking = false;
        this.normalHeight = 60;
        this.duckHeight = 40;
        this.jumpCooldown = 0;
        this.onGround = true;
        this.originalX = 70;
        this.legPosition = 0;
        this.antennaPosition = 0;
    }
    
    draw() {
        // Используем изображение если доступно, иначе рисуем
        if (loadedImages.router) {
            ctx.drawImage(loadedImages.router, this.x, this.y, this.width, this.height);
        } else {
            // Рисуем корпус роутера с закругленными углами
            ctx.save();
            ctx.shadowColor = '#00f7ff';
            ctx.shadowBlur = 15;
            
            // Основной корпус
            ctx.fillStyle = '#1a2a40';
            this.roundRect(ctx, this.x, this.y, this.width, this.height, 10);
            ctx.fill();
            
            // Верхняя панель
            ctx.fillStyle = '#0c1a2f';
            this.roundRect(ctx, this.x, this.y, this.width, 15, 10);
            ctx.fill();
            
            // Светодиоды
            const colors = ['#00ff8c', '#00f7ff', '#ff296d'];
            for (let i = 0; i < 3; i++) {
                ctx.fillStyle = colors[i];
                ctx.beginPath();
                ctx.arc(this.x + 20 + i * 20, this.y + 25, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 10;
            }
            
            // Антенны
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(this.x - 5, this.y - 20, 5, 20);
            ctx.fillRect(this.x + this.width, this.y - 20, 5, 20);
            
            // Логотип VPN
            ctx.fillStyle = '#9b59b6';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('VPONE', this.x + this.width/2, this.y + 45);
            
            // Если роутер пригнулся
            if (this.isDucking) {
                ctx.fillStyle = '#2c3e50';
                this.roundRect(ctx, this.x, this.y + this.height - 10, this.width, 10, 5);
                ctx.fill();
            }
        }
        
        // Рисуем ноги роутера
        this.drawLegs();
        
        // Рисуем антенны
        this.drawAntennas();
        
        // Если активен VPN-щит
        if (vpnActive) {
            ctx.save();
            ctx.strokeStyle = '#9b59b6';
            ctx.lineWidth = 3;
            ctx.shadowColor = '#9b59b6';
            ctx.shadowBlur = 20;
            
            // Анимированная аура - волнистая и ребристая
            pulseValue += 0.1;
            const pulseSize = Math.sin(pulseValue) * 5;
            
            // Эффект расфокусировки при заканчивании защиты
            const timeLeftRatio = vpnTimeLeft / 300;
            const blurLevel = Math.max(3, 20 * (1 - timeLeftRatio));
            ctx.shadowBlur = blurLevel;
            
            // Прозрачность увеличивается при заканчивании
            ctx.globalAlpha = 0.3 + 0.7 * timeLeftRatio;
            
            // Рисуем волнистую ауру
            ctx.beginPath();
            for (let i = 0; i < 24; i++) {
                const angle = (i / 24) * Math.PI * 2;
                const radius = this.width/1.2 + pulseSize + Math.sin(angle * 5 + pulseValue * 2) * 3;
                const x = this.x + this.width/2 + Math.cos(angle) * radius;
                const y = this.y + this.height/2 + Math.sin(angle) * radius;
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            ctx.stroke();
            
            // Внутреннее свечение
            ctx.globalAlpha = 0.1 + 0.2 * timeLeftRatio;
            ctx.beginPath();
            ctx.arc(this.x + this.width/2, this.y + this.height/2, this.width/2 + pulseSize/2, 0, Math.PI * 2);
            ctx.fillStyle = '#9b59b6';
            ctx.fill();
            
            ctx.restore();
        }
    }
    
    drawLegs() {
        // Анимируем ноги только если роутер на земле и не в полете
        if (this.onGround && !isFlying) {
            legAnimationFrame++;
            const legCycle = Math.sin(legAnimationFrame * 0.2) * 5;
            
            // Левая нога
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(this.x + 15, this.y + this.height, 5, 15 + legCycle);
            ctx.fillRect(this.x + 25, this.y + this.height, 5, 15 - legCycle);
            
            // Правая нога
            ctx.fillRect(this.x + 50, this.y + this.height, 5, 15 - legCycle);
            ctx.fillRect(this.x + 60, this.y + this.height, 5, 15 + legCycle);
        } else {
            // Ноги в прыжке/полете - раздвинуты
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(this.x + 15, this.y + this.height, 5, 10);
            ctx.fillRect(this.x + 25, this.y + this.height, 5, 10);
            ctx.fillRect(this.x + 50, this.y + this.height, 5, 10);
            ctx.fillRect(this.x + 60, this.y + this.height, 5, 10);
        }
    }
    
    drawAntennas() {
        antennaAnimationFrame++;
        
        // Левая антенна
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        if (this.onGround && !isFlying) {
            // Антенны двигаются, когда роутер на земле
            const leftAntennaWave = Math.sin(antennaAnimationFrame * 0.15) * 0.2;
            ctx.moveTo(this.x - 5, this.y - 20);
            ctx.quadraticCurveTo(
                this.x - 15, this.y - 40,
                this.x - 10 + leftAntennaWave * 10, this.y - 50
            );
        } else {
            // Антенны замирают в прыжке/полете
            ctx.moveTo(this.x - 5, this.y - 20);
            ctx.quadraticCurveTo(
                this.x - 15, this.y - 40,
                this.x - 10, this.y - 50
            );
        }
        ctx.stroke();
        
        // Кончик левой антенны
        ctx.fillStyle = '#00f7ff';
        ctx.beginPath();
        ctx.arc(this.x - 10, this.y - 50, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = '#00f7ff';
        ctx.shadowBlur = 10;
        
        // Правая антенна
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        if (this.onGround && !isFlying) {
            // Антенны двигаются, когда роутер на земле
            const rightAntennaWave = Math.cos(antennaAnimationFrame * 0.15) * 0.2;
            ctx.moveTo(this.x + this.width + 5, this.y - 20);
            ctx.quadraticCurveTo(
                this.x + this.width + 15, this.y - 40,
                this.x + this.width + 10 + rightAntennaWave * 10, this.y - 50
            );
        } else {
            // Антенны замирают в прыжке/полете
            ctx.moveTo(this.x + this.width + 5, this.y - 20);
            ctx.quadraticCurveTo(
                this.x + this.width + 15, this.y - 40,
                this.x + this.width + 10, this.y - 50
            );
        }
        ctx.stroke();
        
        // Кончик правой антенны
        ctx.fillStyle = '#00f7ff';
        ctx.beginPath();
        ctx.arc(this.x + this.width + 10, this.y - 50, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    
    roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
    
    update() {
        if (this.jumpCooldown > 0) this.jumpCooldown--;
        
        // Применяем гравитацию только если не в полете
        if (!isFlying) {
            this.velocity += this.gravity;
            this.y += this.velocity;
        }
        
        // Проверяем, стоит ли роутер на земле
        if (this.y >= groundY - this.height) {
            this.y = groundY - this.height;
            this.velocity = 0;
            this.isJumping = false;
            this.onGround = true;
        } else {
            this.onGround = false;
        }
        
        // Обновляем высоту при приседании
        if (this.isDucking && !this.isJumping) {
            this.height = this.duckHeight;
            this.y = groundY - this.height; // Опускаем роутер к земле
        } else if (!this.isDucking && !this.isJumping) {
            this.height = this.normalHeight;
            this.y = groundY - this.height; // Возвращаем к нормальной высоте
        }
    }
    
	jump() {
        if (this.onGround && this.jumpCooldown === 0) {
            this.velocity = -this.jumpForce;
            this.isJumping = true;
            this.isDucking = false;
            this.onGround = false;
            this.jumpCooldown = 10;
            
            // Добавляем частицы при прыжке
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.x + this.width/2, this.y + this.height, '#00f7ff'));
            }
        }
    }
    
    duck() {
        if (!this.isJumping) {
            this.isDucking = true;
            this.height = this.duckHeight;
            this.y = groundY - this.height; // Опускаем роутер к земле
        }
    }
    
    stand() {
        this.isDucking = false;
        this.height = this.normalHeight;
        this.y = groundY - this.height; // Возвращаем к нормальной высоте
    }
}

// Класс препятствий (блокировок)
class Obstacle {
    constructor(type) {
        this.type = type;
        this.width = 70;
        this.height = 80;
        this.x = canvas.width;
        this.y = 0;
        this.animationFrame = 0;
        this.isLow = false;
        this.isFlying = false;
		
        // Определяем позицию в зависимости от типа
        if (type.includes('_flying')) {
            this.y = groundY - this.height - 120; // Летающие препятствия выше
            this.isFlying = true;
        } else if (type === 'low_barrier') {
            this.height = 60; // Низкие барьеры ниже
            this.y = groundY - this.height;
            this.isLow = true;
        } else {
            this.y = groundY - this.height; // Обычные препятствия на земле
        }
		
        // Определяем параметры в зависимости от типа
        if (type === 'rkn') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height;
            this.color = '#c0392b';
            this.text = 'ГГГ';
        } else if (type === 'meta') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height;
            this.color = '#1877f2';
            this.text = 'META';
        } else if (type === 'google') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height;
            this.color = '#ea4335';
            this.text = 'GOOGLE';
        } else if (type === 'max') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height;
            this.color = '#e50914';
            this.text = 'MAX';
        } else if (type === 'rkn_flying') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height - 120; // Выше обычного
            this.color = '#c0392b';
            this.text = 'ГГГ';
            this.isFlying = true;
        } else if (type === 'meta_flying') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height - 100; // Выше обычного
            this.color = '#1877f2';
            this.text = 'META';
            this.isFlying = true;
        } else if (type === 'google_flying') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height - 110; // Выше обычного
            this.color = '#ea4335';
            this.text = 'GOOGLE';
            this.isFlying = true;
        } else if (type === 'max_flying') {
            this.width = 70;
            this.height = 80;
            this.y = groundY - this.height - 130; // Выше обычного
            this.color = '#e50914';
            this.text = 'MAX';
            this.isFlying = true;
        } else if (type === 'low_barrier') {
            this.width = 100;
            this.height = canvas.height * 0.12; // 12% от высоты экрана
            this.y = groundY - this.height;
            this.color = '#7f8c8d';
            this.text = '';
            this.isLow = true;
        }
        
        this.particles = [];
    }
    
    draw() {
        // Используем изображение если доступно, иначе рисуем
        const imgName = this.type.includes('_flying') ? this.type.split('_')[0] : this.type;
        const img = loadedImages[imgName];
        
        if (img && this.type !== 'low_barrier') {
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
        } else if (this.type === 'low_barrier' && loadedImages.low_barrier) {
            ctx.drawImage(loadedImages.low_barrier, this.x, this.y, this.width, this.height);
        } else {
            ctx.save();
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 15;
            
            // Рисуем с закругленными углами
            ctx.fillStyle = this.color;
            this.roundRect(ctx, this.x, this.y, this.width, this.height, 10);
            ctx.fill();
            
            // Добавляем детали в зависимости от типа
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            
            // Анимация мерцания
            this.animationFrame++;
            const glowIntensity = Math.sin(this.animationFrame * 0.2) * 0.5 + 0.5;
            ctx.shadowBlur = 10 + glowIntensity * 10;
            
            if (this.type === 'rkn' || this.type === 'rkn_flying') {
                ctx.fillText(this.text, this.x + this.width/2, this.y + 45);
                
                // Иконка блокировки для РКН
                ctx.beginPath();
                ctx.arc(this.x + this.width/2, this.y + 25, 8, 0, Math.PI * 2);
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(this.x + this.width/2 - 5, this.y + 25);
                ctx.lineTo(this.x + this.width/2 + 5, this.y + 25);
                ctx.stroke();
            } else if (this.type === 'meta' || this.type === 'meta_flying') {
                ctx.fillText(this.text, this.x + this.width/2, this.y + 45);
                
                // Простая иконка Facebook
                ctx.beginPath();
                ctx.moveTo(this.x + this.width/2, this.y + 20);
                ctx.lineTo(this.x + this.width/2 + 5, this.y + 30);
                ctx.lineTo(this.x + this.width/2, this.y + 30);
                ctx.lineTo(this.x + this.width/2, this.y + 35);
                ctx.lineTo(this.x + this.width/2 - 5, this.y + 35);
                ctx.lineTo(this.x + this.width/2 - 5, this.y + 30);
                ctx.lineTo(this.x + this.width/2 - 10, this.y + 30);
                ctx.lineTo(this.x + this.width/2 - 5, this.y + 20);
                ctx.closePath();
                ctx.fill();
            } else if (this.type === 'google' || this.type === 'google_flying') {
                ctx.fillText(this.text, this.x + this.width/2, this.y + 45);
                
                // Иконка Google
                ctx.beginPath();
                ctx.arc(this.x + this.width/2, this.y + 25, 10, 0.25 * Math.PI, 1.75 * Math.PI);
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(this.x + this.width/2, this.y + 15);
                ctx.lineTo(this.x + this.width/2, this.y + 35);
                ctx.stroke();
            } else if (this.type === 'max' || this.type === 'max_flying') {
                ctx.fillText(this.text, this.x + this.width/2, this.y + 45);
                
                // Иконка видео для MAX
                ctx.beginPath();
                ctx.moveTo(this.x + this.width/2 - 5, this.y + 20);
                ctx.lineTo(this.x + this.width/2 + 5, this.y + 25);
                ctx.lineTo(this.x + this.width/2 - 5, this.y + 30);
                ctx.closePath();
                ctx.fill();
            } else if (this.type === 'low_barrier') {
                // Рисуем полосы на низком барьере
                ctx.fillStyle = '#555';
                for (let i = 0; i < 5; i++) {
                    ctx.fillRect(this.x + 10, this.y + 20 + i * 15, this.width - 20, 5);
                }
            }
            
            ctx.restore();
        }
    }
    
    roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
    
    update() {
        this.x -= gameSpeed;
        
        // Добавляем частицы от препятствий
        if (frames % 5 === 0) {
            particles.push(new Particle(this.x + this.width, this.y + this.height/2, this.color));
        }
    }
    
    // Проверка столкновения
    collide(router) {
        // Если активен VPN, игнорируем столкновения
        if (vpnActive) return false;
        
        // Для низких препятствий - проверяем, пригнулся ли роутер
        if (this.isLow && router.isDucking) return false;
        
        // Для летающих препятствий - проверяем, находится ли роутер в прыжке/полете
        if (this.isFlying && !router.isJumping && !isFlying) return false;
        
        return (
            router.x < this.x + this.width &&
            router.x + router.width > this.x &&
            router.y < this.y + this.height &&
            router.y + router.height > this.y
        );
    }
}

// Класс VPN-ключей для сбора
class VpnKey {
    constructor() {
        this.width = 35;
        this.height = 35;
        this.x = canvas.width;
        this.y = groundY - 80 - Math.random() * 200;
        this.color = '#9b59b6';
        this.collected = false;
        this.angle = 0;
    }
    
    draw() {
        // Используем изображение если доступно, иначе рисуем
        if (loadedImages.vpnKey) {
            this.angle += 0.05;
            const floatY = Math.sin(this.angle) * 5;
            ctx.save();
            ctx.translate(this.x + this.width/2, this.y + this.height/2 + floatY);
            ctx.rotate(this.angle);
            ctx.drawImage(loadedImages.vpnKey, -this.width/2, -this.height/2, this.width, this.height);
            ctx.restore();
        } else {
            ctx.save();
            this.angle += 0.05;
            const floatY = Math.sin(this.angle) * 5;
            
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 20;
            
            // Рисуем ключ с градиентом
            const gradient = ctx.createRadialGradient(
                this.x + this.width/2, this.y + this.height/2 + floatY, 1,
                this.x + this.width/2, this.y + this.height/2 + floatY, 20
            );
            gradient.addColorStop(0, '#e100ff');
            gradient.addColorStop(1, '#9b59b6');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(this.x + this.width/2, this.y + floatY);
            ctx.lineTo(this.x + this.width, this.y + this.height/2 + floatY);
            ctx.lineTo(this.x + this.width/2, this.y + this.height + floatY);
            ctx.lineTo(this.x, this.y + this.height/2 + floatY);
            ctx.closePath();
            ctx.fill();
            
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('VPN', this.x + this.width/2, this.y + 22 + floatY);
            
            ctx.restore();
        }
    }
    
    update() {
        this.x -= gameSpeed;
    }
    
    // Проверка сбора
    collect(router) {
        if (this.collected) return false;
        
        const collected = (
            router.x < this.x + this.width &&
            router.x + router.width > this.x &&
            router.y < this.y + this.height &&
            router.y + router.height > this.y
        );
        
        if (collected) {
            this.collected = true;
            
            // Добавляем частицы при сборе ключа
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x + this.width/2, this.y + this.height/2, '#9b59b6'));
            }
            
            // Активируем VPN защиту
            activateVPN();
            
            return true;
        }
        
        return false;
    }
}

// Класс Telegram-иконок для полета
class TelegramIcon {
    constructor() {
        this.width = 40;
        this.height = 40;
        this.x = canvas.width;
        this.y = groundY - 120 - Math.random() * 300;
        this.color = '#0088cc';
        this.collected = false;
        this.angle = 0;
        this.wingAngle = 0;
    }
    
    draw() {
        // Используем изображение если доступно, иначе рисуем
        if (loadedImages.telegram) {
            this.angle += 0.05;
            this.wingAngle += 0.1;
            const floatY = Math.sin(this.angle) * 5;
            const wingFlap = Math.sin(this.wingAngle) * 5;
            
            ctx.save();
            ctx.translate(this.x + this.width/2, this.y + this.height/2 + floatY - wingFlap/2);
            ctx.rotate(this.angle * 0.5);
            ctx.drawImage(loadedImages.telegram, -this.width/2, -this.height/2, this.width, this.height);
            ctx.restore();
        } else {
            ctx.save();
            this.angle += 0.05;
            this.wingAngle += 0.1;
            const floatY = Math.sin(this.angle) * 5;
            const wingFlap = Math.sin(this.wingAngle) * 5;
            
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 20;
            
            // Тело птицы
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(this.x + this.width/2, this.y + this.height/2 + floatY, this.width/2, this.height/2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Крылья
            ctx.fillStyle = '#006699';
            ctx.beginPath();
            ctx.ellipse(this.x + this.width/2 - 5, this.y + this.height/2 + floatY - wingFlap, this.width/3, this.height/4, Math.PI/4, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.ellipse(this.x + this.width/2 + 5, this.y + this.height/2 + floatY + wingFlap, this.width/3, this.height/4, -Math.PI/4, 0, Math.PI * 2);
            ctx.fill();
            
            // Клюв
            ctx.fillStyle = '#ffa500';
            ctx.beginPath();
            ctx.moveTo(this.x + this.width/2 + 15, this.y + this.height/2 + floatY);
            ctx.lineTo(this.x + this.width/2 + 25, this.y + this.height/2 + floatY - 5);
            ctx.lineTo(this.x + this.width/2 + 25, this.y + this.height/2 + floatY + 5);
            ctx.closePath();
            ctx.fill();
            
            // Глаз
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(this.x + this.width/2 + 8, this.y + this.height/2 + floatY - 3, 3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(this.x + this.width/2 + 9, this.y + this.height/2 + floatY - 3, 1.5, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('TG', this.x + this.width/2, this.y + this.height/2 + 15 + floatY);
            
            ctx.restore();
        }
    }
    
    update() {
        this.x -= gameSpeed;
    }
    
    // Проверка сбора
    collect(router) {
        if (this.collected) return false;
        
        const collected = (
            router.x < this.x + this.width &&
            router.x + router.width > this.x &&
            router.y < this.y + this.height &&
            router.y + router.height > this.y
        );
        
        if (collected) {
            this.collected = true;
            
            // Добавляем частицы при сборе иконки
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x + this.width/2, this.y + this.height/2, '#0088cc'));
            }
            
            // Активируем полет
            activateFlight(this);
            
            return true;
        }
        
        return false;
    }
}

// Анимация столкновения
function animateCollision() {
    if (!isCollisionAnimating) return;
    
    collisionAnimationFrame++;
    
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем фон
    drawBackground();
    
    // Рисуем компоненты компьютера
    drawComputerComponents();
    
    // Рисуем препятствия (кроме того, с которым столкнулись)
    obstacles.forEach(obstacle => {
        if (obstacle !== collisionObstacle) {
            obstacle.draw();
        }
    });
    
    // Рисуем VPN-ключи
    vpnKeys.forEach(key => key.draw());
    
    // Рисуем Telegram-иконки
    telegramIcons.forEach(icon => icon.draw());
    
    // Рисуем частицы
    drawParticles();
    
    // Рисуем глаз ОМОНа
    drawEye();
    
    // Анимация увеличения и вибрации
    const scale = 1 + (collisionAnimationFrame / 30) * 0.5;
    const shakeX = Math.sin(collisionAnimationFrame * 10) * 5;
    const shakeY = Math.cos(collisionAnimationFrame * 8) * 5;
    
    // Рисуем роутер увеличенным и с вибрацией
    ctx.save();
    ctx.translate(collisionRouterX + router.width/2, collisionRouterY + router.height/2);
    ctx.scale(scale, scale);
    ctx.translate(-(collisionRouterX + router.width/2) + shakeX, -(collisionRouterY + router.height/2) + shakeY);
    
    if (loadedImages.router) {
        ctx.drawImage(loadedImages.router, collisionRouterX, collisionRouterY, router.width, router.height);
    } else {
        // Рисуем роутер, если изображение не загружено
        router.draw();
    }
    ctx.restore();
    
    // Рисуем препятствие увеличенным и с вибрацией
    ctx.save();
    ctx.translate(collisionObstacle.x + collisionObstacle.width/2, collisionObstacle.y + collisionObstacle.height/2);
    ctx.scale(scale, scale);
    ctx.translate(-(collisionObstacle.x + collisionObstacle.width/2) + shakeX, -(collisionObstacle.y + collisionObstacle.height/2) + shakeY);
    collisionObstacle.draw();
    ctx.restore();
    
    // Добавляем эффекты взрыва
    if (collisionAnimationFrame % 5 === 0) {
        for (let i = 0; i < 5; i++) {
            explosionParticles.push(new Particle(
                collisionRouterX + Math.random() * router.width,
                collisionRouterY + Math.random() * router.height,
                '#ff296d'
            ));
        }
        
        for (let i = 0; i < 5; i++) {
            explosionParticles.push(new Particle(
                collisionObstacle.x + Math.random() * collisionObstacle.width,
                collisionObstacle.y + Math.random() * collisionObstacle.height,
                collisionObstacle.color
            ));
        }
    }
    
    // Рисуем частицы взрыва
    explosionParticles.forEach((particle, index) => {
        particle.draw();
        particle.update();
        
        if (particle.life <= 0) {
            explosionParticles.splice(index, 1);
        }
    });
    
    // Показываем K.O. оверлей
    if (collisionAnimationFrame > 20) {
        koOverlay.style.display = 'flex';
    }
    
    // Завершаем анимацию через 3 секунды (180 кадров при 60 FPS)
    if (collisionAnimationFrame > 180) {
        isCollisionAnimating = false;
        gameOver();
    } else {
        requestAnimationFrame(animateCollision);
    }
}

// Активация VPN защиты
function activateVPN() {
    vpnActive = true;
    vpnTimeLeft = 300; // 5 секунд при 60 FPS
    
    // Визуальные эффекты
    wifiIcon.textContent = '🛡️';
    wifiIcon.style.color = '#9b59b6';
    wifiIcon.style.textShadow = '0 0 15px #9b59b6';
    
    powerUpTimer.textContent = `VPN: ${Math.ceil(vpnTimeLeft/60)}с`;
    powerUpTimer.style.display = 'block';
}

// Активация полета с Telegram
function activateFlight(telegramIcon) {
    isFlying = true;
    flyTimeLeft = 300; // 5 секунд при 60 FPS
    
    // Создаем активную иконку Telegram, которая будет впереди роутера
    activeTelegramIcon = {
        x: router.x + 200, // Начинаем впереди роутера
        y: groundY - 300,  // Выше обычной позиции
        width: telegramIcon.width,
        height: telegramIcon.height,
        initialX: router.x + 200
    };
    
    // Визуальные эффекты
    wifiIcon.textContent = '✈️';
    wifiIcon.style.color = '#0088cc';
    wifiIcon.style.textShadow = '0 0 15px #0088cc';
    
    powerUpTimer.textContent = `Полет: ${Math.ceil(flyTimeLeft/60)}с`;
    powerUpTimer.style.display = 'block';
}

// Обновление таймеров бонусов
function updatePowerUps() {
    if (vpnActive) {
        vpnTimeLeft--;
        powerUpTimer.textContent = `VPN: ${Math.ceil(vpnTimeLeft/60)}с`;
        
        if (vpnTimeLeft <= 0) {
            vpnActive = false;
            wifiIcon.textContent = '📶';
            wifiIcon.style.color = '#00ff8c';
            wifiIcon.style.textShadow = '0 0 10px #00ff8c';
            powerUpTimer.style.display = 'none';
        }
    }
    
    if (isFlying) {
        flyTimeLeft--;
        powerUpTimer.textContent = `Полет: ${Math.ceil(flyTimeLeft/60)}с`;
        
        if (activeTelegramIcon) {
            // Иконка всегда впереди роутера
            activeTelegramIcon.x = router.x + 200;
            
            // Плавно поднимаем роутер на высоту полета
            if (router.y > groundY - 250) {
                router.y -= 8;
            }
            
            // Добавляем эффект шлейфа при полете
            if (frames % 3 === 0) {
                particles.push(new Particle(router.x + router.width, router.y + router.height/2, '#0088cc'));
            }
        }
        
        // Начисляем дополнительные очки за полет
        if (frames % 10 === 0) {
            score += 2;
            scoreDisplay.textContent = score;
        }
        
        if (flyTimeLeft <= 0) {
            isFlying = false;
            activeTelegramIcon = null;
            
            // Плавно опускаем роутер на землю
            const landInterval = setInterval(() => {
                if (router.y < groundY - router.height) {
                    router.y += 5;
                } else {
                    clearInterval(landInterval);
                    router.y = groundY - router.height;
                    wifiIcon.textContent = '📶';
                    wifiIcon.style.color = '#00ff8c';
                    wifiIcon.style.textShadow = '0 0 10px #00ff8c';
                    powerUpTimer.style.display = 'none';
                }
            }, 30);
        }
    }
}

// Отрисовка троса от роутера к Telegram
function drawTelegramRope() {
    if (!isFlying || !activeTelegramIcon) return;
    
    ctx.save();
    ctx.strokeStyle = '#0088cc';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#0088cc';
    ctx.shadowBlur = 10;
    ctx.setLineDash([5, 15]);
    ctx.lineDashOffset = -frames;
    
    // Рисуем трос от роутера к иконке Telegram
    ctx.beginPath();
    ctx.moveTo(router.x + router.width/2, router.y + router.height/2);
    ctx.lineTo(activeTelegramIcon.x + activeTelegramIcon.width/2, 
               activeTelegramIcon.y + activeTelegramIcon.height/2);
    ctx.stroke();
    
    ctx.restore();
    
    // Рисуем иконку Telegram
    if (loadedImages.telegram) {
        // Анимация полета иконки
        const floatY = Math.sin(frames * 0.1) * 5;
        ctx.drawImage(
            loadedImages.telegram, 
            activeTelegramIcon.x, 
            activeTelegramIcon.y + floatY, 
            activeTelegramIcon.width, 
            activeTelegramIcon.height
        );
    }
}

// Создаем экземпляр роутера
const router = new Router();
let lightnings = [];

// Инициализация игры
function initGame() {
    console.log("Инициализация игры...");
    if (debugInfo) debugInfo.textContent = "Инициализация игры...";
    
    score = 0;
    gameSpeed = 7;
    frames = 0;
    obstacles = [];
    vpnKeys = [];
    telegramIcons = [];
    particles = [];
    lightnings = [];
    eyeX = canvas.width + 100;
    eyeY = 200;
    eyeSize = 0;
    vpnActive = false;
    vpnTimeLeft = 0;
    isFlying = false;
    flyTimeLeft = 0;
    pulseValue = 0;
    lastObstacleX = 0;
    activeTelegramIcon = null;
    telegramRopeLength = 0;
    lastObstacleType = '';
    scoreDisplay.textContent = '0';
    wifiIcon.textContent = '📶';
    wifiIcon.style.color = '#00ff8c';
    wifiIcon.style.textShadow = '0 0 10px #00ff8c';
    powerUpTimer.style.display = 'none';
    koOverlay.style.display = 'none';
    isCollisionAnimating = false;
    explosionParticles = [];
    
    createBackgroundElements();
    createComputerComponents();
    createFossils();
    
    // Сбрасываем позицию роутера
    router.x = 70;
    router.y = groundY - router.height;
    router.velocity = 0;
    router.isJumping = false;
    router.isDucking = false;
    router.height = router.normalHeight;
    router.onGround = true;
    
    canvas.focus();
    
    if (debugInfo) debugInfo.textContent = "Игра инициализирована";
    console.log("Игра инициализирована");
}

// Создание препятствий с разным расстоянием и высотой
function createObstacle() {
    // Случайный интервал между препятствиями (от 90 до 150 кадров)
    if (frames % Math.floor(Math.random() * 60 + 90) === 0) {
        const types = ['rkn', 'meta', 'google', 'max', 'rkn_flying', 'meta_flying', 'google_flying', 'max_flying', 'low_barrier'];
        let type = types[Math.floor(Math.random() * types.length)];
        
        // Гарантируем, что 20-40% препятствий будут летающими (в воздухе)
        if (Math.random() < 0.3) {
            const flyingTypes = ['rkn_flying', 'meta_flying', 'google_flying', 'max_flying'];
            type = flyingTypes[Math.floor(Math.random() * flyingTypes.length)];
        }
        
        // Проверяем, чтобы препятствия не появлялись слишком близко друг к другу
        const minDistance = 300;
        let canCreate = true;
        
        for (const obstacle of obstacles) {
            if (canvas.width - obstacle.x < minDistance) {
                canCreate = false;
                break;
            }
        }
        
        if (canCreate) {
            obstacles.push(new Obstacle(type));
            lastObstacleType = type;
        }
    }
}

// Создание VPN-ключей (2-3 раза в минуту)
function createVpnKey() {
    if (frames % 900 === 0) { // Примерно каждые 15 секунд (4 раза в минуту)
        vpnKeys.push(new VpnKey());
    }
}

// Создание Telegram-иконок (1-2 раза в минуту)
function createTelegramIcon() {
    if (frames % 1800 === 0) { // Примерно каждые 30 секунд (2 раза в минуту)
        telegramIcons.push(new TelegramIcon());
    }
}

// Создание молний
function createLightning() {
    if (Math.random() < 0.02) {
        lightnings.push(new Lightning());
    }
}

// Обновление глаза ОМОНа
function updateEye() {
    if (score > 50) {
        eyeX -= 0.7;
        eyeSize = 60 + Math.sin(frames * 0.05) * 10;
        
        if (eyeX < -100) {
            eyeX = canvas.width + 100;
        }
    }
}

// Отрисовка глаза ОМОНа
function drawEye() {
    if (score > 50 && eyeX < canvas.width + 100) {
        if (loadedImages.eye) {
            ctx.drawImage(loadedImages.eye, eyeX - eyeSize, eyeY - eyeSize, eyeSize * 2, eyeSize * 2);
        } else {
            ctx.save();
            
            // Внешняя часть глаза
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.beginPath();
            ctx.arc(eyeX, eyeY, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Белок глаза
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(eyeX, eyeY, eyeSize * 0.7, 0, Math.PI * 2);
            ctx.fill();
            
            // Радужка
            ctx.fillStyle = '#0066cc';
            ctx.beginPath();
            ctx.arc(eyeX, eyeY, eyeSize * 0.4, 0, Math.PI * 2);
            ctx.fill();
            
            // Зрачок
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(eyeX, eyeY, eyeSize * 0.2, 0, Math.PI * 2);
            ctx.fill();
            
            // Блики
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(eyeX - eyeSize * 0.1, eyeY - eyeSize * 0.1, eyeSize * 0.1, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
    }
}

// Отрисовка ископаемых под землей
function drawFossils() {
    fossils.forEach(fossil => {
		
		// Добавляем небольшую анимацию "плавания" для реалистичности
        const floatOffset = Math.sin(frames * 0.01 + fossil.x * 0.1) * 2;
        
        ctx.save();
        ctx.translate(fossil.x, fossil.y + floatOffset);
        ctx.rotate(fossil.rotation);

        
        if (fossil.type === 'floppy' && loadedImages.floppy) {
            ctx.drawImage(loadedImages.floppy, -fossil.size/2, -fossil.size/2, fossil.size, fossil.size);
        } else if (fossil.type === 'nokia' && loadedImages.nokia) {
            ctx.drawImage(loadedImages.nokia, -fossil.size/2, -fossil.size/2, fossil.size, fossil.size);
        } else if (fossil.type === 'floppy') {
            // Рисуем дискету
            ctx.fillStyle = '#1a2a40';
            ctx.fillRect(-fossil.size/2, -fossil.size/4, fossil.size, fossil.size/2);
            
            // Металлическая шторка
            ctx.fillStyle = '#7f8c8d';
            ctx.fillRect(-fossil.size/2 + 5, -fossil.size/4 + 5, fossil.size - 10, 10);
            
            // Этикетка
            ctx.fillStyle = '#3498db';
            ctx.fillRect(-fossil.size/2 + 5, -fossil.size/4 + 20, fossil.size - 10, fossil.size/2 - 25);
            
            // Надпись
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 8px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('3.5"', 0, 5);
        } else {
            // Рисуем Nokia телефон
            ctx.fillStyle = '#2c3e50';
            ctx.fillRect(-fossil.size/2, -fossil.size/3, fossil.size, fossil.size*2/3);
            
            // Экран
            ctx.fillStyle = '#1abc9c';
            ctx.fillRect(-fossil.size/2 + 5, -fossil.size/3 + 5, fossil.size - 10, fossil.size/3 - 10);
            
            // Кнопки
            ctx.fillStyle = '#34495e';
            ctx.beginPath();
            ctx.arc(0, fossil.size/4, 5, 0, Math.PI * 2);
            ctx.fill();
            
            // Логотип
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('NOKIA', 0, -fossil.size/4 + 20);
        }
        
        ctx.restore();
    });
}

// Отрисовка компьютерных компонентов
function drawComputerComponents() {
    computerComponents.forEach(component => {
        ctx.save();
        
        if (component.type === 'cpu' && loadedImages.cpu) {
            component.rotation += component.rotationSpeed;
            ctx.translate(component.x, component.y);
            ctx.rotate(component.rotation);
            ctx.drawImage(loadedImages.cpu, -component.size/2, -component.size/2, component.size, component.size);
        } else if (component.type === 'cooler' && loadedImages.cooler) {
            component.rotation += component.rotationSpeed;
            ctx.translate(component.x, component.y);
            ctx.rotate(component.rotation);
            ctx.drawImage(loadedImages.cooler, -component.size/2, -component.size/2, component.size, component.size);
        } else if (component.type === 'cpu') {
            // Процессор
            component.rotation += component.rotationSpeed;
            ctx.translate(component.x, component.y);
            ctx.rotate(component.rotation);
            
            // Основание процессора
            ctx.fillStyle = '#34495e';
            ctx.fillRect(-component.size/2, -component.size/2, component.size, component.size);
            
            // Контакты
            ctx.fillStyle = '#f1c40f';
            const pinSize = component.size / 10;
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    ctx.fillRect(
                        -component.size/2 + pinSize/2 + j * (component.size / 3.5),
                        -component.size/2 + pinSize/2 + i * (component.size / 3.5),
                        pinSize, pinSize
                    );
                }
            }
            
            // Логотип
            ctx.fillStyle = '#00f7ff';
            ctx.font = 'bold ' + (component.size/5) + 'px Arial';
            ctx.fillText('CPU', -component.size/4, component.size/6);
            
        } else if (component.type === 'cooler') {
            // Кулер охлаждения
            component.rotation += component.rotationSpeed;
            ctx.translate(component.x, component.y);
            ctx.rotate(component.rotation);
            
            // Основание кулера
            ctx.fillStyle = '#7f8c8d';
            ctx.beginPath();
            ctx.arc(0, 0, component.size/2, 0, Math.PI * 2);
            ctx.fill();
            
            // Лопасти
            ctx.fillStyle = '#bdc3c7';
            for (let i = 0; i < 7; i++) {
                ctx.save();
                ctx.rotate(i * (Math.PI * 2 / 7));
                ctx.fillRect(component.size/4, -component.size/15, component.size/2, component.size/7.5);
                ctx.restore();
            }
            
            // Центр
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.arc(0, 0, component.size/6, 0, Math.PI * 2);
            ctx.fill();
            
        } else if (component.type === 'wire') {
            // Провода
            component.rotation += component.rotationSpeed;
            const waveY = Math.sin(frames * 0.05 + component.waveOffset) * 10;
            
            ctx.strokeStyle = '#f39c12';
            ctx.lineWidth = 3;
            ctx.shadowColor = '#f39c12';
            ctx.shadowBlur = 10;
            
            ctx.beginPath();
            ctx.moveTo(component.x, component.y);
            
            // Создаем волнистый провод
            for (let i = 1; i <= 5; i++) {
                ctx.lineTo(
                    component.x + i * 20, 
                    component.y + waveY * Math.sin(i * 0.5)
                );
            }
            
            ctx.stroke();
        }
        
        ctx.restore();
        
        // Обновляем позицию компонента
        component.x -= component.speed;
        if (component.x < -100) {
            component.x = canvas.width + 100;
            component.y = Math.random() * canvas.height * 0.7;
        }
    });
}

// Проверка столкновений
function checkCollisions() {
    // Проверяем препятствия
    for (let i = obstacles.length - 1; i >= 0; i--) {
        if (obstacles[i].collide(router)) {
            // Запускаем анимацию столкновения
            collisionObstacle = obstacles[i];
            collisionRouterX = router.x;
            collisionRouterY = router.y;
            collisionAnimationFrame = 0;
            isCollisionAnimating = true;
            gameRunning = false;
            animateCollision();
            return;
        }
    }
    
    // Проверяем VPN ключи
    for (let i = vpnKeys.length - 1; i >= 0; i--) {
        if (vpnKeys[i].collect(router)) {
            score += 10;
            scoreDisplay.textContent = score;
            vpnKeys.splice(i, 1);
        }
    }
    
    // Проверяем Telegram иконки
    for (let i = telegramIcons.length - 1; i >= 0; i--) {
        if (telegramIcons[i].collect(router)) {
            score += 15;
            scoreDisplay.textContent = score;
            telegramIcons.splice(i, 1);
        }
    }
}

// Увеличиваем сложность со временем
function increaseDifficulty() {
    if (frames % 500 === 0) {
        gameSpeed += 0.5;
    }
    
    if (frames % 10 === 0 && !isFlying) {
        score += 1;
        scoreDisplay.textContent = score;
    }
}

// Отрисовка фона с кибер-стилем (внутри системного блока)
function drawBackground() {
    // Используем изображение фона если доступно
    if (loadedImages.background) {
        ctx.drawImage(loadedImages.background, 0, 0, canvas.width, canvas.height);
    } else {
        // Основной фон - плата системного блока
        ctx.fillStyle = '#0a1420';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Рисуем дорожки платы
        ctx.strokeStyle = 'rgba(0, 247, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 20; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * 50);
            ctx.lineTo(canvas.width, i * 50 + Math.sin(i) * 20);
            ctx.stroke();
        }
        
        // Рисуем контакты платы
        for (let i = 0; i < 30; i++) {
            for (let j = 0; j < 20; j++) {
                if (Math.random() > 0.7) {
                    ctx.fillStyle = 'rgba(0, 247, 255, 0.2)';
                    ctx.fillRect(i * 30, j * 50, 2, 8);
                }
            }
        }
    }
    
    // Рисуем фоновые элементы
    backgroundElements.forEach(element => {
        if (element.type === 'circuit') {
            ctx.fillStyle = 'rgba(0, 247, 255, 0.1)';
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (element.type === 'dust') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Обновляем позицию элемента
        element.x -= element.speed;
        if (element.x < -20) {
            element.x = canvas.width + 20;
            element.y = Math.random() * canvas.height * 0.8;
        }
    });
    
    // Рисуем землю (плату)
    ctx.fillStyle = '#0c1a2f';
    ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);
    
    // Рисуем ископаемые под землей
    drawFossils();
    
    // Рисуем дорожки на плате
    ctx.strokeStyle = 'rgba(0, 247, 255, 0.2)';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, groundY + 20 + i * 15);
        ctx.bezierCurveTo(
            canvas.width/4, groundY + 10 + i * 15,
            canvas.width/2, groundY + 30 + i * 15,
            canvas.width, groundY + 20 + i * 15
        );
        ctx.stroke();
    }
    
    // Рисуем контакты на плате
    for (let i = 0; i < 20; i++) {
        ctx.fillStyle = 'rgba(0, 247, 255, 0.3)';
        ctx.fillRect(i * 25, groundY + 5, 3, 10);
    }
}

// Отрисовка молний
function drawLightnings() {
    lightnings.forEach((lightning, index) => {
        lightning.draw();
        lightning.update();
        
        if (lightning.life <= 0) {
            lightnings.splice(index, 1);
        }
    });
}

// Отрисовка частиц
function drawParticles() {
    particles.forEach((particle, index) => {
        particle.draw();
        particle.update();
        
        if (particle.life <= 0) {
            particles.splice(index, 1);
        }
    });
}

// Конец игры
function gameOver() {
    gameRunning = false;
    
    // Обновляем лучший счет
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('vpnRouterHighScore', highScore);
        highScoreElement.textContent = highScore;
    }
    
    finalScore.textContent = score;
    gameOverScreen.style.display = 'flex';
    koOverlay.style.display = 'none';
    
    if (debugInfo) debugInfo.textContent = "Игра окончена. Счет: " + score;
}

// Основной игровой цикл
function gameLoop() {
    if (!gameRunning || isCollisionAnimating) {
        return;
    }
    
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем фон
    drawBackground();
    
    // Рисуем молнии
    drawLightnings();
    
    // Рисуем компоненты компьютера
    drawComputerComponents();
	
	// Обновляем позиции ископаемых
    updateFossils();
    
    // Обновляем и рисуем препятствия
    for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].draw();
        obstacles[i].update();
        
        // Удаляем препятствия, ушедшие за экран
        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1);
        }
    }
    
    // Обновляем и рисуем VPN-ключи
    for (let i = vpnKeys.length - 1; i >= 0; i--) {
        vpnKeys[i].draw();
        vpnKeys[i].update();
        
        // Удаляем ключи, ушедшие за экран
        if (vpnKeys[i].x + vpnKeys[i].width < 0) {
            vpnKeys.splice(i, 1);
        }
    }
    
    // Обновляем и рисуем Telegram-иконки
    for (let i = telegramIcons.length - 1; i >= 0; i--) {
        telegramIcons[i].draw();
        telegramIcons[i].update();
        
        // Удаляем иконки, ушедшие за экран
        if (telegramIcons[i].x + telegramIcons[i].width < 0) {
            telegramIcons.splice(i, 1);
        }
    }
    
    // Обновляем и рисуем роутер
    router.update();
    router.draw();
    
    // Рисуем трос от Telegram, если активен полет
    drawTelegramRope();
    
    // Рисуем частицы
    drawParticles();
    
    // Рисуем глаз ОМОНа
    drawEye();
    
    // Создаем новые препятствия, ключи и иконки
    createObstacle();
    createVpnKey();
    createTelegramIcon();
    createLightning();
    
    // Проверяем столкновения
    checkCollisions();
    
    // Увеличиваем сложность
    increaseDifficulty();
    
    // Обновляем глаз ОМОНа
    updateEye();
    
    // Обновляем бонусы
    updatePowerUps();
    
    // Увеличиваем счетчик кадров
    frames++;
    
    // Запускаем следующий кадр
    requestAnimationFrame(gameLoop);
}

// Обработчики событий
// Обработчики событий
function setupEventListeners() {
    console.log("Настройка обработчиков событий...");
    
    // Обработчик нажатия кнопки старта
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log("Кнопка запуска нажата");
            if (debugInfo) debugInfo.textContent = "Запуск игры...";
            startScreen.style.display = 'none';
            gameRunning = true;
            initGame();
            gameLoop();
        });
    } else {
        console.error("Кнопка запуска не найдена!");
    }
    
    // Обработчик кнопки рестарта
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            console.log("Кнопка перезагрузки нажата");
            gameOverScreen.style.display = 'none';
            gameRunning = true;
            initGame();
            gameLoop();
        });
    } else {
        console.error("Кнопка перезагрузки не найдена!");
    }
    
    // Флаги для отслеживания состояния ввода
    let isJumping = false;
    let jumpStartTime = 0;
    
    // Общая функция обработки прыжка
	function handleJumpStart() {
        if (!isJumping && gameRunning) {
            isJumping = true;
            router.jump(); // Простой прыжок без параметров
        }
    }
    
    function handleJumpEnd() {
        isJumping = false;
        // Больше не нужно вычислять длительность нажатия
    }
    
    // Обработчик клавиатуры - пробел
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && gameRunning) {
            e.preventDefault();
            handleJumpStart();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space' && gameRunning) {
            e.preventDefault();
            handleJumpEnd();
        }
    });
    
    // Обработчик тапов по экрану для прыжка
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleJumpStart();
    });

    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        handleJumpEnd();
    });

    // Обработчик кликов мышью для прыжка
    canvas.addEventListener('mousedown', (e) => {
        e.preventDefault();
        handleJumpStart();
    });

    canvas.addEventListener('mouseup', (e) => {
        e.preventDefault();
        handleJumpEnd();
    });
    
    // Обработчик стрелки вниз для приседания
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowDown' && gameRunning) {
            router.duck();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowDown' && gameRunning) {
            router.stand();
        }
    });
    
    console.log("Обработчики событий настроены");
}

// Запускаем игру
window.onload = function() {
    console.log("Документ загружен, инициализация игры...");
    if (debugInfo) debugInfo.textContent = "Документ загружен";
    
    // Загружаем изображения перед началом игры
    loadImages(() => {
        console.log("Изображения загружены:", imagesLoaded === totalImages ? "Все" : "Не все");
        setupEventListeners();
        createBackgroundElements();
        createComputerComponents();
        createFossils();
        
        if (debugInfo) debugInfo.textContent = "Игра готова. Нажмите 'ЗАПУСК СИСТЕМЫ'";
        console.log("Игра готова к запуску");
    });
};
