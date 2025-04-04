const tiaoZhuans = document.querySelectorAll('.tiaozhuan');
let currentIndex = 0;
let interval;

tiaoZhuans.forEach((tiaoZhan) => {
  tiaoZhan.addEventListener('click', () => {
    window.open('video.html', '_blank');
  });
});

const backgroundImages = [
  'url("images/part21.webp")',
  'url("images/part22.webp")',
  'url("images/part23.webp")',
  'url("images/part24.webp")',
  'url("images/part25.webp")',
  'url("images/part26.webp")',
  'url("images/part27.webp")',
  'url("images/part28.webp")',
  'url("images/part29.webp")',
  'url("images/part45.webp")',
  'url("images/part43.webp")',
]

const luenboItems = document.querySelectorAll('.luenbo-item');

luenboItems.forEach((luenboItem, index) => {
  luenboItem.addEventListener('mouseenter', () => {
    const backgroundImage = backgroundImages[index];
    document.querySelector('.background').style.backgroundImage = backgroundImage;
  });
});


//页面自动轮播的开启和停止
function autoplay() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    document.querySelector('.background').style.backgroundImage = backgroundImages[currentIndex];
    luenboItems.forEach((item) => {
      item.classList.remove('activefont');
    })
    luenboItems[currentIndex].classList.add('activefont');
  }, 3000)
}

autoplay();

document.querySelector('.background').addEventListener('mouseenter', () => {
  clearInterval(interval);
})

document.querySelector('.background').addEventListener('mouseleave', () => {
  autoplay();
})


//点击和鼠标进入登录框分别的效果
const loginContainer = document.querySelector('.login-container');
const loginSection = document.querySelector('.login-section');
const closeIcon = document.querySelector('.close-icon');
const darkOverlay = document.querySelector('.dark-overlay');
const userProfileSection = document.querySelector('.user-profile-section');

loginContainer.addEventListener('click', () => {
  loginSection.style.visibility = 'visible';
  darkOverlay.style.display = 'block';
})

closeIcon.addEventListener('click', () => {
  loginSection.style.visibility = 'hidden';
  darkOverlay.style.display = 'none';
})

loginContainer.addEventListener('mouseenter', () => {
  userProfileSection.style.display = 'block';
})

userProfileSection.addEventListener('mouseleave', () => {
  setTimeout(() => {
    userProfileSection.style.display = 'none';
  }, 300);
})


// 使页面缩放时登录的hover框与登录buttom对齐
function alignElement(targetSelector, alignedElementSelector) {
  const target = document.querySelector(targetSelector);
  const alignedElement = document.querySelector(alignedElementSelector);
  const targetLeft = target.getBoundingClientRect().left;
  // 获取目标元素的左边界坐标
  alignedElement.style.left = (targetLeft / 1.3) + 'px';
}

alignElement('.header-login-button', '.user-profile-section');

window.addEventListener('resize', function () {
  alignElement('.header-login-button', '.user-profile-section');
});

const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('mouseenter', () => {
  searchContainer.style.borderColor = '#999';
})

searchInput.addEventListener('mouseleave', () => {
  searchContainer.style.borderColor = 'transparent';
})