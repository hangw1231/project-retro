//scroll
const pages = document.querySelectorAll("section");
let currentPage = 0;
let isScrolling = false;

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
        if (currentPage < pages.length - 1) {
            currentPage++;
        }
    } else {
        if (currentPage > 0) {
            currentPage--;
        }
    }
    window.scrollTo({
        top: pages[currentPage].offsetTop,
        behavior: "smooth",
    });

    setTimeout(() => {
        isScrolling = false;
    }, 400);
})

//cafe
const images = ["../img/place_mainimg.png", "../img/place_mainimg_2.png", "../img/place_mainimg_3.png"]; // 교체할 이미지들
let currentIndex = 0;

const slideImg = document.getElementById("slideImg");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slideImg.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  slideImg.src = images[currentIndex];
});

//lpBar
const cards = document.querySelectorAll(".music");
let currentAudio = null;
let currentTitle = null;

cards.forEach(card => {
  const audioSrc = card.dataset.audio;
  const audio = new Audio(audioSrc);

  const playBtn = card.querySelector(".play");
  const pauseBtn = card.querySelector(".pause");
  const title = card.querySelector('.title');

  playBtn.addEventListener("click", () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      if (currentTitle) {
        currentTitle.style.display = 'none';
      }
    }
    audio.play();
    // 제목 표시 (깜빡이며 나타나게)
    title.classList.remove('show');
    void title.offsetWidth; // reflow 강제 (애니메이션 리셋 트릭)
    title.classList.add('show');
    
    currentAudio = audio;
    currentTitle = title;
    title.style.display = 'block';
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
    title.style.display = 'none';
    if (currentAudio === audio) { 
      currentAudio = null;
      currentTitle = null;
    }
  });
});


//star bg
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// 화면 크기 설정
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 별 클래스
class Star {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;  // 픽셀 크기
    this.speed = Math.random() * 6 + 1; // 떨어지는 속도
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.fillStyle = "white";              // 별 색상
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

// 별 650개 생성
const stars = Array.from({ length: 650 }, () => new Star());

// 애니메이션 함수
function animate() {
  // 세로 그라데이션 배경
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#6a94ff");  // 위쪽 진한 네이비
  gradient.addColorStop(1, "#fff");  // 아래쪽 검정

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 별 그리기
  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

// 시작
animate();

// 창 크기 변경 대응
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});