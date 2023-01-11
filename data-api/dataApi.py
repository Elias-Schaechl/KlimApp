from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from geopy.geocoders import Nominatim
import geopy.distance

class RequestHandler(BaseHTTPRequestHandler):
    def _send_response(self, data, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()


    def do_PUT(self):
        content_length = int(self.headers['Content-Length'])
        data = json.loads(self.rfile.read(content_length))
        with open('data.txt', 'rb+') as file:
            file.seek(-1, 2)
            file.write(b',\n')
        with open('data.txt', 'a') as file:
            json.dump(data, file)
            file.write(']')

        self._send_response({'status': 'success'})

    def do_GET(self):
        with open('data.txt') as file:
            data = json.load(file)


        self._send_response(data)

    def do_POST(self):

        content_length = int(self.headers["Content-Length"])
        json_str = self.rfile.read(content_length).decode("utf-8")
        json_obj = json.loads(json_str)
        print(json_obj)
        location1_name = json_obj["from"]
        location2_name = json_obj["to"]


        locator = Nominatim(user_agent="myagent")

        #location1_name = "Linz"
        location1 = locator.geocode(location1_name)
        location1_coordinates = [location1.latitude, location1.longitude] 

        #location2_name = "Wien"
        location2 = locator.geocode(location2_name)
        location2_coordinates = [location2.latitude, location2.longitude]

        distance = geopy.distance.geodesic(location1_coordinates, location2_coordinates).km
        rounded_distance = round(distance)
        print(rounded_distance)
        self._send_response(rounded_distance)

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting httpd on port {port}...')
    httpd.serve_forever()

run()