import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-shared@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/project/docs/damone-blog/node_modules/.pnpm/katex@0.16.4/node_modules/katex/dist/katex.min.css";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});
