from flask import Flask, json
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)

#get data from post request json
@app.route('/testing', methods=['POST'])
def testing():
    data = request.get_json()
    return json.dumps(data)

# #send data to post request json
# info = {'name': 'John', 'age': 30, 'city': 'New York'}
# @app.route('/testing', methods=['GET'])
# def testing():
#     return json.dumps(info)

if __name__ == '__main__':
    app.run()

    #pip install flask
    #pip install flask-cors