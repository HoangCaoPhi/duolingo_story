using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Repository
{
    public interface IUserRepository
    {
        string SendRegister(string username, string password, string email);
        int CreateUser(string username, string password, string email);
        bool CheckUser(string username, string password);
    }
}
