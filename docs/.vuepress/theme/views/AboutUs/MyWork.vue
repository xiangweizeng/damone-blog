
<template>
  <div class="team-bg">
    <div class="work-header">
      <div class="title">
        <n-gradient-text
          :gradient="{
            deg: 90,
            from: 'dodgerblue',
            to: 'purple',
          }"
        >
          <h3>MyWork</h3>
        </n-gradient-text>
        <p>多年软件研发经验，熟悉敏捷开发项目管理</p>
      </div>
    </div>

    <div class="work">
      <h3>2020.8-至今 深圳忆海原识科技有限公司 类脑架构</h3>
      <div class="work-list">
        <ul>
          <li>
            类脑加速框架OCEAN的研发，负责OCEAN整体架构设计、框架实现、文档、网站等；
          </li>

          <li>灵巧手上位机及控制板软件程序的设计及实现</li>
        </ul>
      </div>
    </div>

    <div class="work">
      <h3>2020.3-2020.8 贵州工投制造科技有限公司 高级项目经理</h3>
      <div class="work-list">
        <ul>
          <li>
            统筹贵阳市智能制造协同共享平台项目，包括技术方案、研发管理、部署维护在内的相关工作。贵阳智能制造
            协同共享平台面向贵阳多个行业提供智能制造数字化工厂及供应链服务定制化解决方案和SaaS服务，以开展企
            业智能制造业务为抓手整合行业上下游、打造产融结合的新型商业模式。
          </li>
        </ul>
      </div>
    </div>

    <div class="work">
      <h3>2019.8-2020.2 贵州黔上云谷科技有限公司 产品经理+技术经理</h3>
      <div class="work-list">
        <ul>
          <li>
            智慧黑板产品负责人，
            负责市场调研，完成产品的需求分析，功能设计，UI及交互设计
            ；完成项目资源协
            调，协调项目需要的各种资源，包括软硬件资源等；作为研发主力，完成核心模块及核心算法优化；
          </li>

          <li>
            独立实现了面向IOT场景的深度学习推理加速库CNET： 支持ESP32,K210等MCU,
            并进行专门加速，全面量化工具链支持，４Ｍ内存
            即可运行人脸识别及车牌识别等AI算法
          </li>
          <li>开源商业级车牌识别项目 Mobile-LPR;</li>
        </ul>
      </div>
    </div>

    <div class="work">
      <h3>2017.2-2019.7 哈尔滨思派科技有限公司 产品经理+技术经理</h3>
      <div class="work-list">
        <ul>
          <li>
            作为客流统计设备产品负责人，主导客流统计研发工作，
            实现了双路视频实时统计，准确度达到96%，超过
            市场同类产品，是目前市场最早推出的基于深度学习的客流统计产品；
          </li>

          <li>
            客流统计算法实现及优化：实现了darknet2ncnn
            工具，实现darknet模型的移动端快速部署，开源并收入NC
            NN工具集；深入研究了基于深度学习的YOLOV2算法，设计了公交乘客目标检测的轻量模型，发表专利并被收
            录；
          </li>
          <li>
            威帝云总线产品设计：参与了产品的需求调研，参与了项目需求分析设计，产品架构设计及系统的整体方案
            设计；
          </li>
          <li>
            威帝云总线对外对接：负责系统的现场部署，后续需求交接，技术方案对接，多方人员组织协调等相关工作
            ；
          </li>
          <li>
            威帝云总线技术设计：基于Rancher2.0及SpringCloud实现了集微服务开发与Devops于一体的解决方案；基
            于Cassandra数据库实现了车辆数据存储解决方案，可应对频繁的需求变动及大数据量的存储需求；负责PC
            版终端、终端模块无值守升级模块、可配置协议的数据解析服务等的技术架构设计，积累了丰富的软件设计
            经验，掌握了常用的设计模式；多个数据转发服务及数据解析服积累了丰富的软件设计及开发经验，特别是
            二进制协议处理经验；
          </li>
        </ul>
      </div>
    </div>

    <div class="work">
      <h3>2015.7-2017.1 郑州易盛信息科技有限公司 C++ 研发</h3>
      <div class="work-list">
        <ul>
          <li>进入公司三个月便成为系统主要开发人员，从事期货交易系统开发 ；</li>

          <li>项目使用敏捷开发模式，并践行CMMI3管理模式;</li>
          <li>
            主要开发工作：国外交易所接入服务的开发及认证测试，包括SGX，CQG，IB，DGCX，SUNGuard等交易所或机
            构；前置系统开发，包括数据缓存，会话管理，请求分流，数据分发，协议转换支持等相关功能；管理系统
          </li>
          <li>
            API接入，包括开发，测试及文档维护，并辅助进行交易系统API测试；
          </li>
          <li>
            完成了多款辅助工具的设计及实现：包括交易数据二进制数据解析、Fix协议建表SQL生成、交易数据自动导
            出及邮件发送、键盘输入保护驱动等多款工具等；
          </li>
        </ul>
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
.work-header {
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

.work {
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  flex: 1;
  display: block;

  h3 {
    color: dodgerblue;
  }

  .work-list {
    margin: 0 3rem 1rem 3rem;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    border-radius: 3px;
    box-shadow: -1px -1px 2px 2px rgb(94, 132, 235, 0.2);
    width: 60%;

    ul {
      list-style: upper-roman;
      margin: 1rem;
    }

    li {
      margin: 1rem;
      vertical-align: middle;
    }
  }
}
</style>
