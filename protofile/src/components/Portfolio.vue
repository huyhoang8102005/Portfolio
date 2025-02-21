<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="portfolio">
    <div class="container">
      <div class="portfolio__container">
        <div class="portfolio__top">
          <h2 class="portfolio__top-title">Portfolio</h2>
          <p class="portfolio__top-desc">My Project</p>
        </div>
        <div class="portfolio__content">
          <div class="portfolio__content-block">
            <img src="../assets/img/photo.jpg" alt="" class="portfolio__content-block--img" />
            <div class="portfolio__content-block--title">
              <h3 class="portfolio__content-block--name">Web design</h3>
              <a
                target="_blank"
                href="https://github.com/huyhoang8102005/Portfolio"
                class="portfolio__content-block--view"
              >
                <span>Demo</span>
                <img src="../assets/icons/arrow-right.svg" alt="" class="icon-medium" />
              </a>
            </div>
          </div>
          <div class="portfolio__content-block">
            <img src="../assets/img/photo.jpg" alt="" class="portfolio__content-block--img" />
            <div class="portfolio__content-block--title">
              <h3 class="portfolio__content-block--name">Web design</h3>
              <a
                target="_blank"
                href="https://github.com/huyhoang8102005/Portfolio"
                class="portfolio__content-block--view"
              >
                <span>Demo</span>
                <img src="../assets/icons/arrow-right.svg" alt="" class="icon-medium" />
              </a>
            </div>
          </div>
          <div class="portfolio__content-block">
            <img src="../assets/img/photo.jpg" alt="" class="portfolio__content-block--img" />
            <div class="portfolio__content-block--title">
              <h3 class="portfolio__content-block--name">Web design</h3>
              <a
                target="_blank"
                href="https://github.com/huyhoang8102005/Portfolio"
                class="portfolio__content-block--view"
              >
                <span>Demo</span>
                <img src="../assets/icons/arrow-right.svg" alt="" class="icon-medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#portfolio {
  margin-top: 500px;
}

.portfolio__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.portfolio__top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
}
.portfolio__top-title {
  font-size: 52px;
  font-weight: 500;
}

.portfolio__content {
  margin-top: 60px;
  display: flex;
  gap: 60px;
}

.portfolio__content-block {
  border-radius: 20px;
  background: rgba(204, 204, 204, 0.3);
  padding: 20px;
}

.portfolio__content-block--img {
  border-radius: 20px;
  width: 300px;
  height: auto;
  object-fit: contain;
}

.portfolio__content-block--title {
  margin-top: 20px;
}

.portfolio__content-block--name {
  font-size: 16px;
  font-weight: 500;
}

.portfolio__content-block--view {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color);
  cursor: pointer;
}

.portfolio__content-block--view img {
  transition: all 0.5s;
}

.portfolio__content-block--view:hover img {
  transform: translateX(10px);
}
</style>
