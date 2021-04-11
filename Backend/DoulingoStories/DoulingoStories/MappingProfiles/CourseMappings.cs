using AutoMapper;
using DoulingoStories.DTO;
using DoulingoStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.MappingProfiles
{
    public class CourseMappings : Profile
    {
        public CourseMappings()
        {
            CreateMap<Course, CourseDTO>().ReverseMap();
        }
    }
}
