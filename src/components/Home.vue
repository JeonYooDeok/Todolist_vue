<template>
  <div>
    <!-- 마퀴 시작 -->
    <div class="marquee-container">
      <div class="marquee-wrapper">
        <div class="marquee">
          <div class="track left">
            <div class="content">
              <span class="text">FRONTEND</span>
              <span class="text stroke">DEVELOPMENT</span>
              <span class="text">UI·UX</span>
              <span class="text stroke">DESIGN</span>
              <!-- 반복 부분 생략 -->
            </div>
          </div>
        </div>
        <div class="marquee">
          <div class="track right">
            <div class="content">
              <span class="text">FRONTEND</span>
              <span class="text stroke">DEVELOPMENT</span>
              <span class="text">UI·UX</span>
              <span class="text stroke">DESIGN</span>
              <!-- 반복 부분 생략 -->
            </div>
          </div>
        </div>
        <div class="marquee">
          <div class="track left">
            <div class="content">
              <span class="text">DESIGN</span>
              <span class="text stroke">DEVELOPMENT</span>
              <span class="text">FRONTEND</span>
              <span class="text stroke">UI·UX</span>
              <!-- 반복 부분 생략 -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 마퀴 끝 -->

    <!-- 소개 시작 -->
    <div class="introduction-wrapper">
      <div class="front-back-wrapper">
        <div
          class="front"
          :style="{ backgroundImage: `url(${introFrontImage})` }">
          <img
            class="front-welcome-img"
            :src="frontWelcomeImage"
            alt="Welcome" />
          <img
            class="front-mouse-img"
            :src="frontMouseImage"
            alt="Mouse" />
        </div>
        <div class="back">
          <img
            class="back-hello-img"
            :src="backHelloImage"
            alt="Hello" />
          <img
            class="back-thankyou-img"
            :src="backThankyouImage"
            alt="Thank you" />
          <p class="job">Developer</p>
          <img
            class="profile-img"
            :src="introBackImage"
            width="240"
            alt="Profile" />
          <div class="name-box">
            <p class="name">전유덕</p>
            <p class="name-eng">Jeon Yoo Deok</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 소개 끝 -->
  </div>
</template>

<script setup>
import introFrontImage from '../assets/imgs/introfront.png'
import introBackImage from '../assets/imgs/introback.png'
import frontWelcomeImage from '../assets/imgs/frontwelcome.png'
import frontMouseImage from '../assets/imgs/frontmouse.png'
import backHelloImage from '../assets/imgs/backhello.png'
import backThankyouImage from '../assets/imgs/backthankyou.png'

// 마퀴 애니메이션과 스타일 정의
const keyframes = {
  toLeft: 'toLeft 30s linear infinite',
  toRight: 'toRight 30s linear infinite'
}

const marqueeContainerStyle = {
  height: 'calc(100vh - 10vh)'
}

const marqueeWrapperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const marqueeStyle = {
  fontSize: '8vw',
  fontWeight: 'bold',
  lineHeight: '120%',
  position: 'relative',
  width: '100vw',
  maxWidth: '100%',
  height: '8vw',
  overflow: 'hidden',
  fontWeight: '900'
}

const trackStyle = direction => ({
  position: 'absolute',
  whiteSpace: 'nowrap',
  willChange: 'transform',
  animation: keyframes[direction]
})

const contentStyle = {
  color: '#060606',
  WebkitTextStrokeWidth: '0.1vw',
  WebkitTextStrokeColor: 'white'
}

const textStyle = {
  fontSize: '8vw',
  fontWeight: 'bold',
  lineHeight: '120%',
  color: 'white',
  position: 'relative',
  display: 'inline-block'
}

const strokeTextStyle = {
  color: '#023332',
  WebkitTextStrokeWidth: '0.1vw',
  WebkitTextStrokeColor: 'white'
}
</script>

<style scoped>
.marquee-container {
  height: calc(100vh - 10vh);
}

.marquee-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.marquee {
  font-size: 8vw;
  font-weight: bold;
  line-height: 120%;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 8vw;
  overflow: hidden;
  font-weight: 900;
}

.track.left {
  animation: toLeft 30s linear infinite;
}

.track.right {
  animation: toRight 30s linear infinite;
}

.content {
  color: #060606;
  -webkit-text-stroke-width: 0.1vw;
  -webkit-text-stroke-color: white;
}

.text {
  font-size: 8vw;
  font-weight: bold;
  line-height: 120%;
  color: white;
  position: relative;
  display: inline-block;
}

.text:hover {
  opacity: 0.2;
  transition: 0.2s;
  cursor: default;
  user-select: none;
}

.text.stroke {
  color: #023332;
  -webkit-text-stroke-width: 0.1vw;
  -webkit-text-stroke-color: white;
}

/* 소개 스타일 */
.introduction-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.front-back-wrapper {
  width: 808px;
  aspect-ratio: 16/10.73;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  backface-visibility: hidden;
}

.front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 100%;
  transition: 0.8s;
}

.front:hover {
  opacity: 0%;
}

.back {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 500px;
  background-color: rgba(1, 34, 33, 0.9);
  backdrop-filter: blur(12px);
  color: white;
  opacity: 0%;
  text-align: center;
  transition: 0.8s;
}

.front:hover ~ .back {
  opacity: 100%;
}

.job,
.name {
  font-size: 40px;
  font-weight: 900;
  line-height: 120%;
}

.name {
  line-height: 160%;
}

.front-welcome-img {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 136px;
  height: 32px;
}

.back-hello-img {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 136px;
  height: 32px;
}

.front-mouse-img {
  position: absolute;
  bottom: -48px;
  right: -48px;
  width: 216px;
  height: 52px;
}

.back-thankyou-img {
  position: absolute;
  bottom: -48px;
  right: -48px;
  width: 216px;
  height: 52px;
}
</style>
