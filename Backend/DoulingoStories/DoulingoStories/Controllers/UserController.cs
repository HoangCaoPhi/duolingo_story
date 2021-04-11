using DoulingoStories.Models;
using DoulingoStories.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoulingoStories.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController: ControllerBase
    {
        private readonly IUserRepository _userRepository;
        //private readonly IMapper _mapper;


        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger, IUserRepository userRepository/*, IMapper mapper*/)
        {
            _logger = logger;
            _userRepository = userRepository;
            // _mapper = mapper;
        }
        [HttpPost]
        [Route("email")]
        public IActionResult Resgiter([FromBody] User user)
        {
            string json = _userRepository.SendRegister(user.username, user.password, user.email);
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(json);
        }
        [HttpPost]
        [Route("adduser")]
        public IActionResult Create([FromBody] User user)
        {
            int json = _userRepository.CreateUser(user.username, user.password, user.email);
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(json);
        }
        [HttpPost]
        [Route("checkuser")]
        public IActionResult Check([FromBody] User user)
        {
            bool json = _userRepository.CheckUser(user.username, user.password);
            //IEnumerable<CourseDTO> dtos = foodItems
            //     .Select(x => _mapper.Map<CourseDTO>(x));

            return Ok(json);
        }
    }
}
