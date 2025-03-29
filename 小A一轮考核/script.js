const tiaoZhuans = document.querySelectorAll('.tiaozhuan');

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