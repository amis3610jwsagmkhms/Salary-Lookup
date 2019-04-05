using System; 

namespace Salarylookup.Api.Models
{
    public class Salary
    {
        public string Last_Name { get; set; }
        public string First_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Vp_College { get; set; }
        public string Department { get; set; }
        public string Organization { get; set; }
        public string Title { get; set; }
        public double Annual_Base_Salary { get; set; }
        public double Hourly_Rate { get; set; }
        public int Id { get; set; }
        public char Sex { get; set; }
        public string Race { get; set; }
        public string Ethnicity { get; set; }
        public string Spirit_Animal { get; set; }
    }
}