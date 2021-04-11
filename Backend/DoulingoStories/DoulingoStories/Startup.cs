using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoulingoStories.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using DoulingoStories.Repository;
using DoulingoStories.Repository.Course;
using DoulingoStories.Repository.Language;
using DoulingoStories.Repository.Story;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using DoulingoStories.MappingProfiles;
using AutoMapper;
using MySqlConnector;

namespace DoulingoStories
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDbContext<DoulingoDbContext>(opt => opt.UseInMemoryDatabase("FoodDatabase"));
            string s = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<DoulingoDbContext>(options => options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<ILanguageRepository, LanguageRepository>();
            services.AddScoped<IStoryRepository, StoryRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddScoped<IUrlHelper>(x =>
            {
                var actionContext = x.GetRequiredService<IActionContextAccessor>().ActionContext;
                var factory = x.GetRequiredService<IUrlHelperFactory>();
                return factory.GetUrlHelper(actionContext);
            });

            services.AddControllers();

            //services.AddAutoMapper(new[] { typeof(CourseMappings) });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            /*app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "FoodAPICore V1");
            });*/
        }
    }
}
