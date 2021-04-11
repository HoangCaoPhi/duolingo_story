using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.DTO
{
    public class LanguageDTO
    {
        public int id { get; set; }
        public string name { get; set; }
        public string Short { get; set; }
        public float flag { get; set; }
        public string Public { get; set; }
        public string flag_file { get; set; }
        public string speaker { get; set; }
        public int? rtl { get; set; }

    }
}
