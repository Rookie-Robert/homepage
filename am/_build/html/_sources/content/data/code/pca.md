# 主成分分析 PCA

```python

import os
import pandas as pd
import numpy as np
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import seaborn as sns

# 配置路径
folder_path = './data'

# 存储每个资产的数据
price_dfs = []

'''
for filename in os.listdir(folder_path):
    if filename.endswith('.txt'):
        filepath = os.path.join(folder_path, filename)
        df = pd.read_csv(filepath, sep=' ', header=None, names=['Date', 'Open', 'Close'])
        dupes = df.duplicated(subset='Date')
        if dupes.any():
            print(f"{filename} has duplicate dates!")
'''

for filename in os.listdir(folder_path):
    if filename.endswith('.txt'):
        filepath = os.path.join(folder_path, filename)
        ticker = filename[:-4]  # 去掉.txt作为ticker名
        
        # 读取数据
        df = pd.read_csv(filepath, sep=' ', header=None, names=['Date', 'Open', 'Close'])
        df['Date'] = pd.to_datetime(df['Date'])
        df = df[['Date', 'Close']].copy()
        df = df.set_index('Date')
        df.rename(columns={'Close': ticker}, inplace=True)
        price_dfs.append(df)

# 合并所有资产的收盘价数据
all_prices = pd.concat(price_dfs, axis=1).sort_index()

# 删除缺失太多的列或行
all_prices.dropna(axis=0, how='any', inplace=True)

# 计算对数收益率
log_returns = np.log(all_prices / all_prices.shift(1)).dropna()

# 相关性分析
correlation_matrix = log_returns.corr()
print("=== correlation matrix ===")
print(correlation_matrix)

# 可视化相关性热图
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')
plt.title("asset log return correlation heatmap")
plt.tight_layout()
plt.show()

# PCA 分析
pca = PCA()
pca.fit(log_returns)

explained_var = pca.explained_variance_ratio_
print("\n=== PCA explained proportion of variance ===")
for i, var in enumerate(explained_var):
    print(f"PC{i+1}: {var:.2%}")

# 可视化解释方差占比
plt.figure(figsize=(8, 5))
plt.plot(np.cumsum(explained_var), marker='o')
plt.title('accumulated explained variance')
plt.xlabel('Principal Component')
plt.ylabel('accumulated explained proportion')
plt.grid(True)
plt.tight_layout()
plt.show()

# 获取资产名称
assets = log_returns.columns

# 获取主成分矩阵（每一行为一个主成分，每一列为一个资产）
loadings = pd.DataFrame(pca.components_.T, index=assets, columns=[f'PC{i+1}' for i in range(pca.n_components_)])

# 显示前几个主成分载荷（比如前5个）
print("\n=== loadings ===")
print(loadings.iloc[:, :5].round(4))

# 可视化（柱状图）每个资产在第一个主成分上的载荷
plt.figure(figsize=(10, 6))
loadings['PC1'].sort_values().plot(kind='barh')
plt.title('PC1 loading')
plt.xlabel('loading')
plt.tight_layout()
plt.show()

```
