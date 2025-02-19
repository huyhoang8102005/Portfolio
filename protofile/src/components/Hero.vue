<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="hero">
    <div class="container">
      <div class="hero__container">
        <div class="hero__contact">
          <a href="#">
            <img src="../assets/icons/facebook.svg" alt="" class="icon" />
          </a>
          <a href="#">
            <img src="../assets/icons/github.svg" alt="" class="icon" />
          </a>
          <a href="#">
            <img src="../assets/icons/linkedin.svg" alt="" class="icon" />
          </a>
        </div>
        <div class="hero__left">
          <div class="hero__left-name">
            <h1>Tong Hoang</h1>
            <div>
              <img src="../assets/img/hand.png" alt="" />
            </div>
          </div>
          <div class="hero__left-sub">
            <div class="line"></div>
            <p class="sub">FullStack Web Developer</p>
          </div>
          <div class="hero__left-desc">
            I'm a fullstack web developer. I'm very passionate and dedicated to my work
          </div>
          <div class="hero__left-btn">
            <button class="button has-icon">
              <span>Say Hello</span>
              <img src="../assets/icons/send.svg" alt="" class="icon icon-light" />
            </button>
          </div>
        </div>
        <div class="hero__right">
          <div class="hero__right-img"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#hero {
  margin-top: 180px;
}

.hero__container {
  display: flex;
  align-items: center;
  gap: 120px;
}

.hero__contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.hero__left {
  display: flex;
  flex-direction: column;
}

.hero__left-name {
  display: flex;
  gap: 10px;

  font-size: 62px;
  font-weight: 500;
}

.hero__left-sub {
  margin-top: 20px;

  display: flex;
  align-items: center;
  gap: 18px;
}

.hero__left-sub .line {
  width: 100px;
  border: 1px solid var(--text-color);
}

.hero__left-sub .sub {
  font-size: 22px;
}

.hero__left-desc {
  margin-top: 20px;
  max-width: 550px;
  line-height: 24px;
  color: var(--text-color);
}

.hero__left-btn {
  margin-top: 48px;
}

.hero__contact .icon {
  transition: all 0.5s;
}

.hero__contact .icon:hover {
  filter: brightness(0) saturate(100%) invert(70%) sepia(77%) saturate(202%) hue-rotate(305deg) brightness(104%) contrast(102%);
}

/* Right  */
.hero__right-img {
  background-image: url("../assets/img/avatar.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px #ffc0cb;
  width: 400px;
  height: 400px;
  order: 1;
  animation: profile__animate 8s ease-in-out infinite 1s;
}


@keyframes profile__animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
</style>
