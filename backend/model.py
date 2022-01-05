import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle


def model(userInput):
    userInput = [int(i) for i in userInput]
    print("UserInput : ", userInput)
    crop = pd.read_csv('./Crop_recommendation.csv')
    crop.columns = crop.columns.str.replace(' ', '')
    
    maxscaler=[]
    minscaler=[]
    for i in crop:
        minscaler.append(min(crop[i]))
        maxscaler.append(max(crop[i]))
    minscaler.pop(7)
    maxscaler.pop(7)
    print(minscaler)        
    print(maxscaler)

    for i in range(0,len(userInput)):
        userInput[i]=((userInput[i]-minscaler[i])/(maxscaler[i]-minscaler[i]))
    print(userInput)

    crop_values = ["N", "P", "K", 'temperature', 'humidity', 'ph', 'rainfall']
    scaler = MinMaxScaler(feature_range=(0, 1))
    # crop[crop_values] = scaler.fit_transform(crop[crop_values])
    # crop.sample(frac=1)

    # features = crop[['N', 'P', 'K', 'temperature',
    #                  'humidity', 'ph', 'rainfall']]
    # target = crop['label']

    # acc = []
    # model = []

    # x_train, x_test, y_train, y_test = train_test_split(
    #     features, target, test_size=0.2, random_state=2)

    # RF = RandomForestClassifier(n_estimators=20, random_state=0)
    # RF.fit(x_train, y_train)
    
    # pickle.dump(RF,open("RF",'wb'))
    RF=pickle.load(open('RF','rb'))
    # rf_test_accuracy = RF.score(x_test, y_test)
    # print("Testing accuracy = ", RF.score(x_test, y_test))

    # predicted_values = RF.predict(x_test)

    # x = metrics.accuracy_score(y_test, predicted_values)
    # acc.append(x)
    # model.append('RF')
    # # print("ACC: ",acc)
    # userInput[crop_values]=scaler.transform(crop[crop_values])
    result = RF.predict([userInput])[0]
    # # print(RF.classes_)
    # pred = RF.predict_proba([userInput])
    # # print("PRED: ",pred)
    print("result: ",result)
    return result

