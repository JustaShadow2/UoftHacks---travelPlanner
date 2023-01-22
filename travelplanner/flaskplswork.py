from flask import Flask, redirect, url_for, request, render_template
import requests
from flask import jsonify
import json
app = Flask(__name__)

@app.route('/reccomendations/<place>')
def reccomendations(place):
    api_key = "jvFKqmh_l2XRzDI1I9hXuGq0RntzZUhXvuk2lxs9gLFXPaC80uEDBlMyTsHoJYa6aOhDPQDEI8hNUy8COdJdB8gvFv8TIpTGy0teJ5q47SC6643BuQlXRB6_4BzMY3Yx"
    headers = {'Authorization' : 'Bearer {}'.format(api_key)}
    destination = place
    url = 'https://api.yelp.com/v3/businesses/search'

    params = {'term':'food', 'location':destination, 'limit':3, 'sort_by':'rating'}

    req = requests.get(url, params=params, headers=headers)

    parsed = json.loads(req.text)
    data = parsed['businesses'][0]['name'], parsed['businesses'][0]['rating'], parsed['businesses'][1]['name'], parsed['businesses'][1]['rating'], parsed['businesses'][2]['name'], parsed['businesses'][2]['rating']
    #send data to console log
    return render_template('reccomendations.html', data=data)

@app.route('/map/<place>/')
def map(place):
    return 'Map of ' + place

@app.route('/index',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      dest = request.form['dest']
      home = request.form['home']
      return redirect(url_for('reccomendations',place = dest, place2 = home))
#    else:
#       dest = request.args.get('nm')
#       return redirect(url_for('success',place = dest))

if __name__ == '__main__':
   app.run(debug = True)