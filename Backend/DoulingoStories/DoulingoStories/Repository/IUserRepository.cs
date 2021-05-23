using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoulingoStories.Models;

namespace DoulingoStories.Repository
{
    public interface IUserRepository
    {
        string SendRegister(string username, string password, string email);
        int CreateUser(string username, string password, string email);
        RestAPI CheckUser(string username, string password);
    }
}
