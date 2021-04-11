using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DoulingoStories.DTO;
using DoulingoStories.Models;
using DoulingoStories.Repository;
using DoulingoStories.Repository.Course;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DoulingoStories.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _courseRepository;
        //private readonly IMapper _mapper;
        

        private readonly ILogger<CourseController> _logger;

        public CourseController(ILogger<CourseController> logger, ICourseRepository courseRepository/*, IMapper mapper*/)
        {
            _logger = logger;
            _courseRepository = courseRepository;
           // _mapper = mapper;
        }

        [HttpGet]
        [Route("getall")]
        public IActionResult GetAll([FromQuery] QueryParameters queryParameters)
        {
            List<Models.Course> allCourse = _courseRepository.GetAll(queryParameters).ToList();
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(allCourse);
        }
        [HttpGet]
        [Route("getall2")]
        public IActionResult GetAll2([FromQuery] QueryParameters queryParameters)
        {
            List<Models.CourseQuery> allCourse = _courseRepository.GetAllCourse().ToList();
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(allCourse);
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetCourseById(int id)
        {
            Models.Course Course= _courseRepository.GetSingle(id);
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(Course);
        }
        [HttpGet]
        [Route("getListCourse")]
        public IActionResult getListCourse()
        {
            string lang = Request.Query["learnlang"];
            string langbase = Request.Query["fromlang"];
            List<CourseObject> Course = _courseRepository.GetListCourse(lang, langbase);
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(Course);
        }


    }
}
