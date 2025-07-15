export function dateBr(createdAt: string) {
  return new Date(createdAt).toLocaleDateString('pt-BR');
}
