<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<section id="about">
		<div class="container">
			<div class="about__container">
				<div class="about__top">
					<h2 class="about__top-title">About Me</h2>
					<p class="about__top-desc">My introduction</p>
				</div>
				<div class="about__content">
					<div class="about__left">
						<img src="../assets/img/avatar.jpg" alt="" class="about__left-avatar">
					</div>
					<div class="about__right">
						<div class="about__right-list">
							<div class="about__right-item">
								<img src="../assets/icons/idea.svg" alt="" class="icon">
								<span class="about__right-item--title">Experience</span>
								<span class="about__right-item--desc">2+ Years</span>
							</div>
							<div class="about__right-item">
								<img src="../assets/icons/bag.svg" alt="" class="icon">
								<span class="about__right-item--title">Completed</span>
								<span class="about__right-item--desc">2 Project</span>
							</div>
							<div class="about__right-item">
								<img src="../assets/icons/support.svg" alt="" class="icon">
								<span class="about__right-item--title">Support</span>
								<span class="about__right-item--desc">Online 24/7</span>
							</div>
						</div>
						<div class="about__right-desc">
							<p>FullStack Developer, I create web pages with UI/UX user interface as well as create the backend server.
								I have two years experience for doing with framework Vue, js, html and css</p>
						</div>
						<div class="about__btn button has-icon">
							<span>Download CV</span>
							<img src="../assets/icons/send.svg" alt="" class="icon icon-light" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style scoped>
#about {
	margin-top: 350px;
}

.about__top {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 14px;
}

.about__top-title {
	font-size: 52px;
	font-weight: 500;
}

.about__top-desc {
	color: var(--text-color);
}

.about__content {
	margin-top: 80px;
	display: flex;
	align-items: center;
	gap: 100px;
}

.about__left {
	flex: 0.5;
	border-radius: 20px;
	overflow: hidden;
}

.about__left-avatar {
	width: 100%;
	height: auto;
	object-fit: contain;
}

.about__right {
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.about__right-list {
	display: flex;
	align-items: center;
	gap: 20px;
}

.about__right-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	width: 240px;
	background: rgba(204, 204, 204, 0.3);
	border-radius: 10px;

	padding: 40px;
}

.about__right-item--title {
	font-size: 20px;
}

.about__right-desc {
	margin-top: 20px;
	line-height: 32px;
	color: var(--text-color);
	font-size: 24px;
}

.about__btn {
	width: 220px;
	margin-top: 30px;
}

.has-icon {
	gap: 20px;
}
</style>