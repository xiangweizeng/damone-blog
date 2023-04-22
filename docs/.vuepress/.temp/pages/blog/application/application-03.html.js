export const data = JSON.parse("{\"key\":\"v-790e4206\",\"path\":\"/blog/application/application-03.html\",\"title\":\"手势识别跟踪算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"手势识别跟踪算法\",\"category\":[\"工作总结\",\"手势识别\",\"图像处理\",\"目标跟踪\"],\"description\":\"对于手势的提取主要的目的是将手势从较为复杂的环境中提取出来，由于环境复杂直接采取灰度图像二值化一帮无法取得较好的效果。虽然通过颜色手套的方法来解决这个问题能取得较好的效果，但是又引入了不必要的麻烦. 经过综合考虑，在设计中我们采用肤色提取手势轮廓的方法，经过实验，该方法效果较为明显，在大多数的情况下都能取得较为满意的效果。对于手势的跟踪则采取预测和重定位的形式，在以往的实验中，有人采用光流法进行跟踪，由于其易受环境的影响，效果并不明显，还有就是采用 camshift 跟踪算法 + kalman 滤波算法对随机物体进行跟踪，但是它对于高速运动的物体，或运动不具有线性性质的物体跟踪存在很大的弊端，不具有很好的适应性，对此我们采用了更高级的跟踪算法，基于卡拉曼滤波的粒子滤波算法，该算法对于随机运动的物体的跟踪具有优良的效果，同时可以跟踪多个物体，可以满足手势识别的需求。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/xiangweizeng/damone-blog/blog/application/application-03.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Damone's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"手势识别跟踪算法\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"对于手势的提取主要的目的是将手势从较为复杂的环境中提取出来，由于环境复杂直接采取灰度图像二值化一帮无法取得较好的效果。虽然通过颜色手套的方法来解决这个问题能取得较好的效果，但是又引入了不必要的麻烦. 经过综合考虑，在设计中我们采用肤色提取手势轮廓的方法，经过实验，该方法效果较为明显，在大多数的情况下都能取得较为满意的效果。对于手势的跟踪则采取预测和重定位的形式，在以往的实验中，有人采用光流法进行跟踪，由于其易受环境的影响，效果并不明显，还有就是采用 camshift 跟踪算法 + kalman 滤波算法对随机物体进行跟踪，但是它对于高速运动的物体，或运动不具有线性性质的物体跟踪存在很大的弊端，不具有很好的适应性，对此我们采用了更高级的跟踪算法，基于卡拉曼滤波的粒子滤波算法，该算法对于随机运动的物体的跟踪具有优良的效果，同时可以跟踪多个物体，可以满足手势识别的需求。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"damone\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"手势识别跟踪算法\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"damone\\\",\\\"url\\\":\\\"https://github.com/xiangweizeng\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 相关的基础知识\",\"slug\":\"_1-相关的基础知识\",\"link\":\"#_1-相关的基础知识\",\"children\":[]},{\"level\":2,\"title\":\"2. 图像预处理\",\"slug\":\"_2-图像预处理\",\"link\":\"#_2-图像预处理\",\"children\":[]},{\"level\":2,\"title\":\"3.根据肤色提取手势轮廓， 对图片进行形态学处理 (腐蚀与膨胀   开运算与闭运算）\",\"slug\":\"_3-根据肤色提取手势轮廓-对图片进行形态学处理-腐蚀与膨胀-开运算与闭运算\",\"link\":\"#_3-根据肤色提取手势轮廓-对图片进行形态学处理-腐蚀与膨胀-开运算与闭运算\",\"children\":[]},{\"level\":2,\"title\":\"4. 提取轮廓，计算轮廓的各种特征（本身特征）\",\"slug\":\"_4-提取轮廓-计算轮廓的各种特征-本身特征\",\"link\":\"#_4-提取轮廓-计算轮廓的各种特征-本身特征\",\"children\":[]},{\"level\":2,\"title\":\"5. 定位跟踪\",\"slug\":\"_5-定位跟踪\",\"link\":\"#_5-定位跟踪\",\"children\":[]},{\"level\":2,\"title\":\"6. 静态手势识别\",\"slug\":\"_6-静态手势识别\",\"link\":\"#_6-静态手势识别\",\"children\":[]},{\"level\":2,\"title\":\"7. 动态手势识别\",\"slug\":\"_7-动态手势识别\",\"link\":\"#_7-动态手势识别\",\"children\":[]}],\"readingTime\":{\"minutes\":20.05,\"words\":6016},\"filePathRelative\":\"blog/application/application-03.md\",\"excerpt\":\"<p>对于手势的提取主要的目的是将手势从较为复杂的环境中提取出来，由于环境复杂直接采取灰度图像二值化一帮无法取得较好的效果。虽然通过颜色手套的方法来解决这个问题能取得较好的效果，但是又引入了不必要的麻烦.</p>\\n<p>经过综合考虑，在设计中我们采用肤色提取手势轮廓的方法，经过实验，该方法效果较为明显，在大多数的情况下都能取得较为满意的效果。对于手势的跟踪则采取预测和重定位的形式，在以往的实验中，有人采用光流法进行跟踪，由于其易受环境的影响，效果并不明显，还有就是采用 camshift 跟踪算法 + kalman 滤波算法对随机物体进行跟踪，但是它对于高速运动的物体，或运动不具有线性性质的物体跟踪存在很大的弊端，不具有很好的适应性，对此我们采用了更高级的跟踪算法，基于卡拉曼滤波的粒子滤波算法，该算法对于随机运动的物体的跟踪具有优良的效果，同时可以跟踪多个物体，可以满足手势识别的需求。</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
