using System.ComponentModel.DataAnnotations;

namespace ProAgil.Api.Dtos
{
    public class LoteDto
    {
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public decimal Preco { get; set; }
        public string DataInicio { get; set; }
        public string DataFim { get; set; }
        
        [Required]
        public int Qtd { get; set; }
    }
}