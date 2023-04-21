# DDD 领域驱动设计的学习笔记

## 代码结构

- Original 原始代码状态 [代码](./src/original/)
  - 相当于传统三层结构的 Service 层和 Dao 层
- Step01 搞清 DP 概念 [代码](./src/step01/)
  - 抽离 DP （Domain Primitive） - PhoneNumber
  - PhoneNumber 属于充血模型
    - 贫血模型 - 只包含 getter 与 setter
  - DP 概念
    - 特定领域
    - 精准定义
    - 自我验证
    - 拥有行为对象
  - DP 三原则
    - 让隐性的概念显性化
      - 电话号码、归属的、运营商
        - 电话号码是事物的隐性属性 - 使用 String 就隐藏了他的属性
    - 让隐性的上下文显性化
    - 封装多对象行为
- step02 搞清 Entity 、Repository 、Domain Service 关系 [代码](./src/step02/)
  - Repository 负责具体数据库处理
