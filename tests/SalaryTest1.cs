using System;
using Xunit;
using Salary.Lookup.Models.Salary;

namespace tests
{
    public class UnitTest1
    {
        //Business Rule 1 - Id not null 
        public void Test1(int Id)
        {
            this.Id = Id;
        }

        private int _Id;
        public int Id 
        {
            get { return _Id; }
            private set
            {
                if (value == null) {
                    throw new ArgumentException("Parameter Id may not be null or blank.");
                }
                _Id = value;
            }
        }

        //Business Rule 2 - Sex is M, F, or NA
        public void Test2(char Sex)
        {
            this.Sex = Sex;
        }
        private char _Sex;
        public char Sex {
            get { return _Sex; }
            private set
            {
                if (value != F || value != M || value != NA)
                {
                    throw new ArgumentException("Parameter Sex must be one of the following: M, F, NA");
                }
                _Sex = value;
            }
        }

        //Business Rule 3 - Annual Salary & Hourly Rate are not negative
        public void Test3(int Annual_Base_Salary, int Hourly_Rate)
        {
            this.Annual_Base_Salary;
            this.Hourly_Rate;
        }
        private int _Annual_Base_Salary;
        public int Annual_Base_Salary
        {
            get { return _Annual_Base_Salary; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Paramter Annual Base Salary cannot be negative.");
                }
                _Annual_Base_Salary = value;
            }
        }
        private int _Hourly_Rate;
        public int Hourly_Rate
        {
            get { return _Hourly_Rate; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Parameter Hourly Rate cannot be negative.");
                }
                _Hourly_Rate = value;
            }
        }


    }
}