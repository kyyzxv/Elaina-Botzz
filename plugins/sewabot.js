import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group`))
let botol = global.wm
let str = `
━━ꕥ〔 *Sewa & Premium* 〕ꕥ━⬣

┏━ꕥ〔 Harga Sewa 〕
┃
┃✾ 7 ʜᴀʀɪ 5ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 30ᴋ / ɢʀᴏᴜᴘ
┃✾ 120 ʜᴀʀɪ 35ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 65ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *Elaina Botz* ꕥ━⬣

┏━ꕥ〔 Harga Premium 〕
┃
┃✾ 7 ʜᴀʀɪ 5ᴋ 
┃✾ 30 ʜᴀʀɪ 20ᴋ 
┃✾ 60 ʜᴀʀɪ 40ᴋ 
┃✾ 120 ʜᴀʀɪ 50ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 70ᴋ
┃
┗━━ꕥ *𝑽𝑿_𝑩𝑶𝑻𝒁* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 450+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃ 
┗━━ꕥ *𝑽𝑿_𝑩𝑶𝑻𝒁* ꕥ━⬣
 • Hubungi:
   Https://wa.me/+62822-8696-1617
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['Owner','.owner']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^belibot|sewa|sewabot|premium|buyprem$/i

export default handler
