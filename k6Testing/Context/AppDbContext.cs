using k6Testing.Models;

using Microsoft.EntityFrameworkCore;

namespace k6Testing.Context;

public class AppDbContext : DbContext
{
	public AppDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
	{
		
	}

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.ApplyConfigurationsFromAssembly((typeof(AppDbContext).Assembly));
	}

	public DbSet<Todo> Todos { get; set; }
}
