#!/bin/bash

# Download new data
cd setup
if ! bash pull_data.bash ; then
    echo "pull_data.bash failed, exiting."
    exit 1
fi
cd ..

# Clear database 
mongo angulartpdvis-dev --eval "db.incidents.drop()"

# Add new records
mongoimport --port 27017 --db angulartpdvis-dev --type csv --file setup/incidents.csv --collection incidents --fieldFile setup/header.txt

# Convert date fields with strings to Date objects.
mongo angulartpdvis-dev --eval "
    db.incidents.find().forEach(function(doc) { 
        doc.DATE_OCCU=new Date(doc.DATE_OCCU);
        doc.DATE_REPT=new Date(doc.DATE_REPT);
        doc.DATE_FND=new Date(doc.DATE_FND);
        doc.ACTDATE=new Date(doc.ACTDATE);
        db.incidents.save(doc); 
    });
"
