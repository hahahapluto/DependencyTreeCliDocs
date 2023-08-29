<template>
  <div class="home-preview">
    <div class="title">{{ title }}</div>
    <div class="myViews">
      <div class="view">
        <img class="medium-zoom-image" src="../public/assets/view1.png" />
      </div>
      <div class="view">
        <img class="medium-zoom-image" src="../public/assets/view2.png" />
      </div>
      <div class="view">
        <img class="medium-zoom-image" src="../public/assets/view3.png" />
      </div>
      <div class="view">
        <img class="medium-zoom-image" src="../public/assets/view4.png" />
      </div>
      <div class="view">
        <img class="medium-zoom-image" src="../public/assets/view5.png" />
      </div>
      <div class="view">
        <img class="medium-zoom-image" src="../public/assets/view6.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyView",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.home-preview {
  /* padding: 0 24px; */
  box-sizing: border-box;
}

.home-preview .title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3.5rem;
}

.myViews {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
  margin: -1.5rem;
}

.myViews .view {
  margin: 0 auto;
  width: 80%;
  padding: 8px;
}

@media (min-width: 960px) {
  .home-preview .title {
    margin-bottom: 4rem;
  }

  .myViews .view {
    width: 30% !important;
  }
}

@media (min-width: 640px) {
  .myViews .view {
    width: 45%;
  }
}
</style>
