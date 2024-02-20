using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Models.Any())
                return;

            var models = new List<Model>
            {
                new Model { Title = "Model 1", Description = "Description Model 1" },
                new Model { Title = "Model 2", Description = "Description Model 2" },
                new Model { Title = "Model 3", Description = "Description Model 3" },
            };

            await context.Models.AddRangeAsync(models);
            await context.SaveChangesAsync();
        }
    }
}
