using DoulingoStories.Entities;
using DoulingoStories.Helpers;
using DoulingoStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using MySqlConnector;
using MySql.Data.MySqlClient;

namespace DoulingoStories.Repository.Language
{
    
    public class LanguageRepository  : ILanguageRepository
    {
        private readonly DoulingoDbContext _DouligoDbContext;
        static HttpClient client = new HttpClient();
        public LanguageRepository(DoulingoDbContext DoulingoDbContext)
        {
            _DouligoDbContext = DoulingoDbContext;
        }
        public IQueryable<Models.Language> GetAll(QueryParameters queryParameters)
        {
            try
            {
               // IQueryable<Models.Language> _allItems = _DouligoDbContext.Language.Where(w=>w.Public == 1).OrderBy(queryParameters.OrderBy,
               //queryParameters.IsDescending());

                IQueryable<Models.Language> _allItems = _DouligoDbContext.Language.Where(w => w.Public == 1);

                return _allItems
               .Skip(queryParameters.PageCount * (queryParameters.Page - 1))
               .Take(queryParameters.PageCount);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }


            /*if (queryParameters.HasQuery())
            {
                _allItems = _allItems
                    .Where(x => x.Calories.ToString().Contains(queryParameters.Query.ToLowerInvariant())
                    || x.Name.ToLowerInvariant().Contains(queryParameters.Query.ToLowerInvariant()));
            }*/
            return null;

        }
        public async void Insert()
        {
            /*List<Models.Story> list1 = new List<Models.Story>();
            List<string> list2 = new List<string>();
            string lang = null;
            string lang2 = null;
            int count = 0;
            string url1 = "https://carex.uber.space/stories/backend/stories/get_story.php?id=";
            string url2 = "https://carex.uber.space/stories/backend/stories/get_story_json.php?id=";
           
            
            using(DoulingoDbContext db = new DoulingoDbContext(GetOptions()))
            {
                for (int i = 1034; i < 1070; i++)
                {
                    HttpResponseMessage response = await client.GetAsync(url1+i.ToString());
                    if (response.IsSuccessStatusCode)
                    {
                        lang = await response.Content.ReadAsStringAsync();
                    }
                    List<Models.Story> story = JsonConvert.DeserializeObject<List<Models.Story>>(lang);
                    if(story!= null && story.Count == 1)
                    {
                        list1.Add(story.FirstOrDefault());
                    }
                    else if(story != null && story.Count > 1 )
                    {
                        count++;
                    }
                    HttpResponseMessage response2 = await client.GetAsync(url2 + i.ToString());
                    if (response2.IsSuccessStatusCode)
                    {
                        lang2 = await response2.Content.ReadAsStringAsync();
                    }
                    if (lang2 != null && lang2.Length > 0)
                    {
                        //db.Story.First(w => w.id == i).json = lang2;
                        int index = list1.FindIndex(x => x.id == i);
                        if(index != -1)
                        {
                            list1[index].json = lang2;
                        }

                        // list2.Add(lang2);
                    }

                }
               foreach (Models.Story l in list1)
                {
                    db.Story.Add(l);
                }
                db.SaveChanges();
            }
           

            var a = 1;*/
            List<CourseObject> list1 = new List<CourseObject>();
            List<string> list2 = new List<string>();
            string lang = null;
            string lang2 = null;
            int count = 0;
            string url1 = "https://carex.uber.space/stories/backend/stories/get_list.php?lang=es&lang_base=en";
            string url2 = "https://carex.uber.space/stories/backend/stories/get_story_json.php?id=";


            using (DoulingoDbContext db = new DoulingoDbContext(GetOptions()))
            {

                HttpResponseMessage response = await client.GetAsync(url1);
                if (response.IsSuccessStatusCode)
                {
                    lang = await response.Content.ReadAsStringAsync();
                }
                List<CourseObject> story = JsonConvert.DeserializeObject<List<CourseObject>>(lang);
                if (story != null )
                {
                    list1 = story;
                }
                



                foreach (CourseObject l in list1)
                {
                    if(l.id < 1034)
                    {
                        db.Story.FirstOrDefault(x => x.id == l.id).name = l.name;
                        db.Story.FirstOrDefault(x => x.id == l.id).name_base = l.name_base;
                    }
                    
                }
                db.SaveChanges();
            }
            
        }
        public static DbContextOptions<DoulingoDbContext> GetOptions()
        {
            DbContextOptionsBuilder<DoulingoDbContext> builder = new DbContextOptionsBuilder<DoulingoDbContext>();
            builder.UseMySql("Server=127.0.0.1;uid=root;Database=doulingo_stories;pwd=123456;Convert Zero Datetime=True");

            return builder.Options;
        }
    }
}
