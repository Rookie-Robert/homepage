# 简单最优杠杆率 Simple Best Leverage

```python

import pandas as pd
import numpy as np

# 1. 读取数据文件（假设文件在当前目录下）
# 格式示例: 2016-01-04 103.13 102.89
df = pd.read_csv("QQQ.txt", sep=r"\s+", header=None, names=["Date", "Open", "Close"])

# 2. 转换日期并按时间排序
df["Date"] = pd.to_datetime(df["Date"])
df = df.sort_values("Date").reset_index(drop=True)

# 3. 计算每日对数收益率
df["log_return"] = np.log(df["Close"] / df["Close"].shift(1))

# 去掉首行 NaN
df = df.dropna(subset=["log_return"])

# 4. 计算统计量
daily_mean = df["log_return"].mean()
daily_var = df["log_return"].var(ddof=1)  # 无偏估计

N = 252  # 一年交易日数量

mu_annual = daily_mean * N
sigma2_annual = daily_var * N
sigma_annual = np.sqrt(sigma2_annual)

# 5. 打印结果
print("===== 年化统计结果 =====")
print(f"年化期望收益率 μ: {mu_annual:.6f}")
print(f"年化方差 σ²: {sigma2_annual:.6f}")
print(f"简单最优杠杆率 k = sqrt(μ/σ²): {np.sqrt(mu_annual/sigma2_annual):.6f}")
print(f"年化波动率 σ: {sigma_annual:.6f}")
print(f"样本区间: {df['Date'].iloc[0].date()} 至 {df['Date'].iloc[-1].date()}")
print(f"样本天数: {len(df)}")

# 可选：输出前几行检查
print("\n前5行数据:")
print(df.head())

```

