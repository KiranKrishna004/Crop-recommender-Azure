from contextlib import closing
from flask import Flask, send_from_directory, request
import model
from dotenv import load_dotenv
import os
from flask import Response
import json

app = Flask(__name__, static_url_path='', static_folder='../frontend/build')

load_dotenv()


@app.route('/', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        userInput = json.loads(request.data.decode())
        # print(userInput)
        result = model.model(userInput)
        # print(result)
        return Response('{"result":"%s"}'% result, status=200, mimetype='application/json')
    if request.method == 'GET':
        return send_from_directory(app.static_folder, 'index.html')
    else:
        return Response("ERROR", status=405, mimetype='text/plain')
