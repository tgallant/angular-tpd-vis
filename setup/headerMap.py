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
        "ACTDATE",
        "ACTTIME",
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
        "PRIMARYKEY": "id",
        "INCI_ID": "incident_id",
        "CALL_ID": "call_id",
        "ADDRESS_PUBLIC": "address",
        "DATE_REPT": "date_reported",
        "HOUR_REPT": "hour_reported",
        "DATE_OCCU": "date_occurred",
        "HOUR_OCCU": "time_occurred",
        "DATE_FND": "date_discovered",
        "HOUR_FND": "time_discovered",
        "NEIGHBORHD": "neighborhood_code",
        "AGENCY": "responding_agency",
        "OFFENSE": "uniform_crime_report_code",
        "STATUTDESC": "offense_description",
        "CAPRIORITY": "call_priority",
        "NATURECODE": "event_type_code",
        "NatureCodeDesc": "event_type_description",
        "HOWRECEIVE": "how_received",
        "CSDISPOSIT": "call_for_service_disposition_code",
        "CSDISPDESC": "call_for_service_disposition_description",
        "ACTDATE": "ACTDATE_unknown",
        "ACTTIME": "ACTTIME_unknown",
        "EMDIVISION": "employee_division",
        "EMUNIT": "employee_unit",
        "X": "longitude",
        "Y": "latitude",
        "LOC_METHOD": "how_the_location_of_the_incident_was_mapped",
        "ADD_NS": "north_south_address_number",
        "ADD_DIR_NS": "north_south_address_direction",
        "ADD_EW": "east_west_address_number",
        "ADD_DIR_EW": "east_west_address_direction",
        "NHA_NAME": "neighborhood_name"
}

if __name__ == "__main__":
        for key in key_order:
                print "{:20s} => {}".format(key, long_names[key])
