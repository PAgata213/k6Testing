using k6Testing.Models;

using Microsoft.EntityFrameworkCore;

namespace k6Testing.Context.SeedData;

public class ToDoSeed
{
	public static async Task SeedDataAsync(AppDbContext dbContext)
	{
		if(await dbContext.Todos.AnyAsync())
		{
			return;
		}
		var data = Enumerable.Range(1, 100).Select(x => new Todo
		{
			Id = x,
			Description = $"Description {x}",
			Done = x % 5 == 0,
			Title = $"Title {x}"
		});

		await dbContext.Todos.AddRangeAsync(data);
		await dbContext.SaveChangesAsync();
	}
}
