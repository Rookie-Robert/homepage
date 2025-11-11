# Williams Vix Fix

`TradingView Pine`

```python

//@version=5
indicator("VIX Fix", overlay=false)

// Define the lookback period
length = 22

// Calculate the highest close over the past 22 bars
highestClose = ta.highest(close, length)

// Calculate the VIX Fix
vixFix = (highestClose - low) / highestClose * 100

// Plot the VIX Fix indicator
plot(vixFix, title="VIX Fix", color=color.blue, linewidth=2)

```
