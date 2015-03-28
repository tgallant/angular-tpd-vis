"""
--- Info From metadata.pdf ---

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

key_order = [
        "PRIMARYKEY",
        "INCI_ID",
        "CALL_ID",
        "ADDRESS_PUBLIC",
        "DATE_REPT",
        "HOUR_REPT",
        "DATE_OCCU",
        "HOUR_OCCU",
        "DATE_FND",
        "HOUR_FND",
        "NEIGHBORHD",
        "AGENCY",
        "OFFENSE",
        "STATUTDESC",
        "CAPRIORITY",
        "NATURECODE",
        "NatureCodeDesc",
        "HOWRECEIVE",
        "CSDISPOSIT",
        "CSDISPDESC",
        "WEAPON1DESC",
        "WEAPON2DESC",
        "EMDIVISION",
        "EMUNIT",
        "X",
        "Y",
        "LOC_METHOD",
        "ADD_NS",
        "ADD_DIR_NS",
        "ADD_EW",
        "ADD_DIR_EW",
        "NHA_NAME",
]

long_names = {
        "PRIMARYKEY": "ID",
        "INCI_ID": "Incident ID",
        "CALL_ID": "Call ID",
        "ADDRESS_PUBLIC": "Address",
        "DATE_REPT": "Date reported",
        "HOUR_REPT": "Hour reported",
        "DATE_OCCU": "Date occurred",
        "HOUR_OCCU": "Time occurred",
        "DATE_FND": "Date discovered",
        "HOUR_FND": "Time discovered",
        "NEIGHBORHD": "Neighborhood code",
        "AGENCY": "Responding Agency",
        "OFFENSE": "Uniform Crime Report code",
        "STATUTDESC": "Offense description",
        "CAPRIORITY": "Call priority",
        "NATURECODE": "Event type code",
        "NatureCodeDesc": "Event type description",
        "HOWRECEIVE": "How received",
        "CSDISPOSIT": "Call for service disposition code",
        "CSDISPDESC": "Call for service disposition description",
        "WEAPON1DESC": "Weapon description - 1",
        "WEAPON2DESC": "Weapon description - 2",
        "EMDIVISION": "Employee division",
        "EMUNIT": "Employee unit",
        "X": "Longitude",
        "Y": "Latitude",
        "LOC_METHOD": "How the location of the incident was mapped",
        "ADD_NS": "North/South 100-Block address number",
        "ADD_DIR_NS": "North/South address direction",
        "ADD_EW": "East/West 100-Block address number",
        "ADD_DIR_EW": "East/West address direction",
        "NHA_NAME": "Neighborhood Name"
}

if __name__ == "__main__":
        for key in key_order:
                print "{:20s} => {}".format(key, long_names[key])
