using geradorSchemaMongo.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace geradorSchemaMongo
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Result> listStep = Util.GetParams<Step>(new Step());
            List<Result> listDocument = Util.GetParams<Document>(new Document());
            List<Result> listAddress = Util.GetParams<Address>(new Address());
            List<Result> listParent = Util.GetParams<Parent>(new Parent());
            List<Result> listDocument2 = Util.GetParams<Document2>(new Document2());
            List<Result> listAddress2 = Util.GetParams<Address2>(new Address2());
            List<Result> listChild = Util.GetParams<Child>(new Child());
            List<Result> listRegistrationForm = Util.GetParams<RegistrationForm>(new RegistrationForm());
            List<Result> listOs = Util.GetParams<Os>(new Os());
            List<Result> listBrowser = Util.GetParams<Browser>(new Browser());
            List<Result> listLanguage = Util.GetParams<Language>(new Language());
            List<Result> listLocation = Util.GetParams<Location>(new Location());
            List<Result> listTimeZone = Util.GetParams<TTimeZone>(new TTimeZone());
            List<Result> listCurrency = Util.GetParams<Currency>(new Currency());
            List<Result> listConnection = Util.GetParams<Connection>(new Connection());
            List<Result> listIpInfo = Util.GetParams<IpInfo>(new IpInfo());
            List<Result> listFingerprint = Util.GetParams<Fingerprint>(new Fingerprint());
            List<Result> listRegister = Util.GetParams<Register>(new Register());

            Util.CreateModel(listStep, "Step");
            Util.CreateModel(listDocument, "Document");
            Util.CreateModel(listAddress, "Address");
            Util.CreateModel(listParent, "Parent");
            Util.CreateModel(listDocument2, "Document2");
            Util.CreateModel(listAddress2, "Address2");
            Util.CreateModel(listChild, "Child");
            Util.CreateModel(listRegistrationForm, "RegistrationForm");
            Util.CreateModel(listOs, "Os");
            Util.CreateModel(listBrowser, "Browser");
            Util.CreateModel(listLanguage, "Language");
            Util.CreateModel(listLocation, "Location");
            Util.CreateModel(listTimeZone, "TimeZone");
            Util.CreateModel(listCurrency, "Currency");
            Util.CreateModel(listConnection, "Connection");
            Util.CreateModel(listIpInfo, "IpInfo");
            Util.CreateModel(listFingerprint, "Fingerprint");
            Util.CreateModel(listRegister, "Register");


            Util.CreateGraphQL(listStep, "Step");
            Util.CreateGraphQL(listDocument, "Document");
            Util.CreateGraphQL(listAddress, "Address");
            Util.CreateGraphQL(listParent, "Parent");
            Util.CreateGraphQL(listDocument2, "Document2");
            Util.CreateGraphQL(listAddress2, "Address2");
            Util.CreateGraphQL(listChild, "Child");
            Util.CreateGraphQL(listRegistrationForm, "RegistrationForm");
            Util.CreateGraphQL(listOs, "Os");
            Util.CreateGraphQL(listBrowser, "Browser");
            Util.CreateGraphQL(listLanguage, "Language");
            Util.CreateGraphQL(listLocation, "Location");
            Util.CreateGraphQL(listTimeZone, "TimeZone");
            Util.CreateGraphQL(listCurrency, "Currency");
            Util.CreateGraphQL(listConnection, "Connection");
            Util.CreateGraphQL(listIpInfo, "IpInfo");
            Util.CreateGraphQL(listFingerprint, "Fingerprint");
            Util.CreateGraphQL(listRegister, "Register");
        }
    }
}
