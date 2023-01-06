from geopy.geocoders import Nominatim
import geopy.distance

locator = Nominatim(user_agent="myagent")

location1_name = "Linz"
location1 = locator.geocode(location1_name)
location1_coordinates = [location1.latitude, location1.longitude] 

location2_name = "Wien"
location2 = locator.geocode(location2_name)
location2_coordinates = [location2.latitude, location2.longitude]

distance = geopy.distance.geodesic(location1_coordinates, location2_coordinates).km
rounded_distance = round(distance)
print(rounded_distance)
