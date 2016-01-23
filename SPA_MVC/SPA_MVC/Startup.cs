using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SPA_MVC.Startup))]
namespace SPA_MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
