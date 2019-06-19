using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace geradorSchemaMongo.Model
{
    public class Step
    {
        public string id { get; set; }
        public string inc_date { get; set; }
        public string update_date { get; set; }
    }

    public class Document
    {
        public string type { get; set; }
        public string value { get; set; }
    }

    public class Address
    {
        public string zipcode { get; set; }
        public string street { get; set; }
        public string number { get; set; }
        public string complement { get; set; }
    }

    public class Parent
    {
        public string userPublicId { get; set; }
        public bool main { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string cell_phone { get; set; }
        public string phone { get; set; }
        public string birthday { get; set; }
        public List<Document> documents { get; set; }
        public Address address { get; set; }
        public List<string> responsibilities { get; set; }
    }

    public class Document2
    {
        public string type { get; set; }
        public string value { get; set; }
    }

    public class Address2
    {
        public string zipcode { get; set; }
        public string street { get; set; }
        public string number { get; set; }
        public string complement { get; set; }
    }

    public class Child
    {
        public string name { get; set; }
        public string birthday { get; set; }
        public string cell_phone { get; set; }
        public string gender { get; set; }
        public string year { get; set; }
        public string school { get; set; }
        public string nationality { get; set; }
        public List<Document2> documents { get; set; }
        public Address2 address { get; set; }
    }

    public class RegistrationForm
    {
        public string current_step { get; set; }
        public List<Step> steps { get; set; }
        public List<Parent> parents { get; set; }
        public List<Child> children { get; set; }
    }

    public class Os
    {
        public int architecture { get; set; }
        public string family { get; set; }
        public string version { get; set; }
    }

    public class Browser
    {
        public string description { get; set; }
        public string layout { get; set; }
        public object manufacturer { get; set; }
        public string name { get; set; }
        public object prerelease { get; set; }
        public object product { get; set; }
        public string ua { get; set; }
        public string version { get; set; }
        public Os os { get; set; }
    }

    public class Language
    {
        public string code { get; set; }
        public string name { get; set; }
        public string native { get; set; }
    }

    public class Location
    {
        public int geoname_id { get; set; }
        public string capital { get; set; }
        public List<Language> languages { get; set; }
        public string country_flag { get; set; }
        public string country_flag_emoji { get; set; }
        public string country_flag_emoji_unicode { get; set; }
        public string calling_code { get; set; }
        public bool is_eu { get; set; }
    }

    public class TTimeZone
    {
        public string id { get; set; }
        public DateTime current_time { get; set; }
        public int gmt_offset { get; set; }
        public string code { get; set; }
        public bool is_daylight_saving { get; set; }
    }

    public class Currency
    {
        public string code { get; set; }
        public string name { get; set; }
        public string plural { get; set; }
        public string symbol { get; set; }
        public string symbol_native { get; set; }
    }

    public class Connection
    {
        public int asn { get; set; }
        public string isp { get; set; }
    }

    public class IpInfo
    {
        public string ip { get; set; }
        public string type { get; set; }
        public string continent_code { get; set; }
        public string continent_name { get; set; }
        public string country_code { get; set; }
        public string country_name { get; set; }
        public string region_code { get; set; }
        public string region_name { get; set; }
        public string city { get; set; }
        public string zip { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }
        public Location location { get; set; }
        public TimeZone time_zone { get; set; }
        public Currency currency { get; set; }
        public Connection connection { get; set; }
    }

    public class Fingerprint
    {
        public string uid { get; set; }
        public string token { get; set; }
        public string fingerprint { get; set; }
        public string url { get; set; }
        public List<object> urlQueryString { get; set; }
        public string referrer { get; set; }
        public string pageTitle { get; set; }
        public Browser browser { get; set; }
        public string cookie { get; set; }
        public object formMapping { get; set; }
        public IpInfo ipInfo { get; set; }
        public object partnersDenied { get; set; }
    }

    public class Register
    {
        public string document { get; set; }
        public string cell_phone { get; set; }
        public bool activate { get; set; }
        public RegistrationForm registration_form { get; set; }
        public Fingerprint fingerprint { get; set; }
    }
}
