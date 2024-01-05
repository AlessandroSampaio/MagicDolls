import { z } from 'zod';

export const budgetForm = z.object({
  name: z.string().min(4, 'Nome deve conter ao menos 4 caracteres'),
  email: z.string().email(),
  telefone: z.string(),
  endereco: z.string(),
  numero: z.number().optional(),
  bairro: z.string(),
  cep: z.string().regex(/\d{5}-\d{3}/),
  estilo: z.number(),
  tamanho: z.number(),
  base: z.string(),
  acessorios: z.string().optional(),
  observacoes: z.string().optional(),
});


export type BudgetFormData = z.infer<typeof budgetForm>;
