using System;
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Salarylookup.Api.Data;
using Salarylookup.Api.Models;

// This controller manages the routes for salary searches
namespace Salarylookup.Api.Controllers
{
    [Route("")]
    [Route("api/search")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        //Add a private variable and constructor to give the controller access to our datastore
        private readonly DatabaseContext db; 
        public SearchController(DatabaseContext db)
        {
            this.db = db;

            // add books data to database if empty
            if (this.db.Salaries.Count() == 0) 
            {
                this.db.Salaries.Add(new Salary()
                {
                    Last_Name = "Scott", 
                    First_Name = "Michael", 
                    Middle_Name = "Garrett", 
                    Vp_College = "College of Business", 
                    Department = "Sales", 
                    Organization = "Dunder Mifflin Paper Co.",
                    Title = "Regional Manager", 
                    Annual_Base_Salary = 75000.00, 
                    Hourly_Rate = 28.00, 
                    Id = 1, // Needs to be called Id not Identifier for database purpose
                    Sex = 'M', 
                    Race = "White", 
                    Ethnicity = "Non Hispanic or Latino", 
                    Spirit_Animal = "Grasshopper"
                });
            }
            this.db.SaveChanges();
        }

        // Http request GET returns all books
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.Salaries);
        }

        [HttpGet("id!{id}")]
        public IActionResult GetSalaryById(int id)
        {   
            // finds the row that contains the Id
            var salary = db.Salaries.FirstOrDefault(s => s.Id == id); 
            
            // if no salary is found with the id, return 404
            if (salary == null)
            {
                return NotFound();
            }

            // return the salary inside Http 200 OK
            return Ok(salary); 
        }

        [HttpGet("lastname!{lName}")]
        public IActionResult GetSalaryByLastName(string lName)
        {   
            // finds the row that contains the Id
            System.Linq.IQueryable<Salary> salary = db.Salaries.Where(s => s.Last_Name.ToLower().Contains(lName.ToLower())); 
            
            // if no salary is found with the id, return 404
            if (salary == null)
            {
                return NotFound();
            }

            // return the salary inside Http 200 OK
            return Ok(salary); 
        }

        // ADD OTHER SEARCH FUNCTIONS
    }
}
