const { Message } = require('discord.js');
const { rawEmb } = require('../index')

module.exports = {
    name: 'createcode',
    syntax: 'createcode',
    args: true,
    description: 'Change the bots status',
    perm: 'ADMINISTRATOR',
    commands: ['status'],

    /**
     *@document
     * @this
     * @param {Message} msg 
     * @param {String[]} args 
     */
    async execute(msg, args , db, emb2) {
        const { colors, emotes } = msg.client;
        let emb = rawEmb(msg)
        if (msg.author.id !== msg.client.ownerID) return msg.channel.send(emb.setDescription("You are not authorised to use this command").setColor(colors.error))



  let code = args[0]
  if(!code) {
    let emb = rawEmb(msg)
    .setTitle(`**An Invaild Usage**`)
    .setDescription(`Please insert a valid code for this!`) 
    msg.channel.send(rawEmb)
    ;
  }
  let codecheck = db.get(`botpremiumcodes`)
  let rawEmb = args[0]
  if(!code) {
  let emb2 = rawEmb(msg) 
  .setTitle(`Exisited Code`)
  .setDescription(`This Code It's already on the database please try to enter an other code`)
  if(codecheck && codecheck.find(find => find.premiumcodes == code)) return msg.channel.send();
  let codedata = {
   premiumcodes: code
  }

  if (msg.author.id  === msg.client.ownerID) {
  db.add(`totalcodes`, 1)
  let totalcodes = db.get(`totalcodes`)
    let rawEmb = args[0]
  if(!code) {
  let emb2 = rawEmb(msg) 

  .setTitle(`New Code Created With ${code} Name`)
  .setDescription(`Total Available Codes: ${totalcodes}`)
  msg.channel.send(rawEmb)
  db.push(`botpremiumcodes`, codedata)
    }
    }
    }
}
}