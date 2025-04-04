// Desafio 1: Dados de um documento
let nome: string
let numero_rg: number
let numero_cpf: number
let data_nascimento: string
let data_emissao: string
let data_validade: string
let orgao_emissor: string
let uf: string
let categoria: string
let vencimento_valido: boolean

// Desafio 2: Identificando tipos em um form da Caixa
let nome_firma: string
let cnpj: number
let receita_fiscal: number
let ano_referencia: number
let receita_fiscal_12_meses: number
let quantidade_meses: number
let regime_tributario: string
let endereco: string
let numero: number
let data_assinatura: string
let contabilista_nome: string
let contabilista_cpf: number
let contabilista_crc: number

// Desafio 3: Caracteristicas de um produto
let codigo_produto: number
let nome_produto: string
let categoria_produto: number
let subcategoria: number
let marca: string
let modelo: string
let cor: string
let preco: number
let descricao: string
let stars: number
let caracteristicas: string[]
let especificacoes: string[]
let avaliacao_custo_beneficio: number
let avaliacao_qualidade: number
let avaliacao_duracao_bateria: number
let avaliacao_qualidade_camera: number
let avaliacao_durabilidade: number
let novo: boolean

// Desafio 4: Calcule seu IMC
let peso = 91
let altura = 1.75
let imc: number

imc = peso / altura ** 2
console.log("Meu imc é ", imc)
