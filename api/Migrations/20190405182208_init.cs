using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Salarylookup.Api.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Salaries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Last_Name = table.Column<string>(nullable: true),
                    First_Name = table.Column<string>(nullable: true),
                    Middle_Name = table.Column<string>(nullable: true),
                    Vp_College = table.Column<string>(nullable: true),
                    Department = table.Column<string>(nullable: true),
                    Organization = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Annual_Base_Salary = table.Column<double>(nullable: false),
                    Hourly_Rate = table.Column<double>(nullable: false),
                    Sex = table.Column<char>(nullable: false),
                    Race = table.Column<string>(nullable: true),
                    Ethnicity = table.Column<string>(nullable: true),
                    Spirit_Animal = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Salaries", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Salaries");
        }
    }
}
