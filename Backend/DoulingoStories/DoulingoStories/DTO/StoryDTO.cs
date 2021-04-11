using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.DTO
{
    public class StoryDTO
    {
        public int id { get; set; }
        public string duo_id { get; set; }
        public string name { get; set; }
        public int? set_index { get; set; }
        public int? xp { get; set; }
        public string cefr { get; set; }
        public string name_base { get; set; }
        public int? lang { get; set; }
        public int? lang_base { get; set; }
        public int? author { get; set; }
        public DateTime date { get; set; }
        public DateTime change_date { get; set; }
        public string text { get; set; }
        public int? Public { get; set; }
        public string image { get; set; }
        public string image_done { get; set; }
        public string image_locked { get; set; }
        public string discussion { get; set; }
        public string course_id { get; set; }
        public string json { get; set; }
    }
}
