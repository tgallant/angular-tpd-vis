LOG=logs/$(date +%h-%d-%y_%H:%M).incidents.log

#Check dependencies.
if ! which dos2unix >/dev/null ; then
    echo "Need an installation of dos2unix. Try"
    echo "sudo apt-get install dos2unix"
    exit 1
fi

if ! wget http://www.tucsonaz.gov/files/transportation/files/TPD_Incidents_45Day.zip ; then
    echo "Could not fetch data file; maybe the URL changed or the connection is bad."
    echo "exiting."
    exit 1
fi

unzip TPD_Incidents_45Day.zip tpd_100blk_incid.csv
dos2unix -f tpd_100blk_incid.csv

python coords.py -v < tpd_100blk_incid.csv > incidents.csv 2>> $LOG
rm TPD_Incidents_45Day.zip tpd_100blk_incid.csv

exit 0
