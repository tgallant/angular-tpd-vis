#!/usr/bin/env python

import csv

ucr = open('../reference/ucr_codes.csv').readlines()
fields = csv.reader(s.strip() for s in ucr)
ucr_codes = {code: desc for code, desc in fields}
ucr_codes['N/A'] = 'None'
ucr_codes['None'] = 'None'

if __name__ == "__main__":
        for code, desc in sorted(ucr_codes.items()):
                print "{:20s} => {}".format(code, desc)
