# Equities 权益资产

## 全球不同地区权益市场估值的常年差异

| 地区 | 估值 | 原因 |
|:---:|:---:|:---:|
| 美国 | 长期较高 | 科技股权重占比较大，ROIC 高 |
| 欧洲核心国家（英国、德国、法国） | 中等 | 金融股与传统制造股权重占比较大，增长潜力有限 |
| 东亚发达地区（日本、韩国、香港、台湾） | 长期较低 | 人口老龄化严重，内需严重不足 |
| 新兴市场 | 波动率大，周期性估值，平均估值较低 | 经济结构不稳定，政策风险高 |

- <h4><a href="https://fred.stlouisfed.org/series/VIXCLS" target="_blank">CBOE Volatility Index: VIX</a> / <a href="https://fred.stlouisfed.org/series/VXEEMCLS" target="_blank">CBOE Emerging Markets ETF Volatility Index</a></h4>

> Frequency: <mark>Daily</mark>

> Delay: <mark>2 D</mark>

> Correlation: <span style="color: red;">Very Strong</span>

<mark>美国权益市场波动率与新兴权益市场波动率的比值，与市场恐慌情绪呈正相关。</mark>

## 经济周期 4 阶段中各因素的相对强弱关系

![Exhibit_1](./img/Exhibit_1.png)
![Exhibit_2](./img/Exhibit_2.png)
![Exhibit_3](./img/Exhibit_3.png)
![Exhibit_6](./img/Exhibit_6.png)

*以上图片引用自 Invesco*

## 市场炒作主线

通过观察最近一段时间（5日、20日、50日、100日、200日）涨幅靠前的高资产规模和成交量的 ETF 与权益标的，可以辨析当前市场资金的主要流动方向和偏好，进而把握市场炒作主线。

## 更加通用的全市场 Williams VIX Fix 指数

> vixFix = (highestClose - low) / highestClose * 100

- highestClose 表示过去 22 个交易 K 线的最高收盘价
- low 表示当前交易 K 线的最低价

以上波动率变种指数旨在模拟 CBOE 的 VIX 指数，可以推广到更加通用的全市场标的。

## 多标的函数的意义

观察单一标的价格走势，基本只能捕捉价格随时间序列的变化，即 Price = f(t)；而通过其函数关系的变化，可以观察到更高维度的信息，此时价格是多因子混合作用的隐函数，即 Price = f(t, x, y, z, ...)。以下列出部分已经经过验证的具有显著意义的大类资产标的函数关系。

## 头部标的市值与行业总市值的比值

在由各种同行业标的所构成的指数中，处于金字塔顶端的标的市值通常占据相当高的比例，其市值与总市值的比值会根据市场的风险偏好而波动。当市场风险偏好较高时，该比值会降低；当市场风险偏好降低时，该比值会升高。






