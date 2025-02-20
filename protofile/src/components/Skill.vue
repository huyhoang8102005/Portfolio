<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="skill">
    <div class="container">
      <div class="skill__container">
        <div class="skill__top">
          <h2 class="skill__top-title">Skiils</h2>
          <p class="skill__top-desc">My technical level</p>
        </div>
        <div class="skiil__content">
          <div class="skill__content-block">
            <h3 class="skill__content-block--h3">Frontend developer</h3>
            <div class="skill__content-block--container">
              <div class="skill__content-col">
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">HTML</span>
                    <span class="skill__content-item--desc">Intermediate</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">CSS</span>
                    <span class="skill__content-item--desc">Advanced</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">JavaScript</span>
                    <span class="skill__content-item--desc">Intermediate</span>
                  </div>
                </div>
              </div>
              <div class="skill__content-col">
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">Bootstrap</span>
                    <span class="skill__content-item--desc">Basic</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">Git</span>
                    <span class="skill__content-item--desc">Intermediate</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">Vue</span>
                    <span class="skill__content-item--desc">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="skill__content-block">
            <h3 class="skill__content-block--h3">Backend developer</h3>
            <div class="skill__content-block--container">
              <div class="skill__content-col">
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">Node Js</span>
                    <span class="skill__content-item--desc">Intermediate</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">MySQL</span>
                    <span class="skill__content-item--desc">Basic</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">MongoDB</span>
                    <span class="skill__content-item--desc">Intermediate</span>
                  </div>
                </div>
              </div>
              <div class="skill__content-col">
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">FireBase</span>
                    <span class="skill__content-item--desc">Basic</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">TypeScript</span>
                    <span class="skill__content-item--desc">Intermediate</span>
                  </div>
                </div>
                <div class="skill__content-item">
                  <img src="../assets/icons/circle-check.svg" alt="" class="icon-medium" />
                  <div class="skill__content-item--container">
                    <span class="skill__content-item--title">SQL</span>
                    <span class="skill__content-item--desc">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#skill {
  margin-top: 200px;
}

.skill__top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
}

.skiil__content {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.skill__top-title {
  font-size: 52px;
  font-weight: 500;
}

.skill__top-desc {
  color: var(--text-color);
}

.skill__content-block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 550px;
  padding: 20px;
  height: auto;
  border-radius: 16px;
  background: rgba(204, 204, 204, 0.3);
}

.skill__content-block--h3 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
}

.skill__content-block--container {
  display: flex;
  gap: 150px;
}

.skill__content-col {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.skill__content-item {
  display: flex;
  gap: 10px;
}

.skill__content-item--container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill__content-item--title {
  font-size: 18px;
  font-weight: 500;
}

.skill__content-item--desc {
  font-size: 13px;
  color: var(--text-color);
}
</style>
