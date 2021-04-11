using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Models
{
    public class Language
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string Short { get; set; }
        public float? flag { get; set; }
        public int? Public { get; set; }
        public string flag_file { get; set; }
        public string speaker { get; set; }
        public int? rtl { get; set; }
    }
    
}
