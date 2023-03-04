# 103e4d5d-338a-450d-bf0c-8a8c6901b1f8
https://sonarcloud.io/summary/overall?id=examly-test_103e4d5d-338a-450d-bf0c-8a8c6901b1f8


# Team Akashwani


# AQI

## Data Source:
We used the AQI data provided by Telangana State Pollution Control Board.

#### Link : https://tspcb.cgg.gov.in/Pages/Envdata.aspx

## Data Preprocessing
We compiled the data collected from the Telangana State Pollution Control Board, remove anomalities from it and filled missing data using interpolation.

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

#### Link of AQI prediction.csv file : [Prediction of AQI for the year 2023](https://github.com/Ananya2003Gupta/103e4d5d-338a-450d-bf0c-8a8c6901b1f8/blob/main/AQI/Prediction%20of%20AQI%20for%20year%202023.csv)
