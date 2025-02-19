<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section id="skill">
        <div class="container">
            <div class="skill__container">
                <div class="skill__top">
                    <h2 class="skill__top-title">Skiils</h2>
                    <p class="skill__top-desc">My technical level</p>
                </div>
            </div>
            <div class="skiil__content"></div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
#skill {
    margin-top: 150px;
}

.skill__top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
}

.skill__top-title {
    font-size: 52px;
    font-weight: 500;
}

.skill__top-desc {
    color: var(--text-color);
}
</style>