using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Models
{
    public class Story
    {
        public int id { get; set; }
        public int? duo_id { get; set; }
        public string name { get; set; }
        public int? set_index { get; set; }
        public int? xp { get; set; }
        public string cefr { get; set; }
        public string name_base { get; set; }
        public string lang { get; set; }
        public string lang_base { get; set; }
        public int? author { get; set; }
        public DateTime date { get; set; }
        public DateTime change_date { get; set; }
        public string text { get; set; }
        public int? is_active { get; set; }
        public string image { get; set; }
        public string image_done { get; set; }
        public string image_locked { get; set; }
        public string discussion { get; set; }
        public int? course_id { get; set; }
        public string json { get; set; }
    }
}
