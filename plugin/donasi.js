let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [0896-3682-7082]
│ • Telkomsel: [0821-7197-8174]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6289636827082
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
