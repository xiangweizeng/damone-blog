
<template>
  <div class="title">
    <n-gradient-text
      :gradient="{
        deg: 90,
        from: 'dodgerblue',
        to: 'purple',
      }"
    >
      <h1>ContactMe</h1>
    </n-gradient-text>
    <p>有任何问题，请通过以下方式联系我，将更快为您解决问题。</p>
  </div>
  <div class="contact">
    <div class="contact-info-list">
      <div class="content">
        <icon class="icon" icon="el:phone-alt" />
        <h3>立即来电：</h3>
        <p>177 3479 3295</p>
      </div>
      <div class="content">
        <icon class="icon" icon="material-symbols:attach-email" />
        <h3>电子邮箱：</h3>
        <p>damonexw@163.com</p>
      </div>
      <div class="content">
        <icon class="icon" icon="solar:map-arrow-square-bold" />
        <h3>就职企业：</h3>
        <p>深圳记忆海原识科技有限公司</p>
      </div>
      <div class="content">
        <icon class="icon" icon="material-symbols:shelf-position" />
        <h3>现任职位：</h3>
        <p>类脑计算-类脑架构</p>
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
.title {
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 40px;
  }

  p {
    text-align: center;
    font-weight: 400;
  }
}

.contact {
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  text-align: center;
  flex: 1;
  display: block;

  .contact-info-list {
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
      height: 12rem;
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
        margin: auto;
        display: block;
      }
    }
  }
}
</style>
