using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.Api.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }
        [Required (ErrorMessage="O campo {0} é obrigatório")]
        public string Local { get; set; }
        public string DataEvento { get; set; }

        [Required (ErrorMessage="O campo {0} é obrigatório")]
        public string Tema { get; set; }

        [Required (ErrorMessage="O campo {0} é obrigatório")]
        [Range (2, 100, ErrorMessage="Deve ser entre 2 e 100")]
        public int QtdPessoas { get; set; }
        public string ImagemUrl { get; set; }

        [Phone (ErrorMessage="Insira um telefone válido")]
        public string Telefone { get; set; }

        [EmailAddress (ErrorMessage="Insira um Email válido")]
        public string Email { get; set; }
        public List<LoteDto> Lotes { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<PalestranteDto> Palestrantes { get; set; }
    }
}