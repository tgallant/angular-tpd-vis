from pyproj import Proj
import sys

p = Proj("+init=EPSG:6405")
feet_to_meter = 0.3048


f = open(sys.argv[1], 'r')
for line in f.readlines():
    x, y = line.strip().split(",")
    try:
        x = float(x)
        y = float(y)
    except:
        print("0,0")
        continue
    lat, lon = p(x*feet_to_meter, y*feet_to_meter, inverse=True)
    print(str(lat) + ", " + str(lon))


