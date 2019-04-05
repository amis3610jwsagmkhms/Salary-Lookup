using Microsoft.EntityFrameworkCore;

namespace Salarylookup.Api.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {}

        public DbSet<Salary> Salaries { get; set; }
    }
}