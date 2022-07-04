const { Message } = require('discord.js');
const { rawEmb } = require('../index')

module.exports = {
    name: 'setstatus',
    syntax: 'setstatus',
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
    async execute(msg, args) {
        const { colors, emotes } = msg.client;
        let emb = rawEmb(msg)
        if (msg.author.id !== msg.client.ownerID) return msg.channel.send(emb.setDescription("You are not authorised to use this command").setColor(colors.error))



  let code = args[0]
  if(!code) {
    let argsrequired = new Discord.MessageEmbed()
    .setTitle(`**An Invaild Usage**`)
    .setDescription(`Please insert a valid code for this!`)
    message.channel.send(argsrequired)
    ;
  }
  let codecheck = db.get(`botpremiumcodes`)
  let alreadyexist = new Discord.MessageEmbed()
  .setTitle(`Exisited Code`)
  .setDescription(`This Code It's already on the database please try to enter an other code`)
  if(codecheck && codecheck.find(find => find.premiumcodes == code)) message.channel.send(alreadyexist);
  let codedata = {
   premiumcodes: code
  }
  if (!owners.includes(message.author.id)) 
  db.add(`totalcodes`, 1)
  let totalcodes = db.get(`totalcodes`)
  let embed = new Discord.MessageEmbed()
  .setTitle(`New Code Created With ${code} Name`)
  .setDescription(`Total Available Codes: ${totalcodes}`)
  msg.channel.send(embed)
  db.push(`botpremiumcodes`, codedata)
    }
}