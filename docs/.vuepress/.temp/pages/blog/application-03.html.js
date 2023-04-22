export const data = JSON.parse("{\"key\":\"v-17374976\",\"path\":\"/blog/application-03.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"对于手势的提取主要的目的是将手势从较为复杂的环境中提取出来，由于环境复杂直接采取灰度图像二值化一帮无法取得较好的效果。虽然通过颜色手套的方法来解决这个问题能取得较好的效果，但是又引入了不必要的麻烦，经过综合考虑，在设计中我们采用肤色提取手势轮廓的方法，经过实验，该方法效果较为明显，在大多数的情况下都能取得较为满意的效果。对于手势的跟踪则采取预测和重定位的形式，在以往的实验中，有人采用光流法进行跟踪，由于其易受环境的影响，效果并不明显，还有就是采用 camshift 跟踪算法 + kalman 滤波算法对随机物体进行跟踪，但是它对于高速运动的物体，或运动不具有线性性质的物体跟踪存在很大的弊端，不具有很好的适应性，对此我们采用了更高级的跟踪算法，基于卡拉曼滤波的粒子滤波算法，该算法对于随机运动的物体的跟踪具有优良的效果，同时可以跟踪多个物体，可以满足手势识别的需求。对于手势的识别我们采用了先对指尖进行定位的方式，简单的采取以指尖数作为静态特征的方法，该方法准确度高且基本没有错误，另外一个方法就是采用提取特征向量通过支持向量机的形式对手势进行分类，经过实验，该方法识别的手势较多，如果输入标准，可以高达二十多种，但是对环境的要求要高些，然而，在我们的系统中由于对静态手势的种类的要求并不复杂，故采用了前一种方法。动态手势的识别，根据目前的情况，并不需要太复杂的功能识别，只需完成对手势质心的追踪即可，相邻两帧图像中的有效轮廓质心位置取差即可获得动态特征向量。\"},\"headers\":[],\"readingTime\":{\"minutes\":19.96,\"words\":5989},\"filePathRelative\":\"blog/application-03.md\",\"excerpt\":\"<p>对于手势的提取主要的目的是将手势从较为复杂的环境中提取出来，由于环境复杂直接采取灰度图像二值化一帮无法取得较好的效果。虽然通过颜色手套的方法来解决这个问题能取得较好的效果，但是又引入了不必要的麻烦，经过综合考虑，在设计中我们采用肤色提取手势轮廓的方法，经过实验，该方法效果较为明显，在大多数的情况下都能取得较为满意的效果。对于手势的跟踪则采取预测和重定位的形式，在以往的实验中，有人采用光流法进行跟踪，由于其易受环境的影响，效果并不明显，还有就是采用 camshift 跟踪算法 + kalman 滤波算法对随机物体进行跟踪，但是它对于高速运动的物体，或运动不具有线性性质的物体跟踪存在很大的弊端，不具有很好的适应性，对此我们采用了更高级的跟踪算法，基于卡拉曼滤波的粒子滤波算法，该算法对于随机运动的物体的跟踪具有优良的效果，同时可以跟踪多个物体，可以满足手势识别的需求。对于手势的识别我们采用了先对指尖进行定位的方式，简单的采取以指尖数作为静态特征的方法，该方法准确度高且基本没有错误，另外一个方法就是采用提取特征向量通过支持向量机的形式对手势进行分类，经过实验，该方法识别的手势较多，如果输入标准，可以高达二十多种，但是对环境的要求要高些，然而，在我们的系统中由于对静态手势的种类的要求并不复杂，故采用了前一种方法。动态手势的识别，根据目前的情况，并不需要太复杂的功能识别，只需完成对手势质心的追踪即可，相邻两帧图像中的有效轮廓质心位置取差即可获得动态特征向量。</p>\",\"autoDesc\":true}")

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