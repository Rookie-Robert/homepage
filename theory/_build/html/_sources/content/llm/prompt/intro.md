# 提示词工程 Prompt Engineering

如果将 GPT 技术推进的 NLP 领域革命看作 John von Neumann 架构的计算机体系的又一次抽象升级，那就依然要从计算和存储两个方面考虑如何优化使用。

![](./img/1.png)

[source](https://mp.weixin.qq.com/s/CesMZqM9tprwmIx9gN3lMA)

基础模型与其前置训练数据将作为计算部分，优化计算部分需要升级基础模型或使用高质量垂直领域数据进行微调，成本相对较高。

包括提示词、检索增强生成、多模态工具等内容的上下文工程将作为存储部分，优化存储部分对于用户或轻度开发者成本相对较低。

![](./img/2.png)

[source](https://mp.weixin.qq.com/s/CesMZqM9tprwmIx9gN3lMA)

从 LLM memory 的底层向顶层向抽象，其优先级顺序如下：

1. System Prompt（系统提示词）：由基础 LLM 的开发者制定，硬性约束其他一切提示词和信息文本，想要修改必须深入 LLM 内部。
2. Developer / Model Set Context（半持久化约束上下文）：用户明确声明的可长期复用的结构性偏好，用户可以通过将提示词作为此部分内容来约束 LLM 的输出风格，但不能与 System Prompt 相违背。
3. Informational Context（信息性上下文）：用户通过外部信息输入使 LLM 获得预训练数据集以外的信息。
4. Short-term Memory / Conversation Window（短期记忆 / 当前对话窗口）：用户和 LLM 的交互内存。
5. State / Scratchpad（内部推理状态）：LLM 输出时的临时内存。

优化 Developer / Model Set Context（半持久化约束上下文）的成本相对低且效果相对好，这也是本节聚焦。

![](./img/3.png)

[source](https://mp.weixin.qq.com/s/CesMZqM9tprwmIx9gN3lMA)


