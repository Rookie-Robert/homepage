# Government Bonds & Treasury Bills 长期债券与短期国库券

经济体的债务周期指该经济体的债务杠杆率从低到高的波动周期，一轮完整的周期通常有几十年甚至上百年之久，因此绝大多数人终生都可能无法经历一轮完整的债务周期。

自 2008 年之后，[全球各主要经济体的债务杠杆率](https://www.usdebtclock.org/)都出现了加速上升的趋势。一个经济体的债务由 4 大部门承担，分别是家庭部门、企业部门、政府部门和国外部门，其中企业部门又分为金融机构和非金融机构。不同部门承担更高的债务杠杆率会对经济体造成不同的效果。

---

- <h4>US Yield Curve 美国国债收益率曲线</h4>

Fed 和美国财政部可以通过政策调控美国国债收益率曲线的结构，这种调控并非是引导至明确的收益率位置，而是先放任市场向着期望的方向进行定价交易，然后观察经济状况与市场状况，并在适当的时机使用新政策控制不利情况，此时可以确定一个适合经济状况的收益率数值范围。不同的收益率曲线结构通常对应了不同的宏观阶段与经济环境，下表列出了常见的状态。

| 曲线结构的变化状态 | 主导变化段 | 宏观阶段 | 经济环境 | 资产价格变化 |
|:---:|:---:|:---:|:---:|:---:|
| `\` → `-` 或 `-` → `/`| 短端下降 | `债务重组末期`或`复苏初期` | 降息阶段，通胀稳定 |  |
| `-` → `/` | 长端上升 | `复苏`或`繁荣` | 降息末期，通胀开始上升 |  |
| `/` → `-` | 长端下降 | `繁荣末期`或`滞涨初期` | 通胀上升，经济增长减缓 |  |
| `/` → `-` | 短端上升 | `滞涨` | 加息初期，通胀较高但预期可控 |  |
| `\` → `-` | 长端下降 | `债务重组初期` | 基准利率变化较少，但市场先定价后期衰退 |  |
| `\` → `-` | 长端上升 | 从`债务重组初期`恢复 | 市场衰退预期消退 |  |
| `-` → `\` | 短端上升 | `滞涨`或`债务重组初期` | 加息阶段，通胀较高且预期可能失控 |  |
| → `V` | 中端下降 | `债务重组末期` | 短期流动性紧缩 + 中期经济衰退预期 + 长期经济增长稳定，市场定价短期流动性紧缩不可持续 |  |
| → `Λ` | 中端上升 | `债务重组` | 短期流动性宽松 + 中期通胀上升预期 + 长期增长疲软，容易陷入流动性陷阱 |  |

`信贷（Credit）`

---

- <h4>Yield Spread 国债利差</h4>

> Correlation: <span style="color: red;">Very Strong</span>

<mark>当两国长期国债收益率都能反映本国的长期资本回报率时，二者的差值与汇率呈正相关。</mark>

`信贷（Credit）`

---

- <h4>CN10Y - CN02Y</h4>

> Correlation: <span style="color: blue;">Strong</span>

由于美国是世界上最大的消费需求国，中国是世界上最大的生产供给国，因此两国的经济是高度互补。<mark>在此前提下，CN10Y - CN02Y 与 VIX 指数在中长期呈正相关。</mark>

`信贷（Credit）`

---

- <a href="https://sc.macromicro.me/charts/35584/us-treasury-move-index" target="_blank"><h4>Merrill Lynch Option Volatility Estimate (MOVE)</h4></a>

> Frequency: <mark>Daily</mark>

> Delay: <mark>1 D</mark>

> Correlation: <span style="color: red;">Very Strong</span>

MOVE Index 作为美国国债期货的波动率指标，<mark>与美债国债价格通常呈负相关</mark>。

`信贷（Credit）`

---

- <a href="https://www.tradingster.com/cot/futures/fin/043602" target="_blank"><h4>UST 10Y NOTE Positions - CBOT</h4></a>

> Frequency: <mark>Weekly</mark>

> Delay: <mark>1 W</mark>

> Correlation: <span style="color: blue;">Strong</span>

在 10 年期美债期货的持仓者分类中，<mark>Asset Mgr 的持仓与 US10 的价格通常呈负相关</mark>。

`信贷（Credit）`

---

- <h4><a href="https://sc.macromicro.me/charts/77820/us-fed-fci-g" target="_blank">FCI-G</a> <a href="https://www.federalreserve.gov/econres/notes/feds-notes/a-new-index-to-measure-us-financial-conditions-20230630.html" target="_blank">(raw)</a></h4>

> Frequency: <mark>Monthly</mark>

> Delay: <mark>1 M</mark>

> Correlation: <span style="color: red;">Very Strong</span>

金融脉冲增速指数是衡量关键指标变化对金融环境的累积效果，并将此效果量化为对未来一年 GDP 增速的影响，目前根据回顾窗口（金融指标变化在指数计算中包含的期间长度，例如 1 年期代表衡量过去一年的变化）的不同分为 1 年期与 3 年期版本。正值代表 GDP 增速将面临阻力（headwinds），负值代表将受到提振（tailwinds），举例来说，指数为 1 代表金融条件将对未来一年 GDP 增速产生 1% 的拖累。

衡量的指标总共有 7 种：联邦基金利率、 10 年期国债收益率、 30 年期固定按揭贷款利率、 BBB 级公司债收益率、道琼股市总报酬指数、 Zillow 房价指数与名义广义美元指数，使用 FRB / US 模型和美联储使用的其他模型所隐含的权重进行加权处理。

`信贷（Credit）`

---
