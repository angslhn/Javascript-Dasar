// Prototype & Prototypal Inheritance
// Static method adalah metode yang dapat dipanggil tanpa harus membuat instance.

class MathUtil {
    static tambah(a, b) {
      return a + b;
    }
}
  
console.log(MathUtil.tambah(5, 10)); // Output: 15