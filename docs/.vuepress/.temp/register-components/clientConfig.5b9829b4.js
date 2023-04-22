import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Card", defineAsyncComponent(() => import("D:/project/docs/damone-blog/docs/.vuepress/components/Card.vue"))),
      app.component("CardList", defineAsyncComponent(() => import("D:/project/docs/damone-blog/docs/.vuepress/components/CardList.vue")))
  },
}
