import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load data
data = pd.read_csv("data/sample.csv")

# Parameters
perc = 1.0
nbr = 5

# Extract necessary columns
o = data['open']
h = data['high']
l = data['low']
c = data['close']

# Calculate step
step = c * (perc / 100)

# Initialize matrices
total = np.zeros((7, 4), dtype=int)
vals = np.zeros((5, 4), dtype=float)

# Determine if the previous candle was green or red
green = c.shift(1) > o.shift(1)
red = c.shift(1) < o.shift(1)

# Initialize previous values for total
if green.iloc[1]:
    total[5][0] += 1
if red.iloc[1]:
    total[5][1] += 1

# Score calculation function
def score(x, i, total, vals, h, l, green, red, idx):
    try:
        ghh = total[i, 0]
        gll = total[i, 1]
        rhh = total[i, 2]
        rll = total[i, 3]
        gtotal = total[5, 0]
        rtotal = total[5, 1]
        hh = h[idx] >= h[idx - 1] + x
        ll = l[idx] <= l[idx - 1] - x
        if green[idx] and hh:
            total[i, 0] = ghh + 1
            vals[i, 0] = round(((ghh + 1) / gtotal) * 100, 2) if gtotal != 0 else 0
        if green[idx] and ll:
            total[i, 1] = gll + 1
            vals[i, 1] = round(((gll + 1) / gtotal) * 100, 2) if gtotal != 0 else 0
        if red[idx] and hh:
            total[i, 2] = rhh + 1
            vals[i, 2] = round(((rhh + 1) / rtotal) * 100, 2) if rtotal != 0 else 0
        if red[idx] and ll:
            total[i, 3] = rll + 1
            vals[i, 3] = round(((rll + 1) / rtotal) * 100, 2) if rtotal != 0 else 0
    except RuntimeWarning:
        print("Error Occured")

# Apply the score function for each level
for idx in range(1, len(data)):
    for i in range(nbr):
        score(step[idx] * i, i, total, vals, h, l, green, red, idx)

# Add new features
data['prev_close'] = c.shift(1)
data['price_diff'] = c - o
data['high_low_diff'] = h - l
data['close_open_diff'] = c - o

# Drop rows with missing values
data = data.dropna()

# Prepare data for machine learning
features = data[['open', 'high', 'low', 'close', 'prev_close', 'price_diff', 'high_low_diff', 'close_open_diff']].values
labels = np.where(data['close'].shift(-1) > data['close'], 1, 0)
features = features[:-1]  # Remove the last row to match the labels' length
labels = labels[:-1]  # Remove the last label as it will be NaN

# Check data balance
print(f"Green candles: {np.sum(labels == 1)}, Red candles: {np.sum(labels == 0)}")

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=42)

# Train a RandomForestClassifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict and evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Use the model to predict the next candle
next_candle_features = np.array([o.iloc[-1], h.iloc[-1], l.iloc[-1], c.iloc[-1], c.iloc[-2], c.iloc[-1] - o.iloc[-1], h.iloc[-1] - l.iloc[-1], c.iloc[-1] - o.iloc[-1]]).reshape(1, -1)
next_candle_prediction = model.predict(next_candle_features)
print("Next Candle Prediction:", "Green" if next_candle_prediction == 1 else "Red")
