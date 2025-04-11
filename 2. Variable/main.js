// Variable

// Variabel JavaScript dapat dideklarasikan dalam 4 cara:
// 1. var (Global & Function Scope)
//     Cakupan (Scope): var memiliki cakupan fungsi (function-scoped), artinya variabel yang dideklarasikan dengan var hanya bisa diakses di dalam fungsi tempat ia dideklarasikan.
//     Hoisting: var mengalami hoisting, tetapi dengan nilai undefined, sehingga dapat digunakan sebelum dideklarasikan.
//     Reassignment: Bisa diubah nilainya setelah dideklarasikan.
//     Redeclaration: Bisa dideklarasikan ulang dalam cakupan yang sama.

// 2. let (Block Scope)
//     Cakupan (Scope): let memiliki cakupan blok (block-scoped), artinya variabel hanya bisa diakses dalam blok {} tempat ia dideklarasikan.
//     Hoisting: let juga mengalami hoisting, tetapi tidak diinisialisasi dengan undefined, sehingga akan error jika digunakan sebelum dideklarasikan.
//     Reassignment: Bisa diubah nilainya setelah dideklarasikan.
//     Redeclaration: Tidak bisa dideklarasikan ulang dalam cakupan yang sama.

// 3. const (Block Scope, Tidak Bisa Diubah)
//     Cakupan (Scope): Sama seperti let, const juga bersifat block-scoped.
//     Hoisting: Sama seperti let, const juga mengalami hoisting tetapi tidak diinisialisasi.
//     Reassignment: Tidak bisa diubah nilainya setelah dideklarasikan.
//     Redeclaration: Tidak bisa dideklarasikan ulang dalam cakupan yang sama.

// 4. Global Implicit (Global Scope, Bisa Diubah)
//     Cakupan (Scope): Variabel yang dibuat tanpa var, let, atau const akan menjadi global secara otomatis, bahkan jika dideklarasikan dalam fungsi atau blok.
//     Hoisting: Tidak mengalami hoisting. Jika diakses sebelum dideklarasikan, akan menghasilkan ReferenceError.
//     Reassignment: Bisa diubah nilainya kapan saja setelah dideklarasikan.
//     Redeclaration: Bisa dideklarasikan ulang tanpa error, tetapi berpotensi menyebabkan konflik variabel.

var nama = 'Aang Solihin'
let umur = 19
const kelamin = 'Laki-laki'
hobi = "Programming, Musik, dan Bermain Game"

console.log(`Saya adalah ${nama} berumur ${umur} dan saya adalah seorang ${kelamin}. Hobi saya adalah ${hobi}.`)
