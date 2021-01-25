let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089636827083]
│ • Telkomsel [082171978174]
│ • Gopay [089636827083]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6289636827083
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
