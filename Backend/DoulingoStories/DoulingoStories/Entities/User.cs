using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Models
{
    public class User
    {
        public  int id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public DateTime regdate { get; set; }
        public int role { get; set; }
        public int admin { get; set; }
        public int activated { get; set; }
        public string activation_link { get; set; }
    }
    public class RestAPI
    {
        public int StatusCode { get; set; }
        public UesrInfo Data { get; set; }
    }
    public class UesrInfo
    {
        public string username { get; set; }
        public string email { get; set; }
    }


}
