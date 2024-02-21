using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        FirstName = "Admin",
                        LastName = "",
                        UserName = "admin",
                        Email = "admin@test.com"
                    },
                    new AppUser
                    {
                        FirstName = "User",
                        LastName = "",
                        UserName = "user",
                        Email = "user@test.com"
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

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
