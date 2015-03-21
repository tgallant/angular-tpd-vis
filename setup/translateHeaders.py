#!/usr/bin/env python

"""
Info From metadata.pdf
PRIMARY KEY - Unique identifier for the record
INCI_ID - Length Incident ID or case number
CALL_ID - Length Call ID or event number
ADDRESS_PUBLIC - Address of incident rounded to the nearest 100
DATE_REPT - Date incident was reported
HOUR_REPT - Hour incident was reported
DATE_OCCU - Date the event or incident occurred
HOUR_OCCU - Time the event or incident occurred
DATE_FND - Date the event or incident was discovered
HOUR_FND - Time the event or incident was discovered
NEIGHBORHD - Neighborhood code (TPD Division and Sector)
AGENCY - Responding Agency (always TPD)
OFFENSE - Uniform Crime Report code. See http://police.tucsonaz.gov/police/ucr-codes for more information.
STATUTDESC - Initial offense description
CAPRIORITY - Call priority. Higher priority calls receive lower numbers.
NATURECODE - Event type code
NatureCodeDesc - Plain English description of NATURECODE field.
HOWRECEIVE - How the call for service was received
CSDISPOSIT - Call for service disposition code
CSDISPDESC - Plain English description of the CSDISPOSIT field.
WEAPON1DESC - Weapon description
WEAPON2DESC - Weapon description
EMDIVISION - Division of the employee assigned to the call.
EMUNIT - Unit of the employee assigned to the call.
X - Approximate X coordinate of incident. Using the NAD 1983 StatePlane
Y - Approximate Y coordinate of incident. Using the NAD 1983 StatePlane
LOC_METHOD - How the location of the incident was mapped. Either from the X/Y coordinate entered in the report or geocoded based on the address.
ADD_NS - North/South 100-Blk address number
ADD_DIR_NS - North/South address direction
ADD_EW - East/West 100-Blk address number
ADD_DIR_EW - East/West address direction
NHA_NAME - Name of the City recognized neighborhood association the incident occurred in.
"""

long_names = {
