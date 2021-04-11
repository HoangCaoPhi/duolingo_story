using DoulingoStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoulingoStories.Entities;

namespace DoulingoStories.Repository
{
    public interface ICourseRepository
    {
        Models.Course GetSingle(int id);
        IQueryable<Models.Course> GetAll(QueryParameters queryParameters);
        List<CourseQuery> GetAllCourse();
        List<CourseObject> GetListCourse(string lang, string langbase);
    }
}
