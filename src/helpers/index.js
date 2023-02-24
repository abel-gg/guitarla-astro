// crea funcion que formatea la fecha como el siguiente ejemplo: 24 de septiembre de 2022
export const formatearFecha = (fecha) => {
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return new Date(fecha).toLocaleDateString('es-ES', opciones)
}
