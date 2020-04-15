
using Microsoft.EntityFrameworkCore;
using ProAgil.Api.Model;

namespace ProAgil.Api.Data
{
    public class DataContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder) {}
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Evento> Eventos { get; set; }
    }
}