using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NoteAppBackend.Migrations
{
    public partial class ModificoIds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NoteCategories_Categories_CategoryId",
                table: "NoteCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_NoteCategories_Notes_NoteId",
                table: "NoteCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NoteCategories",
                table: "NoteCategories");

            migrationBuilder.DropIndex(
                name: "IX_NoteCategories_CategoryId",
                table: "NoteCategories");

            migrationBuilder.DropColumn(
                name: "IdCategory",
                table: "NoteCategories");

            migrationBuilder.DropColumn(
                name: "IdNote",
                table: "NoteCategories");

            migrationBuilder.AlterColumn<int>(
                name: "NoteId",
                table: "NoteCategories",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "NoteCategories",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_NoteCategories",
                table: "NoteCategories",
                columns: new[] { "CategoryId", "NoteId" });

            migrationBuilder.AddForeignKey(
                name: "FK_NoteCategories_Categories_CategoryId",
                table: "NoteCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_NoteCategories_Notes_NoteId",
                table: "NoteCategories",
                column: "NoteId",
                principalTable: "Notes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NoteCategories_Categories_CategoryId",
                table: "NoteCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_NoteCategories_Notes_NoteId",
                table: "NoteCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NoteCategories",
                table: "NoteCategories");

            migrationBuilder.AlterColumn<int>(
                name: "NoteId",
                table: "NoteCategories",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "NoteCategories",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "IdCategory",
                table: "NoteCategories",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdNote",
                table: "NoteCategories",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_NoteCategories",
                table: "NoteCategories",
                columns: new[] { "IdCategory", "IdNote" });

            migrationBuilder.CreateIndex(
                name: "IX_NoteCategories_CategoryId",
                table: "NoteCategories",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_NoteCategories_Categories_CategoryId",
                table: "NoteCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_NoteCategories_Notes_NoteId",
                table: "NoteCategories",
                column: "NoteId",
                principalTable: "Notes",
                principalColumn: "Id");
        }
    }
}
