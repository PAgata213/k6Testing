namespace k6Testing.Models;

public record Todo
{
	public int Id { get; init; }
	public string Title { get; set; } = default!;
	public string? Description { get; set; }
	public DateTime Created { get; init; } = DateTime.UtcNow;
	public bool Done { get; set; }
}
