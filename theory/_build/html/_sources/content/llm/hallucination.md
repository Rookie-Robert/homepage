# 幻觉 Hallucination

幻觉（Hallucination）是由机器模型产生的含有虚假或未经证实的但却被伪装成真实信息的输出。幻觉拥有双面性：它既像人类的想象力，带来无限的憧憬与希望；又像无效的信息沼泽，让使用者深陷其中。

## 幻觉的创新

### 神话、宗教和科学是幻觉吗

在上古时期甚至在近现代理论科学革命前，神话和宗教控制占据着人心中类似于现代科学理论的地位，因为人们总要用一些东西来描述观察和体会到的事物。在自然灾害面前，人类的力量非常渺小，此时人类会幻想是否在自然背后有一个“神”，神话就诞生了；但是人类社会中没有真正的“神”，于是统治阶级需要将自己具象化为“神”的代理，宗教就诞生了；近现代理论科学革命，利用实验科学更好地描述了自然，科学就诞生了。人类群体是阶级社会，那么就需要一套“幻觉”来维持秩序，从这个角度看，“幻觉”也可以被称为“规则”，这种幻觉的价值贯穿人类群体的核心。

### 文学、影视和历史是幻觉吗

文学、影视和历史，都有杜撰的成分，那么并非客观真实发生的这些事物是否也能被称为“幻觉”？如果说神话、宗教和科学是全人类的集体幻觉，那么对于文学、影视和历史的解读就可以被视为个人自定义的幻觉，从这个角度看，这种幻觉展示出每个人的精神意志。

### 幻觉映射的是大脑的想象与人心的欲望

> **It runs on the world’s most powerful graphics chip — imagination.** *by Sheldon Cooper, The Big Bang Theory*

> **It shows us nothing more or less than the deepest, most desperate desire of our hearts. You, who have never known your family, see them standing around you. Ron, who has always been overshadowed by his brothers, sees himself standing alone, the best of all of them. However, this mirror will give us neither knowledge nor truth. Men have wasted away before it, entranced by what they have seen, or been driven mad, not knowing if what it shows is real or even possible.** *by Albus Dumbledore, Harry Potter and the Philosopher's Stone*

人们可以通过文本、音频、视频、仿真实物等搭配自己的想象来满足内心的欲望，LLM 产生的自圆其说的更逼真的“幻觉”能更好地激发想象并满足欲望。

### 信息孤岛

“信息孤岛”指某种封闭的信息环境，在这种环境中获得的信息只会正反馈式地强化对该环境的认同。LLM 生成的更加令人沉浸的幻觉，加速了信息孤岛的形成并巩固了其壁垒。

## 幻觉的限制

科研、金融、法律、医疗等曾经是强知识垄断性的行业，在 LLM 出现后，只要是互联网可公开检索的相关基础知识，都可以通过 LLM 直接获得，而不必再咨询相关从业者。搜索人还可以根据 LLM 提供的启发进一步深入了解，这降低了获取强垄断性行业知识的门槛。但是正因为用户使用 LLM 是为了获取内容的便捷性，未经证实或伪造的输出内容也会被用户信以为真，这在某些场景下是致命的。

LLM 除了可以搜索信息，另一大优势就是快速生成大量无意义甚至严重背离基本事实的信息。虽然使用在线 LLM 会被限制生成违反规定的内容，但是大量开源模型依然可以作为信息污染源生成相关内容。且由于 LLM 生成的信息已经能通过绝大多数用于区分人机的测试，说明其生成的信息已经足够“以假乱真”。进一步地，在将 LLM 作为信息污染源生成的信息公开在互联网上后，这些未经验证的信息又会被其他 LLM 作为正确的训练数据进一步强化相关。这将导致如果仅使用 LLM 生成的信息作为指导依据而不去验证其真伪，完全可以通过污染其数据源从而达到控制这些使用 LLM 人群的信息环境的目的。并且使用 LLM 获取信息会比使用其他方法更加便捷，由于惰性的存在，更多人将会倾向于仅使用 LLM 并相信其提供的信息。

因此人工审核与推理校验依然是使用 LLM 获取真实信息的最基础操作。
