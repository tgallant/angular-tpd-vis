#!/bin/python
import sys
from pyproj import Proj

# Usage:
#    python coords.py [-v]
#    python coords.py FILE [-v]

if len(sys.argv) > 1:
    f = open(sys.argv[1], 'r')
else:
    f = sys.stdin

verbose = False
for arg in sys.argv[1:]:
    if "-v" == arg:
        verbose = True

# See http://gis.stackexchange.com/questions/10209/converting-x-y-coordinates-to-lat-long-using-pyproj-and-proj-4-returns-the-wrong
p = Proj("+init=EPSG:6405")
feet_to_meter = 0.3048

for index, line in enumerate(f):
    x, y = line.strip().split(",")
    try:
        x = float(x)
        y = float(y)
        lat, lon = p(x*feet_to_meter, y*feet_to_meter, inverse=True)
    except:
        # default value if we can't convert. Still print output to keep
        # line alignment.
        lat, lon = 0,0
        if verbose:
            sys.stderr.write("Couldn't convert '%s' at 0-based index %d\n" % (line, index))
    print('%f, %f' % (lat, lon))


