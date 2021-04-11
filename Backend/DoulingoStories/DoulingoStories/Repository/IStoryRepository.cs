using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Repository
{
    public interface IStoryRepository
    {
        string GetJson(int id);
    }
}
