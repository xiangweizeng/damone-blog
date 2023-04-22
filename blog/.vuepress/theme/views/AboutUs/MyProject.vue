
<template>
  <div class="team-bg">
    <div class="project-header">
      <div class="title">
        <n-gradient-text
          :gradient="{
            deg: 90,
            from: 'dodgerblue',
            to: 'purple',
          }"
        >
          <h3>MyProject</h3>
        </n-gradient-text>
        <p>多年软件研发经验，熟悉敏捷开发项目管理</p>
      </div>
    </div>

    <div class="project">
      <h3>2019.12-2020.3 智慧黑板助学套件 产品负责人</h3>
      <div class="project-list">
        <div class="project-description">
          <h4>项目简介</h4>
          <p>
            智慧黑板是一套助学工具，支持鼠标及触摸屏，支持手写，擦除，移动放大等手势操作，支持图形图
            像插入编辑，支持多人答题模式，支持板书及多种样式功能，搭配了屏幕批注，板书分享，云盘等辅助功能，
            通过这些功能，可以提供教师的教学效率，提高学生的专注力，全面提高教学质量。
          </p>
          <h4>基本情况</h4>
        </div>
        <ul>
          <li>
            产品负责人，
            进行市场调研，完成产品的需求分析，功能设计，UI及交互设计
            完成项目资源协调，协调项目需要的各种资源，包括软硬件资源等；
          </li>

          <li>
            产品开发主力，完成项目的架构设计及核心模块，完成项目的60%以上核心功能；
          </li>
          <li>
            核心算法优化，为实现4K高清触摸屏的流畅体验，自研图形渲染框架，基于MVC模式，采用了局部刷新，分
            块刷新，分层刷新等专用算法。为实现触摸屏自定义行为分析，自研基于时间序列的状态行为分析算法，针
            对书写，擦除，放大，移动等进行专门处理，并提供无效行为滤波处理；
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <h3>2017.2-2019.2 威帝云总线数据服务平台 项目设计及开发</h3>
      <div class="project-list">
        <div class="project-description">
          <h4>项目简介</h4>
          <p>
            云总线数据服务平台以CAN总线技术、车载智能终端、大数据分析及处理等关键技术为基础，建设出的以车
            辆安全监控、驾驶评价、机务管理为核心的云总线产品，为客户提供完整的车身安全数据、精准的统计分析、
            实时的车辆监控等一体化解决方案。
          </p>
          <h4>基本情况</h4>
        </div>
        <ul>
          <li>
            作为系统主要设计者，参与了产品的需求调研，参与了项目需求分析设计，产品架构设计及系统的整体方案
            设计；
          </li>

          <li>
            作为系统对外对接负责人，负责系统的现场部署，后续需求交接，技术方案对接，多方人员组织协调等相关
            工作；
          </li>
          <li>
            基于Rancher2.0及GitLab搭建DevOps平台，使用Docker技术提供运行环境支持，K8S完成容器调度，Rancher
            实现k8s快速部署；
          </li>
          <li>
            采用Cassandra分布式数据库进行车辆数据存储，设计了合理的分区键，选择适当的副本数，并完成单节点
            物理配置选择；
          </li>
          <li>
            基于Redis、Mysql、Cassandra、RabbitMq等搭建数据基础服务，基础数据服务均运行在K8S上，使用K8S完
            成服务发现及调度；
          </li>
          <li>
            基于SpringCloud
            进行微服务改造，采用基于SpringBoot的技术栈开发，所有相关的服务运行在K8S平台；
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <h3>2017.6-2019.2 基于深度学习的客流统计 产品经理+技术经理</h3>
      <div class="project-list">
        <div class="project-description">
          <h4>项目简介</h4>
          <p>
            终端模块以IMX6Q 的CPU为计算核心，采用VPU,IPU作为辅助，结合多级流水，
            多线程并行等优化方法，
            同时对算法进行了深度优化，对目标检测模型进行深度裁剪，最终在以IMX6Q为核心的设备上实现了基于深度学
            习的客流统计算法。
          </p>
          <h4>基本情况</h4>
        </div>
        <ul>
          <li>
            综合模型重构、模型输入及输出优化、多线程并行及硬件特性加速等方法，最终实现了接近500倍的加速，
            实现了算法的终端部署；
          </li>

          <li>
            根据目标位置相关性分析设计了快速高效的乘客多目标跟踪算法及乘客上下车统计算法；
          </li>
          <li>
            进行算法优化时，对CPU整体计算性能、访存性能、算法热点进行了详细的测试，采用了选择热点，逐步优
            化的优化思路；
          </li>
          <li>
            为实现客流统计的多级流水技术及多线程并发，基于pthread封装了大量多线程开发基础类，包括线程、互
            斥量、条件变量、阻塞队列、双缓冲区、线程池等；
          </li>
          <li>
            数据采集及视频编码优化，采用多级流水的方式进行整体方案的设计，针对图像处理及视频编码使用了硬件
            加速；
          </li>
          <li>
            制定硬件需求方案，完成硬件的软件配置，算法运行环境配置，并将算法移植到目标设备中；
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <h3>2015.11-2017.1 国际金融衍生品交易系统V9.0 项目设计及开发</h3>
      <div class="project-list">
        <div class="project-description">
          <h4>项目简介</h4>
          <p>
            系统采用经典的金融交易系统的设计模式，统分为多个子系统，是典型的分布式设计模式，包括交易前置
            子系统，管理前置子系统， 交易子系统，上手网关子系统，
            自动结算子系统， 管理子系统， 外围包括行情 系统，
            管理终端，交易终端，API接入，级联子系统等。
          </p>
          <h4>基本情况</h4>
        </div>
        <ul>
          <li>
            前置系统使用了事件驱动状态机模型（EDSM）解决高并发问题，基于epoll实现，出于性能考虑使用了可调
            节的回调线程池来保证数据的及时读取及发送，同时采用数据发送缓冲区来提高数据的发送性能；
          </li>

          <li>
            前置系统使用使用了多进程及多线程的设计模式，进程或线程间使用了双缓冲消息队列作为交互工具，具有
            极高的性能，线程间数据独立设计，除数据交互外均无锁；
          </li>
          <li>
            前置系统实现上采用数据流上下行分离、数据持久化分离、会话流及通知流模式，并采用了序列号的流控模
            式；
          </li>
          <li>
            前置系统设计了高效的业务心跳模式，实测性能极佳；采用客户端维持心跳，每隔10s主动发送一次心跳请
            求，前置服务接受到请求后响应，双向检测；前置系统实现了独立的基于定时器的心跳检测模块，消除了心
            跳检测带来的延迟；
          </li>
          <li>
            为实现数据的快速分发，前置服务采用了散列表及备忘录的设计，实现了常数级效率的数据分发，快于基于
            Trie树的分发模式；
          </li>
          <li>
            主导管理API接入设计，独立开发管理API接入模块，并负责管理API文档编写及客户的部分使用疑难问题；
          </li>
          <li>参与交易API的测试，并编写自动可视化测试工具辅助测试；</li>
          <li>
            参与上手网关子系统的设计，并独立完成SGX、DGCX、CQG、IB、ES内外盘子系统接入等网关模块的设计及实
            现；
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
.project-header {
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

.project {
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

  .project-list {
    margin: 0 3rem 1rem 3rem;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    border-radius: 3px;
    box-shadow: -1px -1px 2px 2px rgb(94, 132, 235, 0.2);
    width: 60%;

    .project-description {
      margin: 0 1rem 0 1rem;
      h4 {
        text-align: center;
        font-weight: 600;
      }
      p {
        margin: 0 1rem 0 1rem;
      }
    }

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
