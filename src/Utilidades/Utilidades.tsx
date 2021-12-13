export const cambiarPrimeraMayuscula = (palabra: string) => {
  if (palabra.length > 1) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }
  return palabra;
};
