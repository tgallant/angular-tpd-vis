#!/bin/bash

mongo angulartpdvis-dev --eval "db.incidents.drop()"

mongoimport --port 27017 --db angulartpdvis-dev --type csv --file incidents.csv --collection incidents --fields PRIMARYKEY,INCI_ID,CALL_ID,ADDRESS_PUBLIC,DATE_REPT,HOUR_REPT,DATE_OCCU,HOUR_OCCU,DATE_FND,HOUR_FND,NEIGHBORHD,AGENCY,OFFENSE,STATUTDESC,CAPRIORITY,NATURECODE,NatureCodeDesc,HOWRECEIVE,CSDISPOSIT,CSDISPDESC,ACTDATE,ACTTIME,EMDIVISION,EMUNIT,LONGITUDE,LATITUDE,ADDUSER,APPSTATE,ADDTIME,LOC_METHOD,ADD_NS,ADD_DIR_NS,ADD_EW,ADD_DIR_EW,NHA_NAME

mongo angulartpdvis-dev --eval "db.incidents.find().forEach(function(doc) { 
     doc.DATE_OCCU=new Date(doc.DATE_OCCU);
     doc.DATE_REPT=new Date(doc.DATE_REPT);
     doc.DATE_FND=new Date(doc.DATE_FND);
     doc.ACTDATE=new Date(doc.ACTDATE);
     db.incidents.save(doc); 
     })"