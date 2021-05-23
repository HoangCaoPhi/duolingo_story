using DoulingoStories.Entities;
using DoulingoStories.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DoulingoStories.Repository.Story
{
    public class UserRepository : IUserRepository
    {
        private readonly DoulingoDbContext _DouligoDbContext;
        public UserRepository(DoulingoDbContext DoulingoDbContext)
        {
            _DouligoDbContext = DoulingoDbContext;
        }
        public string SendRegister(string username, string password, string email)
        {

            Email(contenemail(), email);
            return "ok";
        }
        public RestAPI CheckUser(string username, string password)
        {
            RestAPI restAPI = new RestAPI();
            UesrInfo userinfo = new UesrInfo();
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                User user = new User();
                user = _DouligoDbContext.User.Where(x => x.username == username).
                    Where(x => x.password == builder.ToString()).Where(x => x.activated == 1).FirstOrDefault();
                if(user != null)
                {
                    restAPI.StatusCode = 200;
                    userinfo.username = user.username;
                    userinfo.email = user.email;
                    restAPI.Data = userinfo;
                }
                else
                {
                    restAPI.StatusCode = -1;
                }
            }
            return restAPI;
                
        }
            
        public int CreateUser(string username, string password, string email)
        {

            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
              // return builder.ToString();
                using (DoulingoDbContext db = new DoulingoDbContext(GetOptions()))
                {
                    User user = new User()
                    {
                        username = username,
                        password = builder.ToString(),
                        email = email,
                        regdate = DateTime.Now,
                        activated = 1
                    };
                    db.User.Add(user);
                    db.SaveChanges();

                }
            }
            return 200;
        }

        public string InsertUser(string username, string password, string email)
        {
            User user = new User();
            using (DoulingoDbContext db = new DoulingoDbContext(GetOptions()))
            {

                user.username = username;
                user.password = password;
                user.email = email;

                db.User.Add(user);
                
                db.SaveChanges();
            }
            
            return "ok";
        }

        public static string contenemail()
        {
            return "<div>You have registered on 'Duolingo Stories Pha Ke'.</div><br>"
        +"<div>To complete your registration click on the following link.</div><br>"
        +"<a href = 'https://carex.uber.space/stories/activate.html?username=thetessen&activation_link=Y4nLkipt21'> Activate account </a>"
         +" <br><br>"
        + "<div>Happy learning.</div>";
        }
        public static void Email(string htmlString, string adresss)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient();
                message.From = new MailAddress("thesondong@gmail.com");
                message.To.Add(new MailAddress(adresss));
                message.Subject = "Confirm email";
                message.IsBodyHtml = true; //to make message body as html  
                message.Body = htmlString;
                message.IsBodyHtml = true;
                smtp.Port = 587;
                smtp.Host = "smtp.gmail.com"; //for gmail host  
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("thesondong@gmail.com", "sinhnhattao");
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
               smtp.Send(message);
            }
            catch (Exception e) 
            {
                Console.WriteLine(e);
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
