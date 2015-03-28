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
        dateFields = ['date_occurred', 'date_reported', 
                        'date_discovered', 'ACTDATE_unknown'];

        dateFields.forEach(function(field) {
                doc[field] = new Date(doc[field]);
        });

        db.incidents.save(doc); 
    });
"
