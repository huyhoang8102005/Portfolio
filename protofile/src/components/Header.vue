<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header" class="mt-4">
    <div class="container">
      <div class="header__container">
        <!-- Logo  -->
        <div class="logo">
          <a href="/" aria-label="Home"><span class="logo__name">Hoang</span></a>
        </div>
        <!-- Navbar -->
        <nav class="navbar">
          <ul class="navbar__list">
            <li class="navbar__item">
              <a href="#" class="navbar__link">Home</a>
            </li>
            <li class="navbar__item">
              <a href="#" class="navbar__link">About</a>
            </li>
            <li class="navbar__item">
              <a href="#" class="navbar__link">Skills</a>
            </li>
            <li class="navbar__item">
              <a href="#" class="navbar__link">Qualification</a>
            </li>
            <li class="navbar__item">
              <a href="#" class="navbar__link">Portfolio</a>
            </li>
            <li class="navbar__item">
              <a href="#" class="navbar__link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header__container {
  display: flex;
  justify-content: space-between;
}

.navbar__list {
  display: flex;
  align-items: center;
  gap: 50px;
}

.navbar__link {
  font-weight: 500;
  color: var(--title-color);
  transition: all 0.2s;
}

.navbar__link:hover {
  opacity: 0.8;
}

.logo__name {
  font-size: 20px;
  font-weight: bold;
}
</style>
