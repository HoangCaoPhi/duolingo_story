using DoulingoStories.Entities;
using DoulingoStories.Helpers;
using DoulingoStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using MySql.Data.MySqlClient;

namespace DoulingoStories.Repository.Course
{
    public class CourseRepository : ICourseRepository
    {
        private readonly  DoulingoDbContext _DouligoDbContext;
        public CourseRepository(DoulingoDbContext DoulingoDbContext)
        {
            _DouligoDbContext = DoulingoDbContext;
        }
        public Models.Course GetSingle(int id)
        {
            return _DouligoDbContext.Course.FirstOrDefault(x => x.id == id);
        }
        public IQueryable<Models.Course> GetAll(QueryParameters queryParameters)
        {
            try
            {
                IQueryable<Models.Course> _allItems = _DouligoDbContext.Course.OrderBy(queryParameters.OrderBy,
               queryParameters.IsDescending());
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
        public List<CourseQuery> GetAllCourse()
        {
            try
            {
                
                string connectionString = ("Server=127.0.0.1;uid=root;Database=doulingo_stories;pwd=123456");
                string commandText = @"SELECT course.id, course.name, l1.short AS fromLanguage, l1.name AS fromLanguageName, l2.short AS learningLanguage, l2.name AS learningLanguageName, COUNT(story.id) count, course.public, course.official FROM course
LEFT JOIN language l1 ON l1.id = course.fromLanguage
LEFT JOIN language l2 ON l2.id = course.learningLanguage
LEFT JOIN story ON(story.lang = course.learningLanguage AND story.lang_base = course.fromLanguage)
GROUP BY course.id";
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    //using (SqlCommand cmd = new  SqlCommand(commandText, conn))
                    //{
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(commandText, conn);
                    cmd.ExecuteNonQuery();
                    using (var result = cmd.ExecuteReader())
                    {
                        // do something with result
                    }
                    List<List<object>> items = new List<List<object>>();
                    List<CourseQuery> li = new List<CourseQuery>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var item = new List<object>();

                        items.Add(item);

                        for (int i = 0; i < reader.FieldCount; i++)
                            item.Add(reader[i]);
                        CourseQuery l = new CourseQuery()
                        {
                            id = (int)item[0],
                            name = item[1].ToString(),
                            fromLanguage = item[2].ToString(),
                            fromLanguageName = item[3].ToString(),
                            learningLanguage = item[4].ToString(),
                            learningLanguageName = item[5].ToString(),
                            count = (long)item[6],
                            Public = (int)item[7],
                            official = (int)item[8],
                        };
                        li.Add(l);
                    }


                    conn.Close();
                    // }
                    return li;
                }


                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return null;

        }
        public List<CourseObject> GetListCourse(string lang, string langbase)
        {
            try
            {

                string connectionString = ("Server=127.0.0.1;uid=root;Database=doulingo_stories;pwd=123456");
                string commandText = @"SELECT story.id, story.set_id, story.set_index, story.image, story.image_done, story.name, 
story.xp, name_base FROM story
JOIN language l1 ON story.lang = l1.id AND l1.short = "+"\""+lang + "\""
+ " JOIN language l2 ON story.lang_base = l2.id AND l2.short =  " + "\"" + langbase + "\""
+@" WHERE story.is_active = 0
GROUP BY story.id
ORDER BY set_id, set_index";
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    //using (SqlCommand cmd = new  SqlCommand(commandText, conn))
                    //{
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(commandText, conn);
                    cmd.ExecuteNonQuery();
                    using (var result = cmd.ExecuteReader())
                    {
                        // do something with resultin
                    }
                    List<List<object>> items = new List<List<object>>();
                    List<CourseObject> li = new List<CourseObject>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var item = new List<object>();

                        items.Add(item);

                        for (int i = 0; i < reader.FieldCount; i++)
                            item.Add(reader[i]);
                        CourseObject l = new CourseObject()
                        {
                            id = (int)item[0],
                            setId = (int?)item[1],
                            setIndex =(int?) item[2],
                            image = item[3].ToString(),
                            imageDone = item[4].ToString(),
                            name = item[5].ToString(),
                            xp = (int?)item[6],
                            name_base = item[7].ToString(),
                        };
                        li.Add(l);
                    }


                    conn.Close();
                    // }
                    return li;
                }


                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return null;

        }
        public static DbContextOptions<DoulingoDbContext> GetOptions()
        {
            DbContextOptionsBuilder<DoulingoDbContext> builder = new DbContextOptionsBuilder<DoulingoDbContext>();
            builder.UseMySql("Server=127.0.0.1;uid=root;Database=doulingo_stories;pwd=;Convert Zero Datetime=True");

            return builder.Options;
        }
    }
}
