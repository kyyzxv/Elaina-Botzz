import fetch from 'node-fetch'

//Plugin By F4Q Store!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/XiaoyuOfc/RPG-MD-V4/blob/master/mp3/insekur.mp3`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃✾ Pulsa  [ 081335334848 ]
┃✾ Dana  [ 081335334848 ]
┃✾ Saweria  [ Nothing ]
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃ Ingin donasi? Wa.me/6285831796696
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *RDP/VPS* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┗━━━━ꕥ
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, '© By F4Q Store', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `Orang baik Pasti Mau donasi:v`, body: `Gak Maksa Kok Donasi Nya`, sourceUrl: 'https://www.tiktok.com/@anjay', thumbnail: await (await fetch('https://telegra.ph/file/7db49c83fd106a60741cd.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In F4Q Store
// Gosah Dihapus Anj
// Tq To Jangan Di Hpus!!
