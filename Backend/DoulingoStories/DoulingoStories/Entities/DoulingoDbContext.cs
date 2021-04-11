using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoulingoStories.Models;

namespace DoulingoStories.Entities
{
    public class DoulingoDbContext : DbContext
    {
        public DoulingoDbContext() { }
        public DoulingoDbContext(DbContextOptions<DoulingoDbContext> options)
           : base(options)
        {

        }
        

        public DbSet<Course> Course { get; set; }
        public DbSet<Language> Language { get; set; }
        public DbSet<Story> Story { get; set; }
        public DbSet<User> User { get; set; }

    }
}
