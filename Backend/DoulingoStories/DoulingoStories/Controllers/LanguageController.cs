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
    public class LanguageController : ControllerBase
    {
        private readonly ILanguageRepository _languageRepository;
        //private readonly IMapper _mapper;
        

        private readonly ILogger<LanguageController> _logger;

        public LanguageController(ILogger<LanguageController> logger, ILanguageRepository languageRepository/*, IMapper mapper*/)
        {
            _logger = logger;
            _languageRepository = languageRepository;
           // _mapper = mapper;
        }

        [HttpGet]
        [Route("getall")]
        public IActionResult GetAll([FromQuery] QueryParameters queryParameters)
        {
            List<Models.Language> allLanguage = _languageRepository.GetAll(queryParameters).ToList();
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(allLanguage);
        }

        [HttpGet]
        [Route("insert")]
        public IActionResult Insert([FromQuery] QueryParameters queryParameters)
        {
            _languageRepository.Insert();
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(200);
        }
        /*[HttpGet]
        [Route("{id}")]
        public IActionResult GetCourseById(int id)
        {
            Models.Course Course= _courseRepository.GetSingle(id);
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(Course);
        }*/


    }
}
