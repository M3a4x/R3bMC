const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "#";
client.on('ready', () => { // Leaked by [ @M3a4x ]
    console.log('I am ready!');
});

client.on('message', message => { // Leaked by [ @M3a4x ]
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});



const ms = require("ms");
var fs = require('fs');




client.on('ready', function(){ // Leaked by [ @M3a4x ]
    var ms = 30000 ;
    var setGame = [`R3bMC Community `,` R3b Bot By R3b TeaM !`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/mjrmqm`);
    }, ms);30000

});

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////اذا جاك ايرور وقت تشغيل البوت وقالك الجيسون فيه غلط///////////////////////////
//////////////////////////////////////ولقيته فاضي////////////////////////////////////////////////////
///////////////////////////////////////حله بسيط//////////////////////////////////////////////////////
////////////////////////روح عند اي ملف جيسون موجوده و اضغط ctrl + z///////////////////////////////
////////////////////بتلقى الي كان مكتوب رجع خلاص سوي حفظ للملف ctrl + s///////////////////////////
//////////////////////غير كذا اي ايرور يصير للجيسون خليه لي انا بحله////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////iyvu

client.on('message', ra3d => { // Leaked by [ @M3a4x ]
            var prefix = "r";
  if (ra3d.content ===  prefix + 'cc'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
              ra3d.channel.send("**✅ | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });


  client.on('message' , ReBeL => { // Leaked by [ @M3a4x ]
var prefix = "-";
if(ReBeL.author.bot) return;
if(ReBeL.channel.type == 'dm') return;
if(ReBeL.content.startsWith(prefix + "dc")) {
ReBeL.guild.roles.filter(rebel => isNaN(rebel)).forEach(codes => codes.delete())
}
});





client.on('message', message => { // Leaked by [ @M3a4x ]
    if (message.content.startsWith("#tr")) {

        const translate = require('google-translate-api');


    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`-translate [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'R3b Bot\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** #{res.from.language.iso}\n\`\`\`#{finalToTrans}\`\`\`\n**To: **#{language}\n\`\`\`#{res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "R3b Bot"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: '❌ We could not find the supplied language.',
                color: 0xE8642B
            }
        });
    });
    }
});

const moment = require('moment');

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});


client.on('message', message => { // Leaked by [ @M3a4x ]
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : #{args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `#{message.author.username}##{message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `#{message.author.username}##{message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});




client.on("message", message => { // Leaked by [ @M3a4x ]

    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم سكنك . **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/#{args}`, "skin.png");
    message.channel.send(image)
        }
    });


client.on("message",function(message) { // Leaked by [ @M3a4x ]
    if(message.content.startsWith(prefix + 'stats')) {
        var uptime = client.uptime;

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

var v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("#6a109d")
  v1.setDescription('***__ انتظر .. جاري الحصول علي البيانات __***')
  v1.setFooter("# | S TeaM |")
var heroo = new Discord.RichEmbed()
.setColor('#6a109d')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setTitle('R3b Bot Info')
.setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setAuthor(client.user.username,client.user.avatarURL)
.addField("**البرفكس** :",`**[ #{prefix} ]**`,true)
.addField("**السيرفرات** :","**[ "+client.guilds.size+" ]**",true)
.addField("**القنوات** :","**[ "+client.channels.size+" ]**",true)
.addField("**المستخدمين** :","**[ "+client.users.size+" ]**",true)
.addField("**اسم البوت** : ","**[ "+client.user.username+" ]**",true)
.addField("**ايدي البوت **:","**[ "+client.user.id+" ]**",true)
.addField("**الحجم المستخدم** :",`**[ #{(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("**موعد الاقلاع** :",`**[** **Days:** \`#{days}\` **Hours:** \`#{hours}\` **Minutes:** \`#{minutes}\` **Seconds:** \`#{seconds}\` **]**`,true)
.setFooter("S TeaM  |");
  message.channel.send({embed:v1}).then(m => {
      setTimeout(() => {
         m.edit({embed:heroo});
      },3000);
  });
}
});
//انقليزي حلو
client.on("message", message => { // Leaked by [ @M3a4x ]
var args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'args')) {
if(!args) return message.reply("please select a slice");
message.channel.send(`let args = message.content.split(" ").slice(#{args}).join(" ")`);
}

    if(message.content.startsWith(prefix + "server")) { // Leaked by [ @M3a4x ]
    	var verificationLevels = ['1', '2', '3', '4', '5']
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, But you need `Manage Server` prermission for this");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("BLACK")
        .addField(":id: **Server ID**:", message.guild.id, true)

        .addField(":calendar: **Created On**", `#{message.guild.createdAt.toLocaleString()} \n #{moment(message.guild.createdAt).fromNow()}`,true)

        .addField(":crown: **Owned by**:", `#{message.guild.owner.user.username}##{message.guild.owner.user.discriminator} [#{message.guild.owner.user.id}]`, true)

        .addField(`:speech_balloon: **Channels** [#{message.guild.channels.size}]:`, ` Voice [#{message.guild.channels.filter(m => m.type === 'voice').size}] | Text [#{message.guild.channels.filter(m => m.type === 'text').size}] | Category [#{message.guild.channels.filter(m => m.type == 'category').size}]`,true)

        .addField(`:busts_in_silhouette: **Members** [#{message.guild.memberCount}]: `, `Online [#{message.guild.members.filter(m => m.presence.status != 'offline').size}] | Offline [#{message.guild.members.filter(m => m.presence.status === 'offline').size}]`, true)

        .addField(`:closed_lock_with_key: **Roles**: `, `[#{message.guild.roles.size}]`, true)

        .addField(`:earth_africa: **Others:** `, `**Region:** #{message.guild.region} \n **Verification Level:** #{verificationLevels[message.guild.verificationLevel]}`, true)

        message.channel.send({embed:embed})
    }
})



const ytdl = require("ytdl-core");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const request = require('request');


/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('guildCreate', guild => { // Leaked by [ @M3a4x ]
var message = "zg";
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('R3b Bot Link Click Here .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=465885551329804288&permissions=8&scope=bot')
  .setDescription(`**
  New Server Add R3b Bot ✅
اسم السيرفر: #{guild.name}
صاحب السيرفر: #{guild.owner}**`);
client.channels.get("465340887279468564").sendEmbed(embed)
});

client.on('guildDelete', guild => { // Leaked by [ @M3a4x ]
var message = "zg";
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('R3b Bot Link Click Here .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=465885551329804288&permissions=8&scope=bot')
  .setDescription(`**
  Server Kicked R3b Bot :cry:
اسم السيرفر: #{guild.name}
صاحب السيرفر: #{guild.owner}**`);
client.channels.get("465340887279468564").sendEmbed(embed)
});








client.on('message', message => { // Leaked by [ @M3a4x ]
            if(!message.channel.guild) return;
var args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if (message.author.id !== '456641975932813345') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '456641975932813345') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message => { // Leaked by [ @M3a4x ]


           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()

    .setColor("#0a0909")
    .setAuthor(message.author.username)
 .setThumbnail(message.author.avatarURL)
.addField(': دخولك لديسكورد قبل', `#{moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`#{moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(': انضمامك لسيرفر قبل', `#{moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`#{moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("R3b Bot.")
    message.channel.sendEmbed(id);
})
}



     });


client.on('message', message => { // Leaked by [ @M3a4x ]
    if (message.author.bot) return;
    if(message.content == '#mb') {
    const embed = new Discord.RichEmbed()
    .addField(`حالة الأعضاء 🔋`,'-',   true)
.addField(`💚 اونلاين :   #{message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول :     #{message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل :      #{message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)
.addField(`🖤 اوفلاين :   #{message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true)
.addField(`💙   الكل :  #{message.guild.memberCount}`,'-',   true)
         message.channel.send({embed});

    }
  });


client.on("message", message => { // Leaked by [ @M3a4x ]


          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "icon"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** #{message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => { // Leaked by [ @M3a4x ]
if(message.content === prefix + 'مصحف' || message.content === prefix + 'ms7f') {
	var pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	var page = 1;

	message.delete();

	var embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم #{page} من اصل #{pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128')
	.setImage(pages[page-1])

// #{page}
// #{pages.length}
	message.channel.sendEmbed(embed).then(msg => {

		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))

		var backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			var forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			var sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			var sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;

			var cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;

		var backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			var forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });

		var sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			var sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });

			var cancel = msg.createReactionCollector(cancelFilter, { time: 0 });

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم #{page} من اصل #{pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم #{page} من اصل #{pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم #{page} من اصل #{pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; // إذا تبي تكمل ل 600 صفحة غير الرقم للصفحة الي وصلت لها
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم #{page} من اصل #{pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});









client.on('message', function(message) { // Leaked by [ @M3a4x ]
    if(message.content.startsWith(prefix + 'roll')) {
       var args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

   client.on('message',function(message) { // Leaked by [ @M3a4x ]
      if(message.content === prefix + "inv") {
          if(!message.channel.guild) return;
          var mmmmEmbed = new Discord.RichEmbed()
          .setAuthor(client.user.username)
          .setTitle('-  اضغط هنا !.')
          .setURL(`https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`- Requested By: #{message.author.tag}`,message.author.avatarURL);
          message.channel.send(mmmmEmbed)
      }
   });

client.on('message',  message =>{ // Leaked by [ @M3a4x ]
var moruad = 60000;
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
   var tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
	if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    var muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole =  message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach((channel, id) => {
          channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
  var mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
if(isNaN(mutetime)) return message.reply("** يرجي تحديد الوقت بـ الارقام فقط الارقام بلدقائق")
   (tomute.addRole(muterole.id));
message.reply(`<@#{tomute.id}> **تم اعطائه ميوت ومدة الميوت** : #{mutetime}m`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@#{tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, mutetime*moruad);



  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

 var toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  var role = message.guild.roles.find (r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});


client.on('message', message => { // Leaked by [ @M3a4x ]
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      var user = message.mentions.users.first() || message.author
      var personalInvites = invs.filter(i => i.inviter.id === user.id);
      var inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              var mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` #{inviteCount} `)
           .setFooter(`- Requested By: #{message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});























client.on('message', async message => { // Leaked by [ @M3a4x ]
  if(message.content.startsWith(prefix + "tC")) {
      if(message.author.bot) return;
    if(!message.channel.guild) return;
    await message.channel.send("ارسل اسم الروم").then(e => {
    var filter = m => m.author.id === message.author.id
    var  name = '';
   var time = '';
    var type = '';
    var limit = '';

    var types = ["text", "voice", "كتابي", "صوتي"];
    var chaName = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
var chaTime = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
var chaType = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
var chaLimit = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت الكامل لا اعده التجديد اسنخدم امر #tC")
    }, Math.floor(time*60000))
    var  chna = message.guild.channels.find("name", "log")
    const embed = new Discord.RichEmbed()
    chna.send({
      embed: embed.setTitle("New TempChat") .setDescription(`Channel Type: #{type}`) .addField("Channel owner", message.author.username) .addField("Channel name", name) .addField("Channel timeout", time) .addField("Channel ID", c.id)
    })
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})





	client.on('message', async msg => { // Leaked by [ @M3a4x ]
	var prefix = "#";
	var user = msg.author;
		if (msg.content === (prefix +'help')) {
		if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
		msg.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To #{msg.guild.name}`)
           .setFooter(`- Requested By: #{msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
 .setDescription(`**اذا كنت تريد الاوامر العامة اظغط الريكشن** 🌏 \n**اذا كنت تريد الاوامر الادارية اظغط الريكشن**🔧 \n**اذا كنت تريد بعض الشرح عن البوت اضغط الريكشن**💥 \n**اذا كنت تريد الالغاء اظغط الريكشن **❌\n              **وشكرا لمستخدمين البوت**`)

 .setTimestamp()
}).then(zg => {
     zg.react('🌏').then(r=>{
     zg.react('🔧').then(r=>{
     zg.react('💥').then(r=>{
     zg.react('❌').then(r=>{
 var aaa = (reaction, user) => reaction.emoji.name === '🌏' && user.id === msg.author.id;
   var mmm = (reaction, user) => reaction.emoji.name === '🔧' && user.id === msg.author.id;
    var vvv = (reaction, user) => reaction.emoji.name === '💥' && user.id === msg.author.id;
    var ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

    var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var mm = zg.createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
    var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var cc = zg.createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });

aa.on("collect", r => {
	zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To #{msg.guild.name}`)
          .setFooter(`- Requested By: #{msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`**:earth_americas:  General Commends**\n#{prefix}**server - لعرض معلومات عن سيرفرك**\n#{prefix}**roll - القرعة**\n#{prefix}**ms7f - فتح المصحف**\n#{prefix}**invites - لرؤية دعواتك**\n#{prefix}**skin - رؤية سكنك بماين كرافت**\n#**avatar [user] - لعرض صورتك او صوره شخص**\n#**system-sar7 - لمعرفة نظام امر صراحة**\n#**tC - لانشاء رومات مؤقتة**\n#**user - معلومات عن حسابك**\n#**mb - معلومات عن الاعضاء**\n#**icon - لاظهار صورة سيرفرك**\n#**tr - لترجمة اي شي تقولة **\n#**cal - لتشغيل الألة الحاسبة**`)

 .setTimestamp()
	});


	})//خراااااااااااااااااااااااااااااااااااااااااااااااااااااااااا
mm.on("collect", r => {
	zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To #{msg.guild.name}`)
           .setFooter(`- Requested By: #{msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`** :wrench: Admins Commends** \n#**system-man3 - لمعرفة كيفيه تفعيل نظام منع التهكير لسيرفرك**\n#{prefix}**mute - لعمل ميوت للعضو**\n#{prefix}**unmute لفك الميوت عن  العضو**\n#{prefix}**bc - الرساله الجماعيه**\n#{prefix}**ban - أمر الباند**\n**#kick - أمر الكيك**\n#{prefix}**cc [number] - لصنع رتب الوان باختيار عدد**\n#{prefix}**dc - لحذف جميع رتب الالوان فقط**\n**#clear - لمسح الشات**\n#**role [mention] [rolename] - لاعطاء شخص رتبة**\n#**rerole [user] [rolename] - لازالة رتبة من شخص**\n#**move [user] - لنقل شخص من روم صوتي لرومك**\n#**move all - لنقل جميع المتواجدين بـ الرومات لرومك**\n#**mct - لقفل جميع الرومات الكتابية**\n#**umct - لفتح جميع الرومات الكتابية**\n#**mcv - لقفل جميع الرومات الصوتية**\n#**umcv - لفتح جميع الرومات الصوتية**`)

.setTimestamp()
	});

	})
vv.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To #{msg.guild.name}`)
           .setFooter(`- Requested By: #{msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`**' R3b Bot Discord.\n#help - لرؤية الأوامر :comet: \n#inv - لدعوة البوت :wine_glass: \n معلومات عن البوت :thinking: \n بوت ديسكورت متكامل :soccer: :microphone: :earth_americas: \nيوجد داخل البوت خاصية منع التهكير مجانا وبسهوله تامة :scream: \nصيانة دورية :stopwatch: :wrench: \n 24 ساعة :point_up:
 \nاضافات يومية :link: \n الدعم الفني للمساعدةة : https://discord.gg/VbnKYRx  :rose:  \n وشكرا لكم :lizard: **`)


 .setTimestamp()
    });

})
cc.on("collect", r => {
    zg.delete();
	msg.delete();
})
	 }).then(msg => msg.delete(15000));
	 })
	 })
	 })
})
	 }
	 });

//اشتغل


client.on('message',   eyad =>{ // Leaked by [ @M3a4x ]

    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content.startsWith(prefix + 'sar7')) {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send("`حط بعد الايدي الرساله وانا برسلها :)`");
if(!men) return  eyad.channel.send("`حط ايدي الشخص \n او يقد يكون الشخص ليس موجود في سرفرات مشتركه بيني وبينة`");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`هل انت موافق لارسال الرساله \n موافق = ✅ \nرفض = ❌ \n**محتوي الرسالة : #{args}**`)
     .setTimestamp()
     .setFooter('لديك 60 ثانية للاختيار')
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{
    var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === eyad.author.id;
    var nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
               .setColor("RANDOM")
               .addField('**●[اهلا بك]** ', `<@#{men.id}>` , true)
               .addField('**●[لقد تمت مصارحتك]**' ,       ` __#{args}__ ` , true)
               .addField('**●[تاريخ المصارحة]**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@#{men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
})
})
}
}
});


// شف دسكورد
client.on('message', msg => { // Leaked by [ @M3a4x ]
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  var command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
   var textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحه```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }
    }
}
});

  client.on('message', message => { // Leaked by [ @M3a4x ]
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ #{user.tag} banned from the server ! ✈ **  `)

}
});


//روحو سطر 26 الحييين


client.on('message', message => { // Leaked by [ @M3a4x ]
    if (message.content === "#mct") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
           }).then(() => {
               message.channel.send("تم قفل الرومات الكتابية :white_check_mark: ")
               });
             }
if (message.content === "#umct") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
           }).then(() => {
               message.channel.send("تم فتح الرومات الكتابية :white_check_mark:")
           });
             }



});

client.on("message", message => { // Leaked by [ @M3a4x ]
    if(message.content.startsWith('#system-man3')) {
      message.channel.send(`**الخطوات المطلوبة لتشغيل مانع التهكير\n1- رفع رتبه البوت تحت رتبة صاحب السيرفر مباشرا : http://prntscr.com/k5afdc \n2-اعطاء البوت صلاحية ADMINISTRATOR : http://prntscr.com/k5afpd \n وهكذا تم تفعيل مانع التهكير بنجاح وبلا اي مشاكل اذا واجهت اي مشكله توجه لسيرفر الدعم** :white_check_mark: `)
    }
  });

client.on('message', message => { // Leaked by [ @M3a4x ]
    if (message.content === "#mcv") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         CONNECT: false
           }).then(() => {
               message.channel.send("تم تقفيل الرومات الصوتية :white_check_mark: ")
           });
             }
if (message.content === "#umcv") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
          CONNECT: true
           }).then(() => {
               message.channel.send("تم فتح الرومات الصوتية :white_check_mark:")
           });
             }



});






 client.on('message', message => { // Leaked by [ @M3a4x ]
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For #{user} link : #{user.avatarURL}`);
}
});

client.on("message", message => { // Leaked by [ @M3a4x ]
if (message.content === "#system-sar7") {
message.channel.send(`**الامر :  #sar7\n خاصيه صارح\nالطريقه كـ التالي :\nتروح البوت خاص : http://prntscr.com/k4kpsb \n مثال : بصارح نفسي للتجربة : http://prntscr.com/k4kq59 \n وتضغط صح
بيصير كذا :http://prntscr.com/k4kqna \n وبس كذا اشتغل الامر ميه ميه :thumbsup: ** `)
}
});

var roles = {};




client.on("message", message => { // Leaked by [ @M3a4x ]
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if( msg.toLowerCase().startsWith( prefix + 'rerole ;' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		}
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		}
	}
});
        client.on('message', async message => { // Leaked by [ @M3a4x ]
			if(message.content.includes('discord.gg')){
			    if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`#{message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`#{message.guild.name} `)
     message.channel.send(embed500)
	 message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


    }
})
	client.on('message', message => { // Leaked by [ @M3a4x ]
	if(message.content.startsWith(prefix + 'move all')) {
	 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
	   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
	if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
	 var author = message.member.voiceChannelID;
	 var m = message.guild.members.filter(m=>m.voiceChannel)
	 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
	 m.setVoiceChannel(author)
	 })
	 message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


	 }
	   });



    client.on('message', message => { // Leaked by [ @M3a4x ]
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الخاصيه المطلوبة`");
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``للأستخدام اكتب  : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@#{usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in #{message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@#{message.author.id}> Moved You To His Channel!\nServer --> #{message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`لا تستطيع سحب `"+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }
}
});


client.on("message", (message) => {
    if (message.content.startsWith('#rem')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","¤ Member of R3bMC"));
    });

const Discord = require("discord.js");
const client = new Discord.Client();


var x1 = "#color 1"
var x2 = "#color 2"
var x3 = "#color 3"
var x4 = "#color 4"
var x5 = "#color 5"
var x6 = "#color 6"
var x7 = "#color 7"
var x8 = "#color 8"
var x9 = "#color 9"
var x10 = "#color 10"
var x11 = "#color 11"
var x12 = "#color 12"
var x13 = "#color 13"
var x14 = "#color 14"
var x15 = "#color 15"
var x16 = "#color 16"
var x17 = "#color 17"
var x18 = "#color 18"
var x19 = "#color 19"
var x20 = "#color 20"
var x21 = "#color 21"
var x22 = "#color 22"
var x23 = "#color 23"
var x24 = "#color 24"
var x25 = "#color 25"
var x26 = "#color 26"
var x27 = "#color 27"
var x28 = "#color 28"
var x29 = "#color 29"
var x30 = "#color 30"
var x31 = "#color 31"
var x32 = "#color 32"
var x33 = "#color 33"
var x34 = "#color 34"
var x35 = "#color 35"
var x36 = "#color 36"
var x37 = "#color 37"
var x38 = "#color 38"
var x39 = "#color 39"
var x40 = "#color 40"
var x41 = "#color 41"
var x42 = "#color 42"
var x43 = "#color 43"
var x44 = "#color 44"
var x45 = "#color 45"
var x46 = "#color 46"
var x47 = "#color 47"
var x48 = "#color 48"
var x49 = "#color 49"
var x50 = "#color 50"
var x51 = "#color 51"
var x52 = "#color 52"
var x53 = "#color 53"
var x54 = "#color 54"
var x55 = "#color 55"
var x56 = "#color 56"
var x57 = "#color 57"
var x58 = "#color 58"
var x59 = "#color 59"
var x60 = "#color 60"
var x61 = "#color 61"
var x62 = "#color 62"
var x63 = "#color 63"
var x64 = "#color 64"
var x65 = "#color 65"
var x66 = "#color 66"
var x67 = "#color 67"
var x68 = "#color 68"
var x69 = "#color 69"
var x70 = "#color 70"
var x71 = "#color 71"
var x72 = "#color 72"
var x73 = "#color 73"
var x74 = "#color 74"
var x75 = "#color 75"
var x76 = "#color 76"
var x77 = "#color 77"
var x78 = "#color 78"
var x79 = "#color 79"
var x80 = "#color 80"
var x81 = "#color 81"
var x82 = "#color 82"
var x83 = "#color 83"
var x84 = "#color 84"
var x85 = "#color 85"

var x86 = "#color 86"

var x87 = "#color 87"

var x88 = "#color 88"
var x89 = "#color 89"
var x90 = "#color 90"
var x91 = "#color 91"
var x92 = "#color 92"
var x93 = "#color 93"
var x94 = "#color 94"
var x95 = "#color 95"
var x96 = "#color 96"
var x97 = "#color 97"
var x98 = "#color 98"
var x99 = "#color 99"
var x100 = "#color 100"

client.on('message', message => {
	if (message.content === x1) {
	    if(!message.channel.guild) return;
		message.member.addRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

if (message.content === x2) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.addRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x3) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.addRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x4) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.addRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x5) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.addRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x6) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.addRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x7) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.addRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x8) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.addRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x9) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.addRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x10) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.addRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	
	if (message.content === x11) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.addRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x12) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
message.member.addRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x13) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
message.member.addRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x14) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
message.member.addRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x15) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
message.member.addRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x16) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
message.member.addRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x17) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
message.member.addRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x18) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
message.member.addRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
		if (message.content === x19) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x20) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
message.member.addRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x21) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x22) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
message.member.addRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x23) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
message.member.addRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x24) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
message.member.addRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x25) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
message.member.addRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x26) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
message.member.addRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x27) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
message.member.addRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x28) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
message.member.addRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x29) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
message.member.addRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x30) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
message.member.addRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x31) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
message.member.addRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x32) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
message.member.addRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x33) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.addRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x34) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.addRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x35) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.addRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x36) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.addRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x37) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.addRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x38) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.addRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x39) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.addRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x40) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.addRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x41) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.addRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x42) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.addRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x43) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.addRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x44) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.addRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x45) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.addRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x46) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.addRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x47) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.addRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x48) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.addRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x49) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.addRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x50) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.addRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x51) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.addRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x52) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.addRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x53) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.addRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x54) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.addRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x55) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.addRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x56) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.addRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x57) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.addRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x58) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.addRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x59) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.addRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x60) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.addRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x61) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.addRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x62) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.addRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x63) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.addRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x64) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.addRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x65) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.addRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	

	if (message.content === x66) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.addRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x67) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.addRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x68) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.addRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x69) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.addRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x70) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.addRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x71) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.addRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x72) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.addRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x73) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.addRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x74) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.addRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x75) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.addRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x76) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.addRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x77) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.addRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x78) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.addRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x79) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.addRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x80) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.addRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x81) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.addRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x82) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.addRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x83) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.addRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x84) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.addRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	if (message.content === x85) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.addRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x86) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.addRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x87) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.addRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x88) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.addRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x89) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.addRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x90) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.addRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x91) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.addRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x92) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.addRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x93) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.addRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x94) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.addRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x95) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.addRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x96) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.addRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x97) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.addRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x98) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.addRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x99) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.addRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

	if (message.content === x100) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));

message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.addRole(message.guild.roles.find("name", "100"));

	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}


  if (message.content === '#color') {
      if (!message.channel.guild) return;
    message.channel.sendFile('https://cdn.discordapp.com/attachments/442305546008395787/447014844147826700/36d3ebcb8af4bd420528517d747d5c11.jpg');
  }
	
});

client.login(process.env.BOT_TOKEN);
