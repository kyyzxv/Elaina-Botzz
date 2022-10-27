import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group`))
let botol = global.wm
let str = `
━━ꕥ〔 *Sewa & Premium* 〕ꕥ━⬣

┏━ꕥ〔 Harga Sewa 〕
┃
┃✾ 15 ʜᴀʀɪ 5ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 7ᴋ / ɢʀᴏᴜᴘ
┃✾ 45 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *Elaina Botz* ꕥ━⬣

┏━ꕥ〔 Harga Premium 〕
┃
┃✾ 15 ʜᴀʀɪ 5ᴋ 
┃✾ 30 ʜᴀʀɪ 10ᴋ 
┃✾ 45 ʜᴀʀɪ 15ᴋ 
┃✾ 60 ʜᴀʀɪ 20ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ
┃
┗━━ꕥ *Elaina Botz* ꕥ━⬣

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
┗━━ꕥ *Elaina Botz* ꕥ━⬣
 • Hubungi:
   Https://wa.me/+62858-3179-6696
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['Owner','.owner']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^belibot|sewa|sewabot|premium|buyprem$/i

export default handler
