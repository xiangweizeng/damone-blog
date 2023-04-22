
<template>
  <div class="team-bg">
    <div class="culture-header">
      <div class="title">
        <n-gradient-text
          :gradient="{
            deg: 90,
            from: 'dodgerblue',
            to: 'purple',
          }"
        >
          <h3>AboutMe</h3>
        </n-gradient-text>
        <p>
          计算机科班出身，8年以来从事软件研发工作及管理工作，熟悉敏捷开发项目管理，
          先后从事了交易所期货高频交易系统，汽车云总线的物联网平台的研发，
          客流统计，移动端DNN加速框架、贵州省智能制造改造项目，OCEAN类脑计算平台等
          项目的研发；
        </p>
      </div>
    </div>

    <div class="culture">
      <div class="culture-list">
        <div class="content">
          <icon class="icon" icon="material-symbols:folder-managed-outline" />
          <h3>项目管理</h3>
          <p>多年的敏捷开发实践经验，熟悉敏捷管理</p>
        </div>

        <div class="content">
          <icon class="icon" icon="carbon:development" />
          <h3>代码能力</h3>
          <p>
            面向对象多年实践经验、熟悉设计模式、精通C/C++/Rust/等高效能基础语言
          </p>
        </div>

        <div class="content">
          <icon class="icon" icon="mdi:view-parallel" />
          <h3>项目架构</h3>
          <p>多年代码开发经验、百万级代码量，从代码快速解析系统架构的能力，复杂系统架构能力</p>
        </div>

        <div class="content">
          <icon class="icon" icon="simple-icons:cnn" />
          <h3>高性能加速</h3>
          <p>丰富的深度学习解决方案移动端部署及优化经验</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.culture-header {
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  .title {
    text-align: center;
    display: block;

    h3 {
      font-weight: 900;
      font-size: 40px;
    }

    p {
      width: 60%;
      @media (max-width: 900px) {
        width: 60%;
      }

      @media (max-width: 720px) {
        width: 80%;
      }

      margin: auto;
      text-align: center;
      font-weight: 400;
    }
  }
}

.culture {
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  flex: 1;
  display: block;

  .culture-list {
    margin: 0 3rem 1rem 3rem;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 6rem);

    .content {
      flex: 1;
      display: inline-block;
      vertical-align: top;
      margin: 1rem;
      padding-top: 1rem;
      border-radius: 3px;
      box-shadow: -1px -1px 5px 5px rgb(94, 132, 235, 0.2);
      height: 15rem;
      text-align: center;
      width: calc(100% / 4 - 2rem);
      @media (max-width: 720px) {
        width: calc(100% - 2rem);
      }

      &:hover {
        .icon {
          color: orangered;
        }
      }

      .icon {
        text-align: center;
        display: block;
        margin: auto;
        font-size: 3rem;
        color: dodgerblue;
      }

      h3 {
        display: block;
        font-weight: 600;
        margin: 1rem;
      }

      p {
        text-align: center;
        margin: 1rem;
        display: block;
      }
    }
  }
}
</style>
