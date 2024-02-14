using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NoteAppBackend.Migrations
{
    public partial class EliminoRowVersion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RowVersion",
                table: "Notes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                table: "Notes",
                type: "rowversion",
                rowVersion: true,
                nullable: true);
        }
    }
}
