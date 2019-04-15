using System;
using Xunit;

namespace tests
{
    public class UnitTest1
    {
        [Fact]
        public void SalaryTest()
        {
            //AddNew
            var salary = new Salary()
            {
                Last_Name = "Doe",
                First_Name = "John",
                Middle_Name = "Deer",
                Vp_College = "Agriculture",
                Department = "Wildlife",
                Organization = "DOE",
                Title = "Head Hunter",
                Annual_Base_Salary = 44000,
                Hourly_Rate = 0,
                Id = 010101,
                Sex = "M",
                Race = "Asian",
                Ethnicity = "American",
                Spirit_Animal = "Deer"
            };

        }
    }

    internal class Salary
    {
        public Salary()
        {
        }

        public string Last_Name { get; set; }
        public string First_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Vp_College { get; set; }
        public string Department { get; set; }
        public string Organization { get; set; }
        public string Title { get; set; }
        public int Annual_Base_Salary { get; set; }
        public int Hourly_Rate { get; set; }
        public int Id { get; set; }
        public string Sex { get; set; }
        public string Race { get; set; }
        public string Ethnicity { get; set; }
        public string Spirit_Animal { get; set; }
    }
}
