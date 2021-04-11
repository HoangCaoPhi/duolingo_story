using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Models
{
    public class Course
    {
        [Key]
        public int id { get; set; }
        public int? learningLanguage { get; set; }
        public int? fromLanguage { get; set; }
        public int? Public { get; set; }
        public int? official { get; set; }
        public string name { get; set; }
    }
    public class CourseQuery
    {
        
        public int id { get; set; }
        public string name { get; set; }
        public string fromLanguage { get; set; }
        public string fromLanguageName { get; set; }
        public string learningLanguage { get; set; }
        public string learningLanguageName { get; set; }
        public long? count { get; set; }
        public int? Public { get; set; }
        public int? official { get; set; }
        
    }
    public class CourseObject
    {

        public int id { get; set; }
        public int? setId { get; set; }
        public int? setIndex { get; set; }
        public string image { get; set; }
        public string imageDone { get; set; }
        public string name { get; set; }
        public int? xp { get; set; }
        public string name_base { get; set; }

    }
}
