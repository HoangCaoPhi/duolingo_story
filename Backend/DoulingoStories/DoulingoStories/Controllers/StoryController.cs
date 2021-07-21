using DoulingoStories.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DoulingoStories.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoryController : ControllerBase
    {
        private readonly IStoryRepository _storyRepository;
        //private readonly IMapper _mapper;
        

        private readonly ILogger<StoryController> _logger;

        public StoryController(ILogger<StoryController> logger, IStoryRepository storyRepository/*, IMapper mapper*/)
        {
            _logger = logger;
            _storyRepository = storyRepository;
           // _mapper = mapper;
        }

       
        [HttpGet]
        [Route("json/{id}")]
        public IActionResult GetJsonById(int id)
        {
            string json = _storyRepository.GetJson(id);
        

            return Ok(json);
        }
        


    }
}
