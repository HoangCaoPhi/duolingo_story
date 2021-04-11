using DoulingoStories.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Repository.Story
{
    public class StoryRepository : IStoryRepository
    {
        private readonly DoulingoDbContext _DouligoDbContext;
        public StoryRepository(DoulingoDbContext DoulingoDbContext)
        {
            _DouligoDbContext = DoulingoDbContext;
        }
        public string GetJson(int id)
        {
            return _DouligoDbContext.Story.FirstOrDefault(x => x.id == id).json;
        }
    }
}
