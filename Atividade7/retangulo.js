function Retangulo(x, y) {
  this.base = x;
  this.altura = y;

  this.calcularArea = () => {
    return x * y;
  };
}
