using k6Testing.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace k6Testing.Context.Configuration;

public class ToDoConfiguration : IEntityTypeConfiguration<Todo>
{
	public void Configure(EntityTypeBuilder<Todo> builder) 
	{
		builder.HasKey(t => t.Id);
	}
}
