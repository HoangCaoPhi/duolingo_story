using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.DTO
{
    public class CourseDTO
    {
        public int id { get; set; }
        public int? learningLanguage { get; set; }
        public int? fromLanguage { get; set; }
        public int? Public { get; set; }
        public int? official { get; set; }
        public string name { get; set; }
    }
    
}
