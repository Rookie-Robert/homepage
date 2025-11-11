# 从 Tiingo 获取 ticker 数据

```python

import requests
import pandas as pd
from datetime import datetime

# === 自定义参数 ===
TICKER = "GLD"
# tickers = ["XLK", "XLF", "XLY", "XLP", "VOX", "XLV", "XLI", "XLE", "XLU", "XLB", "VNQ"]
# tickers = ["DIA", "SPY", "QQQ", "IWM", "EWJ", "FEZ", "MCHI", "UVXY"]
# tickers = ["UUP", "BTCUSD", "TLT"]
# tickers = ["GLD", "SLV", "CPER", "USO", "UNG"] 
# tickers = ["DRN", "FAS", "CURE", "ERX", "GDXU", "YANG"]

START_DATE = "2015-01-01"
END_DATE = datetime.today().strftime('%Y-%m-%d')
OUTPUT_FILE = TICKER + ".txt"
TIINGO_API_TOKEN = ""  # <<< 你自己的 Token

# === 请求并保存数据 ===
def fetch_and_save_price_data(ticker: str, start_date: str, end_date: str, output_file: str):
    url = f"https://api.tiingo.com/tiingo/daily/{ticker}/prices"
    headers = {"Content-Type": "application/json"}
    params = {
        "startDate": start_date,
        "endDate": end_date,
        "token": TIINGO_API_TOKEN
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        print(f"请求失败: {response.status_code} - {response.text}")
        return

    data = response.json()
    if not data:
        print("未获取到数据，检查 ticker 或时间范围")
        return

    # 转换为 DataFrame
    df = pd.DataFrame(data)
    df['date'] = pd.to_datetime(df['date']).dt.strftime('%Y-%m-%d')

    # 只保留所需字段并写入文件
    df_to_save = df[['date', 'open', 'close']]
    df_to_save.to_csv(output_file, sep=' ', index=False, header=False)
    print(f"数据已保存到 {output_file}")

# === 调用函数 ===
fetch_and_save_price_data(TICKER, START_DATE, END_DATE, OUTPUT_FILE)


```
