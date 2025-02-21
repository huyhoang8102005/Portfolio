<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="qualification">
    <div class="container">
      <div class="quali__container">
        <div class="quali__top">
          <h2 class="quali__top-title">Qualification</h2>
          <p class="quali__top-desc">My personal journey</p>
        </div>
        <div class="quali__content">
          <div class="quali__content-title">
            <div class="quali__content-title--block" @click="activeTab = 'education'">
              <img src="../assets/icons/education.svg" alt="" class="icon-large" />
              <span>Education</span>
            </div>
            <div class="quali__content-title--block" @click="activeTab = 'experience'">
              <img src="../assets/icons/bag-exp.svg" alt="" class="icon-large" />
              <span>Experience</span>
            </div>
          </div>
          <transition name="zoom">
            <div class="quali__education" v-if="activeTab === 'education' ? true : false">
              <div class="line-center">
                <img
                  src="../assets/icons/circle.svg"
                  alt=""
                  class="circle circle-top icon-medium"
                />
                <img
                  src="../assets/icons/circle.svg"
                  alt=""
                  class="circle circle-center icon-medium"
                />
                <img
                  src="../assets/icons/circle.svg"
                  alt=""
                  class="circle circle-bottom icon-medium"
                />
                <!-- Content block  -->
                <div class="content-block content-block-top">
                  <h5>Web Desgin</h5>
                  <p>F8 - Website</p>
                  <div class="content-block--sub">
                    <img src="../assets/icons/calender.svg" alt="" class="icon-medium icon-grey" />
                    <span>2023 - Present</span>
                  </div>
                </div>
                <div class="content-block content-block-center">
                  <h5>Backend Design</h5>
                  <p>Self-study</p>
                  <div class="content-block--sub">
                    <img src="../assets/icons/calender.svg" alt="" class="icon-medium icon-grey" />
                    <span>2025 - Present</span>
                  </div>
                </div>
                <div class="content-block content-block-bottom">
                  <h5>HCMUTE</h5>
                  <p>HCM - Institute</p>
                  <div class="content-block--sub">
                    <img src="../assets/icons/calender.svg" alt="" class="icon-medium icon-grey" />
                    <span>2023 - Present</span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <transition name="zoom">
            <div v-if="activeTab === 'experience' ? true : false" class="quali__exp">
              <div class="line-center">
                <img
                  src="../assets/icons/circle.svg"
                  alt=""
                  class="circle circle-top icon-medium"
                />
                <img
                  src="../assets/icons/circle.svg"
                  alt=""
                  class="circle circle-center icon-medium"
                />
                <img
                  src="../assets/icons/circle.svg"
                  alt=""
                  class="circle circle-bottom icon-medium"
                />
                <!-- Content block  -->
                <div class="content-block content-block-top">
                  <h5>Product Desgin</h5>
                  <p>Microsoft - Website</p>
                  <div class="content-block--sub">
                    <img src="../assets/icons/calender.svg" alt="" class="icon-medium icon-grey" />
                    <span>2023 - Present</span>
                  </div>
                </div>
                <div class="content-block content-block-center">
                  <h5>Project 1</h5>
                  <p>Self-study</p>
                  <div class="content-block--sub">
                    <img src="../assets/icons/calender.svg" alt="" class="icon-medium icon-grey" />
                    <span>2025 - Present</span>
                  </div>
                </div>
                <div class="content-block content-block-bottom">
                  <h5>ABC Company</h5>
                  <p>HCM - Institute</p>
                  <div class="content-block--sub">
                    <img src="../assets/icons/calender.svg" alt="" class="icon-medium icon-grey" />
                    <span>2023 - Present</span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('education')
</script>

<style scoped>
#qualification {
  margin-top: 200px;
}

.quali__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.quali__top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 100px;
}

.quali__top-title {
  font-size: 52px;
  font-weight: 500;
}

.quali__top-desc {
  color: var(--text-color);
}

.quali__content {
  position: relative;
}

.quali__content-title {
  display: flex;
  gap: 60px;
  margin-bottom: 100px;
}

.quali__content-title--block {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.quali__content-title--block span {
  font-size: 30px;
  font-weight: 500;
}

.quali__education,
.quali__exp {
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: center;
}

.line-center {
  position: relative;
  height: 300px;
  border: 2px solid #ccc;
}

.circle {
  position: absolute;
  filter: brightness(0) saturate(100%) invert(94%) sepia(2%) saturate(57%) hue-rotate(35deg)
    brightness(88%) contrast(90%);
}

.circle-top {
  top: -2px;
  transform: translateX(-50%);
}

.circle-center {
  top: 50%;
  transform: translateX(-50%);
}

.circle-bottom {
  bottom: -2px;
  transform: translateX(-50%);
}

.content-block {
  width: 250px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.content-block h5 {
  font-size: 18px;
  font-weight: 500;
}

.content-block p {
  font-size: 17px;
  font-weight: 500;
  color: var(--text-color);
}

.content-block--sub {
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.content-block--sub span {
  font-size: 16px;
  color: var(--text-color);
}

.content-block-top {
  left: -200px;
}

.content-block-center {
  left: 60px;
  bottom: 40%;
}

.content-block-bottom {
  left: -200px;
  bottom: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition:
    transform 0.7s,
    opacity 0.3s;
}

.zoom-enter-from {
  transform: scale(0.5);
  opacity: 0;
}
.zoom-enter-to {
  transform: scale(1);
  opacity: 1;
}

.zoom-leave-from {
  transform: scale(1);
  opacity: 1;
}
.zoom-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>
