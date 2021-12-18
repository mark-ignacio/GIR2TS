/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.ICal {
	export interface arrayInitOptions {}
	interface array {}
	class array {
		public constructor(options?: Partial<arrayInitOptions>);
		public element_size: number;
		public increment_size: number;
		public num_elements: number;
		public space_allocated: number;
		public chunks: any;
	}

	export interface attachInitOptions {}
	interface attach {}
	class attach {
		public constructor(options?: Partial<attachInitOptions>);
	}

	export interface compiterInitOptions {}
	interface compiter {}
	class compiter {
		public constructor(options?: Partial<compiterInitOptions>);
		public kind: component_kind;
		public iter: pvl_elem;
	}

	export interface componentInitOptions {}
	interface component {}
	class component {
		public constructor(options?: Partial<componentInitOptions>);
	}

	export interface datetimeperiodtypeInitOptions {}
	interface datetimeperiodtype {}
	class datetimeperiodtype {
		public constructor(options?: Partial<datetimeperiodtypeInitOptions>);
		public time: any;
		public period: any;
	}

	export interface durationtypeInitOptions {}
	interface durationtype {}
	class durationtype {
		public constructor(options?: Partial<durationtypeInitOptions>);
		public is_neg: number;
		public days: number;
		public weeks: number;
		public hours: number;
		public minutes: number;
		public seconds: number;
	}

	export interface geotypeInitOptions {}
	interface geotype {}
	class geotype {
		public constructor(options?: Partial<geotypeInitOptions>);
		public lat: number;
		public lon: number;
	}

	export interface parameterInitOptions {}
	interface parameter {}
	class parameter {
		public constructor(options?: Partial<parameterInitOptions>);
	}

	export interface parserInitOptions {}
	interface parser {}
	class parser {
		public constructor(options?: Partial<parserInitOptions>);
	}

	export interface periodtypeInitOptions {}
	interface periodtype {}
	class periodtype {
		public constructor(options?: Partial<periodtypeInitOptions>);
		public start: any;
		public end: any;
		public duration: any;
	}

	export interface propertyInitOptions {}
	interface property {}
	class property {
		public constructor(options?: Partial<propertyInitOptions>);
	}

	export interface pvl_elemInitOptions {}
	interface pvl_elem {}
	class pvl_elem {
		public constructor(options?: Partial<pvl_elemInitOptions>);
	}

	export interface pvl_elem_tInitOptions {}
	interface pvl_elem_t {}
	class pvl_elem_t {
		public constructor(options?: Partial<pvl_elem_tInitOptions>);
		public MAGIC: number;
		public d: any;
		public next: any;
		public prior: any;
	}

	export interface pvl_listInitOptions {}
	interface pvl_list {}
	class pvl_list {
		public constructor(options?: Partial<pvl_listInitOptions>);
	}

	export interface recur_iteratorInitOptions {}
	interface recur_iterator {}
	class recur_iterator {
		public constructor(options?: Partial<recur_iteratorInitOptions>);
	}

	export interface recurrencetypeInitOptions {}
	interface recurrencetype {}
	class recurrencetype {
		public constructor(options?: Partial<recurrencetypeInitOptions>);
		public freq: recurrencetype_frequency;
		public until: any;
		public count: number;
		public interval: number;
		public week_start: recurrencetype_weekday;
		public by_second: number[];
		public by_minute: number[];
		public by_hour: number[];
		public by_day: number[];
		public by_month_day: number[];
		public by_year_day: number[];
		public by_week_no: number[];
		public by_month: number[];
		public by_set_pos: number[];
		public rscale: string;
		public skip: recurrencetype_skip;
	}

	export interface reqstattypeInitOptions {}
	interface reqstattype {}
	class reqstattype {
		public constructor(options?: Partial<reqstattypeInitOptions>);
		public code: requeststatus;
		public desc: string;
		public debug: string;
	}

	export interface sspm_action_mapInitOptions {}
	interface sspm_action_map {}
	class sspm_action_map {
		public constructor(options?: Partial<sspm_action_mapInitOptions>);
		public major: any;
		public minor: any;
		public new_part: {(): any;};
		public add_line: {(part: any, header: any, line: string, size: number): void;};
		public end_part: {(part: any): any;};
		public free_part: {(part: any): void;};
	}

	export interface sspm_headerInitOptions {}
	interface sspm_header {}
	class sspm_header {
		public constructor(options?: Partial<sspm_headerInitOptions>);
		public def: number;
		public boundary: string;
		public major: any;
		public minor: any;
		public minor_text: string;
		public content_type_params: string;
		public charset: string;
		public encoding: any;
		public filename: string;
		public content_id: string;
		public error: any;
		public error_text: string;
	}

	export interface sspm_partInitOptions {}
	interface sspm_part {}
	class sspm_part {
		public constructor(options?: Partial<sspm_partInitOptions>);
		public header: any;
		public level: number;
		public data_size: number;
		public data: any;
	}

	export interface time_spanInitOptions {}
	interface time_span {}
	class time_span {
		public constructor(options?: Partial<time_spanInitOptions>);
		public start: number;
		public end: number;
		public is_busy: number;
	}

	export interface timetypeInitOptions {}
	interface timetype {}
	class timetype {
		public constructor(options?: Partial<timetypeInitOptions>);
		public year: number;
		public month: number;
		public day: number;
		public hour: number;
		public minute: number;
		public second: number;
		public is_date: number;
		public is_daylight: number;
		public zone: timezone;
	}

	export interface timezoneInitOptions {}
	interface timezone {}
	class timezone {
		public constructor(options?: Partial<timezoneInitOptions>);
	}

	export interface timezonephaseInitOptions {}
	interface timezonephase {}
	class timezonephase {
		public constructor(options?: Partial<timezonephaseInitOptions>);
		public tzname: string;
		public is_stdandard: number;
		public dtstart: any;
		public offsetto: number;
		public tzoffsetfrom: number;
		public comment: string;
		public rdate: any;
		public rrule: string;
	}

	export interface timezonetypeInitOptions {}
	interface timezonetype {}
	class timezonetype {
		public constructor(options?: Partial<timezonetypeInitOptions>);
		public tzid: string;
		public last_mod: any;
		public tzurl: string;
		public phases: any;
	}

	export interface triggertypeInitOptions {}
	interface triggertype {}
	class triggertype {
		public constructor(options?: Partial<triggertypeInitOptions>);
		public time: any;
		public duration: any;
	}

	export interface valueInitOptions {}
	interface value {}
	class value {
		public constructor(options?: Partial<valueInitOptions>);
	}

	enum _unknown_token_handling {
		ASSUME_IANA_TOKEN = 1,
		DISCARD_TOKEN = 2,
		TREAT_AS_ERROR = 3
	}

	enum component_kind {
		NO_COMPONENT = 0,
		ANY_COMPONENT = 1,
		XROOT_COMPONENT = 2,
		XATTACH_COMPONENT = 3,
		VEVENT_COMPONENT = 4,
		VTODO_COMPONENT = 5,
		VJOURNAL_COMPONENT = 6,
		VCALENDAR_COMPONENT = 7,
		VAGENDA_COMPONENT = 8,
		VFREEBUSY_COMPONENT = 9,
		VALARM_COMPONENT = 10,
		XAUDIOALARM_COMPONENT = 11,
		XDISPLAYALARM_COMPONENT = 12,
		XEMAILALARM_COMPONENT = 13,
		XPROCEDUREALARM_COMPONENT = 14,
		VTIMEZONE_COMPONENT = 15,
		XSTANDARD_COMPONENT = 16,
		XDAYLIGHT_COMPONENT = 17,
		X_COMPONENT = 18,
		VSCHEDULE_COMPONENT = 19,
		VQUERY_COMPONENT = 20,
		VREPLY_COMPONENT = 21,
		VCAR_COMPONENT = 22,
		VCOMMAND_COMPONENT = 23,
		XLICINVALID_COMPONENT = 24,
		XLICMIMEPART_COMPONENT = 25,
		VAVAILABILITY_COMPONENT = 26,
		XAVAILABLE_COMPONENT = 27,
		VPOLL_COMPONENT = 28,
		VVOTER_COMPONENT = 29,
		XVOTE_COMPONENT = 30,
		VPATCH_COMPONENT = 31,
		XPATCH_COMPONENT = 32
	}

	enum errorenum {
		NO_ERROR = 0,
		BADARG_ERROR = 1,
		NEWFAILED_ERROR = 2,
		ALLOCATION_ERROR = 3,
		MALFORMEDDATA_ERROR = 4,
		PARSE_ERROR = 5,
		INTERNAL_ERROR = 6,
		FILE_ERROR = 7,
		USAGE_ERROR = 8,
		UNIMPLEMENTED_ERROR = 9,
		UNKNOWN_ERROR = 10
	}

	enum errorstate {
		FATAL = 0,
		NONFATAL = 1,
		DEFAULT = 2,
		UNKNOWN = 3
	}

	enum parameter_action {
		X = 20000,
		ASK = 20001,
		ABORT = 20002,
		NONE = 20099
	}

	enum parameter_cutype {
		X = 20100,
		INDIVIDUAL = 20101,
		GROUP = 20102,
		RESOURCE = 20103,
		ROOM = 20104,
		UNKNOWN = 20105,
		NONE = 20199
	}

	enum parameter_display {
		X = 22000,
		BADGE = 22001,
		GRAPHIC = 22002,
		FULLSIZE = 22003,
		THUMBNAIL = 22004,
		NONE = 22099
	}

	enum parameter_enable {
		X = 20200,
		TRUE = 20201,
		FALSE = 20202,
		NONE = 20299
	}

	enum parameter_encoding {
		X = 20300,
		_8BIT = 20301,
		BASE64 = 20302,
		NONE = 20399
	}

	enum parameter_fbtype {
		X = 20400,
		FREE = 20401,
		BUSY = 20402,
		BUSYUNAVAILABLE = 20403,
		BUSYTENTATIVE = 20404,
		NONE = 20499
	}

	enum parameter_feature {
		X = 22100,
		AUDIO = 22101,
		CHAT = 22102,
		FEED = 22103,
		MODERATOR = 22104,
		PHONE = 22105,
		SCREEN = 22106,
		VIDEO = 22107,
		NONE = 22199
	}

	enum parameter_kind {
		ANY_PARAMETER = 0,
		ACTIONPARAM_PARAMETER = 1,
		ALTREP_PARAMETER = 2,
		CHARSET_PARAMETER = 3,
		CN_PARAMETER = 4,
		CUTYPE_PARAMETER = 5,
		DELEGATEDFROM_PARAMETER = 6,
		DELEGATEDTO_PARAMETER = 7,
		DIR_PARAMETER = 8,
		DISPLAY_PARAMETER = 46,
		EMAIL_PARAMETER = 50,
		ENABLE_PARAMETER = 9,
		ENCODING_PARAMETER = 10,
		FBTYPE_PARAMETER = 11,
		FEATURE_PARAMETER = 48,
		FILENAME_PARAMETER = 42,
		FMTTYPE_PARAMETER = 12,
		IANA_PARAMETER = 33,
		ID_PARAMETER = 13,
		LABEL_PARAMETER = 49,
		LANGUAGE_PARAMETER = 14,
		LATENCY_PARAMETER = 15,
		LOCAL_PARAMETER = 16,
		LOCALIZE_PARAMETER = 17,
		MANAGEDID_PARAMETER = 40,
		MEMBER_PARAMETER = 18,
		MODIFIED_PARAMETER = 44,
		OPTIONS_PARAMETER = 19,
		PARTSTAT_PARAMETER = 20,
		PATCHACTION_PARAMETER = 51,
		PUBLICCOMMENT_PARAMETER = 37,
		RANGE_PARAMETER = 21,
		REASON_PARAMETER = 43,
		RELATED_PARAMETER = 22,
		RELTYPE_PARAMETER = 23,
		REQUIRED_PARAMETER = 43,
		RESPONSE_PARAMETER = 38,
		ROLE_PARAMETER = 24,
		RSVP_PARAMETER = 25,
		SCHEDULEAGENT_PARAMETER = 34,
		SCHEDULEFORCESEND_PARAMETER = 35,
		SCHEDULESTATUS_PARAMETER = 36,
		SENTBY_PARAMETER = 26,
		SIZE_PARAMETER = 41,
		STAYINFORMED_PARAMETER = 39,
		SUBSTATE_PARAMETER = 45,
		TZID_PARAMETER = 27,
		VALUE_PARAMETER = 28,
		X_PARAMETER = 29,
		XLICCOMPARETYPE_PARAMETER = 30,
		XLICERRORTYPE_PARAMETER = 31,
		NO_PARAMETER = 32
	}

	enum parameter_local {
		X = 20500,
		TRUE = 20501,
		FALSE = 20502,
		NONE = 20599
	}

	enum parameter_partstat {
		X = 20600,
		NEEDSACTION = 20601,
		ACCEPTED = 20602,
		DECLINED = 20603,
		TENTATIVE = 20604,
		DELEGATED = 20605,
		COMPLETED = 20606,
		INPROCESS = 20607,
		FAILED = 20608,
		NONE = 20699
	}

	enum parameter_patchaction {
		X = 22200,
		CREATE = 22201,
		BYNAME = 22202,
		BYVALUE = 22203,
		BYPARAM = 22204,
		NONE = 22299
	}

	enum parameter_range {
		X = 20700,
		THISANDPRIOR = 20701,
		THISANDFUTURE = 20702,
		NONE = 20799
	}

	enum parameter_related {
		X = 20800,
		START = 20801,
		END = 20802,
		NONE = 20899
	}

	enum parameter_reltype {
		X = 20900,
		PARENT = 20901,
		CHILD = 20902,
		SIBLING = 20903,
		POLL = 20904,
		NONE = 20999
	}

	enum parameter_required {
		X = 21000,
		TRUE = 21001,
		FALSE = 21002,
		NONE = 21099
	}

	enum parameter_role {
		X = 21100,
		CHAIR = 21101,
		REQPARTICIPANT = 21102,
		OPTPARTICIPANT = 21103,
		NONPARTICIPANT = 21104,
		NONE = 21199
	}

	enum parameter_rsvp {
		X = 21200,
		TRUE = 21201,
		FALSE = 21202,
		NONE = 21299
	}

	enum parameter_scheduleagent {
		X = 21300,
		SERVER = 21301,
		CLIENT = 21302,
		NONE = 21399
	}

	enum parameter_scheduleforcesend {
		X = 21400,
		REQUEST = 21401,
		REPLY = 21402,
		NONE = 21499
	}

	enum parameter_stayinformed {
		X = 21500,
		TRUE = 21501,
		FALSE = 21502,
		NONE = 21599
	}

	enum parameter_substate {
		X = 21900,
		OK = 21901,
		ERROR = 21902,
		SUSPENDED = 21903,
		NONE = 21999
	}

	enum parameter_value {
		X = 21600,
		BINARY = 21601,
		BOOLEAN = 21602,
		DATE = 21603,
		DURATION = 21604,
		FLOAT = 21605,
		INTEGER = 21606,
		PERIOD = 21607,
		RECUR = 21608,
		TEXT = 21609,
		URI = 21610,
		ERROR = 21611,
		DATETIME = 21612,
		UTCOFFSET = 21613,
		CALADDRESS = 21614,
		NONE = 21699
	}

	enum parameter_xliccomparetype {
		X = 21700,
		EQUAL = 21701,
		NOTEQUAL = 21702,
		LESS = 21703,
		GREATER = 21704,
		LESSEQUAL = 21705,
		GREATEREQUAL = 21706,
		REGEX = 21707,
		ISNULL = 21708,
		ISNOTNULL = 21709,
		NONE = 21799
	}

	enum parameter_xlicerrortype {
		X = 21800,
		COMPONENTPARSEERROR = 21801,
		PROPERTYPARSEERROR = 21802,
		PARAMETERNAMEPARSEERROR = 21803,
		PARAMETERVALUEPARSEERROR = 21804,
		VALUEPARSEERROR = 21805,
		INVALIDITIP = 21806,
		UNKNOWNVCALPROPERROR = 21807,
		MIMEPARSEERROR = 21808,
		VCALPROPPARSEERROR = 21809,
		NONE = 21899
	}

	enum parser_state {
		ERROR = 0,
		SUCCESS = 1,
		BEGIN_COMP = 2,
		END_COMP = 3,
		IN_PROGRESS = 4
	}

	enum property_action {
		X = 10000,
		AUDIO = 10001,
		DISPLAY = 10002,
		EMAIL = 10003,
		PROCEDURE = 10004,
		NONE = 10099
	}

	enum property_busytype {
		X = 10100,
		BUSY = 10101,
		BUSYUNAVAILABLE = 10102,
		BUSYTENTATIVE = 10103,
		NONE = 10199
	}

	enum property_carlevel {
		X = 10200,
		CARNONE = 10201,
		CARMIN = 10202,
		CARFULL1 = 10203,
		NONE = 10299
	}

	enum property_class {
		X = 10300,
		PUBLIC = 10301,
		PRIVATE = 10302,
		CONFIDENTIAL = 10303,
		NONE = 10399
	}

	enum property_cmd {
		X = 10400,
		ABORT = 10401,
		CONTINUE = 10402,
		CREATE = 10403,
		DELETE = 10404,
		GENERATEUID = 10405,
		GETCAPABILITY = 10406,
		IDENTIFY = 10407,
		MODIFY = 10408,
		MOVE = 10409,
		REPLY = 10410,
		SEARCH = 10411,
		SETLOCALE = 10412,
		NONE = 10499
	}

	enum property_kind {
		ANY_PROPERTY = 0,
		ACCEPTRESPONSE_PROPERTY = 102,
		ACKNOWLEDGED_PROPERTY = 1,
		ACTION_PROPERTY = 2,
		ALLOWCONFLICT_PROPERTY = 3,
		ATTACH_PROPERTY = 4,
		ATTENDEE_PROPERTY = 5,
		BUSYTYPE_PROPERTY = 101,
		CALID_PROPERTY = 6,
		CALMASTER_PROPERTY = 7,
		CALSCALE_PROPERTY = 8,
		CAPVERSION_PROPERTY = 9,
		CARLEVEL_PROPERTY = 10,
		CARID_PROPERTY = 11,
		CATEGORIES_PROPERTY = 12,
		CLASS_PROPERTY = 13,
		CMD_PROPERTY = 14,
		COLOR_PROPERTY = 118,
		COMMENT_PROPERTY = 15,
		COMPLETED_PROPERTY = 16,
		COMPONENTS_PROPERTY = 17,
		CONFERENCE_PROPERTY = 120,
		CONTACT_PROPERTY = 18,
		CREATED_PROPERTY = 19,
		CSID_PROPERTY = 20,
		DATEMAX_PROPERTY = 21,
		DATEMIN_PROPERTY = 22,
		DECREED_PROPERTY = 23,
		DEFAULTCHARSET_PROPERTY = 24,
		DEFAULTLOCALE_PROPERTY = 25,
		DEFAULTTZID_PROPERTY = 26,
		DEFAULTVCARS_PROPERTY = 27,
		DENY_PROPERTY = 28,
		DESCRIPTION_PROPERTY = 29,
		DTEND_PROPERTY = 30,
		DTSTAMP_PROPERTY = 31,
		DTSTART_PROPERTY = 32,
		DUE_PROPERTY = 33,
		DURATION_PROPERTY = 34,
		ESTIMATEDDURATION_PROPERTY = 113,
		EXDATE_PROPERTY = 35,
		EXPAND_PROPERTY = 36,
		EXRULE_PROPERTY = 37,
		FREEBUSY_PROPERTY = 38,
		GEO_PROPERTY = 39,
		GRANT_PROPERTY = 40,
		IMAGE_PROPERTY = 119,
		ITIPVERSION_PROPERTY = 41,
		LASTMODIFIED_PROPERTY = 42,
		LOCATION_PROPERTY = 43,
		MAXCOMPONENTSIZE_PROPERTY = 44,
		MAXDATE_PROPERTY = 45,
		MAXRESULTS_PROPERTY = 46,
		MAXRESULTSSIZE_PROPERTY = 47,
		METHOD_PROPERTY = 48,
		MINDATE_PROPERTY = 49,
		MULTIPART_PROPERTY = 50,
		NAME_PROPERTY = 115,
		ORGANIZER_PROPERTY = 52,
		OWNER_PROPERTY = 53,
		PATCHDELETE_PROPERTY = 124,
		PATCHORDER_PROPERTY = 122,
		PATCHPARAMETER_PROPERTY = 125,
		PATCHTARGET_PROPERTY = 123,
		PATCHVERSION_PROPERTY = 121,
		PERCENTCOMPLETE_PROPERTY = 54,
		PERMISSION_PROPERTY = 55,
		POLLCOMPLETION_PROPERTY = 110,
		POLLITEMID_PROPERTY = 103,
		POLLMODE_PROPERTY = 104,
		POLLPROPERTIES_PROPERTY = 105,
		POLLWINNER_PROPERTY = 106,
		PRIORITY_PROPERTY = 56,
		PRODID_PROPERTY = 57,
		QUERY_PROPERTY = 58,
		QUERYLEVEL_PROPERTY = 59,
		QUERYID_PROPERTY = 60,
		QUERYNAME_PROPERTY = 61,
		RDATE_PROPERTY = 62,
		RECURACCEPTED_PROPERTY = 63,
		RECUREXPAND_PROPERTY = 64,
		RECURLIMIT_PROPERTY = 65,
		RECURRENCEID_PROPERTY = 66,
		REFRESHINTERVAL_PROPERTY = 116,
		RELATEDTO_PROPERTY = 67,
		RELCALID_PROPERTY = 68,
		REPEAT_PROPERTY = 69,
		REPLYURL_PROPERTY = 111,
		REQUESTSTATUS_PROPERTY = 70,
		RESOURCES_PROPERTY = 71,
		RESPONSE_PROPERTY = 112,
		RESTRICTION_PROPERTY = 72,
		RRULE_PROPERTY = 73,
		SCOPE_PROPERTY = 74,
		SEQUENCE_PROPERTY = 75,
		SOURCE_PROPERTY = 117,
		STATUS_PROPERTY = 76,
		STORESEXPANDED_PROPERTY = 77,
		SUMMARY_PROPERTY = 78,
		TARGET_PROPERTY = 79,
		TASKMODE_PROPERTY = 114,
		TRANSP_PROPERTY = 80,
		TRIGGER_PROPERTY = 81,
		TZID_PROPERTY = 82,
		TZIDALIASOF_PROPERTY = 108,
		TZNAME_PROPERTY = 83,
		TZOFFSETFROM_PROPERTY = 84,
		TZOFFSETTO_PROPERTY = 85,
		TZUNTIL_PROPERTY = 109,
		TZURL_PROPERTY = 86,
		UID_PROPERTY = 87,
		URL_PROPERTY = 88,
		VERSION_PROPERTY = 89,
		VOTER_PROPERTY = 107,
		X_PROPERTY = 90,
		XLICCLASS_PROPERTY = 91,
		XLICCLUSTERCOUNT_PROPERTY = 92,
		XLICERROR_PROPERTY = 93,
		XLICMIMECHARSET_PROPERTY = 94,
		XLICMIMECID_PROPERTY = 95,
		XLICMIMECONTENTTYPE_PROPERTY = 96,
		XLICMIMEENCODING_PROPERTY = 97,
		XLICMIMEFILENAME_PROPERTY = 98,
		XLICMIMEOPTINFO_PROPERTY = 99,
		NO_PROPERTY = 100
	}

	enum property_method {
		X = 10500,
		PUBLISH = 10501,
		REQUEST = 10502,
		REPLY = 10503,
		ADD = 10504,
		CANCEL = 10505,
		REFRESH = 10506,
		COUNTER = 10507,
		DECLINECOUNTER = 10508,
		CREATE = 10509,
		READ = 10510,
		RESPONSE = 10511,
		MOVE = 10512,
		MODIFY = 10513,
		GENERATEUID = 10514,
		DELETE = 10515,
		POLLSTATUS = 10516,
		NONE = 10599
	}

	enum property_pollcompletion {
		X = 10600,
		SERVER = 10601,
		SERVERSUBMIT = 10602,
		SERVERCHOICE = 10603,
		CLIENT = 10604,
		NONE = 10699
	}

	enum property_pollmode {
		X = 10700,
		BASIC = 10701,
		NONE = 10799
	}

	enum property_querylevel {
		X = 10800,
		CALQL1 = 10801,
		CALQLNONE = 10802,
		NONE = 10899
	}

	enum property_status {
		X = 10900,
		TENTATIVE = 10901,
		CONFIRMED = 10902,
		COMPLETED = 10903,
		NEEDSACTION = 10904,
		CANCELLED = 10905,
		INPROCESS = 10906,
		DRAFT = 10907,
		FINAL = 10908,
		SUBMITTED = 10909,
		PENDING = 10910,
		FAILED = 10911,
		DELETED = 10912,
		NONE = 10999
	}

	enum property_taskmode {
		X = 11200,
		AUTOMATICCOMPLETION = 11201,
		AUTOMATICFAILURE = 11202,
		AUTOMATICSTATUS = 11203,
		NONE = 11299
	}

	enum property_transp {
		X = 11000,
		OPAQUE = 11001,
		OPAQUENOCONFLICT = 11002,
		TRANSPARENT = 11003,
		TRANSPARENTNOCONFLICT = 11004,
		NONE = 11099
	}

	enum property_xlicclass {
		X = 11100,
		PUBLISHNEW = 11101,
		PUBLISHUPDATE = 11102,
		PUBLISHFREEBUSY = 11103,
		REQUESTNEW = 11104,
		REQUESTUPDATE = 11105,
		REQUESTRESCHEDULE = 11106,
		REQUESTDELEGATE = 11107,
		REQUESTNEWORGANIZER = 11108,
		REQUESTFORWARD = 11109,
		REQUESTSTATUS = 11110,
		REQUESTFREEBUSY = 11111,
		REPLYACCEPT = 11112,
		REPLYDECLINE = 11113,
		REPLYDELEGATE = 11114,
		REPLYCRASHERACCEPT = 11115,
		REPLYCRASHERDECLINE = 11116,
		ADDINSTANCE = 11117,
		CANCELEVENT = 11118,
		CANCELINSTANCE = 11119,
		CANCELALL = 11120,
		REFRESH = 11121,
		COUNTER = 11122,
		DECLINECOUNTER = 11123,
		MALFORMED = 11124,
		OBSOLETE = 11125,
		MISSEQUENCED = 11126,
		UNKNOWN = 11127,
		NONE = 11199
	}

	enum recurrencetype_frequency {
		SECONDLY_RECURRENCE = 0,
		MINUTELY_RECURRENCE = 1,
		HOURLY_RECURRENCE = 2,
		DAILY_RECURRENCE = 3,
		WEEKLY_RECURRENCE = 4,
		MONTHLY_RECURRENCE = 5,
		YEARLY_RECURRENCE = 6,
		NO_RECURRENCE = 7
	}

	enum recurrencetype_skip {
		BACKWARD = 0,
		FORWARD = 1,
		OMIT = 2,
		UNDEFINED = 3
	}

	enum recurrencetype_weekday {
		NO_WEEKDAY = 0,
		SUNDAY_WEEKDAY = 1,
		MONDAY_WEEKDAY = 2,
		TUESDAY_WEEKDAY = 3,
		WEDNESDAY_WEEKDAY = 4,
		THURSDAY_WEEKDAY = 5,
		FRIDAY_WEEKDAY = 6,
		SATURDAY_WEEKDAY = 7
	}

	enum requeststatus {
		UNKNOWN_STATUS = 0,
		_2_0_SUCCESS_STATUS = 1,
		_2_1_FALLBACK_STATUS = 2,
		_2_2_IGPROP_STATUS = 3,
		_2_3_IGPARAM_STATUS = 4,
		_2_4_IGXPROP_STATUS = 5,
		_2_5_IGXPARAM_STATUS = 6,
		_2_6_IGCOMP_STATUS = 7,
		_2_7_FORWARD_STATUS = 8,
		_2_8_ONEEVENT_STATUS = 9,
		_2_9_TRUNC_STATUS = 10,
		_2_10_ONETODO_STATUS = 11,
		_2_11_TRUNCRRULE_STATUS = 12,
		_3_0_INVPROPNAME_STATUS = 13,
		_3_1_INVPROPVAL_STATUS = 14,
		_3_2_INVPARAM_STATUS = 15,
		_3_3_INVPARAMVAL_STATUS = 16,
		_3_4_INVCOMP_STATUS = 17,
		_3_5_INVTIME_STATUS = 18,
		_3_6_INVRULE_STATUS = 19,
		_3_7_INVCU_STATUS = 20,
		_3_8_NOAUTH_STATUS = 21,
		_3_9_BADVERSION_STATUS = 22,
		_3_10_TOOBIG_STATUS = 23,
		_3_11_MISSREQCOMP_STATUS = 24,
		_3_12_UNKCOMP_STATUS = 25,
		_3_13_BADCOMP_STATUS = 26,
		_3_14_NOCAP_STATUS = 27,
		_3_15_INVCOMMAND = 28,
		_4_0_BUSY_STATUS = 29,
		_4_1_STORE_ACCESS_DENIED = 30,
		_4_2_STORE_FAILED = 31,
		_4_3_STORE_NOT_FOUND = 32,
		_5_0_MAYBE_STATUS = 33,
		_5_1_UNAVAIL_STATUS = 34,
		_5_2_NOSERVICE_STATUS = 35,
		_5_3_NOSCHED_STATUS = 36,
		_6_1_CONTAINER_NOT_FOUND = 37,
		_9_0_UNRECOGNIZED_COMMAND = 38
	}

	enum restriction_kind {
		NONE = 0,
		ZERO = 1,
		ONE = 2,
		ZEROPLUS = 3,
		ONEPLUS = 4,
		ZEROORONE = 5,
		ONEEXCLUSIVE = 6,
		ONEMUTUAL = 7,
		UNKNOWN = 8
	}

	enum value_kind {
		ANY_VALUE = 5000,
		ACTION_VALUE = 5027,
		ATTACH_VALUE = 5003,
		BINARY_VALUE = 5011,
		BOOLEAN_VALUE = 5021,
		BUSYTYPE_VALUE = 5032,
		CALADDRESS_VALUE = 5023,
		CARLEVEL_VALUE = 5016,
		CLASS_VALUE = 5019,
		CMD_VALUE = 5010,
		DATE_VALUE = 5002,
		DATETIME_VALUE = 5028,
		DATETIMEDATE_VALUE = 5036,
		DATETIMEPERIOD_VALUE = 5015,
		DURATION_VALUE = 5020,
		FLOAT_VALUE = 5013,
		GEO_VALUE = 5004,
		INTEGER_VALUE = 5017,
		METHOD_VALUE = 5030,
		PERIOD_VALUE = 5014,
		POLLCOMPLETION_VALUE = 5034,
		POLLMODE_VALUE = 5033,
		QUERY_VALUE = 5001,
		QUERYLEVEL_VALUE = 5012,
		RECUR_VALUE = 5026,
		REQUESTSTATUS_VALUE = 5009,
		STATUS_VALUE = 5005,
		STRING_VALUE = 5007,
		TASKMODE_VALUE = 5035,
		TEXT_VALUE = 5008,
		TRANSP_VALUE = 5006,
		TRIGGER_VALUE = 5024,
		URI_VALUE = 5018,
		UTCOFFSET_VALUE = 5029,
		X_VALUE = 5022,
		XLICCLASS_VALUE = 5025,
		NO_VALUE = 5031
	}

	interface icalattach_free_fn_t {
		(data: string): void;
	}

	interface icalparser_line_gen_func {
		(s: string, size: number, d: any | null): string;
	}

	interface pvl_applyf {
		(a: any | null, b: any | null): void;
	}

	interface pvl_comparef {
		(a: any | null, b: any | null): number;
	}

	interface pvl_findf {
		(a: any | null, b: any | null): number;
	}

	/**
	 * }
	 * ```
	 */
	function bt(): void;

	function decode_base64(dest: string, src: string, size: number): string;

	function decode_quoted_printable(dest: string, src: string, size: number): string;

	function free_zone_directory(): void;

	function get_unknown_token_handling_setting(): _unknown_token_handling;

	function icalarray_append(array: array, element: any | null): void;

	function icalarray_copy(array: array): array;

	function icalarray_element_at(array: array, position: number): any | null;

	/**
	 * ### Usage
	 * ```c
	 * // create new array
	 * icalarray *array = icalarray_new(sizeof(int), 1);
	 * 
	 * // use array
	 * int a = 4;
	 * icalarray_append(array, &a);
	 * assert(*icalarray_element_at(array, 0) == a);
	 * 
	 * // release memory
	 * icalarray_free(array);
	 * ```
	 * @param array
	 */
	function icalarray_free(array: array): void;

	function icalarray_new(element_size: number, increment_size: number): array;

	function icalarray_remove_element_at(array: array, position: number): void;

	function icalarray_sort(array: array, compare: any | null): void;

	function icalattach_get_data(attach: attach): number;

	function icalattach_get_is_url(attach: attach): number;

	function icalattach_get_url(attach: attach): string;

	function icalattach_new_from_data(data: string, free_fn: icalattach_free_fn_t, free_fn_data: any | null): attach;

	function icalattach_new_from_url(url: string): attach;

	function icalattach_ref(attach: attach): void;

	function icalattach_unref(attach: attach): void;

	function icalcompiter_deref(i: compiter): component;

	function icalcompiter_next(i: compiter): component;

	function icalcompiter_prior(i: compiter): component;

	function icalcomponent_add_component(parent: component, child: component): void;

	function icalcomponent_add_property(component: component, property: property): void;

	function icalcomponent_as_ical_string(component: component): string;

	function icalcomponent_as_ical_string_r(component: component): string;

	function icalcomponent_begin_component(component: component, kind: component_kind): compiter;

	function icalcomponent_check_restrictions(comp: component): number;

	function icalcomponent_convert_errors(component: component): void;

	function icalcomponent_count_components(component: component, kind: component_kind): number;

	function icalcomponent_count_errors(component: component): number;

	function icalcomponent_count_properties(component: component, kind: property_kind): number;

	function icalcomponent_end_component(component: component, kind: component_kind): compiter;

	function icalcomponent_foreach_recurrence(comp: component, start: any | null, end: any | null, callback: any | null, callback_data: any | null): void;

	function icalcomponent_foreach_tzid(comp: component, callback: any | null, callback_data: any | null): void;

	function icalcomponent_free(component: component): void;

	function icalcomponent_get_comment(comp: component): string;

	function icalcomponent_get_current_component(component: component): component;

	function icalcomponent_get_current_property(component: component): property;

	function icalcomponent_get_description(comp: component): string;

	function icalcomponent_get_dtend(comp: component): any | null;

	function icalcomponent_get_dtstamp(comp: component): any | null;

	function icalcomponent_get_dtstart(comp: component): any | null;

	function icalcomponent_get_due(comp: component): any | null;

	function icalcomponent_get_duration(comp: component): any | null;

	function icalcomponent_get_first_component(component: component, kind: component_kind): component;

	function icalcomponent_get_first_property(component: component, kind: property_kind): property;

	function icalcomponent_get_first_real_component(c: component): component;

	function icalcomponent_get_inner(comp: component): component;

	function icalcomponent_get_location(comp: component): string;

	function icalcomponent_get_method(comp: component): property_method;

	function icalcomponent_get_next_component(component: component, kind: component_kind): component;

	function icalcomponent_get_next_property(component: component, kind: property_kind): property;

	function icalcomponent_get_parent(component: component): component;

	function icalcomponent_get_recurrenceid(comp: component): any | null;

	function icalcomponent_get_relcalid(comp: component): string;

	function icalcomponent_get_sequence(comp: component): number;

	function icalcomponent_get_span(comp: component): any | null;

	function icalcomponent_get_status(comp: component): any | null;

	function icalcomponent_get_summary(comp: component): string;

	function icalcomponent_get_timezone(comp: component, tzid: string): timezone;

	function icalcomponent_get_uid(comp: component): string;

	function icalcomponent_is_valid(component: component): number;

	function icalcomponent_isa(component: component): component_kind;

	function icalcomponent_isa_component(component: any | null): number;

	function icalcomponent_kind_is_valid(kind: component_kind): number;

	function icalcomponent_kind_to_string(kind: component_kind): string;

	function icalcomponent_merge_component(comp: component, comp_to_merge: component): void;

	function icalcomponent_new(kind: component_kind): component;

	function icalcomponent_new_clone(component: component): component;

	function icalcomponent_new_from_string(str: string): component;

	function icalcomponent_new_vagenda(): component;

	function icalcomponent_new_valarm(): component;

	function icalcomponent_new_vavailability(): component;

	function icalcomponent_new_vcalendar(): component;

	function icalcomponent_new_vevent(): component;

	function icalcomponent_new_vfreebusy(): component;

	function icalcomponent_new_vjournal(): component;

	function icalcomponent_new_vpatch(): component;

	function icalcomponent_new_vpoll(): component;

	function icalcomponent_new_vquery(): component;

	function icalcomponent_new_vtimezone(): component;

	function icalcomponent_new_vtodo(): component;

	function icalcomponent_new_vvoter(): component;

	function icalcomponent_new_x(x_name: string): component;

	function icalcomponent_new_xavailable(): component;

	function icalcomponent_new_xdaylight(): component;

	function icalcomponent_new_xpatch(): component;

	function icalcomponent_new_xstandard(): component;

	function icalcomponent_new_xvote(): component;

	function icalcomponent_normalize(comp: component): void;

	function icalcomponent_remove_component(parent: component, child: component): void;

	function icalcomponent_remove_property(component: component, property: property): void;

	function icalcomponent_set_comment(comp: component, v: string): void;

	function icalcomponent_set_description(comp: component, v: string): void;

	function icalcomponent_set_dtend(comp: component, v: any | null): void;

	function icalcomponent_set_dtstamp(comp: component, v: any | null): void;

	function icalcomponent_set_dtstart(comp: component, v: any | null): void;

	function icalcomponent_set_due(comp: component, v: any | null): void;

	function icalcomponent_set_duration(comp: component, v: any | null): void;

	function icalcomponent_set_location(comp: component, v: string): void;

	function icalcomponent_set_method(comp: component, method: property_method): void;

	function icalcomponent_set_parent(component: component, parent: component): void;

	function icalcomponent_set_recurrenceid(comp: component, v: any | null): void;

	function icalcomponent_set_relcalid(comp: component, v: string): void;

	function icalcomponent_set_sequence(comp: component, v: number): void;

	function icalcomponent_set_status(comp: component, v: any | null): void;

	function icalcomponent_set_summary(comp: component, v: string): void;

	function icalcomponent_set_uid(comp: component, v: string): void;

	function icalcomponent_string_to_kind(string: string): component_kind;

	function icalcomponent_strip_errors(component: component): void;

	function icalcomponent_vanew(kind: component_kind): component;

	function icaldurationtype_as_ical_string(d: any | null): string;

	function icaldurationtype_as_ical_string_r(d: any | null): string;

	function icaldurationtype_as_int(duration: any | null): number;

	function icaldurationtype_bad_duration(): any | null;

	function icaldurationtype_from_int(t: number): any | null;

	function icaldurationtype_from_string(dur: string): any | null;

	function icaldurationtype_is_bad_duration(d: any | null): number;

	function icaldurationtype_is_null_duration(d: any | null): number;

	function icaldurationtype_null_duration(): any | null;

	function icalenum_num_to_reqstat(major: number, minor: number): requeststatus;

	function icalenum_reqstat_code(stat: requeststatus): string;

	function icalenum_reqstat_code_r(stat: requeststatus): string;

	function icalenum_reqstat_desc(stat: requeststatus): string;

	function icalenum_reqstat_major(stat: requeststatus): number;

	function icalenum_reqstat_minor(stat: requeststatus): number;

	function icalerrno_return(): errorenum;

	/**
	 * }
	 * ```
	 */
	function icalerror_clear_errno(): void;

	function icalerror_crash_here(): void;

	function icalerror_error_from_string(str: string): errorenum;

	function icalerror_get_error_state(error: errorenum): errorstate;

	function icalerror_get_errors_are_fatal(): number;

	function icalerror_perror(): string;

	function icalerror_restore(error: string, es: errorstate): void;

	function icalerror_set_errno(x: errorenum): void;

	function icalerror_set_error_state(error: errorenum, state: errorstate): void;

	function icalerror_set_errors_are_fatal(fatal: number): void;

	function icalerror_stop_here(): void;

	function icalerror_strerror(e: errorenum): string;

	function icalerror_supress(error: string): errorstate;

	function icallangbind_access_array(array: number, index: number): number;

	function icallangbind_free_array(array: number): void;

	function icallangbind_get_first_component(c: component, comp: string): component;

	function icallangbind_get_first_parameter(prop: property): parameter;

	function icallangbind_get_first_property(c: component, prop: string): property;

	function icallangbind_get_next_component(c: component, comp: string): component;

	function icallangbind_get_next_parameter(prop: property): parameter;

	function icallangbind_get_next_property(c: component, prop: string): property;

	function icallangbind_new_array(size: number): number;

	function icallangbind_property_eval_string(prop: property, sep: string): string;

	function icallangbind_property_eval_string_r(prop: property, sep: string): string;

	function icallangbind_quote_as_ical(str: string): string;

	function icallangbind_quote_as_ical_r(str: string): string;

	function icallangbind_string_to_open_flag(str: string): number;

	function icalmemory_add_tmp_buffer(buf: any | null): void;

	function icalmemory_append_char(buf: string, pos: string, buf_size: number, ch: string): void;

	function icalmemory_append_string(buf: string, pos: string, buf_size: number, string: string): void;

	function icalmemory_free_buffer(buf: any | null): void;

	/**
	 * ```
	 */
	function icalmemory_free_ring(): void;

	function icalmemory_new_buffer(size: number): any | null;

	function icalmemory_resize_buffer(buf: any | null, size: number): any | null;

	function icalmemory_strdup(s: string): string;

	function icalmemory_tmp_buffer(size: number): any | null;

	function icalmemory_tmp_copy(str: string): string;

	function icalmime_parse(line_gen_func: any | null, data: any | null): component;

	/**
	 * ### Usage
	 * ```c
	 * icalparameter *param = icalparameter_new_from_string("ROLE=CHAIR");
	 * 
	 * if(param) {
	 *     char *str = icalparameter_as_ical_string(param);
	 *     printf("%s\n", str);
	 *     free(str);
	 * }
	 * 
	 * icalparameter_free(param);
	 * ```
	 * @param parameter
	 * @returns 
	 */
	function icalparameter_as_ical_string(parameter: parameter): string;

	function icalparameter_as_ical_string_r(parameter: parameter): string;

	function icalparameter_enum_to_string(e: number): string;

	function icalparameter_free(parameter: parameter): void;

	function icalparameter_get_actionparam(value: parameter): parameter_action;

	function icalparameter_get_altrep(value: parameter): string;

	function icalparameter_get_charset(value: parameter): string;

	function icalparameter_get_cn(value: parameter): string;

	function icalparameter_get_cutype(value: parameter): parameter_cutype;

	function icalparameter_get_delegatedfrom(value: parameter): string;

	function icalparameter_get_delegatedto(value: parameter): string;

	function icalparameter_get_dir(value: parameter): string;

	function icalparameter_get_display(value: parameter): parameter_display;

	function icalparameter_get_email(value: parameter): string;

	function icalparameter_get_enable(value: parameter): parameter_enable;

	function icalparameter_get_encoding(value: parameter): parameter_encoding;

	function icalparameter_get_fbtype(value: parameter): parameter_fbtype;

	function icalparameter_get_feature(value: parameter): parameter_feature;

	function icalparameter_get_filename(value: parameter): string;

	function icalparameter_get_fmttype(value: parameter): string;

	function icalparameter_get_iana(value: parameter): string;

	function icalparameter_get_iana_name(param: parameter): string;

	function icalparameter_get_iana_value(param: parameter): string;

	function icalparameter_get_id(value: parameter): string;

	function icalparameter_get_label(value: parameter): string;

	function icalparameter_get_language(value: parameter): string;

	function icalparameter_get_latency(value: parameter): string;

	function icalparameter_get_local(value: parameter): parameter_local;

	function icalparameter_get_localize(value: parameter): string;

	function icalparameter_get_managedid(value: parameter): string;

	function icalparameter_get_member(value: parameter): string;

	function icalparameter_get_modified(value: parameter): string;

	function icalparameter_get_options(value: parameter): string;

	function icalparameter_get_parent(param: parameter): property;

	function icalparameter_get_partstat(value: parameter): parameter_partstat;

	function icalparameter_get_patchaction(value: parameter): parameter_patchaction;

	function icalparameter_get_publiccomment(value: parameter): string;

	function icalparameter_get_range(value: parameter): parameter_range;

	function icalparameter_get_reason(value: parameter): string;

	function icalparameter_get_related(value: parameter): parameter_related;

	function icalparameter_get_reltype(value: parameter): parameter_reltype;

	function icalparameter_get_required(value: parameter): parameter_required;

	function icalparameter_get_response(value: parameter): number;

	function icalparameter_get_role(value: parameter): parameter_role;

	function icalparameter_get_rsvp(value: parameter): parameter_rsvp;

	function icalparameter_get_scheduleagent(value: parameter): parameter_scheduleagent;

	function icalparameter_get_scheduleforcesend(value: parameter): parameter_scheduleforcesend;

	function icalparameter_get_schedulestatus(value: parameter): string;

	function icalparameter_get_sentby(value: parameter): string;

	function icalparameter_get_size(value: parameter): string;

	function icalparameter_get_stayinformed(value: parameter): parameter_stayinformed;

	function icalparameter_get_substate(value: parameter): parameter_substate;

	function icalparameter_get_tzid(value: parameter): string;

	function icalparameter_get_value(value: parameter): parameter_value;

	function icalparameter_get_x(value: parameter): string;

	function icalparameter_get_xliccomparetype(value: parameter): parameter_xliccomparetype;

	function icalparameter_get_xlicerrortype(value: parameter): parameter_xlicerrortype;

	function icalparameter_get_xname(param: parameter): string;

	function icalparameter_get_xvalue(param: parameter): string;

	function icalparameter_has_same_name(param1: parameter, param2: parameter): number;

	function icalparameter_isa(parameter: parameter): parameter_kind;

	function icalparameter_isa_parameter(param: any | null): number;

	function icalparameter_kind_is_valid(kind: parameter_kind): number;

	function icalparameter_kind_to_string(kind: parameter_kind): string;

	function icalparameter_new(kind: parameter_kind): parameter;

	function icalparameter_new_actionparam(v: parameter_action): parameter;

	function icalparameter_new_altrep(v: string): parameter;

	function icalparameter_new_charset(v: string): parameter;

	function icalparameter_new_clone(p: parameter): parameter;

	function icalparameter_new_cn(v: string): parameter;

	function icalparameter_new_cutype(v: parameter_cutype): parameter;

	function icalparameter_new_delegatedfrom(v: string): parameter;

	function icalparameter_new_delegatedto(v: string): parameter;

	function icalparameter_new_dir(v: string): parameter;

	function icalparameter_new_display(v: parameter_display): parameter;

	function icalparameter_new_email(v: string): parameter;

	function icalparameter_new_enable(v: parameter_enable): parameter;

	function icalparameter_new_encoding(v: parameter_encoding): parameter;

	function icalparameter_new_fbtype(v: parameter_fbtype): parameter;

	function icalparameter_new_feature(v: parameter_feature): parameter;

	function icalparameter_new_filename(v: string): parameter;

	function icalparameter_new_fmttype(v: string): parameter;

	/**
	 * when they are not needed anymore and to be released.
	 * ### Usage
	 * ```c
	 * icalparameter *param = {@link Icalparameter.new};
	 * 
	 * if(param) {
	 *     // use param...
	 * }
	 * 
	 * // after use, release it
	 * icalparameter_free(param);
	 * ```
	 * @param value
	 * @returns 
	 */
	function icalparameter_new_from_string(value: string): parameter;

	function icalparameter_new_from_value_string(kind: parameter_kind, value: string): parameter;

	function icalparameter_new_iana(v: string): parameter;

	function icalparameter_new_id(v: string): parameter;

	function icalparameter_new_label(v: string): parameter;

	function icalparameter_new_language(v: string): parameter;

	function icalparameter_new_latency(v: string): parameter;

	function icalparameter_new_local(v: parameter_local): parameter;

	function icalparameter_new_localize(v: string): parameter;

	function icalparameter_new_managedid(v: string): parameter;

	function icalparameter_new_member(v: string): parameter;

	function icalparameter_new_modified(v: string): parameter;

	function icalparameter_new_options(v: string): parameter;

	function icalparameter_new_partstat(v: parameter_partstat): parameter;

	function icalparameter_new_patchaction(v: parameter_patchaction): parameter;

	function icalparameter_new_publiccomment(v: string): parameter;

	function icalparameter_new_range(v: parameter_range): parameter;

	function icalparameter_new_reason(v: string): parameter;

	function icalparameter_new_related(v: parameter_related): parameter;

	function icalparameter_new_reltype(v: parameter_reltype): parameter;

	function icalparameter_new_required(v: parameter_required): parameter;

	function icalparameter_new_response(v: number): parameter;

	function icalparameter_new_role(v: parameter_role): parameter;

	function icalparameter_new_rsvp(v: parameter_rsvp): parameter;

	function icalparameter_new_scheduleagent(v: parameter_scheduleagent): parameter;

	function icalparameter_new_scheduleforcesend(v: parameter_scheduleforcesend): parameter;

	function icalparameter_new_schedulestatus(v: string): parameter;

	function icalparameter_new_sentby(v: string): parameter;

	function icalparameter_new_size(v: string): parameter;

	function icalparameter_new_stayinformed(v: parameter_stayinformed): parameter;

	function icalparameter_new_substate(v: parameter_substate): parameter;

	function icalparameter_new_tzid(v: string): parameter;

	function icalparameter_new_value(v: parameter_value): parameter;

	function icalparameter_new_x(v: string): parameter;

	function icalparameter_new_xliccomparetype(v: parameter_xliccomparetype): parameter;

	function icalparameter_new_xlicerrortype(v: parameter_xlicerrortype): parameter;

	function icalparameter_set_actionparam(value: parameter, v: parameter_action): void;

	function icalparameter_set_altrep(value: parameter, v: string): void;

	function icalparameter_set_charset(value: parameter, v: string): void;

	function icalparameter_set_cn(value: parameter, v: string): void;

	function icalparameter_set_cutype(value: parameter, v: parameter_cutype): void;

	function icalparameter_set_delegatedfrom(value: parameter, v: string): void;

	function icalparameter_set_delegatedto(value: parameter, v: string): void;

	function icalparameter_set_dir(value: parameter, v: string): void;

	function icalparameter_set_display(value: parameter, v: parameter_display): void;

	function icalparameter_set_email(value: parameter, v: string): void;

	function icalparameter_set_enable(value: parameter, v: parameter_enable): void;

	function icalparameter_set_encoding(value: parameter, v: parameter_encoding): void;

	function icalparameter_set_fbtype(value: parameter, v: parameter_fbtype): void;

	function icalparameter_set_feature(value: parameter, v: parameter_feature): void;

	function icalparameter_set_filename(value: parameter, v: string): void;

	function icalparameter_set_fmttype(value: parameter, v: string): void;

	function icalparameter_set_iana(value: parameter, v: string): void;

	function icalparameter_set_iana_name(param: parameter, v: string): void;

	function icalparameter_set_iana_value(param: parameter, v: string): void;

	function icalparameter_set_id(value: parameter, v: string): void;

	function icalparameter_set_label(value: parameter, v: string): void;

	function icalparameter_set_language(value: parameter, v: string): void;

	function icalparameter_set_latency(value: parameter, v: string): void;

	function icalparameter_set_local(value: parameter, v: parameter_local): void;

	function icalparameter_set_localize(value: parameter, v: string): void;

	function icalparameter_set_managedid(value: parameter, v: string): void;

	function icalparameter_set_member(value: parameter, v: string): void;

	function icalparameter_set_modified(value: parameter, v: string): void;

	function icalparameter_set_options(value: parameter, v: string): void;

	function icalparameter_set_parent(param: parameter, property: property): void;

	function icalparameter_set_partstat(value: parameter, v: parameter_partstat): void;

	function icalparameter_set_patchaction(value: parameter, v: parameter_patchaction): void;

	function icalparameter_set_publiccomment(value: parameter, v: string): void;

	function icalparameter_set_range(value: parameter, v: parameter_range): void;

	function icalparameter_set_reason(value: parameter, v: string): void;

	function icalparameter_set_related(value: parameter, v: parameter_related): void;

	function icalparameter_set_reltype(value: parameter, v: parameter_reltype): void;

	function icalparameter_set_required(value: parameter, v: parameter_required): void;

	function icalparameter_set_response(value: parameter, v: number): void;

	function icalparameter_set_role(value: parameter, v: parameter_role): void;

	function icalparameter_set_rsvp(value: parameter, v: parameter_rsvp): void;

	function icalparameter_set_scheduleagent(value: parameter, v: parameter_scheduleagent): void;

	function icalparameter_set_scheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void;

	function icalparameter_set_schedulestatus(value: parameter, v: string): void;

	function icalparameter_set_sentby(value: parameter, v: string): void;

	function icalparameter_set_size(value: parameter, v: string): void;

	function icalparameter_set_stayinformed(value: parameter, v: parameter_stayinformed): void;

	function icalparameter_set_substate(value: parameter, v: parameter_substate): void;

	function icalparameter_set_tzid(value: parameter, v: string): void;

	function icalparameter_set_value(value: parameter, v: parameter_value): void;

	function icalparameter_set_x(value: parameter, v: string): void;

	function icalparameter_set_xliccomparetype(value: parameter, v: parameter_xliccomparetype): void;

	function icalparameter_set_xlicerrortype(value: parameter, v: parameter_xlicerrortype): void;

	function icalparameter_set_xname(param: parameter, v: string): void;

	function icalparameter_set_xvalue(param: parameter, v: string): void;

	function icalparameter_string_to_enum(str: string): number;

	function icalparameter_string_to_kind(string: string): parameter_kind;

	function icalparameter_value_to_value_kind(value: parameter_value): value_kind;

	function icalparser_add_line(parser: parser, str: string): component;

	function icalparser_clean(parser: parser): component;

	function icalparser_free(parser: parser): void;

	function icalparser_get_line(parser: parser, line_gen_func: icalparser_line_gen_func): string;

	function icalparser_get_state(parser: parser): parser_state;

	function icalparser_new(): parser;

	function icalparser_parse(parser: parser, line_gen_func: icalparser_line_gen_func): component;

	function icalparser_parse_string(str: string): component;

	function icalparser_set_gen_data(parser: parser, data: any | null): void;

	function icalparser_string_line_generator(out: string, buf_size: number, d: any | null): string;

	function icalperiodtype_as_ical_string(p: any | null): string;

	function icalperiodtype_as_ical_string_r(p: any | null): string;

	function icalperiodtype_from_string(str: string): any | null;

	function icalperiodtype_is_null_period(p: any | null): number;

	function icalperiodtype_is_valid_period(p: any | null): number;

	function icalperiodtype_null_period(): any | null;

	function icalproperty_add_parameter(prop: property, parameter: parameter): void;

	function icalproperty_add_parameters(prop: any | null, args: any[]): void;

	function icalproperty_as_ical_string(prop: property): string;

	function icalproperty_as_ical_string_r(prop: property): string;

	function icalproperty_count_parameters(prop: property): number;

	function icalproperty_enum_belongs_to_property(kind: property_kind, e: number): number;

	function icalproperty_enum_to_string(e: number): string;

	function icalproperty_enum_to_string_r(e: number): string;

	function icalproperty_free(prop: property): void;

	function icalproperty_get_acceptresponse(prop: property): string;

	function icalproperty_get_acknowledged(prop: property): any | null;

	function icalproperty_get_action(prop: property): any | null;

	function icalproperty_get_allowconflict(prop: property): string;

	function icalproperty_get_attach(prop: property): attach;

	function icalproperty_get_attendee(prop: property): string;

	function icalproperty_get_busytype(prop: property): any | null;

	function icalproperty_get_calid(prop: property): string;

	function icalproperty_get_calmaster(prop: property): string;

	function icalproperty_get_calscale(prop: property): string;

	function icalproperty_get_capversion(prop: property): string;

	function icalproperty_get_carid(prop: property): string;

	function icalproperty_get_carlevel(prop: property): any | null;

	function icalproperty_get_categories(prop: property): string;

	function icalproperty_get_class(prop: property): any | null;

	function icalproperty_get_cmd(prop: property): any | null;

	function icalproperty_get_color(prop: property): string;

	function icalproperty_get_comment(prop: property): string;

	function icalproperty_get_completed(prop: property): any | null;

	function icalproperty_get_components(prop: property): string;

	function icalproperty_get_conference(prop: property): string;

	function icalproperty_get_contact(prop: property): string;

	function icalproperty_get_created(prop: property): any | null;

	function icalproperty_get_csid(prop: property): string;

	function icalproperty_get_datemax(prop: property): any | null;

	function icalproperty_get_datemin(prop: property): any | null;

	function icalproperty_get_datetime_with_component(prop: property, comp: component): any | null;

	function icalproperty_get_decreed(prop: property): string;

	function icalproperty_get_defaultcharset(prop: property): string;

	function icalproperty_get_defaultlocale(prop: property): string;

	function icalproperty_get_defaulttzid(prop: property): string;

	function icalproperty_get_defaultvcars(prop: property): string;

	function icalproperty_get_deny(prop: property): string;

	function icalproperty_get_description(prop: property): string;

	function icalproperty_get_dtend(prop: property): any | null;

	function icalproperty_get_dtstamp(prop: property): any | null;

	function icalproperty_get_dtstart(prop: property): any | null;

	function icalproperty_get_due(prop: property): any | null;

	function icalproperty_get_duration(prop: property): any | null;

	function icalproperty_get_estimatedduration(prop: property): any | null;

	function icalproperty_get_exdate(prop: property): any | null;

	function icalproperty_get_expand(prop: property): number;

	function icalproperty_get_exrule(prop: property): any | null;

	function icalproperty_get_first_parameter(prop: property, kind: parameter_kind): parameter;

	function icalproperty_get_freebusy(prop: property): any | null;

	function icalproperty_get_geo(prop: property): any | null;

	function icalproperty_get_grant(prop: property): string;

	function icalproperty_get_image(prop: property): attach;

	function icalproperty_get_itipversion(prop: property): string;

	function icalproperty_get_lastmodified(prop: property): any | null;

	function icalproperty_get_location(prop: property): string;

	function icalproperty_get_maxcomponentsize(prop: property): number;

	function icalproperty_get_maxdate(prop: property): any | null;

	function icalproperty_get_maxresults(prop: property): number;

	function icalproperty_get_maxresultssize(prop: property): number;

	function icalproperty_get_method(prop: property): any | null;

	function icalproperty_get_mindate(prop: property): any | null;

	function icalproperty_get_multipart(prop: property): string;

	function icalproperty_get_name(prop: property): string;

	function icalproperty_get_next_parameter(prop: property, kind: parameter_kind): parameter;

	function icalproperty_get_organizer(prop: property): string;

	function icalproperty_get_owner(prop: property): string;

	function icalproperty_get_parameter_as_string(prop: property, name: string): string;

	function icalproperty_get_parameter_as_string_r(prop: property, name: string): string;

	function icalproperty_get_parent(property: property): component;

	function icalproperty_get_patchdelete(prop: property): string;

	function icalproperty_get_patchorder(prop: property): number;

	function icalproperty_get_patchparameter(prop: property): string;

	function icalproperty_get_patchtarget(prop: property): string;

	function icalproperty_get_patchversion(prop: property): string;

	function icalproperty_get_percentcomplete(prop: property): number;

	function icalproperty_get_permission(prop: property): string;

	function icalproperty_get_pollcompletion(prop: property): any | null;

	function icalproperty_get_pollitemid(prop: property): number;

	function icalproperty_get_pollmode(prop: property): any | null;

	function icalproperty_get_pollproperties(prop: property): string;

	function icalproperty_get_pollwinner(prop: property): number;

	function icalproperty_get_priority(prop: property): number;

	function icalproperty_get_prodid(prop: property): string;

	function icalproperty_get_property_name(prop: property): string;

	function icalproperty_get_property_name_r(prop: property): string;

	function icalproperty_get_query(prop: property): string;

	function icalproperty_get_queryid(prop: property): string;

	function icalproperty_get_querylevel(prop: property): any | null;

	function icalproperty_get_queryname(prop: property): string;

	function icalproperty_get_rdate(prop: property): any | null;

	function icalproperty_get_recuraccepted(prop: property): string;

	function icalproperty_get_recurexpand(prop: property): string;

	function icalproperty_get_recurlimit(prop: property): string;

	function icalproperty_get_recurrenceid(prop: property): any | null;

	function icalproperty_get_refreshinterval(prop: property): any | null;

	function icalproperty_get_relatedto(prop: property): string;

	function icalproperty_get_relcalid(prop: property): string;

	function icalproperty_get_repeat(prop: property): number;

	function icalproperty_get_replyurl(prop: property): string;

	function icalproperty_get_requeststatus(prop: property): any | null;

	function icalproperty_get_resources(prop: property): string;

	function icalproperty_get_response(prop: property): number;

	function icalproperty_get_restriction(prop: property): string;

	function icalproperty_get_rrule(prop: property): any | null;

	function icalproperty_get_scope(prop: property): string;

	function icalproperty_get_sequence(prop: property): number;

	function icalproperty_get_source(prop: property): string;

	function icalproperty_get_status(prop: property): any | null;

	function icalproperty_get_storesexpanded(prop: property): string;

	function icalproperty_get_summary(prop: property): string;

	function icalproperty_get_target(prop: property): string;

	function icalproperty_get_taskmode(prop: property): any | null;

	function icalproperty_get_transp(prop: property): any | null;

	function icalproperty_get_trigger(prop: property): any | null;

	function icalproperty_get_tzid(prop: property): string;

	function icalproperty_get_tzidaliasof(prop: property): string;

	function icalproperty_get_tzname(prop: property): string;

	function icalproperty_get_tzoffsetfrom(prop: property): number;

	function icalproperty_get_tzoffsetto(prop: property): number;

	function icalproperty_get_tzuntil(prop: property): any | null;

	function icalproperty_get_tzurl(prop: property): string;

	function icalproperty_get_uid(prop: property): string;

	function icalproperty_get_url(prop: property): string;

	function icalproperty_get_value(prop: property): value;

	function icalproperty_get_value_as_string(prop: property): string;

	function icalproperty_get_value_as_string_r(prop: property): string;

	function icalproperty_get_version(prop: property): string;

	function icalproperty_get_voter(prop: property): string;

	function icalproperty_get_x(prop: property): string;

	function icalproperty_get_x_name(prop: property): string;

	function icalproperty_get_xlicclass(prop: property): any | null;

	function icalproperty_get_xlicclustercount(prop: property): string;

	function icalproperty_get_xlicerror(prop: property): string;

	function icalproperty_get_xlicmimecharset(prop: property): string;

	function icalproperty_get_xlicmimecid(prop: property): string;

	function icalproperty_get_xlicmimecontenttype(prop: property): string;

	function icalproperty_get_xlicmimeencoding(prop: property): string;

	function icalproperty_get_xlicmimefilename(prop: property): string;

	function icalproperty_get_xlicmimeoptinfo(prop: property): string;

	function icalproperty_isa(property: property): property_kind;

	function icalproperty_isa_property(property: any | null): number;

	function icalproperty_kind_and_string_to_enum(kind: number, str: string): number;

	function icalproperty_kind_is_valid(kind: property_kind): number;

	function icalproperty_kind_to_string(kind: property_kind): string;

	function icalproperty_kind_to_value_kind(kind: property_kind): value_kind;

	function icalproperty_method_to_string(method: property_method): string;

	function icalproperty_new(kind: property_kind): property;

	function icalproperty_new_acceptresponse(v: string): property;

	function icalproperty_new_acknowledged(v: any | null): property;

	function icalproperty_new_action(v: any | null): property;

	function icalproperty_new_allowconflict(v: string): property;

	function icalproperty_new_attach(v: attach): property;

	function icalproperty_new_attendee(v: string): property;

	function icalproperty_new_busytype(v: any | null): property;

	function icalproperty_new_calid(v: string): property;

	function icalproperty_new_calmaster(v: string): property;

	function icalproperty_new_calscale(v: string): property;

	function icalproperty_new_capversion(v: string): property;

	function icalproperty_new_carid(v: string): property;

	function icalproperty_new_carlevel(v: any | null): property;

	function icalproperty_new_categories(v: string): property;

	function icalproperty_new_class(v: any | null): property;

	function icalproperty_new_clone(prop: property): property;

	function icalproperty_new_cmd(v: any | null): property;

	function icalproperty_new_color(v: string): property;

	function icalproperty_new_comment(v: string): property;

	function icalproperty_new_completed(v: any | null): property;

	function icalproperty_new_components(v: string): property;

	function icalproperty_new_conference(v: string): property;

	function icalproperty_new_contact(v: string): property;

	function icalproperty_new_created(v: any | null): property;

	function icalproperty_new_csid(v: string): property;

	function icalproperty_new_datemax(v: any | null): property;

	function icalproperty_new_datemin(v: any | null): property;

	function icalproperty_new_decreed(v: string): property;

	function icalproperty_new_defaultcharset(v: string): property;

	function icalproperty_new_defaultlocale(v: string): property;

	function icalproperty_new_defaulttzid(v: string): property;

	function icalproperty_new_defaultvcars(v: string): property;

	function icalproperty_new_deny(v: string): property;

	function icalproperty_new_description(v: string): property;

	function icalproperty_new_dtend(v: any | null): property;

	function icalproperty_new_dtstamp(v: any | null): property;

	function icalproperty_new_dtstart(v: any | null): property;

	function icalproperty_new_due(v: any | null): property;

	function icalproperty_new_duration(v: any | null): property;

	function icalproperty_new_estimatedduration(v: any | null): property;

	function icalproperty_new_exdate(v: any | null): property;

	function icalproperty_new_expand(v: number): property;

	function icalproperty_new_exrule(v: any | null): property;

	function icalproperty_new_freebusy(v: any | null): property;

	function icalproperty_new_from_string(str: string): property;

	function icalproperty_new_geo(v: any | null): property;

	function icalproperty_new_grant(v: string): property;

	function icalproperty_new_image(v: attach): property;

	function icalproperty_new_impl(kind: property_kind): property;

	function icalproperty_new_itipversion(v: string): property;

	function icalproperty_new_lastmodified(v: any | null): property;

	function icalproperty_new_location(v: string): property;

	function icalproperty_new_maxcomponentsize(v: number): property;

	function icalproperty_new_maxdate(v: any | null): property;

	function icalproperty_new_maxresults(v: number): property;

	function icalproperty_new_maxresultssize(v: number): property;

	function icalproperty_new_method(v: any | null): property;

	function icalproperty_new_mindate(v: any | null): property;

	function icalproperty_new_multipart(v: string): property;

	function icalproperty_new_name(v: string): property;

	function icalproperty_new_organizer(v: string): property;

	function icalproperty_new_owner(v: string): property;

	function icalproperty_new_patchdelete(v: string): property;

	function icalproperty_new_patchorder(v: number): property;

	function icalproperty_new_patchparameter(v: string): property;

	function icalproperty_new_patchtarget(v: string): property;

	function icalproperty_new_patchversion(v: string): property;

	function icalproperty_new_percentcomplete(v: number): property;

	function icalproperty_new_permission(v: string): property;

	function icalproperty_new_pollcompletion(v: any | null): property;

	function icalproperty_new_pollitemid(v: number): property;

	function icalproperty_new_pollmode(v: any | null): property;

	function icalproperty_new_pollproperties(v: string): property;

	function icalproperty_new_pollwinner(v: number): property;

	function icalproperty_new_priority(v: number): property;

	function icalproperty_new_prodid(v: string): property;

	function icalproperty_new_query(v: string): property;

	function icalproperty_new_queryid(v: string): property;

	function icalproperty_new_querylevel(v: any | null): property;

	function icalproperty_new_queryname(v: string): property;

	function icalproperty_new_rdate(v: any | null): property;

	function icalproperty_new_recuraccepted(v: string): property;

	function icalproperty_new_recurexpand(v: string): property;

	function icalproperty_new_recurlimit(v: string): property;

	function icalproperty_new_recurrenceid(v: any | null): property;

	function icalproperty_new_refreshinterval(v: any | null): property;

	function icalproperty_new_relatedto(v: string): property;

	function icalproperty_new_relcalid(v: string): property;

	function icalproperty_new_repeat(v: number): property;

	function icalproperty_new_replyurl(v: string): property;

	function icalproperty_new_requeststatus(v: any | null): property;

	function icalproperty_new_resources(v: string): property;

	function icalproperty_new_response(v: number): property;

	function icalproperty_new_restriction(v: string): property;

	function icalproperty_new_rrule(v: any | null): property;

	function icalproperty_new_scope(v: string): property;

	function icalproperty_new_sequence(v: number): property;

	function icalproperty_new_source(v: string): property;

	function icalproperty_new_status(v: any | null): property;

	function icalproperty_new_storesexpanded(v: string): property;

	function icalproperty_new_summary(v: string): property;

	function icalproperty_new_target(v: string): property;

	function icalproperty_new_taskmode(v: any | null): property;

	function icalproperty_new_transp(v: any | null): property;

	function icalproperty_new_trigger(v: any | null): property;

	function icalproperty_new_tzid(v: string): property;

	function icalproperty_new_tzidaliasof(v: string): property;

	function icalproperty_new_tzname(v: string): property;

	function icalproperty_new_tzoffsetfrom(v: number): property;

	function icalproperty_new_tzoffsetto(v: number): property;

	function icalproperty_new_tzuntil(v: any | null): property;

	function icalproperty_new_tzurl(v: string): property;

	function icalproperty_new_uid(v: string): property;

	function icalproperty_new_url(v: string): property;

	function icalproperty_new_version(v: string): property;

	function icalproperty_new_voter(v: string): property;

	function icalproperty_new_x(v: string): property;

	function icalproperty_new_xlicclass(v: any | null): property;

	function icalproperty_new_xlicclustercount(v: string): property;

	function icalproperty_new_xlicerror(v: string): property;

	function icalproperty_new_xlicmimecharset(v: string): property;

	function icalproperty_new_xlicmimecid(v: string): property;

	function icalproperty_new_xlicmimecontenttype(v: string): property;

	function icalproperty_new_xlicmimeencoding(v: string): property;

	function icalproperty_new_xlicmimefilename(v: string): property;

	function icalproperty_new_xlicmimeoptinfo(v: string): property;

	function icalproperty_normalize(prop: property): void;

	function icalproperty_recurrence_is_excluded(comp: component, dtstart: any | null, recurtime: any | null): number;

	function icalproperty_remove_parameter_by_kind(prop: property, kind: parameter_kind): void;

	function icalproperty_remove_parameter_by_name(prop: property, name: string): void;

	/**
	 * parameters
	 * @param prop
	 * @param param
	 */
	function icalproperty_remove_parameter_by_ref(prop: property, param: parameter): void;

	function icalproperty_set_acceptresponse(prop: property, v: string): void;

	function icalproperty_set_acknowledged(prop: property, v: any | null): void;

	function icalproperty_set_action(prop: property, v: any | null): void;

	function icalproperty_set_allowconflict(prop: property, v: string): void;

	function icalproperty_set_attach(prop: property, v: attach): void;

	function icalproperty_set_attendee(prop: property, v: string): void;

	function icalproperty_set_busytype(prop: property, v: any | null): void;

	function icalproperty_set_calid(prop: property, v: string): void;

	function icalproperty_set_calmaster(prop: property, v: string): void;

	function icalproperty_set_calscale(prop: property, v: string): void;

	function icalproperty_set_capversion(prop: property, v: string): void;

	function icalproperty_set_carid(prop: property, v: string): void;

	function icalproperty_set_carlevel(prop: property, v: any | null): void;

	function icalproperty_set_categories(prop: property, v: string): void;

	function icalproperty_set_class(prop: property, v: any | null): void;

	function icalproperty_set_cmd(prop: property, v: any | null): void;

	function icalproperty_set_color(prop: property, v: string): void;

	function icalproperty_set_comment(prop: property, v: string): void;

	function icalproperty_set_completed(prop: property, v: any | null): void;

	function icalproperty_set_components(prop: property, v: string): void;

	function icalproperty_set_conference(prop: property, v: string): void;

	function icalproperty_set_contact(prop: property, v: string): void;

	function icalproperty_set_created(prop: property, v: any | null): void;

	function icalproperty_set_csid(prop: property, v: string): void;

	function icalproperty_set_datemax(prop: property, v: any | null): void;

	function icalproperty_set_datemin(prop: property, v: any | null): void;

	function icalproperty_set_decreed(prop: property, v: string): void;

	function icalproperty_set_defaultcharset(prop: property, v: string): void;

	function icalproperty_set_defaultlocale(prop: property, v: string): void;

	function icalproperty_set_defaulttzid(prop: property, v: string): void;

	function icalproperty_set_defaultvcars(prop: property, v: string): void;

	function icalproperty_set_deny(prop: property, v: string): void;

	function icalproperty_set_description(prop: property, v: string): void;

	function icalproperty_set_dtend(prop: property, v: any | null): void;

	function icalproperty_set_dtstamp(prop: property, v: any | null): void;

	function icalproperty_set_dtstart(prop: property, v: any | null): void;

	function icalproperty_set_due(prop: property, v: any | null): void;

	function icalproperty_set_duration(prop: property, v: any | null): void;

	function icalproperty_set_estimatedduration(prop: property, v: any | null): void;

	function icalproperty_set_exdate(prop: property, v: any | null): void;

	function icalproperty_set_expand(prop: property, v: number): void;

	function icalproperty_set_exrule(prop: property, v: any | null): void;

	function icalproperty_set_freebusy(prop: property, v: any | null): void;

	function icalproperty_set_geo(prop: property, v: any | null): void;

	function icalproperty_set_grant(prop: property, v: string): void;

	function icalproperty_set_image(prop: property, v: attach): void;

	function icalproperty_set_itipversion(prop: property, v: string): void;

	function icalproperty_set_lastmodified(prop: property, v: any | null): void;

	function icalproperty_set_location(prop: property, v: string): void;

	function icalproperty_set_maxcomponentsize(prop: property, v: number): void;

	function icalproperty_set_maxdate(prop: property, v: any | null): void;

	function icalproperty_set_maxresults(prop: property, v: number): void;

	function icalproperty_set_maxresultssize(prop: property, v: number): void;

	function icalproperty_set_method(prop: property, v: any | null): void;

	function icalproperty_set_mindate(prop: property, v: any | null): void;

	function icalproperty_set_multipart(prop: property, v: string): void;

	function icalproperty_set_name(prop: property, v: string): void;

	function icalproperty_set_organizer(prop: property, v: string): void;

	function icalproperty_set_owner(prop: property, v: string): void;

	function icalproperty_set_parameter(prop: property, parameter: parameter): void;

	function icalproperty_set_parameter_from_string(prop: property, name: string, value: string): void;

	function icalproperty_set_parent(property: property, component: component): void;

	function icalproperty_set_patchdelete(prop: property, v: string): void;

	function icalproperty_set_patchorder(prop: property, v: number): void;

	function icalproperty_set_patchparameter(prop: property, v: string): void;

	function icalproperty_set_patchtarget(prop: property, v: string): void;

	function icalproperty_set_patchversion(prop: property, v: string): void;

	function icalproperty_set_percentcomplete(prop: property, v: number): void;

	function icalproperty_set_permission(prop: property, v: string): void;

	function icalproperty_set_pollcompletion(prop: property, v: any | null): void;

	function icalproperty_set_pollitemid(prop: property, v: number): void;

	function icalproperty_set_pollmode(prop: property, v: any | null): void;

	function icalproperty_set_pollproperties(prop: property, v: string): void;

	function icalproperty_set_pollwinner(prop: property, v: number): void;

	function icalproperty_set_priority(prop: property, v: number): void;

	function icalproperty_set_prodid(prop: property, v: string): void;

	function icalproperty_set_query(prop: property, v: string): void;

	function icalproperty_set_queryid(prop: property, v: string): void;

	function icalproperty_set_querylevel(prop: property, v: any | null): void;

	function icalproperty_set_queryname(prop: property, v: string): void;

	function icalproperty_set_rdate(prop: property, v: any | null): void;

	function icalproperty_set_recuraccepted(prop: property, v: string): void;

	function icalproperty_set_recurexpand(prop: property, v: string): void;

	function icalproperty_set_recurlimit(prop: property, v: string): void;

	function icalproperty_set_recurrenceid(prop: property, v: any | null): void;

	function icalproperty_set_refreshinterval(prop: property, v: any | null): void;

	function icalproperty_set_relatedto(prop: property, v: string): void;

	function icalproperty_set_relcalid(prop: property, v: string): void;

	function icalproperty_set_repeat(prop: property, v: number): void;

	function icalproperty_set_replyurl(prop: property, v: string): void;

	function icalproperty_set_requeststatus(prop: property, v: any | null): void;

	function icalproperty_set_resources(prop: property, v: string): void;

	function icalproperty_set_response(prop: property, v: number): void;

	function icalproperty_set_restriction(prop: property, v: string): void;

	function icalproperty_set_rrule(prop: property, v: any | null): void;

	function icalproperty_set_scope(prop: property, v: string): void;

	function icalproperty_set_sequence(prop: property, v: number): void;

	function icalproperty_set_source(prop: property, v: string): void;

	function icalproperty_set_status(prop: property, v: any | null): void;

	function icalproperty_set_storesexpanded(prop: property, v: string): void;

	function icalproperty_set_summary(prop: property, v: string): void;

	function icalproperty_set_target(prop: property, v: string): void;

	function icalproperty_set_taskmode(prop: property, v: any | null): void;

	function icalproperty_set_transp(prop: property, v: any | null): void;

	function icalproperty_set_trigger(prop: property, v: any | null): void;

	function icalproperty_set_tzid(prop: property, v: string): void;

	function icalproperty_set_tzidaliasof(prop: property, v: string): void;

	function icalproperty_set_tzname(prop: property, v: string): void;

	function icalproperty_set_tzoffsetfrom(prop: property, v: number): void;

	function icalproperty_set_tzoffsetto(prop: property, v: number): void;

	function icalproperty_set_tzuntil(prop: property, v: any | null): void;

	function icalproperty_set_tzurl(prop: property, v: string): void;

	function icalproperty_set_uid(prop: property, v: string): void;

	function icalproperty_set_url(prop: property, v: string): void;

	function icalproperty_set_value(prop: property, value: value): void;

	function icalproperty_set_value_from_string(prop: property, value: string, kind: string): void;

	function icalproperty_set_version(prop: property, v: string): void;

	function icalproperty_set_voter(prop: property, v: string): void;

	function icalproperty_set_x(prop: property, v: string): void;

	function icalproperty_set_x_name(prop: property, name: string): void;

	function icalproperty_set_xlicclass(prop: property, v: any | null): void;

	function icalproperty_set_xlicclustercount(prop: property, v: string): void;

	function icalproperty_set_xlicerror(prop: property, v: string): void;

	function icalproperty_set_xlicmimecharset(prop: property, v: string): void;

	function icalproperty_set_xlicmimecid(prop: property, v: string): void;

	function icalproperty_set_xlicmimecontenttype(prop: property, v: string): void;

	function icalproperty_set_xlicmimeencoding(prop: property, v: string): void;

	function icalproperty_set_xlicmimefilename(prop: property, v: string): void;

	function icalproperty_set_xlicmimeoptinfo(prop: property, v: string): void;

	function icalproperty_status_to_string(arg0: property_status): string;

	function icalproperty_string_to_kind(string: string): property_kind;

	function icalproperty_string_to_method(str: string): property_method;

	function icalproperty_string_to_status(string: string): property_status;

	function icalproperty_value_kind_to_kind(kind: value_kind): property_kind;

	function icalproperty_vanew_acceptresponse(v: string): property;

	function icalproperty_vanew_acknowledged(v: any | null): property;

	function icalproperty_vanew_action(v: any | null): property;

	function icalproperty_vanew_allowconflict(v: string): property;

	function icalproperty_vanew_attach(v: attach): property;

	function icalproperty_vanew_attendee(v: string): property;

	function icalproperty_vanew_busytype(v: any | null): property;

	function icalproperty_vanew_calid(v: string): property;

	function icalproperty_vanew_calmaster(v: string): property;

	function icalproperty_vanew_calscale(v: string): property;

	function icalproperty_vanew_capversion(v: string): property;

	function icalproperty_vanew_carid(v: string): property;

	function icalproperty_vanew_carlevel(v: any | null): property;

	function icalproperty_vanew_categories(v: string): property;

	function icalproperty_vanew_class(v: any | null): property;

	function icalproperty_vanew_cmd(v: any | null): property;

	function icalproperty_vanew_color(v: string): property;

	function icalproperty_vanew_comment(v: string): property;

	function icalproperty_vanew_completed(v: any | null): property;

	function icalproperty_vanew_components(v: string): property;

	function icalproperty_vanew_conference(v: string): property;

	function icalproperty_vanew_contact(v: string): property;

	function icalproperty_vanew_created(v: any | null): property;

	function icalproperty_vanew_csid(v: string): property;

	function icalproperty_vanew_datemax(v: any | null): property;

	function icalproperty_vanew_datemin(v: any | null): property;

	function icalproperty_vanew_decreed(v: string): property;

	function icalproperty_vanew_defaultcharset(v: string): property;

	function icalproperty_vanew_defaultlocale(v: string): property;

	function icalproperty_vanew_defaulttzid(v: string): property;

	function icalproperty_vanew_defaultvcars(v: string): property;

	function icalproperty_vanew_deny(v: string): property;

	function icalproperty_vanew_description(v: string): property;

	function icalproperty_vanew_dtend(v: any | null): property;

	function icalproperty_vanew_dtstamp(v: any | null): property;

	function icalproperty_vanew_dtstart(v: any | null): property;

	function icalproperty_vanew_due(v: any | null): property;

	function icalproperty_vanew_duration(v: any | null): property;

	function icalproperty_vanew_estimatedduration(v: any | null): property;

	function icalproperty_vanew_exdate(v: any | null): property;

	function icalproperty_vanew_expand(v: number): property;

	function icalproperty_vanew_exrule(v: any | null): property;

	function icalproperty_vanew_freebusy(v: any | null): property;

	function icalproperty_vanew_geo(v: any | null): property;

	function icalproperty_vanew_grant(v: string): property;

	function icalproperty_vanew_image(v: attach): property;

	function icalproperty_vanew_itipversion(v: string): property;

	function icalproperty_vanew_lastmodified(v: any | null): property;

	function icalproperty_vanew_location(v: string): property;

	function icalproperty_vanew_maxcomponentsize(v: number): property;

	function icalproperty_vanew_maxdate(v: any | null): property;

	function icalproperty_vanew_maxresults(v: number): property;

	function icalproperty_vanew_maxresultssize(v: number): property;

	function icalproperty_vanew_method(v: any | null): property;

	function icalproperty_vanew_mindate(v: any | null): property;

	function icalproperty_vanew_multipart(v: string): property;

	function icalproperty_vanew_name(v: string): property;

	function icalproperty_vanew_organizer(v: string): property;

	function icalproperty_vanew_owner(v: string): property;

	function icalproperty_vanew_patchdelete(v: string): property;

	function icalproperty_vanew_patchorder(v: number): property;

	function icalproperty_vanew_patchparameter(v: string): property;

	function icalproperty_vanew_patchtarget(v: string): property;

	function icalproperty_vanew_patchversion(v: string): property;

	function icalproperty_vanew_percentcomplete(v: number): property;

	function icalproperty_vanew_permission(v: string): property;

	function icalproperty_vanew_pollcompletion(v: any | null): property;

	function icalproperty_vanew_pollitemid(v: number): property;

	function icalproperty_vanew_pollmode(v: any | null): property;

	function icalproperty_vanew_pollproperties(v: string): property;

	function icalproperty_vanew_pollwinner(v: number): property;

	function icalproperty_vanew_priority(v: number): property;

	function icalproperty_vanew_prodid(v: string): property;

	function icalproperty_vanew_query(v: string): property;

	function icalproperty_vanew_queryid(v: string): property;

	function icalproperty_vanew_querylevel(v: any | null): property;

	function icalproperty_vanew_queryname(v: string): property;

	function icalproperty_vanew_rdate(v: any | null): property;

	function icalproperty_vanew_recuraccepted(v: string): property;

	function icalproperty_vanew_recurexpand(v: string): property;

	function icalproperty_vanew_recurlimit(v: string): property;

	function icalproperty_vanew_recurrenceid(v: any | null): property;

	function icalproperty_vanew_refreshinterval(v: any | null): property;

	function icalproperty_vanew_relatedto(v: string): property;

	function icalproperty_vanew_relcalid(v: string): property;

	function icalproperty_vanew_repeat(v: number): property;

	function icalproperty_vanew_replyurl(v: string): property;

	function icalproperty_vanew_requeststatus(v: any | null): property;

	function icalproperty_vanew_resources(v: string): property;

	function icalproperty_vanew_response(v: number): property;

	function icalproperty_vanew_restriction(v: string): property;

	function icalproperty_vanew_rrule(v: any | null): property;

	function icalproperty_vanew_scope(v: string): property;

	function icalproperty_vanew_sequence(v: number): property;

	function icalproperty_vanew_source(v: string): property;

	function icalproperty_vanew_status(v: any | null): property;

	function icalproperty_vanew_storesexpanded(v: string): property;

	function icalproperty_vanew_summary(v: string): property;

	function icalproperty_vanew_target(v: string): property;

	function icalproperty_vanew_taskmode(v: any | null): property;

	function icalproperty_vanew_transp(v: any | null): property;

	function icalproperty_vanew_trigger(v: any | null): property;

	function icalproperty_vanew_tzid(v: string): property;

	function icalproperty_vanew_tzidaliasof(v: string): property;

	function icalproperty_vanew_tzname(v: string): property;

	function icalproperty_vanew_tzoffsetfrom(v: number): property;

	function icalproperty_vanew_tzoffsetto(v: number): property;

	function icalproperty_vanew_tzuntil(v: any | null): property;

	function icalproperty_vanew_tzurl(v: string): property;

	function icalproperty_vanew_uid(v: string): property;

	function icalproperty_vanew_url(v: string): property;

	function icalproperty_vanew_version(v: string): property;

	function icalproperty_vanew_voter(v: string): property;

	function icalproperty_vanew_x(v: string): property;

	function icalproperty_vanew_xlicclass(v: any | null): property;

	function icalproperty_vanew_xlicclustercount(v: string): property;

	function icalproperty_vanew_xlicerror(v: string): property;

	function icalproperty_vanew_xlicmimecharset(v: string): property;

	function icalproperty_vanew_xlicmimecid(v: string): property;

	function icalproperty_vanew_xlicmimecontenttype(v: string): property;

	function icalproperty_vanew_xlicmimeencoding(v: string): property;

	function icalproperty_vanew_xlicmimefilename(v: string): property;

	function icalproperty_vanew_xlicmimeoptinfo(v: string): property;

	function icalrecur_expand_recurrence(rule: string, start: number, count: number, array: number): number;

	function icalrecur_freq_to_string(kind: recurrencetype_frequency): string;

	function icalrecur_iterator_free(arg0: recur_iterator): void;

	function icalrecur_iterator_new(rule: any | null, dtstart: any | null): recur_iterator;

	function icalrecur_iterator_next(arg0: recur_iterator): any | null;

	function icalrecur_iterator_set_start(impl: recur_iterator, start: any | null): number;

	function icalrecur_skip_to_string(kind: recurrencetype_skip): string;

	function icalrecur_string_to_freq(str: string): recurrencetype_frequency;

	function icalrecur_string_to_skip(str: string): recurrencetype_skip;

	function icalrecur_string_to_weekday(str: string): recurrencetype_weekday;

	function icalrecur_weekday_to_string(kind: recurrencetype_weekday): string;

	function icalrecurrencetype_as_string(recur: any | null): string;

	function icalrecurrencetype_as_string_r(recur: any | null): string;

	function icalrecurrencetype_clear(r: any | null): void;

	function icalrecurrencetype_day_day_of_week(day: number): any | null;

	function icalrecurrencetype_day_position(day: number): number;

	function icalrecurrencetype_from_string(str: string): any | null;

	function icalrecurrencetype_month_is_leap(month: number): number;

	function icalrecurrencetype_month_month(month: number): number;

	function icalrecurrencetype_rscale_is_supported(): number;

	function icalrecurrencetype_rscale_supported_calendars(): array;

	function icalreqstattype_as_string(arg0: any | null): string;

	function icalreqstattype_as_string_r(arg0: any | null): string;

	function icalreqstattype_from_string(str: string): any | null;

	function icalrestriction_check(comp: component): number;

	function icalrestriction_compare(restr: restriction_kind, count: number): number;

	function icaltime_add(t: any | null, d: any | null): any | null;

	function icaltime_adjust(tt: any | null, days: number, hours: number, minutes: number, seconds: number): void;

	function icaltime_as_ical_string(tt: any | null): string;

	function icaltime_as_ical_string_r(tt: any | null): string;

	function icaltime_as_timet(arg0: any | null): number;

	function icaltime_as_timet_with_zone(tt: any | null, zone: timezone): number;

	function icaltime_compare(a: any | null, b: any | null): number;

	function icaltime_compare_date_only(a: any | null, b: any | null): number;

	function icaltime_compare_date_only_tz(a: any | null, b: any | null, tz: timezone): number;

	/**
	 * There are several ways to create a new icaltimetype:
	 * 
	 *      - {@link Icaltime.null_time}
	 *      - icaltime_null_date()
	 *      - icaltime_current_time_with_zone()
	 *      - icaltime_today()
	 *      - icaltime_from_timet_with_zone(time_t tm, int is_date,
	 *              icaltimezone *zone)
	 *      - icaltime_from_day_of_year(int doy, int year)
	 * 
	 *      italtimetype objects can be converted to different formats:
	 * 
	 *      - icaltime_as_timet(struct icaltimetype tt)
	 *      - icaltime_as_timet_with_zone(struct icaltimetype tt,
	 *              icaltimezone *zone)
	 *      - icaltime_as_ical_string(struct icaltimetype tt)
	 * 
	 *      Accessor methods include:
	 * 
	 *      - icaltime_get_timezone(struct icaltimetype t)
	 *      - icaltime_get_tzid(struct icaltimetype t)
	 *      - icaltime_set_timezone(struct icaltimetype t, const icaltimezone *zone)
	 *      - icaltime_day_of_year(struct icaltimetype t)
	 *      - icaltime_day_of_week(struct icaltimetype t)
	 *      - icaltime_start_doy_week(struct icaltimetype t, int fdow)
	 *      - icaltime_week_number(struct icaltimetype t)
	 * 
	 *      Query methods include:
	 * 
	 *      - icaltime_is_null_time(struct icaltimetype t)
	 *      - icaltime_is_valid_time(struct icaltimetype t)
	 *      - icaltime_is_date(struct icaltimetype t)
	 *      - icaltime_is_utc(struct icaltimetype t)
	 * 
	 *      Modify, compare and utility methods include:
	 * 
	 *      - icaltime_compare(struct icaltimetype a,struct icaltimetype b)
	 *      - icaltime_compare_date_only(struct icaltimetype a,
	 *              struct icaltimetype b)
	 *      - icaltime_adjust(struct icaltimetype *tt, int days, int hours,
	 *              int minutes, int seconds);
	 *      - icaltime_normalize(struct icaltimetype t);
	 *      - icaltime_convert_to_zone(const struct icaltimetype tt,
	 *              icaltimezone *zone);
	 * @param tt
	 * @param zone
	 * @returns 
	 */
	function icaltime_convert_to_zone(tt: any | null, zone: timezone): any | null;

	function icaltime_current_time_with_zone(zone: timezone): any | null;

	function icaltime_day_of_week(t: any | null): number;

	function icaltime_day_of_year(t: any | null): number;

	function icaltime_days_in_month(month: number, year: number): number;

	function icaltime_days_in_year(year: number): number;

	function icaltime_from_day_of_year(doy: number, year: number): any | null;

	/**
	 * is the same as that used by {@link Icaldurationtype.from_string}.
	 * ### Usage
	 * ```c
	 * // create icalperiodtype
	 * const char *period_string = "20170606T090000/20170607T090000";
	 * struct icalperiodtype period = icalperiodtype_from_string(period_string);
	 * 
	 * // print period in iCal format
	 * printf("%s\n", icalperiodtype_as_ical_string(period));
	 * ```
	 * @param str
	 * @returns 
	 */
	function icaltime_from_string(str: string): any | null;

	function icaltime_from_timet_with_zone(tm: number, is_date: number, zone: timezone): any | null;

	function icaltime_get_timezone(t: any | null): timezone;

	function icaltime_get_tzid(t: any | null): string;

	function icaltime_is_date(t: any | null): number;

	function icaltime_is_leap_year(year: number): number;

	function icaltime_is_null_time(t: any | null): number;

	function icaltime_is_utc(t: any | null): number;

	function icaltime_is_valid_time(t: any | null): number;

	function icaltime_normalize(t: any | null): any | null;

	function icaltime_null_date(): any | null;

	function icaltime_null_time(): any | null;

	function icaltime_set_timezone(t: any | null, zone: timezone): any | null;

	function icaltime_span_contains(s: time_span, container: time_span): number;

	function icaltime_span_new(dtstart: any | null, dtend: any | null, is_busy: number): any | null;

	function icaltime_span_overlaps(s1: time_span, s2: time_span): number;

	function icaltime_start_doy_week(t: any | null, fdow: number): number;

	function icaltime_subtract(t1: any | null, t2: any | null): any | null;

	function icaltime_today(): any | null;

	function icaltime_week_number(t: any | null): number;

	function icaltimezone_array_append_from_vtimezone(timezones: array, child: component): void;

	function icaltimezone_array_free(timezones: array): void;

	function icaltimezone_array_new(): array;

	function icaltimezone_convert_time(tt: any | null, from_zone: timezone, to_zone: timezone): void;

	function icaltimezone_copy(originalzone: timezone): timezone;

	function icaltimezone_dump_changes(zone: timezone, max_year: number, fp: any | null): number;

	function icaltimezone_expand_vtimezone(comp: component, end_year: number, changes: array): void;

	function icaltimezone_free(zone: timezone, free_struct: number): void;

	function icaltimezone_free_builtin_timezones(): void;

	function icaltimezone_get_builtin_timezone(location: string): timezone;

	function icaltimezone_get_builtin_timezone_from_offset(offset: number, tzname: string): timezone;

	function icaltimezone_get_builtin_timezone_from_tzid(tzid: string): timezone;

	function icaltimezone_get_builtin_timezones(): array;

	function icaltimezone_get_builtin_tzdata(): number;

	function icaltimezone_get_component(zone: timezone): component;

	function icaltimezone_get_display_name(zone: timezone): string;

	function icaltimezone_get_latitude(zone: timezone): number;

	function icaltimezone_get_location(zone: timezone): string;

	function icaltimezone_get_location_from_vtimezone(component: component): string;

	function icaltimezone_get_longitude(zone: timezone): number;

	function icaltimezone_get_tzid(zone: timezone): string;

	function icaltimezone_get_tznames(zone: timezone): string;

	function icaltimezone_get_tznames_from_vtimezone(component: component): string;

	function icaltimezone_get_utc_offset(zone: timezone, tt: any | null, is_daylight: number): number;

	function icaltimezone_get_utc_offset_of_utc_time(zone: timezone, tt: any | null, is_daylight: number): number;

	function icaltimezone_get_utc_timezone(): timezone;

	function icaltimezone_new(): timezone;

	function icaltimezone_release_zone_tab(): void;

	function icaltimezone_set_builtin_tzdata(set: number): void;

	function icaltimezone_set_component(zone: timezone, comp: component): number;

	function icaltimezone_set_tzid_prefix(new_prefix: string): void;

	function icaltimezone_truncate_vtimezone(vtz: component, start: timetype, end: timetype, ms_compatible: number): void;

	function icaltimezone_tzid_prefix(): string;

	function icaltriggertype_from_int(reltime: number): any | null;

	function icaltriggertype_from_string(str: string): any | null;

	function icaltriggertype_is_bad_trigger(tr: any | null): number;

	function icaltriggertype_is_null_trigger(tr: any | null): number;

	function icaltzutil_fetch_timezone(location: string): component;

	function icaltzutil_get_zone_directory(): string;

	function icalvalue_as_ical_string(value: value): string;

	function icalvalue_as_ical_string_r(value: value): string;

	function icalvalue_compare(a: value, b: value): parameter_xliccomparetype;

	function icalvalue_decode_ical_string(szText: string, szDecText: string, nMaxBufferLen: number): number;

	function icalvalue_encode_ical_string(szText: string, szEncText: string, MaxBufferLen: number): number;

	function icalvalue_free(value: value): void;

	function icalvalue_get_action(value: value): any | null;

	function icalvalue_get_attach(value: value): attach;

	function icalvalue_get_binary(value: value): string;

	function icalvalue_get_boolean(value: value): number;

	function icalvalue_get_busytype(value: value): any | null;

	function icalvalue_get_caladdress(value: value): string;

	function icalvalue_get_carlevel(value: value): any | null;

	function icalvalue_get_class(value: value): any | null;

	function icalvalue_get_cmd(value: value): any | null;

	function icalvalue_get_date(value: value): any | null;

	function icalvalue_get_datetime(value: value): any | null;

	function icalvalue_get_datetimedate(value: value): any | null;

	function icalvalue_get_datetimeperiod(value: value): any | null;

	function icalvalue_get_duration(value: value): any | null;

	function icalvalue_get_float(value: value): number;

	function icalvalue_get_geo(value: value): any | null;

	function icalvalue_get_integer(value: value): number;

	function icalvalue_get_method(value: value): any | null;

	function icalvalue_get_parent(value: value): property;

	function icalvalue_get_period(value: value): any | null;

	function icalvalue_get_pollcompletion(value: value): any | null;

	function icalvalue_get_pollmode(value: value): any | null;

	function icalvalue_get_query(value: value): string;

	function icalvalue_get_querylevel(value: value): any | null;

	function icalvalue_get_recur(value: value): any | null;

	function icalvalue_get_requeststatus(value: value): any | null;

	function icalvalue_get_status(value: value): any | null;

	function icalvalue_get_string(value: value): string;

	function icalvalue_get_taskmode(value: value): any | null;

	function icalvalue_get_text(value: value): string;

	function icalvalue_get_transp(value: value): any | null;

	function icalvalue_get_trigger(value: value): any | null;

	function icalvalue_get_uri(value: value): string;

	function icalvalue_get_utcoffset(value: value): number;

	function icalvalue_get_x(value: value): string;

	function icalvalue_get_xlicclass(value: value): any | null;

	function icalvalue_is_valid(value: value): number;

	function icalvalue_isa(value: value): value_kind;

	function icalvalue_isa_value(arg0: any | null): number;

	function icalvalue_kind_is_valid(kind: value_kind): number;

	function icalvalue_kind_to_string(kind: value_kind): string;

	function icalvalue_new(kind: value_kind): value;

	function icalvalue_new_action(v: any | null): value;

	function icalvalue_new_attach(attach: attach): value;

	function icalvalue_new_binary(v: string): value;

	function icalvalue_new_boolean(v: number): value;

	function icalvalue_new_busytype(v: any | null): value;

	function icalvalue_new_caladdress(v: string): value;

	function icalvalue_new_carlevel(v: any | null): value;

	function icalvalue_new_class(v: any | null): value;

	function icalvalue_new_clone(value: value): value;

	function icalvalue_new_cmd(v: any | null): value;

	function icalvalue_new_date(v: any | null): value;

	function icalvalue_new_datetime(v: any | null): value;

	function icalvalue_new_datetimedate(v: any | null): value;

	function icalvalue_new_datetimeperiod(v: any | null): value;

	function icalvalue_new_duration(v: any | null): value;

	function icalvalue_new_float(v: number): value;

	function icalvalue_new_from_string(kind: value_kind, str: string): value;

	function icalvalue_new_geo(v: any | null): value;

	function icalvalue_new_integer(v: number): value;

	function icalvalue_new_method(v: any | null): value;

	function icalvalue_new_period(v: any | null): value;

	function icalvalue_new_pollcompletion(v: any | null): value;

	function icalvalue_new_pollmode(v: any | null): value;

	function icalvalue_new_query(v: string): value;

	function icalvalue_new_querylevel(v: any | null): value;

	function icalvalue_new_recur(v: any | null): value;

	function icalvalue_new_requeststatus(v: any | null): value;

	function icalvalue_new_status(v: any | null): value;

	function icalvalue_new_string(v: string): value;

	function icalvalue_new_taskmode(v: any | null): value;

	function icalvalue_new_text(v: string): value;

	function icalvalue_new_transp(v: any | null): value;

	function icalvalue_new_trigger(v: any | null): value;

	function icalvalue_new_uri(v: string): value;

	function icalvalue_new_utcoffset(v: number): value;

	function icalvalue_new_x(v: string): value;

	function icalvalue_new_xlicclass(v: any | null): value;

	function icalvalue_reset_kind(value: value): void;

	function icalvalue_set_action(value: value, v: any | null): void;

	function icalvalue_set_attach(value: value, attach: attach): void;

	function icalvalue_set_binary(value: value, v: string): void;

	function icalvalue_set_boolean(value: value, v: number): void;

	function icalvalue_set_busytype(value: value, v: any | null): void;

	function icalvalue_set_caladdress(value: value, v: string): void;

	function icalvalue_set_carlevel(value: value, v: any | null): void;

	function icalvalue_set_class(value: value, v: any | null): void;

	function icalvalue_set_cmd(value: value, v: any | null): void;

	function icalvalue_set_date(value: value, v: any | null): void;

	function icalvalue_set_datetime(value: value, v: any | null): void;

	function icalvalue_set_datetimedate(value: value, v: any | null): void;

	function icalvalue_set_datetimeperiod(value: value, v: any | null): void;

	function icalvalue_set_duration(value: value, v: any | null): void;

	function icalvalue_set_float(value: value, v: number): void;

	function icalvalue_set_geo(value: value, v: any | null): void;

	function icalvalue_set_integer(value: value, v: number): void;

	function icalvalue_set_method(value: value, v: any | null): void;

	function icalvalue_set_parent(value: value, property: property): void;

	function icalvalue_set_period(value: value, v: any | null): void;

	function icalvalue_set_pollcompletion(value: value, v: any | null): void;

	function icalvalue_set_pollmode(value: value, v: any | null): void;

	function icalvalue_set_query(value: value, v: string): void;

	function icalvalue_set_querylevel(value: value, v: any | null): void;

	function icalvalue_set_recur(value: value, v: any | null): void;

	function icalvalue_set_requeststatus(value: value, v: any | null): void;

	function icalvalue_set_status(value: value, v: any | null): void;

	function icalvalue_set_string(value: value, v: string): void;

	function icalvalue_set_taskmode(value: value, v: any | null): void;

	function icalvalue_set_text(value: value, v: string): void;

	function icalvalue_set_transp(value: value, v: any | null): void;

	function icalvalue_set_trigger(value: value, v: any | null): void;

	function icalvalue_set_uri(value: value, v: string): void;

	function icalvalue_set_utcoffset(value: value, v: number): void;

	function icalvalue_set_x(value: value, v: string): void;

	function icalvalue_set_xlicclass(value: value, v: any | null): void;

	function icalvalue_string_to_kind(str: string): value_kind;

	function print_date_to_string(str: string, data: any | null): void;

	function print_datetime_to_string(str: string, data: any | null): void;

	function pvl_apply(l: pvl_list, f: pvl_applyf, v: any | null): void;

	function pvl_clear(arg0: pvl_list): void;

	function pvl_count(arg0: pvl_list): number;

	function pvl_data(arg0: pvl_elem): any | null;

	function pvl_find(l: pvl_list, f: pvl_findf, v: any | null): pvl_elem;

	function pvl_find_next(l: pvl_list, f: pvl_findf, v: any | null): pvl_elem;

	function pvl_free(arg0: pvl_list): void;

	function pvl_head(arg0: pvl_list): pvl_elem;

	function pvl_insert_after(l: pvl_list, e: pvl_elem, d: any | null): void;

	function pvl_insert_before(l: pvl_list, e: pvl_elem, d: any | null): void;

	function pvl_insert_ordered(l: pvl_list, f: pvl_comparef, d: any | null): void;

	function pvl_new_element(d: any | null, next: pvl_elem, prior: pvl_elem): pvl_elem;

	function pvl_newlist(): pvl_list;

	function pvl_next(e: pvl_elem): pvl_elem;

	function pvl_pop(l: pvl_list): any | null;

	function pvl_prior(e: pvl_elem): pvl_elem;

	function pvl_push(l: pvl_list, d: any | null): void;

	function pvl_remove(arg0: pvl_list, arg1: pvl_elem): any | null;

	function pvl_shift(l: pvl_list): any | null;

	function pvl_tail(arg0: pvl_list): pvl_elem;

	function pvl_unshift(l: pvl_list, d: any | null): void;

	function set_unknown_token_handling_setting(newSetting: _unknown_token_handling): void;

	function set_zone_directory(path: string): void;

	function sspm_encoding_string(type: any | null): string;

	function sspm_free_parts(parts: any | null, max_parts: number): void;

	function sspm_major_type_string(type: any | null): string;

	function sspm_minor_type_string(type: any | null): string;

	function sspm_parse_mime(parts: any | null, max_parts: number, actions: any | null, get_string: any | null, get_string_data: any | null, first_header: any | null): number;

	function sspm_write_mime(parts: any | null, num_parts: number, output_string: string, header: string): number;

	const BOOLEAN_FALSE: number;

	const BOOLEAN_TRUE: number;

	const BY_DAY_SIZE: number;

	const BY_HOUR_SIZE: number;

	const BY_MINUTE_SIZE: number;

	const BY_MONTHDAY_SIZE: number;

	const BY_MONTH_SIZE: number;

	const BY_SECOND_SIZE: number;

	const BY_WEEKNO_SIZE: number;

	const BY_YEARDAY_SIZE: number;

	const ERRORS_ARE_FATAL: number;

	const ICALPARAMETER_FIRST_ENUM: number;

	const ICALPARAMETER_LAST_ENUM: number;

	const ICALPROPERTY_FIRST_ENUM: number;

	const ICALPROPERTY_LAST_ENUM: number;

	const MAJOR_VERSION: number;

	const MINOR_VERSION: number;

	const PACKAGE: string;

	const PATCH_VERSION: number;

	const VERSION: string;

	const ZONES_TAB_SYSTEM_FILENAME: string;

}