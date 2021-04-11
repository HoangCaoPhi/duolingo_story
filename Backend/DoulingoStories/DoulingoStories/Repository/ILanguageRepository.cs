using DoulingoStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Repository
{
    public interface ILanguageRepository
    {
        IQueryable<Models.Language> GetAll(QueryParameters queryParameters);
        void Insert();
    }
}
