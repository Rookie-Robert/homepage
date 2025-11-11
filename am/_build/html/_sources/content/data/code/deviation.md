# Deviation Percentile from MA

`TradingView Pine`

```python

//@version=5
indicator("Deviation Percentile from MA", overlay=false)

// === 输入参数 ===
length = input.int(20, title="MA Window")
startDate = input.time(timestamp("2024-01-01 00:00 +0000"), "Start Date")
window = input.int(500, title="Max Historical Window (Bars)", minval=50)

// === 计算偏离百分比 ===
price = close
ma = ta.sma(price, length)
deviation = (price / ma - 1) * 100

// === 创建滚动偏离历史数组 ===
var float[] deviation_list = array.new_float()

// === 每根K线更新数据 ===
if time >= startDate
    array.push(deviation_list, deviation)
    // 控制数组大小，防止内存膨胀
    if array.size(deviation_list) > window
        array.shift(deviation_list)

// === 计算当前偏离值在整个数组中的百分位 ===
// 通过手动遍历统计小于当前值的数量
var float percentile = na
if time >= startDate and array.size(deviation_list) >= 30
    float current = deviation
    int count = 0
    int total = array.size(deviation_list)
    for i = 0 to total - 1
        if array.get(deviation_list, i) <= current
            count += 1
    percentile := (count / total) * 100

// === 画出百分位轨迹 ===
plot(percentile, title="Deviation Percentile (%)", color=color.new(color.orange, 0))
hline(50, "Median", color=color.gray)

```
