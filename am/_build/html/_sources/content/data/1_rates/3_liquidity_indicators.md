# 流动性指标 Liquidity Indicators 

- <a href="https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm" target="_blank"><h4>Fed recent balance sheet trends</h4></a>

> Frequency: <mark>Weekly</mark>

> Delay: <mark>1 W</mark>

> Correlation: <span style="color: red;">Very Strong</span>

<mark>在 Fed 的资产负债表各部分中，资产部分与负债部分是相等的。资产部分主要以 Securities Held Outright 为主，其数额与 Fed 的 QE/QT 密切相关；负债部分中变化最大的是 Deposites of Depository Institutions 部分和 Treasury Balance 部分，Deposites of Depository Institutions 与银行间资金流动性和风险市场的流动性呈正相关，Treasury Balance 规模通常与私人部门资金规模即风险市场的流动性呈负相关，TGA 资金规模高有利于后续政府部门施行经济刺激政策。</mark>

---

- <a href="https://www.newyorkfed.org/markets/desk-operations/repo" target="_blank"><h4>Repo Operations</h4></a>

> Frequency: <mark>Daily</mark>

> Delay: <mark>1 W</mark>

> Correlation: <span style="color: red;">Very Strong</span>

<mark>NY Fed 每天进行的回购和逆回购操作，当短期成交量放大时，通常表示市场的现金流动性紧张，必须从 Fed 借入现金。</mark>

---

- <a href="https://fred.stlouisfed.org/series/RRPONTSYD/" target="_blank"><h4>ON RRP</h4></a>

> Frequency: <mark>Daily</mark>

> Delay: <mark>1 D</mark>

> Correlation: <span style="color: red;">Very Strong</span>

Overnight Reverse Repurchase Agreements，隔夜逆回购是 New York Fed 在授权条件下向市场金融机构（货币基金、、做市商、商业银行等）出借国债等证券，同时从它们手中吸收短期资金（即收回流动性），并在隔日以预设利率买回证券，此操作有助于为短期利率提供下限。

<mark>当 ON RRP 规模增加时，大量现金被锁定在风险市场之外，导致风险资产的流动性偏紧；当 ON RRP 规模降低时，现金开始从无风险市场进入风险市场，导致风险资产的流动性宽松；当 ON RRP 规模接近 0 时，风险市场的流动性“缓冲垫”消失，需要依靠银行准备金或私人部门资产吸收流动性冲击，导致风险市场的波动率上升。</mark>

---

- <a href="https://sc.macromicro.me/charts/3766/hk-monetary-base" target="_blank"><h4>HK Aggregate Balance</h4></a>

> Frequency: <mark>Daily</mark>

> Delay: <mark>1 D</mark>

> Correlation: <span style="color: red;">Very Strong</span>

银行为结算银行同业的收支及银行与金管局之间的收支，而在金管局开设的结算户口结余总额，根据货币发行局制度的运作机制，唯一会令总结余出现变动的情况，就是金管局因资金流入或流出港元作出相应行动。<mark>该指标与港币和港股的流动性呈正相关。</mark>

---


- <h4><a href="https://zh.tradingeconomics.com/china/reverse-repo-rate" target="_blank">China 7-Day Reverse Repo Rate</a> ≤ <a href="https://www.chinamoney.com.cn/chinese/tycdfxxx/" target="_blank">AAA tycdfxxx</a> ≤ <a href="https://zh.tradingeconomics.com/china/1-year-mlf-rate" target="_blank">1Y MLF</a></h4>

> Frequency: <mark>Monthly</mark>

> Delay: <mark>1 M</mark>

> Correlation: <span style="color: blue;">Strong</span>

7 天逆回购利率是中国人民银行（PBOC）在公开市场操作最常用的短期政策利率，通常被视为短端政策利率的下限；1 年期中期借贷便利（MLF）利率是 PBOC 对商业银行投放中期流动性的关键利率工具，被视为中端政策利率锚定点，也是 LPR 报价的基础（LPR = MLF + 加点）。1 年期商业银行同业存单利率（特别是 AAA 评级银行发行的），属于银行之间的市场化融资利率，会受市场供需、政策预期、信用风险溢价等多因素影响，在利率市场化环境中，它反映银行体系对中期资金成本的预期。

<mark>通常情况下，1 年期 AAA 评级商业银行同业存单利率在 7 天逆回购利率和 1 年期中期借贷便利间浮动；在市场流动性非常宽松时，会低于区间下限；在流动性非常紧张时，会高于区间上限。通过观察其与区间上下限的关系，可以判断市场流动性状况。</mark>

---

