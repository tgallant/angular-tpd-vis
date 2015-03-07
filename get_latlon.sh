# Generate Latitude and Longitude from x,y in file specified on 
# the command line.
#
# output goes on command line, in the same order as the input file.
# If something goes wrong on a particular line, '0,0' is the output.
# Note that if no input file is specifed, you can pipe into this.

# fields 25 and 26 of the tpd data are the x,y coords
cut -d, -f25-26 $1 | python coords.py
