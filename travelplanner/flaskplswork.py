from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/reccomendations/<place>')
def reccomendations(place):
    import requests 
    import json

    api_key = "jvFKqmh_l2XRzDI1I9hXuGq0RntzZUhXvuk2lxs9gLFXPaC80uEDBlMyTsHoJYa6aOhDPQDEI8hNUy8COdJdB8gvFv8TIpTGy0teJ5q47SC6643BuQlXRB6_4BzMY3Yx"
    headers = {'Authorization' : 'Bearer {}'.format(api_key)}
    destination = place
    url = 'https://api.yelp.com/v3/businesses/search'

    params = {'term':'food', 'location':destination, 'limit':3, 'sort_by':'rating'}

    req = requests.get(url, params=params, headers=headers)

    parsed = json.loads(req.text)

    return{'name': parsed['businesses'][0]['name'], 'rating': parsed['businesses'][0]['rating'], 'name2': parsed['businesses'][1]['name'], 'rating2': parsed['businesses'][1]['rating'], 'name3': parsed['businesses'][2]['name'], 'rating3': parsed['businesses'][2]['rating']}

@app.route('/map/<place>/')
def map(place):
    return 'Map of ' + place

@app.route('/index',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      dest = request.form['dest']
      home = request.form['home']
      return redirect(url_for('map',place = dest, place2 = home))
#    else:
#       dest = request.args.get('nm')
#       return redirect(url_for('success',place = dest))

if __name__ == '__main__':
   app.run(debug = True)