<template>
  <CommonWrapper>
    <div class="about-header">
      <div class="breadcrumb-content">
        <h1 class="title">AboutMe</h1>
        <div class="breadcrumb">
          <div class="breadcrumb-item">
            <a href="/collect-data/">我的收藏</a>
          </div>
          <div class="breadcrumb-item">
            <a class="active" href="/article">工作日志</a>
          </div>
        </div>
      </div>
    </div>
    <about-me></about-me>
    <my-work></my-work>
    <my-project></my-project>
    <contact></contact>
  </CommonWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import { Icon } from "@iconify/vue";
import AboutMe from "./AboutMe.vue";
import MyWork from "./MyWork.vue";
import Contact from "./Contact.vue";
import MyProject from "./MyProject.vue";

export default defineComponent({
  components: {
    CommonWrapper,
    AboutMe,
    Contact,
    Icon,
    MyWork,
    MyProject
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.about-header {
  background-image: url(/images/bg/about-bg.jpg);
  background-position: center;
  background-size: cover;
  margin: 0;
  padding: 148px 0;

  .breadcrumb-content {
    position: relative;
    padding-left: 18rem;
    display: block;
    text-align: left;

    &::before {
      content: "";
      position: absolute;
      left: 17rem;
      top: 0;
      height: 100%;
      width: 6px;
      border: 1px solid #ff4b36;
      border-radius: 30px;
    }

    @media (max-width: 720px) {
      padding-left: 3rem;

      &::before {
        left: 2rem;
      }
    }

    .title {
      font-size: 48px;
      color: rgb(224, 11, 29);
      font-weight: 800;
      display: block;
    }

    .breadcrumb {
      display: inline-block;
      padding: 0;

      .breadcrumb-item {
        display: inline-block;
        text-align: left;
        vertical-align: middle;

        a {
          text-align: left;
          font-weight: 800;
          font-size: 14px;
          color: #fff;
        }

        .active {
          color: #ff4b36;
        }
      }

      .breadcrumb-item + .breadcrumb-item::before {
        padding-right: 10px;
        color: #fff;
        content: "|";
      }
    }
  }
}
</style>
