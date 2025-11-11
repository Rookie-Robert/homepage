# 数学 Mathematics

- 知识迁移，跨学科套利。

- 寻找闭环的状态转移方程和多变量恒等式。

---

数学

> 公理——定理——猜想——定理——猜想——...

金融

> 公理1——定理——猜想——定理——猜想——...
>
> 公理1 × 公理2 √
>
> 公理2——定理——猜想——定理——猜想——...
>
> 公理2 × 公理3 √
>
> ...

数学

> 余项，如果是高阶无穷小可忽略

金融

> 小周期 or 小资金，中短期无法与大周期 or 大资金抗衡，否则逆势
> 
> 次要风险，无法证明是否会演变成为主要风险，依然需要对冲

---

首先统计当前市场的概况分布结构

<details>
<summary>常见概率分布参数与形状刻画表</summary>

| 分布 | PDF 表达式 | 参数 | 形状刻画 |
| :-: | :-: | :-: | :-: |
| **正态分布** Normal($\mu, \sigma^2$) | $$f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp \!\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)$$ | $\mu$（位置）, $\sigma$（尺度） | 对称钟形；$\mu$ 定位，$\sigma$ 决定宽度 |
| **对数正态分布** Lognormal($\mu, \sigma^2$) | $$f(x) = \frac{1}{x\sigma\sqrt{2\pi}} \exp \!\left( -\frac{(\ln x - \mu)^2}{2\sigma^2} \right), \quad x>0$$ | $\mu, \sigma$ | 右偏；$\sigma$ 越大 → 偏度和峰度越大 |
| **Gamma 分布** Gamma($k, \theta$) | $$f(x) = \frac{1}{\Gamma(k)\theta^k} x^{k-1} e^{-x/\theta}, \quad x>0$$ | $k$（形状）, $\theta$（尺度） | 偏度 $= \tfrac{2}{\sqrt{k}}$，峰度 $= \tfrac{6}{k}$；$k$ 大时趋向正态 |
| **Beta 分布** Beta($\alpha, \beta$) | $$f(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}, \quad 0<x<1$$ | $\alpha, \beta$ | $\alpha=\beta$ 对称；$\alpha<\beta$ → 右偏，$\alpha>\beta$ → 左偏 |
| **指数分布** Exp($\lambda$) | $$f(x) = \lambda e^{-\lambda x}, \quad x>0$$ | $\lambda$（速率） | 特殊的 Gamma($k=1$)，典型右偏 |
| **卡方分布** $\chi^2(k)$ | $$f(x) = \frac{1}{2^{k/2}\Gamma(k/2)} x^{k/2-1} e^{-x/2}, \quad x>0$$ | $k$（自由度） | 偏度 $=\sqrt{8/k}$；自由度大时趋近正态 |
| **柯西分布** Cauchy($x_0, \gamma$) | $$f(x) = \frac{1}{\pi \gamma \left[1+\left(\tfrac{x-x_0}{\gamma}\right)^2\right]}$$ | $x_0$（位置）, $\gamma$（尺度） | 无均值/方差；极厚尾，峰度无定义 |
| **帕累托分布** Pareto($\alpha, x_m$) | $$f(x) = \frac{\alpha x_m^\alpha}{x^{\alpha+1}}, \quad x \geq x_m > 0$$ | $\alpha$（形状）, $x_m$（最小值/尺度） | 极厚尾；$\alpha$ 小时尾部特别重，常用于财富/城市规模建模 |

---

| 部分函数 | 表达式 | 描述 |
| :-: | :-: | :-: |
| **Gamma 函数** $\Gamma(k)$ | $$\Gamma(k) = \int_0^\infty x^{k-1} e^{-x} \, dx, \quad k>0$$ | 将阶乘推广到实数/复数域；当 $k \in \mathbb{N}$ 时，$\Gamma(k) = (k-1)!$ |
| **Beta 函数** $B(\alpha,\beta)$ | $$B(\alpha,\beta) = \int_0^1 x^{\alpha-1} (1-x)^{\beta-1} dx, \quad \alpha,\beta>0$$ | 与 Gamma 函数相关：$$B(\alpha,\beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$$ |

---

### 总结抽象
- **正态分布**：由 $\mu, \sigma$ 就能完全决定形状（对称）。  
- **偏态分布**：除了位置 $\mu$ 和尺度 $\sigma$，还需要 **形状参数**（如偏度、峰度，或 $\alpha,\beta,k$ 等）来刻画尾部和对称性。  
- **厚尾分布（如柯西、帕累托、金融收益）**：常常均值、方差都不收敛，必须依赖位置、尺度等特殊参数。  

```python
import numpy as np
import plotly.graph_objects as go
from scipy.stats import norm, lognorm, gamma, beta, expon, chi2, cauchy, pareto

# 定义 x 取值范围（覆盖常见分布）
x = np.linspace(-5, 10, 1000)
x_pos = np.linspace(0.001, 10, 1000)   # 仅正值定义的分布使用
x_unit = np.linspace(0, 1, 1000)       # [0,1] 定义的分布使用

# 定义分布函数及其默认参数（同时给出 PDF 和 CDF）
distributions = {
    "Normal (μ, σ)": {
        "pdf": lambda x, μ=0, σ=1: norm.pdf(x, loc=μ, scale=σ),
        "cdf": lambda x, μ=0, σ=1: norm.cdf(x, loc=μ, scale=σ),
        "params": {"μ": 0, "σ": 1},   # μ: 均值, σ: 标准差
        "x": x
    },
    "Lognormal (μ, σ)": {
        "pdf": lambda x, μ=0, σ=0.5: lognorm.pdf(x, s=σ, scale=np.exp(μ)),
        "cdf": lambda x, μ=0, σ=0.5: lognorm.cdf(x, s=σ, scale=np.exp(μ)),
        "params": {"μ": 0, "σ": 0.5}, # μ: 对数正态底层正态分布均值, σ: 标准差
        "x": x_pos
    },
    "Gamma (k, θ)": {
        "pdf": lambda x, k=2, θ=2: gamma.pdf(x, a=k, scale=θ),
        "cdf": lambda x, k=2, θ=2: gamma.cdf(x, a=k, scale=θ),
        "params": {"k": 2, "θ": 2},   # k: 形状参数, θ: 尺度参数
        "x": x_pos
    },
    "Beta (α, β)": {
        "pdf": lambda x, α=2, β=5: beta.pdf(x, α, β),
        "cdf": lambda x, α=2, β=5: beta.cdf(x, α, β),
        "params": {"α": 2, "β": 5},   # α, β: 形状参数
        "x": x_unit
    },
    "Exponential (λ)": {
        "pdf": lambda x, λ=1: expon.pdf(x, scale=1/λ),
        "cdf": lambda x, λ=1: expon.cdf(x, scale=1/λ),
        "params": {"λ": 1},           # λ: 速率参数 (scale = 1/λ)
        "x": x_pos
    },
    "Chi-square (k)": {
        "pdf": lambda x, k=4: chi2.pdf(x, df=k),
        "cdf": lambda x, k=4: chi2.cdf(x, df=k),
        "params": {"k": 4},           # k: 自由度
        "x": x_pos
    },
    "Cauchy (x0, γ)": {
        "pdf": lambda x, x0=0, γ=1: cauchy.pdf(x, loc=x0, scale=γ),
        "cdf": lambda x, x0=0, γ=1: cauchy.cdf(x, loc=x0, scale=γ),
        "params": {"x0": 0, "γ": 1},  # x0: 位置参数, γ: 尺度参数
        "x": x
    },
    "Pareto (α)": {
        "pdf": lambda x, α=3: pareto.pdf(x, b=α),
        "cdf": lambda x, α=3: pareto.cdf(x, b=α),
        "params": {"α": 3},           # α: 形状参数
        "x": x_pos
    }
}

# 初始绘制（默认选择 Normal）
init_dist = "Normal (μ, σ)"
init_params = distributions[init_dist]["params"]
x_vals = distributions[init_dist]["x"]

# 计算初始 PDF & CDF
y_pdf = distributions[init_dist]["pdf"](x_vals, **init_params)
y_cdf = distributions[init_dist]["cdf"](x_vals, **init_params)

# 初始化图像：左边 PDF，右边 CDF
fig = make_subplots(rows=1, cols=2, subplot_titles=("PDF", "CDF"))

# 添加初始曲线
fig.add_trace(go.Scatter(x=x_vals, y=y_pdf, mode="lines", name="PDF"), row=1, col=1)
fig.add_trace(go.Scatter(x=x_vals, y=y_cdf, mode="lines", name="CDF"), row=1, col=2)

# 添加下拉菜单
buttons = []
for dist_name, dist_info in distributions.items():
    params = dist_info["params"]
    x_vals = dist_info["x"]

    # 构造带参数说明的标题
    param_str = ", ".join([f"{k}={v}" for k, v in params.items()])
    title = f"{dist_name}, 参数: {param_str}"

    # 计算对应分布 PDF 和 CDF
    y_pdf_new = dist_info["pdf"](x_vals, **params)
    y_cdf_new = dist_info["cdf"](x_vals, **params)

    # 按钮配置
    buttons.append(dict(
        method="update",
        label=dist_name,
        args=[
            {"x": [x_vals, x_vals], "y": [y_pdf_new, y_cdf_new]},  # 两个子图同时更新
            {"title": title}
        ]
    ))

# 设置图像布局
fig.update_layout(
    title="概率分布的 PDF 与 CDF 交互式可视化",
    xaxis_title="x",
    yaxis_title="PDF",
    xaxis2_title="x",
    yaxis2_title="CDF",
    updatemenus=[{
        "buttons": buttons,
        "direction": "down",
        "showactive": True
    }]
)

fig.show()

```

</details>

---

<details>
<summary>Anscombe's quartet</summary>

Anscombe's quartet 是四组基本的统计特性一致的数据，但由它们绘制出的图表则截然不同。每一组数据都包括了 11 个 (x,y) 点。这四组数据由统计学家 Francis Anscombe 于 1973 年构造，他的目的是用来说明在分析数据前先绘制图表的重要性，以及离群值对统计的影响之大。

![Anscombe's quartet](./img/Anscombe's_quartet_3.svg.png)

这四组数据的共同统计特性如下：

|  |  |
|:-:|:-:|
| x 的平均数 | 9 |
| x 的方差 | 11 |
| y 的平均数 | 7.50（精确到小数点后两位） |
| y 的方差 | 4.122 或 4.127（精确到小数点后三位） |
| x 与 y 之间的相关系数 | 0.816（精确到小数点后三位） |
| 线性回归线 | y = 3.00 + 0.500 x（分别精确到小数点后两位和三位） |

在四幅图中，由第一组数据绘制的图表（左上图）是看起来最“正常”的，可以看出两个随机变量之间的相关性。从第二组数据的图表（右上图）则可以明显地看出两个随机变量间的关系是非线性的。第三组中（左下图），虽然存在着线性关系，但由于一个离群值的存在，改变了线性回归线，也使得相关系数从 1 降至 0.81。最后，在第四个例子中（右下图），尽管两个随机变量间没有线性关系，但仅仅由于一个离群值的存在就使得相关系数变得很高。

Edward Tufte 在他所著的《图表设计的现代主义革命》（The Visual Display of Quantitative Information）一书的第一页中，就使用 Anscombe's quartet 来说明绘制数据图表的重要性。

</details>

---
