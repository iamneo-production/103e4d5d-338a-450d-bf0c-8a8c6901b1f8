# 103e4d5d-338a-450d-bf0c-8a8c6901b1f8
https://sonarcloud.io/summary/overall?id=examly-test_103e4d5d-338a-450d-bf0c-8a8c6901b1f8


# Team Akashwani

# Frontend
## Configuration
1. First, make sure you have Node.js and npm (Node Package Manager) installed on your computer, You can check this by running the following commands in your terminal:

```
    node -v
    npm -v
```

> Read docs here [Node.js Documentation](https://nodejs.org/en/docs/)

## Installation

1. Clone the project from GitHub

```
    git clone https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8
    cd frontend/
```

2. Once the project is cloned, navigate into the project directory and run the following command to install all the necessary dependencies:

```
    npm install
```

3. Finally, to start the development server, run the following command in your terminal:

```
    npm run dev
```
> This will start the development server and you should be able to see your project running at [`http://localhost:8081`](http://localhost:8081) in your browser.

# AQI Prediction
## Data Source:
We used the AQI data provided by Telangana State Pollution Control Board.

#### Link : https://tspcb.cgg.gov.in/Pages/Envdata.aspx

## Data Preprocessing
We compiled the data collected from the Telangana State Pollution Control Board, remove anomalities from it, filled missing data using interpolation and preprocessed it to convert it into time series data.

#### Link of AQI Dataset file : [AQI Data.csv](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/AQI%20Data.csv)

> Note : Adilabad contains 12 missing values which were filled using interpolation during the [Model Selection](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/AQI_Model_Selection.ipynb) and [Model Prediction](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/AQI_Prediction.ipynb)

## Model Selection
As very little data was available for AQI, we employed various techniques to select the model that gives the best prediction.

We analysed the models on 4 parameters namely mean absolute percentage error (mape), mean absolute error (mae), root mean square error (rmse) and r squared (r2 score).

### Models Used during Model Selection:
1. ARIMA
2. AutoARIMA
3. Exponential Smoothening
4. FFT (Fast Fourier Transform)
5. Stats Forecast AutoARIMA
6. Stats Forecast ETS
7. Prophet
8. NBEATSModel

### Results of Model Selection
For *Adilabad*, *Nizamabad* and *Warangal* AQI prediction, *Exponential Smoothening* performed the best.

For *Karimnagar* AQI prediction *FFT* *(Fast Fourier Transfer)* performed the best.

For *Khammam* AQI prediction, *ARIMA* *(Autoregressive integrated moving average)* performed the best.

#### Link of Model Selection Notebook: [Model Selection](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/AQI_Model_Selection.ipynb)

## AQI prediction
#### 1. Adilabad
Model Used: Exponential Smoothening 
> MAE (Mean Absolute Error) : 4.0286041824105014

> MAPE (Mean Absolute Percentage Error): 7.196123356262139

> RMSE (Root Mean Square Error): 5.024509754024247

#### 2. Karimnagar
Model Used : FFT (Fast Fourier Transfer)
> MAE (Mean Absolute Error) : 17.677645643002723

> MAPE (Mean Absolute Percentage Error) : 22.23969342726968

> RMSE (Root Mean Square Error) : 20.126667813189886

#### 3. Khammam
Model Used : ARIMA (Autoregressive integrated moving average)
> MAE (Mean Absolute Error) : 14.500709824296303

> MAPE (Mean Absolute Percentage Error) : 20.41316428763531

> RMSE (Root Mean Square Error) : 18.495338558640285

#### 4. Nizamabad
Model Used : Exponential Smoothening 
> MAE (Mean Absolute Error) : 3.186063832987733

> MAPE (Mean Absolute Percentage Error) : 5.741683917760908

> RMSE (Root Mean Square Error) : 4.262467068785024

#### 5. Warangal
Model Used : Exponential Smoothening
> MAE (Mean Absolute Error) : 10.576681596927527

> MAPE (Mean Absolute Percentage Error) : 13.541585215928928

> RMSE (Root Mean Square Error) : 13.972358665058602


#### Link of AQI Prediction Notebook: [Model Prediction](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/AQI_Prediction.ipynb)

## Results
The AQI prediction from the month January 2023 to December 2023 obtained for each city were stored in a csv file.

#### Link of AQI prediction.csv file : [Prediction of AQI for the year 2023](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/Prediction%20of%20AQI%20for%20year%202023.csv)

# Heatwave Prediction
## Data Source:
We used the Weather data provided by Open Data Telangana Weather Data

#### Link : https://data.telangana.gov.in/dataset/telangana-weather-data

## Data Preprocessing
We compiled the data collected from the Open Data Telangana Weather Data, remove anomalities from it and preprocessed it to convert it into time series data.

#### Link of Heatwave Dataset:
1. [Adilabad](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Adilbad/Adilabad.csv)
2. [Karimnagar](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Karimnagar/Karimnagar.csv)
3. [Khammam](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Khammam/Khammam.csv)
4. [Nizamabad](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Nizamabad/Nizamabad.csv)
5. [Warangal](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Warangal/Warangal.csv)

## Model Selection
We employed various techniques to select the best model that gives the best temperature prediction.

We analysed the models on 2 parameters namely mean absolute error (mae) and root mean square error (rmse).

### Models Used during Model Selection:
1. ARIMA
2. Exponential Smoothening
3. FFT (Fast Fourier Transform)
4. LSTM
5. Neural Prophet

### Results of Model Selection
*Neural Prophet* performed the best for all 5 cities.

## Heatwave prediction
#### 1. Adilabad
Model Used: Neural Prophet 
> MAE (Mean Absolute Error) : 1.610

> RMSE (Root Mean Square Error): 2.090

#### 2. Karimnagar
Model Used : Neural Prophet
> MAE (Mean Absolute Error) : 1.510

> RMSE (Root Mean Square Error) : 1.970

#### 3. Khammam
Model Used : Neural Prophet
> MAE (Mean Absolute Error) : 1.390

> RMSE (Root Mean Square Error) : 1.870

#### 4. Nizamabad
Model Used : Neural Prophet 
> MAE (Mean Absolute Error) : 1.510

> RMSE (Root Mean Square Error) : 1.970

#### 5. Warangal
Model Used : Neural Prophet
> MAE (Mean Absolute Error) : 1.860

> RMSE (Root Mean Square Error) : 2.480

#### Link of Heatwave Prediction Notebook:
1. [Adilabad](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Adilbad/Heatwave_Adilabad.ipynb)
2. [Karimnagar](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Karimnagar/HeatwaveKarimnagar.ipynb)
3. [Khammam](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Khammam/Heatwave_Khammam.ipynb)
4. [Nizamabad](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Nizamabad/HeatwaveNizamabad.ipynb)
5. [Warangal](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/HeatWave_prediction_citywise/Warangal/Heatwave_Warangal.ipynb)

## Results
The temperature prediction from the month January 2023 to December 2023 obtained for each city were stored in a csv file.

#### Link of csv file:
1. [Adilabad](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/Heatwave_prediction_ouput/Adilabad2023.csv)
2. [Karimnagar](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/Heatwave_prediction_ouput/Karimnagar2023.csv)
3. [Khammam](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/Heatwave_prediction_ouput/Khammam2023.csv)
4. [Nizamabad](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/Heatwave_prediction_ouput/Nizamabad2023.csv)
5. [Warangal](https://github.com/iamneo-production/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/HeatWave/Heatwave_prediction_ouput/Warangal2023.csv)
