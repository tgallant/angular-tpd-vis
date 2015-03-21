#!/usr/bin/env python
import sys
import csv
from pyproj import Proj

# Globals
FEET_TO_METER = 0.3048
verbose = False

def printUsage():
    print("""
    Usage:
        python coords.py [-v]
        python coords.py FILE [-v]
    """)

# Until we get the column descriptions figured out.
headerMap = {"X":"LONGITUDE", "Y":"LATITUDE"}
def translateHeader(header):
    header = header.split(",")
    header = [headerMap[s] if s in headerMap else s for s in header]
    header = "\n".join(header)
    return header

# See http://gis.stackexchange.com/questions/10209/converting-x-y-coordinates-to-lat-long-using-pyproj-and-proj-4-returns-the-wrong
p = Proj("+init=EPSG:6405")
def convert_xy_to_latlon(x, y):
    x = float(x)
    y = float(y)
    lat, lon = p(x*FEET_TO_METER, y*FEET_TO_METER, inverse=True)
    return str(lat), str(lon)


def translateBody(f):
    stripped_lines = (line.strip() for line in f)
    csv_fields = csv.reader(stripped_lines)
    for index, fields in enumerate(csv_fields):
        try:
            fields[24], fields[25] = convert_xy_to_latlon(fields[24], fields[25])
        except:
            if verbose:
                sys.stderr.write("Couldn't convert '%s' at 0-based index %d\n" % (",".join(fields), index+1))
            # Just throw them out
            continue
    
        print(",".join(fields))

def main():
    global verbose
    for index, arg in enumerate(sys.argv[1:]):
        if "--help" == arg:
            printUsage()
            return 1
            # this next bit needs to be fixed - stops processing args
        if "-v" == arg:
            verbose = True
            sys.argv.pop(index+1)
            break
    
    if len(sys.argv) > 1:
        f = open(sys.argv[1], 'r')
    else:
        f = sys.stdin

    header = f.readline().strip()
    header = translateHeader(header)
    with open("header.txt", "w") as headerFile:
        headerFile.write(header + "\n")

    translateBody(f)
    return 0


if __name__ == "__main__":
    exit(main())
