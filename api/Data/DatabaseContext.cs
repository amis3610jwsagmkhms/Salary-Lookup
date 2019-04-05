using Microsoft.EntityFrameworkCore;
using Salarylookup.Api.Models;

namespace Salarylookup.Api.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {}

        protected override void OnModelCreating(ModelBuilder builder) => base.OnModelCreating(builder);

        public DbSet<Salary> Salaries { get; set; }
    }
}