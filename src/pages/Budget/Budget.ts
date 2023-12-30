import { z } from 'zod';

export const budgetForm = z.object({
  name: z.string(),
  endereco: z.string(),
  numero: z.number(),
  bairro: z.string(),
  cep: z.string().regex(/\d{5}-\d{3}/),
  estilo: z.string(),
  tamanho: z.number(),
  base: z.string(),
  acessorios: z.string(),
  observacoes: z.string()
});


export type BudgetFormData = z.infer<typeof budgetForm>;
