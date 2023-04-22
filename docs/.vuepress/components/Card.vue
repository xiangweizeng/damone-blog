
<template>
  <a v-if="link" href="link" target="target" class="card-item row-4">
    <div class="icon">
      <icon class="figure" :icon="avatar" />
    </div>

    <div class="div">
      <p class="name"> {{ title }}</p>
      <p class="desc"> {{ subtitle }}</p>
    </div>
  </a>

  <span v-else :class="['card-item', itemClass]">
    <div class="icon">
      <icon class="figure" :icon="avatar" />
    </div>

    <div class="div">
      <p class="name"> {{ title }}</p>
      <p class="desc"> {{ subtitle }}</p>
    </div>
  </span>
</template>


<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

export interface CardOptions {
  title: string,
  link?: string,
  row?: number,
  avatar?: string,
  target?: string,
  subtitle?: string,
}

const props = withDefaults(defineProps<CardOptions>(), { target: "_self", row: 2 });
const itemClass = ref(initItemClass())

function initItemClass(): any {
  switch (props.row) {
    case 1:
      return 'row-1'
    case 2:
      return 'row-2'
    case 3:
      return 'row-3'
    case 4:
      return 'row-4'
    default:
      return 'row-2'
  }
}

</script>

<style lang="scss" scoped>
.card-item {
  width: calc(100% / 3 - 0.7rem);
  height: 100%;
  margin: 0.35rem;
  border-radius: 5px;
  display: flex;
  background: rgba(0, 0, 0, 0.03);
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.4s;

  &:hover {
    .icon {
      background-color: rgba(30, 143, 255, 0.500);
    }

    .div {
      p {
        text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(30, 143, 255, 0.200);
    margin: 1rem;
    transition: all 0.4s;

    .figure {
      width: 36px;
      height: 36px;
      margin: 7px;
    }
  }

  .div {
    flex: 1;
    display: inline-block;
    padding: 1rem 0;

    p {
      margin: 0;
      padding: 0 1rem;
      transition: text-shadow 0.4s;
      text-align: left;
    }

    .name {
      margin: 0.2rem 0 0.3rem 0;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .desc {
      font-size: 1.0rem;
      line-height: 1.0rem;
      opacity: 0.8;
      margin-bottom: 0.2rem;
    }
  }

  &.row-1 {
    width: calc(100% - 0.7rem);

    .icon {
      margin-left: 4rem;
    }
  }

  &.row-2 {
    width: calc(100% / 2 - 0.7rem);

    .icon {
      margin-left: 3rem;
    }
  }

  &.row-3 {
    width: calc(100% / 3 - 0.7rem);
  }

  &.row-4 {
    width: calc(100% / 4 - 0.7rem);
  }
}

$card-width: calc(100% / 3 - 0.7rem);
$card-img-margin: 1rem;

@media (max-width: 900px) {
  .card-list {
    .card-item.row-4 {
      width: $card-width;
    }
  }
}

@media (max-width: 720px) {
  .card-list {

    .card-item.row-3,
    .card-item.row-4 {
      width: calc(50% - #{$card-img-margin});

      img {
        margin-left: $card-img-margin;
      }
    }
  }
}

@media (max-width: 500px) {
  .card-list {

    .card-item.row-1,
    .card-item.row-2,
    .card-item.row-3,
    .card-item.row-4 {
      width: calc(100% - #{$card-img-margin});

      img {
        margin-left: $card-img-margin;
      }
    }
  }
}
</style>
