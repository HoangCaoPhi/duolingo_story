using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.DTO
{
    public class StoryDoneDTO
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public int story_id { get; set; }
        public DateTime time { get; set; }
    }
}
