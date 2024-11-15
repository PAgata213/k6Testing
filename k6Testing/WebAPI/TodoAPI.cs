using k6Testing.Context;
using k6Testing.Models;

using Microsoft.EntityFrameworkCore;

namespace k6Testing.WebAPI;

public static class TodoAPI
{
	public static void RegisterToDoAPI(this WebApplication app)
	{
		app.MapGet("api/todos/", GetToDoItems).WithName("Get todo items").WithOpenApi();
		app.MapGet("api/todos/{id}", GetTodoItem).WithName("Get one todo item").WithOpenApi();
	}

	public static async Task<ICollection<Todo>> GetToDoItems(AppDbContext dbContext)
		=> await dbContext.Todos.AsNoTracking().ToListAsync();

	public static async Task<Todo?> GetTodoItem(AppDbContext dbContext, int id)
		=> await dbContext.Todos.AsNoTracking().FirstOrDefaultAsync(t => t.Id == id);
}
