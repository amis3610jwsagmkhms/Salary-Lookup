using System;
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Salarylookup.Api.Data;
using Salarylookup.Api.Models;

// This controller manages the About page and any incorrect URL requests
namespace Salarylookup.Api.Controllers
{

    [Route("api/about")]
    [Route("")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        //Add a private variable and constructor to give the controller access to our datastore

        public AboutController(DatabaseContext db)
        {
            
        }

        // ADD OTHER SEARCH FUNCTIONS
    }
}