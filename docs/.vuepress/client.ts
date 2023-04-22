import { defineClientConfig } from "@vuepress/client";
import AboutMeLayout from "./theme/views/AboutUs/AboutMeLayout.vue";

import naive from "naive-ui";

export default defineClientConfig({
  layouts: {
    AboutMeLayout,
  },
  enhance: ({ app, router, siteData }) => {
    app.use(naive);
  },
});
