// 选集与评论切换
const eposideDetail = document.querySelector('.eposide-detail');
const commentSection = document.querySelector('.comment-section');
const commentInput = document.querySelector('.comment-input');

document.querySelector('.eposide').addEventListener('click', () => {
  commentSection.style.display = 'none';
  commentInput.style.visibility = 'hidden';
  eposideDetail.style.display = 'block';
})

document.querySelector('.discussion').addEventListener('click', () => {
  eposideDetail.style.display = 'none';
  commentSection.style.display = 'block';
  commentInput.style.visibility = 'visible';
})

// 登录与退出
const loginContainer = document.querySelector('.login-btn');
const loginSection = document.querySelector('.login-section');
const closeIcon = document.querySelector('.close-icon');
const darkOverlay = document.querySelector('.dark-overlay');
const userProfileSection = document.querySelector('.user-profile-section');
const moreButton = document.querySelector('.more-buttom');
const moreSection = document.querySelector('.more-section');

loginContainer.addEventListener('click', () => {
  loginSection.style.visibility = 'visible';
  darkOverlay.style.display = 'block';
})

closeIcon.addEventListener('click', () => {
  loginSection.style.visibility = 'hidden';
  darkOverlay.style.display = 'none';
})

// 鼠标经过显示与隐藏
function hoverShow(hoverElement, showElement) {
  hoverElement.addEventListener('mouseenter', () => {
    showElement.style.visibility = 'visible';
  })

  showElement.addEventListener('mouseleave', () => {
    showElement.style.visibility = 'hidden';
  })
}

hoverShow(loginContainer, userProfileSection);
hoverShow(moreButton, moreSection);

// 详情页的显示与隐藏
const detailLink = document.querySelector('.detail-link');
const dramaDetailSection = document.querySelector('.drama-detail-section');
const closeButton = document.querySelector('.close-button');

detailLink.addEventListener('click', () => {
  dramaDetailSection.style.right = '0';
})

closeButton.addEventListener('click', () => {
  dramaDetailSection.style.right = '-100%';
})

// 使页面缩放时登录的hover框与登录buttom对齐
// 使页面缩放时更多按钮与更多框对齐
function alignElement(targetSelector, alignedElementSelector) {
  const target = document.querySelector(targetSelector);
  const alignedElement = document.querySelector(alignedElementSelector);
  const targetLeft = target.getBoundingClientRect().left;
  // 获取目标元素的左边界坐标
  alignedElement.style.left = (targetLeft / 1.3) + 'px';
}

alignElement('.login-btn', '.user-profile-section');
alignElement('.more-buttom', '.more-section');

window.addEventListener('resize', function () {
  alignElement('.login-btn', '.user-profile-section');
  alignElement('.more-buttom', '.more-section');
});