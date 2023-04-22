
<template>
  <div class="card-list">
    <Card
      v-for="(c, i) in cards"
      :key="i"
      :title="c.title"
      :subtitle="c.subtitle"
      :link="c.link"
      :avatar="c.avatar"
      :row="getRow(c)"
    />
  </div>
</template>


<script setup lang="ts">
import { CardOptions } from "./Card.vue";

const props = withDefaults(
  defineProps<{
    row?: number;
    cards?: CardOptions[];
  }>(),
  { cards: (): CardOptions[] => [], row: 2 }
);

function getRow(item: CardOptions): number{
  if(item.row){
    return item.row
  }

  return props.row
}

</script>

<style lang="scss" scoped>
.card-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0.7rem 0;
  margin: -0.35rem;
  align-items: flex-start;
}
</style>
